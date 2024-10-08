module.exports = {
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