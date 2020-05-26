
const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiNiCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const workboxWebpackPlugin = require('workbox-webpack-plugin')
/**
 *  PWA: 渐进式网络开发应用程序(离线可访问)
 *    workbox --> workbox-webpack-plugin
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
    new workboxWebpackPlugin.GenerateSW({
      /**
       * 1. 帮助serviceworker快速启动
       * 2. 删除旧的 serviceworker
       * 
       * 生成一个 serviceworker 配置文件~
       */
      clientsClaim:true,
      skipWaiting:true
    })
  ],
  mode: 'production',
  devtool:'eval-source-map'
};
