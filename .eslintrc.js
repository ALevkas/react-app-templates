module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            tsx: true
        }
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        'plugin:jsx-a11y/recommended',
    ],
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error']
    },
    env: {
        browser: true,
        es6: true,
        node: true
    },
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            typescript: {
            },
        }
    }
}