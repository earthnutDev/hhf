import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import cleanup from 'rollup-plugin-cleanup';
import copy from 'rollup-plugin-copy';
import terser from '@rollup/plugin-terser';
import { external } from '@qqi/rollup-external';

export default {
  input: './bin.ts',
  output: {
    format: 'es',
    entryFileNames: '[name].mjs',
    preserveModules: false,
    sourcemap: false,
    exports: 'named',
    dir: 'dist/',
  },
  external: external({
    include: [
      'src/hot-class',
      'src/actions/initConfig',
      'src/aided/command',
      'src/init',
      'src/aided/dog',
      'src/aided/config-file-start-name',
      'src/data-store',
      'src/aided/qqi',
    ],
    ignore: ['node:', 'typescript'],
  }),
  plugins: [
    resolve(),
    commonjs(),
    json(),
    typescript({}),
    // 去除无用代码
    cleanup(),
    terser(),
    copy({
      targets: [
        {
          src: 'README.md',
          dest: 'dist',
        },
        {
          src: 'LICENSE',
          dest: 'dist',
        },
      ],
    }),
  ],
};
