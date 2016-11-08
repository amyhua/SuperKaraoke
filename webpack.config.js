module.exports = {
  entry: './src/app.js',

  output: {
    filename: './public/bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=latest'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'] 
  }
}