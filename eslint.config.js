import globals from "globals";
import tseslint from "typescript-eslint";
import pluginJs from "@eslint/js";
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config (
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier: prettierPlugin
    }
  },
  {
    ignores: ['node_modules', 'dist']
  },
  {
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.json']
      }
    }
  },
  {
    files: ['src/**/*.{js,ts}'],
    rules: {
      ...eslintConfigPrettier.rules,
      'prefer-const': 'error'
    }
  }
);