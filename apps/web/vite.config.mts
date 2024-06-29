import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { internalPackagesWorkaroundPlugin } from "./vite-plugins/internalPackagesWorkaroundPlugin";
import { tsModuleSuffixesPlugin } from "./vite-plugins/tsModuleSuffixesPlugin";

export default defineConfig({
  base: "",
  plugins: [
    react(),
    tsModuleSuffixesPlugin(),
    internalPackagesWorkaroundPlugin(),
  ],
  server: { open: true, port: 3000 },
  resolve: {
    alias: {
      "react-native": "react-native-web",
    },
  },
});
