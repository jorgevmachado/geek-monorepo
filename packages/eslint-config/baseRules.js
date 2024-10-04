module.exports = {
    semi: ["error", "always"],
    quotes: ["error", "single"],
    allowString : 0,
    allowNumber : 0,
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
}