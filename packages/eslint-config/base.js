const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
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
        "dist/",
    ],
    overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "single"],
        allowString : 0,
        allowNumber : 0,
        "turbo/no-undeclared-env-vars": "off",
        "no-redeclare": "off",
        "no-unused-vars": "off",
        "object-curly-spacing": ["error", "always"],
        'keyword-spacing': ['error', { 'before': true, 'after': true }],
        'space-before-function-paren': ['error', {
            'anonymous': 'always',
            'named': 'never',
            'asyncArrow': 'always'
        }],
        'sort-imports': ['error', {
            'ignoreCase': false,
            'ignoreDeclarationSort': false,
            'ignoreMemberSort': false,
            'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
            'allowSeparatedGroups': true,
        }],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
    }
};
