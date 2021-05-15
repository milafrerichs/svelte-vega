import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import html from 'rollup-plugin-html';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: './example/main.js',
  output: {
    name: 'app',
    format: 'iife',
    sourcemap: true,
    file: './example/public/main.js',
  },
  plugins: [
    svelte({
      dev: !production,
      css: css => {
        css.write('example/public/bundle.css');
      }
    }),
    resolve(),
    html(),
    commonjs(),
    production && terser()
  ],

  watch: {
    clearScreen: false
  }
};
