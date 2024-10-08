/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@geek/eslint-config/base.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  }
};
