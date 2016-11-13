const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' +
    path.resolve(__dirname, './src')
];
const combineLoaders = require('webpack-combine-loaders');

module.exports = {
  entry: __dirname + '/src/app.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public',
    publicPath: ''
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    },
    {
      test: /\.scss$/,
      loaders: [
        'style',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        'sass'
      ]
    },
    {
      test: /\.svg$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
    }]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./src")]
  },
  postcss: [
    require('autoprefixer-core'),
    require('postcss-color-rebeccapurple')
  ],
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
    root: [path.join(__dirname, './src')]
  }
};
