import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import importPlugin from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended!,
  {
    settings: {
      react: {
        version: 'detect', // Automatically detect the version of React to use
      },
    },
  },
  eslintConfigPrettier,
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/no-unresolved': 'off',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/order': [
        'warn',
        {
          alphabetize: { order: 'asc', caseInsensitive: true },
          groups: [['builtin', 'external'], ['parent'], ['sibling', 'index']],
          'newlines-between': 'always',
        },
      ],
      'sort-imports': [
        'warn',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],

      // Disable all rules from eslint-plugin-import that typescript-eslint is
      // already handling. Context:
      // - https://github.com/import-js/eslint-plugin-import/issues/1601#issuecomment-573347010
      // - https://github.com/typescript-eslint/typescript-eslint/issues/1333#issuecomment-574736003
      // - https://github.com/typescript-eslint/typescript-eslint/blob/v4.6.0/docs/getting-started/linting/FAQ.md#eslint-plugin-import
      'import/named': 'off',
      'import/namespace': 'off',
      'import/default': 'off',
      'import/no-named-as-default-member': 'off',

      'react/react-in-jsx-scope': 'off',
    },
  },
]);
