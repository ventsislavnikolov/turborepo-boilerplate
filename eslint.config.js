import { vneslint } from '@ventsislavnikolov/eslint-config';

export default vneslint(
  [
    {
      files: ['*.config.js', '**/packages/**/*.config.js', '**/packages/**/index.js', '**/apps/**/*.config.js'],
      rules: {
        'n/no-extraneous-import': 'off',
        'n/no-unpublished-import': 'off',
        'import/no-anonymous-default-export': 'off',
        'import/no-default-export': 'off',
        'no-undef': 'off',
        'sort-keys/sort-keys-fix': 'off',
      },
    },
    {
      files: ['**/packages/**/*.ts', '**/apps/**/*.ts', '**/packages/**/*.tsx', '**/apps/**/*.tsx'],
      rules: {
        'import/no-default-export': 'off',
        'react/function-component-definition': 'off',
      }
    },
  ],
  {
    next: true,
    prettier: false,
    react: true,
    sortKeys: true,
    tailwind: true,
    typescript: true,
    typescriptTypecheck: true,
    storybook: true,
    jest: true,
    jestDom: true,
    compat: false,
    playwright: true,
    testingLibrary: true,
    lodash: true,
    vitest: false,
  },
);