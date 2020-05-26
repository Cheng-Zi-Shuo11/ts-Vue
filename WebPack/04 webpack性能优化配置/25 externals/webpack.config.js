
const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = {
  entry:'./src/js/index.js',
  output: {
    filename: 'js/index.[contenthash:10].js',
    path: resolve(__dirname, 'build'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  mode: 'production',
  externals:{
    // 拒绝jquery被打包进来
    jquery: 'jQuery'
  }
};
