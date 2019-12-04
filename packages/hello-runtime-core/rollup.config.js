import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const resolveFile = function(filePath) {
  return path.join(__dirname, './', filePath);
};
const sourcemap = process.env.NODE_ENV == 'development' ? 'inline' : false;

const baseConfig = {
  input: resolveFile('src/index.ts'),
  output: [
    {
      file: resolveFile('dist/hello.cjs.js'),
      format: 'cjs',
      sourcemap,
      exports: 'named'
    },
    {
      file: resolveFile('dist/hello.js'),
      format: 'umd',
      name: 'Hello',
      sourcemap
    },
    {
      file: resolveFile('dist/hello.esm.js'),
      format: 'es',
      sourcemap
    }
  ],
  external: [],
  plugins: [
    resolve({
      preferBuiltins: false,
      customResolveOptions: {
        moduleDirectory: 'src'
      },
      extensions: ['.js', '.ts']
    }),
    typescript({
      include: ['../**/*.ts']
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      extensions: ['.js', '.ts'],
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        '@babel/preset-typescript',
        [
          '@babel/preset-env',
          {
            useBuiltIns: 'usage',
            modules: false,
            targets: {
              browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
            }
          }
        ]
      ],
      plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread']
    }),
    process.env.NODE_ENV == 'production' && terser()
  ]
};

module.exports = baseConfig;
