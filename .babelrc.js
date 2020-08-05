/**
 * # Babel Configuration
 *
 * See: https://babeljs.io/
 */

const tsconfigJSON = require('./tsconfig.json');

const pathMapping = tsconfigJSON.compilerOptions.paths;
const pathAliases = Object.keys(pathMapping).reduce((pathAliases, key) => {
  pathAliases[key.replace('/*', '')] = pathMapping[key][0].replace('/*', '');
  return pathAliases;
}, {});

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
        useBuiltIns: 'entry',
        corejs: {
          version: 3,
          proposals: true,
        },
        targets: {
          esmodules: true,
        },
        bugfixes: true,
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    // https://github.com/Andarist/babel-plugin-annotate-pure-calls
    'annotate-pure-calls',
    [
      'module-resolver',
      {
        alias: pathAliases,
      },
    ],
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'commonjs',
            targets: {
              node: '12.18.3',
            },
          },
        ],
      ],
    },
  },
};
