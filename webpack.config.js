const path = require('path');

module.exports = {
  mode: 'production',
  context: path.join(__dirname, '/src'),

  entry: {
    javascript: './js/index'
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist')
  },

  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'preact-compat'),
      'react-dom': 'preact-compat'
    },
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        loaders: ['css-loader', 'resolve-url-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
      },
      {
        test: /\.(gif|png|jpe?g|svg|webp)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader'
        ]
      }
    ]
  }
};
