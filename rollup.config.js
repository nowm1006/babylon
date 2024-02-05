import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import css from 'rollup-plugin-css-only'
import url from '@rollup/plugin-url'

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/main.js',
    format: 'iife',
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      compilerOptions: {
        target: 'es2022',
        resolveJsonModule: true,
      },
    }),
    css({ output: 'style.css' }),
    url({
      include: ['**/*.hdr', '**/*.glb'],
      limit: 2000000,
    }),
    terser(),
  ],
}

