/**
 * loader 1. 下载 2. 使用(配置loader)
 * plugins 1. 下载  2. 引入 3. 使用
 */
const {resolve} = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output:{
        filename: 'built.js',
        path: resolve(__dirname,'build')
    },
    module:{
        rules:[

        ]
    },
    plugins:[
        // plugins 的配置
        // html-webpack-plugin
        // 功能: 默认会创建一个空的html文件,引入打包输出的所有资源(Js/css)
        // 需求: 需要有结构的HTML文件
        new htmlWebpackPlugin({
            // 复制 ./src/index.html 文件,并自动引入打包输出的所有资源(css/js)
            template: './src/index.html'
        })
    ],
    mode: 'development'
    // mode: 'production'
}