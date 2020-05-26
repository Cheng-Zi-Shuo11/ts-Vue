/**
 * webpackconfig.js webpack 的配置文件
 * 作用：指示webpack 干那些活（当你运行webpack 指令时，会加载里面的配置）
 * 
 * 所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs
 */

const { resolve } = require('path')


 module.exports = {
    //  webpack配置
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module:{
        rules:[
            // 详细loader配置
            {
                test: /\.css$/,
                // 使用那些loader
                use: [
                    // use数组中执行顺序：从右到左，从下到上 依次执行
                    // 创建style标签，将js中的样式资源插入进行，添加到head生效
                    'style-loader',
                    // 将css文件变成commonjs模块加载js中，里面是样式字符串
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // 将less文件编译成css
                    // 需要下载less-loader和less
                    'less-loader'
                ]
            }
        ]
    },
    plugins:[],
    mode:'development',
    // mode:'production'
 }