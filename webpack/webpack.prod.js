const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')

// process.env.NODE_ENV = 'production'

// TODO: Minify files
// TODO: Uglify files
// TODO: Uglify file names

// FIXME: all js files are imported in the html by default

module.exports = merge(common, {
  mode: 'production',
  // Default ./src/index.js
  entry: {
    app: './src/index.js',
    script: './src/script.js',
  },
  output: {
    // Default: ./dist
    path: path.join(__dirname, '../public'),
    // Default: main.js
    // This hashes the content of the file and creates a new hash each time the contents change
    // This helps to cache bust assets in browsers when you update your code base
    // filename: '[name].[contentHash].js',
    filename: '[name].[contentHash].js',
  },
})
