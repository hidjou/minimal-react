const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')

// process.env.NODE_ENV = 'production'

// TODO: Enable source maps

module.exports = merge(common, {
  mode: 'development',
  // Default ./src/index.js
  // Remove 'eval' and see code relatively unchanged
  // devtool: 'none',
  entry: {
    app: './src/index.js',
    script: './src/script.js',
  },
  output: {
    // Default: ./dist
    path: path.join(__dirname, '../public'),
    // Default: main.js
    // filename: 'main.js',
  },
})
