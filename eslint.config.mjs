import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  {
    ignores: [".next/**", "out/**", "storybook-static", "next-env.d.ts"],
  },
  ...compat.config({
    extends: [
      "eslint:recommended",
      "plugin:jsx-a11y/recommended",
      "next/core-web-vitals",
      "next/typescript",
    ],
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
    },
  }),
];

export default eslintConfig;
