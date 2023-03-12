import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript2 from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [
    // {
    //   dir: 'dist/cjs/',
    //   format: 'cjs',
    // },
    // {
    //   dir: 'dist/esm/',
    //   format: 'esm',
    // },
    {
      file: 'dist/umd/index.min.js',
      format: 'iife',
      name: 'ICDSComponents',
      inlineDynamicImports: true,
      globals: {
        react: 'React',
      },
      // plugins: [terser()],
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react'],
    }),
    typescript2(),
  ],
};