module.exports = {
    env: {
        browser: true,
        node: true,
        es2020: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['@typescript-eslint', 'react', 'prettier'],
    extends: ['prettier', 'prettier/@typescript-eslint', 'prettier/react'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
        'import/extensions': 0,
        'react/prop-types': 0,
        'react/jsx-props-no-spreading': 'off',
        'prettier/prettier': 'error',
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['~'],
            },
        },
    },
}
