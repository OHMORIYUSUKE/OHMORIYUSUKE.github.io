import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['dist/', '.astro/', 'node_modules/']
  },
  {
    files: ['astro.config.mjs', 'eslint.config.js', 'prettier.config.mjs'],
    languageOptions: {
      globals: {
        process: 'readonly'
      }
    }
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs['flat/recommended']
];
