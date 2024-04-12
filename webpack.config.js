const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
        loader: 'babel-loader', 
        test: /\.js$/,
        exclude: /node_modules/
    }]
  }, 
  devServer: {
    static: path.join(__dirname, 'public'),
    hot: false,
    liveReload: true, 
    port: 9000,
  },
  watch: true
};