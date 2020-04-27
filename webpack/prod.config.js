const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

process.env.NODE_ENV = 'production'

// TODO: Minify files
// TODO: Uglify files
// TODO: Uglify file names

// FIXME: all js files are imported in the html by default

module.exports = {
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
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}
