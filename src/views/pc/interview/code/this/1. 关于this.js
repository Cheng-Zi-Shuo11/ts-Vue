/**
 *  为什么使用this
 *
 * @format
 */

// this提供一个对象方式隐式传递一个对象的引用，因此可以将api设计的简洁并且容易复用。看下面两段代码的比较：
// function Identfiy() {
//   return this.name;
// }

// function speak() {
//   return "hello,i am" + Identfiy.call(this);
// }

// var me = {
//   name: 'Cheng'
// }

// var you = {
//   name: 'walker'
// }

// var man = Identfiy.call(you)
// console.log(man) // walker

// var boy = speak.call(me)
// console.log(boy) // Cheng



// function Identfiy1(context) {
//   return context.name
// }
// function speak1(context) {
//   return "hello i am" + Identfiy1(context)
// }

// var me1 = {
//   name: 'tony'
// }

// var you1 = {
//   name="walker"
// }

// console.log(Identfiy1(me1))
// console.log(speak1(you1))


/**
 * 1. 问题的由来(((())))
 * 
 * 为什么obj.foo()就是在obj环境执行，而一旦var foo = obj.foo，foo()就变成在全局环境执行？
 */
var obj = {
  foo: function () { console.log(this.bar) },
  bar: 1
};

var foo = obj.foo;
var bar = 2;

obj.foo() // 1
foo() // 2

/***
 * 2. 内存的数据结构(((())))
 *
 * this的设计与内存里面的数据结构有关系
 */
var object = { foo: 5 }
// 将一个对象赋值给变量 object, JavaScript引擎会先在内存里生成一个对象{foo:5}, 然后把这个对象的内存地址赋值给变量object
// 也就是说, object是一个地址(reference), 后面如果要读取obj.foo, 引擎先从 object 拿到内存地址, 然后再从该地址读出原始对象, 返回他的foo属性

/**
 * 原始的对象以字典结构保存，每一个属性名都对应一个属性描述对象。举例来说，上面例子的foo属性，实际上是以下面的形式保存的。
 *
  {
    foo: {
      [[value]]: 5
      [[writable]]: true
      [[enumerable]]: true
      [[configurable]]: true
    }
  }

 * 注意，foo属性的值保存在属性描述对象的value属性里面
 */

/**
 * 3, 函数(((())))
 * 
 * 上面数据结构是很清晰的,问题在于属性的值可能是一个函数
 */

var objFn = { foo: function () { } }
// 这个时候,引擎会将函数单独保存在内存中,然后再将函数的地址赋值给foo属性的value属性

// 由于函数是一个单独的值, 可以在不同环境(上下文)执行
var f = function () { }
var objFn1 = { f: f }

// 单独执行
f()

// obj 环境执行
objFn1.f()


/**
 * 4. 环境变量
 *
 * JavaScript 允许在函数体内部，引用当前环境的其他变量
 */

var x = function () {
  console.log(x)
}
x()
// 上面代码中使用了变量x,该变量由运行环境提供.
// 现在问题就来了, 由于函数可以在不同的运行环境执行.所以需要一种机制,能够在函数体内部获得当前的运行环境(context),所以,this出现了
