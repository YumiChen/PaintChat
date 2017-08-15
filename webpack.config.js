const webpack = require('webpack');
const path = require('path');

// including sass
module.exports = [{
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    // exclude: /node_modules/,
    loaders: [
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.sass$/, loader: 'style-loader!css-loader!sass-loader', exclude: /node_modules/ },
      // { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader' }
    ]
    // query: {
    //   presets: ["react", "es2015", "stage-1"]
    // }
  },
  resolve: {
    extensions: ['.js','.sass', ".jsx"]
  }
}];
