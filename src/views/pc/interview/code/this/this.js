/** 一: 普通函数调用 */
// 1. let
let userName = "Cheng"
function fn() {
  console.log(this.userName)
}

fn() // node 输出 undefined, Chrome 输出 undefined

// 2. var
var name = "Cheng"

function fn1() {
  console.log(this.name)
}

fn1()// node 输出 undefined, Chrome 输出 Cheng

// 3. window
// window.name1 = "Cheng"
// function fn2() {
//   console.log(this.name1)
// }

// fn2() // node 输出报错--window is not defined   Chrome 输出 Cheng
// node里面没有window 对象 global全局对象，浏览器中有window对象   

//  4. let 和 var 区别
// （1）let 允许把变量的作用域限制在块级域中；var 申明变量要么是全局的，要么是函数级的，而无法是块级的。
let letClass = function () {
  var name = "CVheng"

  if (true) { // 块级作用域
    var name = "saucss"
    console.log(name)
  }
  console.log(name)
}
letClass()
// saucss
// saucss

let varClass = function () {
  let name = "age"

  if (true) {
    let name = "saucess"
    console.log(name)
  }
  console.log(name)
}
varClass()
// saucess
// age
/** 结果说明了, let 只在 {} 使用 */

// （2）先let后var
// let subClass = function () {
//   let name = "haha"

//   if (true) {
//     var name = "varName"
//     console.log(name)
//   }
//   console.log(name)
// }
// subClass()
// Identifier 'name' has already been declared
// var 是函数级作用域，相当于一个作用域中有两个n的变量了
// var 作用于整个 subClass ，和let冲突了，let不能重复声明，already been declared=已经被声明

//  (((((3)))))先var后let
let subClass1 = function () {
  var name = "haha"

  if (true) {
    let name = "varName"
    console.log(name)
  }
  console.log(name)
}
subClass1()


/* (((((((((二)))))))))  对象函数调用 */
// 哪个函数调用,this指向哪里

let nammm = 'Cheng'
let obj = {
  id: 2020,
  fn: function () {
    console.log(this.name) // undefined
    console.log(this.id) // 2020
  }
}
obj.fn()
// this指向obj

// ((((一种情况需要注意))))
let obj1 = {
  a: 111
}
let obj2 = {
  a: 222,
  fn: function () {
    console.log(this.a)
  }
}
obj1.fn = obj2.fn
obj1.fn()
// obj1.fn 是从 obj2.fn 赋值而来，但是调用函数的是 obj1 ，所以 this 指向 obj1 。


/* (((((三))))) 构造函数调用 */
let structClass = function () {
  this.name = "ChengZiShuo"
}

let subClass2 = new structClass()
console.log(subClass2.name)

let subClass3 = new structClass()
subClass3.name = "halou"
console.log(subClass3.name)


/* (((((四))))) apply和call调用 */
// 1、apply和call简单来说就是会改变传入函数的this。
let obj4 = {
  name: 'Chneg'
}
let obj5 = {
  name: 'success',
  fn: function () {
    console.log(this.name)
  }
}
obj5.fn.call(obj4)
//此时虽然是 obj2 调用方法，但是使用 了 call ，动态的把 this 指向到 obj1 。相当于这个 obj2.fn 这个执行环境是 obj1 。

/***
 *
 * call 和 apply 两个主要用途：

1.改变 this 的指向（把 this 从 obj5 指向到 obj4 ）

2.方法借用（ obj4 没有 fn ，只是借用 obj5 方法）
 */

//2. call和apply区别
/***
 *  call 和 apply 的作用，完全一样，唯一的区别就是在参数上面。

call 接收的参数不固定，第一个参数是函数体内 this 的指向，第二个参数以下是依次传入的参数。

apply接收两个参数，第一个参数也是函数体内 this 的指向。第二个参数是一个集合对象（数组或者类数组）
 */

let fn222 = function (a, b, c) {
  console.log(a, b, c)
}
let arrArray = [1, 2, 3]
fn222.call(window, arrArray)  //  [1, 2, 3] undefined undefined
fn222.apply(window, arrArray) //  1 2 3

/* (((((五))))) 箭头函数的调用 */
// ES6 提供了箭头函数，增加了我们的开发效率，但是在箭头函数里面，没有 this ，箭头函数里面的 this 是继承外面的环境。

let obj3333 = {
  nameA: 'Cheng',
  fn: function () {
    setTimeout(function () { console.log(this.nameA) })
  }
}
obj3333.fn()
// 不难发现，虽然 fn() 里面的 this 是指向 obj ，但是，传给 setTimeout 的是普通函数， this 指向是 window ， window 下面没有 name ，所以这里输出 underfind 。

let obj4444 = {
  nameC: "cheng",
  fn: function () {
    setTimeout(() => {
      console.log(this.nameC)
    });
  }
}
obj4444.fn()
// 这次输出 程新松 是因为，传给 setTimeout 的是箭头函数，然后箭头函数里面没有 this ，所以要向上层作用域查找，在这个例子上， setTimeout 的上层作用域是 fn 。而 fn 里面的 this 指向 obj ，所以 setTimeout 里面的箭头函数的 this ，指向 obj 。所以输出 程新松。