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
                project: './tsconfig.json',
                sourceType: 'module'
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest
            }
        },
        rules: {
            'no-unused-vars': 'error',
            '@typescript-eslint/no-unused-vars': ['error'],
            'no-unused-vars': 'off'
        }
    },
    eslintPluginPrettierRecommended
];
