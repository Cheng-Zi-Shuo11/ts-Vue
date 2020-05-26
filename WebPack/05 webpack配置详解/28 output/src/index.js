import count from './count.js'

console.log('index.js文件加载了~')

import( './add.js').then(({default:add}) => {
    console.log(add)
})

console.log(add(2,3))
console.log(count(2,3))