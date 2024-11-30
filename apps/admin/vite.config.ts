/// <reference types='vitest' />
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import { nxCopyAssetsPlugin } from "@nx/vite/plugins/nx-copy-assets.plugin";

export default defineConfig({
  root: __dirname,
  cacheDir: "../../node_modules/.vite/apps/admin",
  server: {
    port: 4200,
    host: "localhost",
  },
  preview: {
    port: 4300,
    host: "localhost",
  },
  plugins: [react(), nxViteTsPaths(), nxCopyAssetsPlugin(["*.md"])],
  build: {
    outDir: "../../dist/apps/admin",
    emptyOutDir: true,
    reportCompressedSize: true,
  },
  test: {
    globals: true, // Enable global test APIs like expect, describe, it
    environment: "jsdom", // Use jsdom environment for DOM-related tests
    exclude: [...configDefaults.exclude, "**/node_modules/**"], // Exclude unnecessary files
  },
});
