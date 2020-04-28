const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

process.env.NODE_ENV = 'production'

// TODO: Enable source maps

module.exports = {
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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. Inject styles into DOM
          'css-loader', // 2. Turns css into commonjs
          'sass-loader', // 1. Turns sass into css
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}
