import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
    exports: 'default',
  },
  plugins: [
    resolve(),
    typescript(),
    commonjs(),
    terser({ format: { comments: false } }),
    visualizer(),
  ],
};
