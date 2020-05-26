
const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = {
  entry:'./src/js/index.js',
  output: {
    // 取文件名
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
  // 1. 可以将node_modules中代码单独打包成一个chunk最终输出
  // 2. 自动分析多入口chunk中，有没有公共的文件，如果有打包成单独的一个chunk
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  mode: 'production',
};
