import './index.css'
import print from './print.js'
console.log('index.js文件被加载了!')
print()
function add(x,y) {
    return x + y
}

console.log(add(1,2))


if(module.hot) {
    // 一旦module.hot为true,说明开启了HMR功能 --> 让HMR功能生效
    module.hot.accept('./print.js',function () {
        // 方法会监听 print.js 文件的变化,一旦发生改变,其他默认不会重新打包构建
        // 会执行后面的函数
        print()
    })
}