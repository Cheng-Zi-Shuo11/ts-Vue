const {resolve} = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiNiCssExtractPlugin = require('mini-css-extract-plugin')
// 下载插件 npm i mini-css-extract-plugin -D  可以把css提取成单独文件
module.exports = {
    entry:'./src/js/index.js',
    output:{
        filename: 'js/built.js',
        path: resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:  /\.css$/,
                use: [
                    // 创建style标签,将样式放入
                    // 'style-loader',
                    // 这个loader取代style-loader,作用: 提取js中的css文件为单独文件
                    MiNiCssExtractPlugin.loader,
                    // 将css文件整合到js文件中
                    'css-loader'
                ]
            },
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new MiNiCssExtractPlugin({
            // 对输出的文件进行重命名
            filename:'css/built.css'
        })
    ],
    mode:'development'
}