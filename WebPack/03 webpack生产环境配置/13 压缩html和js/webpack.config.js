const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiNiCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [

    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      // 压缩html代码
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true,
      },
    }),
    new MiNiCssExtractPlugin({
      // 对输出的文件进行重命名
      filename: 'css/built.css',
    }),
    // 压缩css
    new optimizeCssAssetsWebpackPlugin(),
  ],
  // 生产环境下会自动压缩js代码
  mode: 'production',
};
