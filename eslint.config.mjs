import js from "@eslint/js";
import next from "eslint-config-next/core-web-vitals";
import ts from "eslint-config-next/typescript";
import jsxA11y from "eslint-plugin-jsx-a11y";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  globalIgnores([".next/", "out/", "storybook-static/", "next-env.d.ts"]),
  {
    files: ["**/*.{js,mjs}"],
    extends: [js.configs.recommended],
  },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [ts],
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
  {
    files: ["app/**/*.tsx"],
    rules: {
      ...jsxA11y.flatConfigs.recommended.rules,
    },
  },
  {
    files: ["app/**/*.{ts,tsx}"],
    extends: [next],
    rules: {
      // https://github.com/facebook/react/issues/34775
      "react-hooks/refs": "off",
    },
  },
]);

export default eslintConfig;
