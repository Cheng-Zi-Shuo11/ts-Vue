const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiNiCssExtractPlugin = require('mini-css-extract-plugin');

// 设置环境变量 : process_ent_NODE_ENV = 'development'
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
          // 这个loader取代style-loader,作用: 提取js中的css文件为单独文件
          MiNiCssExtractPlugin.loader,
          // 将css文件整合到js文件中
          'css-loader', /**
                     * css兼容性处理：postcss --> postcss-loader, postcss-preset-env
                     *
                     * 帮postcss找到browerList里面的配置,通过配置加载指定的css兼容性样式
                     *
                     * "browserslist":{
                     * 开发环境:设置nodejs的环境变量:通过process_ent_NODE_ENV = 'development'
                    "development": [
                      "last 1 chrome Version",
                      "last 1 firefox Version",
                      "last 1 safari Version"
                    ],
                    默认是生产环境
                    "production": [
                      ">0.2%",
                      "not dead",
                      "not op_mini all"
                    ]
  }
                     */
          //  使用loader的默认配置
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
  ],
  mode: 'development',
};
