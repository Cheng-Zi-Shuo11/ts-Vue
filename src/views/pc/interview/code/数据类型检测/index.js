/***
 * 栈： 原始数据类型（Undefined，Null，Boolean，Number、String）
 * 
 * 堆： 引用数据类型（对象、数组、函数）
 * 
 * 两种类型的区别:
 * 
 * 1. 存储位置不用: 
 * 原始数据类型直接存储在栈(stack)中简单数据段, 占据空间小, 大小固定, 属于被频繁使用的数据,所以存储在栈中,
 * 引用数据类型直接存储在堆中, 占据空间大, 大小不固定, 如果存储在栈中, 将会影响程序运行的性能, 引用数据类型在栈中存储了指针,该指针指向堆中该实体的起始地址
 * 当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后，从堆中获得实体。
 * 
 * 2. 传值方式不同:
 * 按值传递(call by value)是最常用的求值策略：函数的形参是被调用时所传实参的副本。修改形参的值并不会影响实参。
 * 按引用传递(call by reference)时，函数的形参接收实参的隐式引用，而不再是副本。这意味着函数形参的值如果被修改，实参也会被修改。同时两者指向相同的值。
 * 按引用传递会使函数调用的追踪更加困难，有时也会引起一些微妙的BUG。
 * 按值传递由于每次都需要克隆副本，对一些复杂类型，性能较低。两种传值方式都有各自的问题。
 * 
 * *  var person,name;
    person = 'kn';
    name=person;
    person='黑白';
    console.log(person,name,typeof person)//黑白 kn string

    person的改变没有改变name，说明 string 是按值传递的。赋值时创建一块新的内存空间


  *** 1. 基本数据类型: 按值传递 --- 不可变性质, 对string'修改'的操作,实际都是创建新的string值, 任何方法都无法改变一个基本类型的值
  *** 2. 引用数据类型: 按引用传递 --- 值可变
 */

/***
 * typeof
 * 
 * 对于基本类型检测是没问题的,遇到引用数据类型(如:Array)是不起作用的
 */
console.log(typeof "") // string
console.log(typeof 1) // number
console.log(typeof true) // boolean
console.log(typeof undefined) // undefined
console.log(typeof []) // object
console.log(typeof function () { }) // function
console.log(typeof {}); // object


/**
 * 2. instanceof
 * 
 * 可以看到前三个都是以对象字面量创建的基本数据类型，但是却不是所属类的实例，这个就有点怪了。后面三个是引用数据类型，可以得到正确的结果
 * 如果我们通过new关键字去创建基本数据类型，你会发现，这时就会输出true
 * 
 * 
 */
console.log("1" instanceof String)// false
console.log(1 instanceof Number)// false
console.log(true instanceof Boolean)// false
console.log([] instanceof Array)// true
console.log(function () { } instanceof Function)// true
console.log({} instanceof Object)// true

console.log(new Number(1) instanceof Number)//true
console.log(new String("111") instanceof String)//true
console.log(new Boolean("111") instanceof Boolean)//true

// console.log(new undefined instanceof undefined); //undefined is not a constructor
// console.log(new null instanceof null); //null is not a constructor 
/**
 * 览器压根不认识这两货，直接报错。在第一个例子你可能已经发现了，typeof null的结果是object，typeof undefined的结果是undefined
 *
 * 尤其是null，其实这是js设计的一个败笔，早期准备更改null的类型为null，由于当时已经有大量网站使用了null，如果更改，将导致很多网站的逻辑出现漏洞问题，就没有更改过来，于是一直遗留到现在。作为学习者，我们只需要记住就好。
 */


/**
 * 3. constructor
 * 
 * 乍一看，constructor似乎完全可以应对基本数据类型和引用数据类型，都能检测出数据类型，事实上并不是如此，来看看为什么
 */
console.log(("1").constructor === String)// true
console.log((1).constructor === Number)// true
console.log((true).constructor === Boolean)// true
console.log(([]).constructor === Array)// true
console.log((function () { }).constructor === Function)// true
console.log(({}).constructor === Object)// true


function fn() { }

fn.prototype = new Array()

let f = new fn()

console.log(f.constructor === fn)// false
console.log(f.constructor === Array)// true

/** 声明了一个构造函数,并且把他的原型指向了Array的原型，所以这种情况下，constructor也显得力不从心了 */

/**
 * Object.prototype.toString.call()
 * 
 * 所有的数据类型，这个办法都可以判断出来
 */

var to = Object.prototype.toString

console.log(to.call("aaa"))
console.log(to.call(11))
console.log(to.call(true))
console.log(to.call(null))
console.log(to.call(undefined))
console.log(to.call([]))
console.log(to.call(function () { }))
console.log(to.call({}))

function fnn() { }

fnn.prototype = new Array()

console.log(to.call(fnn))