const { resolve } = require("node:path");
const { rules } = require('./baseRules');

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        "turbo",
    ],
    env: {
        node: true,
        jest: true,
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
        "test/",
    ],
    overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
    rules: {
        ...rules,
    }
};
