const { resolve } = require("node:path");
const { rules } = require('./baseRules');

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    "turbo",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
  ],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
  plugins: ["react-refresh", "react-hooks"],
  rules: {
    ...rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  }
}