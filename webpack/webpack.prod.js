const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

// TODO: Uglify files

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
  optimization: {
    minimizer: [
      // Minify files
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HTMLWebpackPlugin({
        template: './src/index.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // 3. Extract CSS
          'css-loader', // 2. Turns css into commonjs
          'sass-loader', // 1. Turns sass into css
        ],
      },
    ],
  },
  plugins: [
    // Extract CSS from JS into their own files
    new MiniCssExtractPlugin({
      filename: '[name][contentHash].css',
    }),
    // Delete old files and generate new ones
    new CleanWebpackPlugin(),
  ],
})
