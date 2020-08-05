/**
 * # ESLint Configuration
 *
 * See: https://eslint.org/ - https://eslint.org/docs/rules/
 *      https://github.com/typescript-eslint/typescript-eslint
 */

// eslint-disable-next-line import/no-extraneous-dependencies
const typescriptEslintRecommendedRequiringTypeChecking = require('@typescript-eslint/eslint-plugin')
  .configs['recommended-requiring-type-checking'];

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  plugins: ['import', 'module-resolver', '@typescript-eslint', 'prettier', 'unicorn'],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:node/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:compat/recommended',
    'plugin:unicorn/recommended',
  ],
  rules: {
    radix: 'warn',
    // NOTE: allow overriding of caught errors for appropriate masking
    'no-ex-assign': 'off',
    'max-len': [
      'error',
      {
        code: 100,
        ignoreComments: true,
        // ignoreUrls: true,
        // https://prettier.io/docs/en/rationale.html#imports
        ignorePattern: '^import\\W.*',
      },
    ],
    'max-params': 'warn',
    'consistent-return': 'off',
    'no-console': 'off',
    'no-magic-numbers': [
      'warn',
      {
        enforceConst: true,
        ignore: [-1, 0, 1],
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    // transpiling code through babel (bundling using rollup/webpack)
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-import': 'off',
    'node/no-unpublished-import': 'off',
    // adjust for workspace usage
    'node/no-extraneous-import': 'off',
    // TODO: check as pending PR improvement gets merged
    // https://github.com/benmosher/eslint-plugin-import/issues/1174
    // 'import/no-extraneous-dependencies': [
    //   'warn',
    //   {
    //     devDependencies: ['**/*.config.*'],
    //     packageDir: __dirname,
    //   },
    // ],
    // NOTE: currently doesn't correctly recognize path aliases
    'import/no-unresolved': 'off',
    'import/no-anonymous-default-export': 'warn',
    'import/no-default-export': 'warn',
    'module-resolver/use-alias': 'warn',
    // NOTE: currently it doesn't take into account the order of usage in the file yet so it can't
    //       enforce an order based on it
    'import/order': [
      'warn',
      {
        pathGroups: [
          {
            pattern: '~/**',
            group: 'sibling',
          },
        ],
      },
    ],
    '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
    // NOTE: currently it doesn't take account the associated values so it can't be specified yet
    //       to order required fields before optional (?) ones
    '@typescript-eslint/member-ordering': 'warn',
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
    '@typescript-eslint/explicit-member-accessibility': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'unicorn/no-null': 'off',
    'unicorn/filename-case': [
      'warn',
      {
        cases: {
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/prevent-abbreviations': [
      'warn',
      {
        replacements: {
          params: {
            parameters: false,
          },
          args: {
            arguments: false,
          },
          db: {
            database: false,
          },
          props: {
            properties: false,
          },
        },
      },
    ],
    // prettier enforces lower case style for hexadecimals which is otherwise conflicting
    'unicorn/number-literal-case': 'off',
    'unicorn/no-reduce': 'off',
  },
  overrides: [
    // JavaScript
    {
      // NOTE: overrides the '.eslintignore' definition so errors/warnings will be shown for those
      files: ['*.js'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: null,
      },
      // exclude all the rules from 'plugin:@typescript-eslint/recommended-requiring-type-checking'
      // eslint-disable-next-line unicorn/no-reduce
      rules: Object.keys(typescriptEslintRecommendedRequiringTypeChecking.rules).reduce(
        (rules, key) => {
          rules[key] = 'off';
          return rules;
        },
        {
          '@typescript-eslint/no-var-requires': 'off',
          // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md#configuring-in-a-mixed-jsts-codebase
          '@typescript-eslint/explicit-member-accessibility': 'off',
          'import/no-anonymous-default-export': 'off',
          'import/no-default-export': 'off',
        },
      ),
    },
    // markdown
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
      plugins: ['markdown'],
    },
    // tests
    {
      files: ['**/*.spec.tsx', '**/*.spec.ts'],
      env: {
        jest: true,
      },
      plugins: ['jest', 'testing-library'],
      extends: [
        'plugin:jest/recommended',
        'plugin:testing-library/recommended',
        'plugin:testing-library/react',
      ],
      rules: {
        'no-magic-numbers': 'off',
        'import/no-extraneous-dependencies': 'off',
        // avoid large snapshots
        'jest/no-large-snapshots': [
          'error',
          {
            maxSize: 20,
          },
        ],
      },
    },
    // stories
    {
      files: ['**/*.stories.tsx', '**/*.stories.ts'],
      rules: {
        'import/no-anonymous-default-export': 'off',
        'import/no-default-export': 'off',
      },
    },
    // react
    {
      files: ['**.tsx'],
      plugins: ['react', 'react-hooks', 'jsx-a11y'],
      settings: {
        react: {
          version: 'detect',
        },
      },
      extends: ['plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
      rules: {
        // https://reactjs.org/docs/hooks-rules.html#eslint-plugin
        'react-hooks/rules-of-hooks': 'error',
        // NOTE: check if possible for warning only - not forcing an extensive usage, 'warn'
        'react-hooks/exhaustive-deps': 'warn',
        // using typescript prop-types check are not necessary
        'react/prop-types': 'off',
      },
    },
  ],
};
