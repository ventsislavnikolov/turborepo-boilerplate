import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  typescript: true,
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },
  ignores: [
    './fixtures',
    '/node_modules',
    '/.github',
    '/.vscode',
  ],
  rules: {
    'curly': 'off',
    'style/semi': 'off',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'style/jsx-indent': 'off',
    'react/display-name': 'off',
    'jsdoc/check-param-names': 'off',
    'node/prefer-global/process': 'off',
    'unused-imports/no-unused-vars': 'warn',
    'jsdoc/require-property-description': 'off',
    'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
  },
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
})
