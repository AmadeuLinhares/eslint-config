module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  plugins: ['react', 'jsx-a11y', '@typescript-eslint', 'import', 'react-hooks'],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false,
        endOfLine: 'auto',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    // ESLint
    'no-shadow': `off`,
    camelcase: `off`,
    'no-mixed-operators': `error`,
    'no-unneeded-ternary': `error`,
    'no-nested-ternary': `off`,
    'no-use-before-define': [`off`],
    'no-restricted-imports': [
      `error`,
      {
        paths: [
          {
            name: `react`,
            importNames: [`default`],
            message: `Please remove import React.`,
          },
        ],
        patterns: [`..*`], // Blocking ../../ imports
      },
    ],
    'no-lonely-if': `error`,
    'no-underscore-dangle': [`error`, { allow: [`_id`] }],
    // Typescript
    '@typescript-eslint/explicit-function-return-type': `off`,
    '@typescript-eslint/explicit-module-boundary-types': `off`,
    '@typescript-eslint/no-use-before-define': [`error`],
    '@typescript-eslint/no-explicit-any': `error`,
    '@typescript-eslint/no-var-requires': `off`,
    '@typescript-eslint/no-unused-vars': `error`,
    '@typescript-eslint/no-shadow': [`error`],
    '@typescript-eslint/quotes': [
      2,
      `backtick`,
      {
        avoidEscape: true,
      },
    ],
    // React
    'react-hooks/rules-of-hooks': `error`, // Verifica as regras dos Hooks
    'react-hooks/exhaustive-deps': `warn`, // Verifica as dependências de effects
    'react/jsx-no-bind': `error`,
    'react/no-multi-comp': `error`,
    'react/function-component-definition': [
      `error`,
      {
        namedComponents: `arrow-function`,
        unnamedComponents: `arrow-function`,
      },
    ],
    'react/no-array-index-key': `error`,
    'react/jsx-key': `error`,
    'react/no-unstable-nested-components': `error`,
    'react/display-name': `off`,
    'react/jsx-filename-extension': `off`,
    'react/jsx-props-no-spreading': `off`,
    'react/no-unused-prop-types': `off`,
    'react/require-default-props': `off`,
    'jsx-a11y/media-has-caption': `off`,
    // Imports
    'import/prefer-default-export': `off`,
    'import/extensions': [
      `error`,
      `ignorePackages`,
      {
        ts: `never`,
        tsx: `never`,
        js: `never`,
        jsx: `never`,
      },
    ],
    'import/order': [
      `error`,
      {
        groups: [[`builtin`, `external`], `internal`, [`sibling`, `index`]],
        pathGroups: [
          {
            pattern: `react`,
            group: `external`,
            position: `before`,
          },
        ],
        pathGroupsExcludedImportTypes: [],
        'newlines-between': `always`,
        alphabetize: {
          order: `asc`,
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
}
