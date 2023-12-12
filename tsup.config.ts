/* eslint-disable import/no-extraneous-dependencies -- This is a dev config */
import { defineConfig } from "tsup";
import react18Plugin from "esbuild-plugin-react18";

export default defineConfig((options) => ({
  dts: true,
  entry: ["src/**/*.tsx", "src/index.ts"],
  esbuildPlugins: [react18Plugin()],
  external: ["react"],
  format: ["esm"],
  minify: !options.watch,
}));
