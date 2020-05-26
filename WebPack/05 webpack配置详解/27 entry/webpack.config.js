const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * entry: 入口起点
 *      1. string    './src/index.js',
 *          打包形成一个chunk，输出一个bundle文件
 *          此时chunk的名称默认是 main
 *      2. array
 *          多入口
 *          所有入口文件只会形成一个chunk，输出出去只有一个bundle
 *          --> 只有在html功能中，让html热更新失效
 *      3. object
 *          多入口
 *          有几个入口文件就形成几个chunk，输出几个chunk
 *          此时chunk的名称是 key
 * 
 *          --> 特殊用法
 *      {
        index: ['./src/index.js','./src/count.js'],
        add: './src/add.js'
        }
 */

module.exports = {
    // entry: './src/index.js',
    // entry:[
    //     './src/index.js',
    //     './src/add.js'
    // ],
    entry: {
        index: ['./src/index.js', './src/count.js'],
        add: './src/add.js'
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}