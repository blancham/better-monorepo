import { searchForWorkspaceRoot, type PluginOption, normalizePath } from "vite";
import { find, parseNative, type TSConfckParseNativeResult } from "tsconfck";

function extractModuleSuffixes(project: TSConfckParseNativeResult) {
  const moduleSuffixes = project.tsconfig.compilerOptions.moduleSuffixes;

  if (!Array.isArray(moduleSuffixes) || moduleSuffixes.length === 0) {
    return undefined;
  }

  return moduleSuffixes as string[];
}

export function tsModuleSuffixesPlugin(): PluginOption {
  let resolvableExtensions: Set<string> | undefined = undefined;

  return {
    name: "ts-moduleSuffixes",
    async configResolved(config) {
      resolvableExtensions = new Set(config.resolve.extensions);
      const workspaceRoot = searchForWorkspaceRoot(config.root);

      const project = await find("tsconfig.json", {
        root: workspaceRoot,
        ignoreNodeModules: true,
      });

      if (project === null) {
        console.log("tsModuleSuffixesPlugin did not find the tsconfig.json");
        return;
      }

      const parsedProject = await parseNative(project);
      const moduleSuffixes = extractModuleSuffixes(parsedProject);

      if (moduleSuffixes === undefined) {
        console.log(
          "tsModuleSuffixesPlugin did not find the any moduleSuffixes",
        );
        return;
      }

      for (const extension of config.resolve.extensions) {
        for (const moduleSuffixe of moduleSuffixes) {
          resolvableExtensions.add(moduleSuffixe + extension);
        }
      }
    },
    async resolveId(source, importer, options) {
      if (resolvableExtensions === undefined || importer === undefined) {
        return undefined;
      }

      // Skip virtual modules.
      if (source.includes("\0")) {
        return undefined;
      }

      const resolveOptions = { ...options, skipSelf: true };
      const normalizedImporter = normalizePath(importer);

      const suffix = /\?.+$/.exec(source)?.[0];
      const sourceFile = suffix ? source.slice(0, -suffix.length) : source;

      for (const resolvableExtension of resolvableExtensions) {
        const resolvedPath = await this.resolve(
          sourceFile + resolvableExtension,
          normalizedImporter,
          resolveOptions,
        );
        if (resolvedPath !== null) {
          return suffix ? resolvedPath + suffix : resolvedPath;
        }
      }
      return undefined;
    },
  };
}
