/***
 * 运行项目指令: 
 *   webpack 会将打包结果输出出去
 *   npx webpack-dev-server 只会在内存中编译打包,没有输出
 */

const { resolve } = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: ['url-loader'],
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    esModule: false
                },
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                exclude: /\.(html|css|less|js|png|gif|jpg)/,
                use: ['file-loader'],
                options: {
                    name: '[hash:10].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        compress: true,
        hot: true,
        port: 4000,
        open: true
    },
    mode:'development'
}