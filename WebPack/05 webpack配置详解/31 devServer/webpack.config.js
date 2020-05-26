const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'build'),
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
    }
}