const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const unusedImports = require('eslint-plugin-unused-imports');
const globals = require('globals');
const tsParser = require('@typescript-eslint/parser');

module.exports = [
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}', '**/*.test.{js,ts,tsx}'],
        plugins: {
            'unused-imports': unusedImports,
            '@typescript-eslint': require('@typescript-eslint/eslint-plugin')
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },
                project: './tsconfig.json', // add this if you have tsconfig.json
                sourceType: 'module'
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest
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
