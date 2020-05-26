/**
 * HMR: hot module replacement 热模块替换/ 模块热替换
 *  作用: 一个模块发生变化,只会重新打包这一个模块(而不是打包所有模块)
 *      极大提升构建速度
 *      
 *  样式文件: 可以使用HMR功能,因为style-loader内部实现了
 *  js文件: 默认没有HMR功能 --> 修改js代码,添加支持HMR功能的代码
 *      注意: HMR功能对js处理: 只能处理非入口的其他js文件,
 *  html文件: 默认不能使用HMR功能,同时会导致问题: html文件不能热更新了~(不需要做HMR功能)
 *      解决: 修改entry入口,将html文件引入
 */

const { resolve } = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: ['./src/index.js','./src/index.html'],
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
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]'
                }
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                exclude: /\.(html|css|less|js|png|gif|jpg)/,
                loader: 'file-loader',
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
        port: 4000,
        open: true,
        // 开启HMR功能
        // 当修改了webpack-dev-server,需要重新启动webpack服务
        hot: true
    },
    mode:'development'
}