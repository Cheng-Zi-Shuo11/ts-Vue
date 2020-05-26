const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        // 文件名称(指定名称+目录)
        filename: '[name].js',
        // 输出文件目录(将来所有资源输出的公共目录)
        path: resolve(__dirname, 'build'),
        // 所有输出资源的公共路径的前缀 --> 路径的前面~
        publicPath: '/',
        // 非入口chunk的名称
        chunkFilename: '[name]_chunk.js', 
        // library: '[name]', // 整个库向外暴漏的变量名(通常结合 bll)
        // libraryTarget: 'window' // 变量名添加到哪个属性上
        // libraryTarget: 'global' // 变量名添加到属性上 node
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}