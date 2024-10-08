/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@geek/eslint-config/vite.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};
