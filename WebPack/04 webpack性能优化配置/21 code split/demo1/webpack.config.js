
const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = {
  // entry: './src/js/index.js'  单入口
  entry: {
    // 多入口：有一个入口，最终输出只有一个bundle
    main: './src/js/index.js',
    test:'./src/js/test.js',
  },
  output: {
    // 取文件名
    filename: 'js/[name].[contenthash:10].js',
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
  mode: 'production',
};
