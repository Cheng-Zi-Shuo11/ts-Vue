
const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      /**
                   * 语法检查: eslint-loader  eslint
                   *  注意: 只检查自己写的源代码,第三方的库不用检查
                   *  设置检查规则:
                   *      package.json:中的eslintConfig中设置~
                   *      airbnb规则--eslint-config-airbnb-base eslint eslint-plugin-import
                   */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // 自动修复eslint的错误
          fix: true,
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
