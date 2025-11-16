export default {
    root: true,
    parser: '@typescript-eslint/parser', // <-- important for TypeScript
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    env: {
        node: true,
        es2021: true,
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // <-- recommended TS rules
    ],
    rules: {
        // Add custom rules if needed
    },
    settings: {
        react: {
            version: 'detect', // fixes the React version warning
        },
    },
};