const {resolve} = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output:{
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module:{
        rules:[
            
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode:'development',

    // 开发服务器 devServer: 用来自动化(自动化编译,自动打开浏览器,自动刷新浏览器)
    // 特点: 只会在内存中编译打包,不会有任何输出
    // 启动devServer指令为: npx webpack-dev-server
    // 使用devServer 需要安装 npm i webpack-dev-server -D
    devServer: {
        // 项目构建后的路径
        contentBase: resolve(__dirname,'build'),
        // 启动gzip压缩
        compress: true,
        port: 3000,
        // 自动打开浏览器
        open: true
    }
}