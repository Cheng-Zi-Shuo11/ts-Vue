const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiNiCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

// 定义Nodejs环境变量
process.env.NODE_ENV = 'production';

// 复用loader
const coomonLoder = [
  MiNiCssExtractPlugin.loader,
  'css-loader',
  // 需要配置在 less-loader 上面
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
    filename: 'js/built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
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
      /**
             * 正常来讲，一个文件只能处理一个loader
             * 当一个文件夹要被多个loader处理，那么一定要指定loader的执行顺序
             *  先执行eslint 在执行babel
             */
      {
        // 在配置package.json中添加eslintConfig --> aribnb
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
      filename: 'css/built.css',
    }),
    new optimizeCssAssetsWebpackPlugin(),
  ],
  mode:'development'
};
