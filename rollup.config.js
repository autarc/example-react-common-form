/**
 * # Rollup Configuration
 *
 * See: https://rollupjs.org/guide/en - https://rollupjs.org/guide/en#big-list-of-options
 */

import path from 'path';

import externals from 'rollup-plugin-node-externals';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

import packageJSON from './package.json';

export default {
  input: './src/index.ts',
  treeshake: {
    propertyReadSideEffects: false,
  },
  plugins: [
    externals(),
    postcss({
      extract: path.resolve('dist/react-common-form.css'),
    }),
    json(),
    resolve({
      extensions: ['.tsx', '.ts', '.mjs', '.js'],
    }),
    commonjs(),
    babel({
      externalHelpers: true,
      extensions: ['.tsx', '.ts'],
      include: ['src/**/*'],
    }),
    terser(),
  ],
  output: [
    {
      file: packageJSON.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: packageJSON.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
  ],
};
