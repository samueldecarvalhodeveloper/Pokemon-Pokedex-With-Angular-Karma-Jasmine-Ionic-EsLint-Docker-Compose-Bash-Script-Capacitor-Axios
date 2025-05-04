import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["*.ts"],
    parserOptions: {
      project: ["tsconfig.json"],
      createDefaultProgram: true,
    },
    extends: [
      "plugin:@angular-eslint/recommended",
      "plugin:@angular-eslint/template/process-inline-templates",
    ],
    rules: {
      "@angular-eslint/component-class-suffix": [
        "error",
        {
          suffixes: ["Page", "Component"],
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
    },
  },
  {
    files: ["*.html"],
    extends: ["plugin:@angular-eslint/template/recommended"],
    rules: {},
  },
];
