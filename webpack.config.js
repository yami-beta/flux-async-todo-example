const webpack = require('webpack');
const glob = require('glob');
const path = require('path');

let entry = {};
glob.sync('./src/js/index.js').forEach(function (file) {
  entry[path.basename(file, '.js')] = file;
});

module.exports = {
  entry: entry,
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   sourceMap: true,
    // }),
  ],
  devtool: 'inline-source-map',
};
