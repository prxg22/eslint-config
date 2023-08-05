module.exports = {
  ignorePatterns: ['/node_modules'],
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    'plugin:styled-components-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['prettier', 'import'],
  rules: {
    'import/namespace': ['error', { allowComputed: true }],
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        arrowParens: 'always',
        printWidth: 80,
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  }
}