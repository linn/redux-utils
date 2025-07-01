const globals = require('globals');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const unusedImports = require('eslint-plugin-unused-imports');

module.exports = [
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,test.js}'],
        plugins: {
            'unused-imports': unusedImports
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            globals: {
                ...globals.browser
            }
        },
        rules: {
            // ... any rules you want
            'no-unused-vars': 'error'
        }
    },
    eslintPluginPrettierRecommended
];
