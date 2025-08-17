import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';
import { all } from 'eslint-plugin-fast-import';

export default tseslint.config([
  globalIgnores(['dist']),
  all({
    entryPoints: {
      'src/plugin.ts': /.*/,
      '*.config.*': ['default'],
    },
    debugLogging: true,
    rootDir: getDirname(),
  }),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
