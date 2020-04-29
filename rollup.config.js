import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
const dist = 'dist'

export default {
  input: 'src/index.js',
  external: ['react'],
  output: [
    {
      file: `${dist}/bundle.cjs.js`,
      format: 'cjs'
    },
    {
      file: `${dist}/bundle.esm.js`,
      format: 'esm'
    },
    {
      name: 'EasySpinners',
      file: `${dist}/bundle.umd.js`,
      globals: {
        react: 'React'
      },
      format: 'umd'
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
