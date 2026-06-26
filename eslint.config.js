import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { ignores: ["dist/*"] },

  {
    files: ["src/**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "prefer-const": "error",
      "no-var": "error",
      semi: ["error", "always"],

      quotes: ["error", "double"],
      eqeqeq: ["error", "always"],
      "no-multiple-empty-lines": ["error", { max: 1 }],
    },
  },
]);
