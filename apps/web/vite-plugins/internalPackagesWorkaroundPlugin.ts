import type { PluginOption } from "vite";

export function internalPackagesWorkaroundPlugin(): PluginOption {
  return {
    name: "internal-packages-workaround",
    /** workaround for HMR to work with internal packages */
    config: () => ({ server: { watch: { ignored: [] } } }),
  };
}
