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
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: 'public',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=latest'
    }, {
      // test: /\.css$/,
      // loader: ['css', 'style', 'css-loader'],
      test: /\.sass|\.css$/,
      loader: ExtractTextPlugin.extract(
        'style-loader',
        combineLoaders([{
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }])
      )
    }, {
      test: /\.svg$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
    }]
  },
  postcss: [
    require('autoprefixer-core'),
    require('postcss-color-rebeccapurple')
  ],
  plugins: [
    new ExtractTextPlugin('bundle-styles.css')
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
    root: [path.join(__dirname, './src')]
  }
};
