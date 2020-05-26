import '../css/index.css'
import { mul } from './test.js'

function sum(...args) {
  return args.reduce((p, c) => p + c, 0)
}

// eslint-disable-next-line
console.log(mul(2, 3))
// eslint-disable-next-line
console.log(sum(1, 2, 3, 4, 5, 6));

/**
 * 1. eslint不认识window，navigoter全局变量
 *  解决，需要修改package.josn中eslintConfig配置
 *      "env": false
 * 
 * 2. sw代码必须运行在服务器上
 *  --> nodejs
 *  --> 
 *      npm i serve -g
 *      serve -s build  启动一个服务器，将build目录下的静态资源暴漏出去
 *        生成一个serveWorker.js 配置文件
 */
// 注册 serviceworker
// 处理兼容性问题
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(() => {
        console.log('sw注册成功')
      })
      .catch(() => {
        console.log('sw注册失败')
      })
  })
}