const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      /**
             * js兼容性处理：babel-loader  @babel/core  @babel/preset-env
             *
             * 1. 基本js兼容性处理：--> @babel/preset-env
             *  问题： 只能转换基本语法，如promise转换不了
             * 2. 全部js兼容性处理 --> @babel/polyfill
             *  问题：只要解决部分兼容性问题，将所有兼容代码全部引入，体积太大
             * 3. 需要做兼容性处理就做： 按需加载 --> core.js
             */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // 预设: 指示babel做怎样的处理
          presets: [
            [
              '@babel/preset-env',
              {
                // 按需加载
                useBuiltIns: 'usage',
                corejs: {
                  version: 3,
                },
                // 指定兼容性做到那个版本
                targets: {
                  chrome: '60',
                  firefox: '60',
                  ie: '9',
                  safari: '10',
                  edge: '17',
                },
              },
            ],
          ],
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  mode: 'development',
};
