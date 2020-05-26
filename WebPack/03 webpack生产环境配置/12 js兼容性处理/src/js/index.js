import '@babel/polyfill'

const add = (x, y) => {
    return x + y
}

console.log(add(1, 2))

new Promise((resolve) => {
    setTimeout(() => {
        console.log('定时器执行完毕!!')
    },1000)
})

console.log(Promise)
