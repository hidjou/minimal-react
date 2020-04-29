const path = require('path')

process.env.NODE_ENV = 'production'

// TODO: Enable source maps

module.exports = {
  entry: {
    app: './src/index.js',
    script: './src/script.js',
  },
  output: {
    path: path.join(__dirname, '../public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        // All images are moved to 'public/imgs'
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'imgs',
          },
        },
      },
    ],
  },
}
