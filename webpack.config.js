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
      { test: /\.sass$/, loader: 'style-loader!css-loader!sass-loader' },
      // { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader' }
    ]
    // query: {
    //   presets: ["react", "es2015", "stage-1"]
    // }
  },
  resolve: {
    extensions: ['.js','.sass', ".jsx"]
  }
//  devtool: 'cheap-eval-source-map',
//  devServer: {
//    contentBase: './public',
//    hot: true
//  },
//  plugins: [
//    new webpack.optimize.OccurrenceOrderPlugin(),
//    new webpack.HotModuleReplacementPlugin(),
//    new webpack.NoEmitOnErrorsPlugin()
//  ]
}];
