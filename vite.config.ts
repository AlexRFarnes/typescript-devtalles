import { defineConfig } from "vite";
import babel from "@rolldown/plugin-babel";

function legacyDecoratorPreset() {
  return {
    preset: () => ({
      plugins: [
        ["@babel/plugin-proposal-decorators", { version: "legacy" }],
        ["@babel/plugin-transform-class-properties", { loose: true }],
      ],
    }),
    rolldown: {
      filter: {
        code: "@",
      },
    },
  };
}

export default defineConfig({
  plugins: [babel({ presets: [legacyDecoratorPreset()] })],
});
