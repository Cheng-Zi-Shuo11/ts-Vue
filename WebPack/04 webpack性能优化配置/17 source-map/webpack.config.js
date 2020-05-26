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
        hot: true
    },
    mode:'development',
    devtool: 'eval-source-map' 
}

/**
 * source-map: 一种提供源代码带构建后代码映射，技术（如果后代码出错了，通过映射可以追踪到源代码的错误）
 * 
 * [inline-| hidden|eval][nosources-][cheap-[module-]]source-map
 * 
 * source-map： 外部
 *  错误代码准确信息 和 源代码的错误位置
 * inline-source-map 内联
 *  1. 只生成一个内联source-map
 *  错误代码准确信息 和 源代码的错误位置
 * hidden-souce-map 外部
 *  错误代码，错误原因，但是没有错误位置
 *  不能追踪源代码错误，只能提示到构建后代码的位置
 * eval-source-map  内联
 *  1 每一个文件都生成对应的source-map，都在eval
 *  错误代码准确信息 和 源代码的错误位置
 * nosorces-source-map 外部
 *  错误代码准确信息 但是没有任何源代码的错误
 *  隐藏源代码
 * cheap-source-map 外部
 *  错误代码准确信息 和 源代码的错误位置
 *  只能精确到行
 * cheap-module-source-map 外部
 *  错误代码准确信息 和 源代码的错误位置
 * module会将loader的source map加入
 * 
 * 内联和外部：1. 外部生成了文件，内联没有， 2. 内联速度更快
 * 
 * 考虑生产环境和开发环境
 * 开发： 速度快，调试更友好
 * 速度快--> eval>inline>cheap
 *  eval-cheap-souce-map
 *  eval-source-map
 * 调试更友好
 *  cheap-module-source-map
 *  cheap-souce-map
 * 
 *  --> eval-source-map  / eval-cheap-source-map
 * 生产：源代码要不要隐藏？调试要不要更友好
 *  内联会让体积变大，所以在生产环境内联直接可以排除
 *  nosorces-source-map  全部隐藏
 *  hidden-souce-map    只隐藏代码，会提示构建后代码错误
 * 
 * --> source-map / cheap-module-source-map
 */