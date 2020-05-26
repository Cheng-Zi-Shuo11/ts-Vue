import '../css/index.css'
import { mul } from './test.js'

function sum(...args) {
  return args.reduce((p, c) => p + c, 0)
}

// eslint-disable-next-line
console.log(mul(2, 3))
// eslint-disable-next-line
console.log(sum(1, 2, 3, 4, 5, 6));

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