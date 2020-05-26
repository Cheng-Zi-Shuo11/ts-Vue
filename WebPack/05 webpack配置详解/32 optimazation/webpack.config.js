const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const terserWebpackPlugin = require('terser-webpack-plugin')
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: '[name].[contenthash:10].js',
        path: resolve(__dirname, 'build'),
        chunkFileName:'js/[name].[contenthash:10]_chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    resolve: {
        alias: {
            $css: resolve(__dirname, 'src/css')
        },
        extensions: ['.js', '.json', '.css'],
        modules: [resolve(__dirname,'../../node_modules'),'node_modules']
    },
    devServer: {
        // 运行代码的目录
        contentBase: resolve(__dirname,'build'),
        // 监视 contentBase 目录下的所有文件，一旦文件变化就会 reload
        watchContentBase: true,
        watchOptions: {
            // 忽略文件
            ignored: /node_modules/
        },
        // 启动gzip压缩
        compress: true,
        // 端口号
        port: 5000,
        // 域名
        host:'localhost',
        // 自动打开浏览器
        open:true,
        // 开启HMR功能
        hot: true,
        // 不需要显示启动服务器的日志
        clientLogLevel: 'none',
        // 除了一些基本启动信息以外，其他内容都不要打印
        quiet: true,
        // 出现错误，不要全屏提示~
        overlay: false,
        // 服务器代理 -> 解决开发环境跨域问题
        proxy:{
            // 一旦devServer(5000)服务器接收到 /api/xxx 的请求，就会把请求转发到另一个服务器(3000)
            '/api': {
                target: 'http://localhost:3000',
                // 如果发送请求时，请求路径重写，将 /api/xxx --> /xxx 去掉（去掉/api）
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    // 生产环境下---
    optimization: {
        splitChunks: {
            chunks: 'all',
            /** 默认值，可以不写 */
            // minSize: 30 * 1024, // 分割的chunk最小为30kb
            // maxSize: 0,  // 最大的没有限制
            // minChunks: 1, // 提取的chunk最少被引用一次
            // maxAsyncRequest: 5, // 按需加载的时候并行加载的文件最大数量为5
            // maxInitialRequest: 3, // 入口js文件并行请求数量为3个
            // automaticNameDelimiter: '~', // 名称连接符
            // name: true, // 可以使用命名规则
            // cacheGroups: { // 分割chunk组
            //     // node_modules文件会被打包到 vendors 组的chunk中 --> vendors~xxx.js
            //     // 满足上面的公共规则,如：大小超过30kb，至少被引用一次。
            //     vendors: {
            //         test: /[\\/]node_modules[\\/]/,
            //         // 优先级
            //         priority: -10
            //     },
            //     default: {
            //         // 要提取的chunk最少被引用两次
            //         minChunks: 2,
            //         // 优先级
            //         priority: -20,
            //         // 如果当前要打包的模块，和之前已经被提取到的模块是同一个，而不是重新打包模块
            //         reuseExistingChunk: true,
            //     }
            // },
        },
        // 将当前模块的记录其他模块的hash值单独打包为一个文件 runtime
        // 解决: 修改a文件导致b文件的contenthash值得变化
        runtimeChunk:{
            name: entrypoint => `runtime${entrypoint.name}`
        },
        minimizer:[
            // 配置生产环境得压缩方案: js/css
            new terserWebpackPlugin({
                // 开启缓存
                cache: true,
                // 开启多进程打包
                parallel: true,
                // 启动source-Map
                sourceMap: true
            })
        ]
    },
}