import globals from "globals";
import tsLint from "typescript-eslint";
import jsLint from "@eslint/js";
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tsLint.config (
  jsLint.configs.recommended,
  ...tsLint.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': tsLint.plugin,
      prettier: prettierPlugin
    },
    languageOptions: {
      parserOptions: {
        parser: tsLint.parser,
        tsconfigRootDir: './'
      }
    }
  },
  {
    ignores: ['node_modules', 'dist'],
  },
  {
    languageOptions: {
      globals: { 
        ...globals.browser,
        ...globals.node 
      }
    }
  },
  {
    files: ['src/**/*.{js,ts}'],
    rules: {
      ...eslintConfigPrettier.rules,
      'no-var': 'error',
      'prefer-const': 'error',
      'no-undef': 'error',
      'no-unused-vars': 'error',
      'no-use-before-define': 'error',
      'no-this-before-super': 'off',
      'no-undef-init': 'off',
      'prettier/prettier': 'error',
    }
  }
);