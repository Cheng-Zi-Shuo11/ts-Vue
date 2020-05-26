
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
      {
        test: /\.css$/,
        use: [
          MiNiCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => {
                // postcss的插件
                require('postcss-preset-env')();
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    new MiNiCssExtractPlugin({
      // 对输出的文件进行重命名
      filename: 'css/built.css',
    }),
    // 压缩css
    new optimizeCssAssetsWebpackPlugin(),
  ],
  mode: 'development',
};
