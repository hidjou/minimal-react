const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Default ./src/index.js
  entry: './src/index.js',
  output: {
    // Default: ./dist
    path: path.join(__dirname, '../public'),
    // Default: main.js
    filename: 'bundle.js',
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
