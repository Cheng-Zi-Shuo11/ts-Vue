
const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiNiCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

/**
 *  tree shaking: 去除无用的代码
 *    前提： 1. 必须使用ES6模块化  2. 开启production环境
 *    作用：减少代码体积
 * 
 *  在package.json中配置 sideEffects ：false
 *    所有代码没有副作用（都可以进行tree shaking）
 *    问题： 可能会把css/@babel/polyfill 文件干掉
 *      “sideEffects”：['*.css',"*.less"]
 */
process.env.NODE_ENV = 'production';

const coomonLoder = [
  MiNiCssExtractPlugin.loader,
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [require('postcss-preset-env')()],
    },
  },
];

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.[contenthash:10].js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // 优先执行 enforce
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
      {
        oneOf: [
          {
            test: /\.css$/,
            use: [
              ...coomonLoder,
            ],
          },
          {
            test: /\/less$/,
            use: [
              ...coomonLoder,
              'less-loader',
            ],
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: {
                      version: 3,
                    },
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
              cacheDirectory: true
            },
          },
          {
            test: /\.(jpg|png|gif)/,
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[hash:10].[ext]',
              outputPath: 'imgs',
            },
          },
          {
            test: /\.html$/,
            loader: 'html-loader',
          },
          {
            exclude: /\.(css|less|jpg|png|gif|js|html)/,
            loader: 'file-loader',
            options: {
              outputPath: 'media',
            },
          },
        ]
      }
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new MiNiCssExtractPlugin({
      filename: 'css/built.[contenthash:10].css',
    }),
    new optimizeCssAssetsWebpackPlugin(),
  ],
  mode: 'production',
  devtool:'source-map'
};
