const globals = require('globals');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const unusedImports = require('eslint-plugin-unused-imports');

module.exports = [
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,test.js}'],
        plugins: {
            'unused-imports': unusedImports,
            '@typescript-eslint': require('@typescript-eslint/eslint-plugin')
        },
        languageOptions: {
            parser: require.resolve('@typescript-eslint/parser'),
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },
                project: './tsconfig.json', // add this if you have tsconfig.json
                sourceType: 'module'
            },
            globals: {
                ...globals.browser
            }
        },
        rules: {
            // existing rules
            'no-unused-vars': 'error',

            // Add or override TS-specific rules here if you want:
            // For example:
            '@typescript-eslint/no-unused-vars': ['error'],

            // You can disable base no-unused-vars to avoid conflicts
            'no-unused-vars': 'off'
        }
    },
    eslintPluginPrettierRecommended
];
