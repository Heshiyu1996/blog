# JS异步解决方案的发展历程
> JS异步解决方案的发展历程

[[toc]]

## 异步解决方案的发展历程
 - 回调函数
    - 缺点：回调地狱、不能捕获错误

 - 事件监听
    - 缺点：整个流程变成事件驱动，思路不太清晰

 - 发布订阅
    - 优点：多了一个“消息中心”

 - Promise
    - 优点：解决了回调地狱
    - 缺点：1、无法取消Promise；2、错误需要通过回调函数来捕获

 - Generator
    - 优点：控制函数的执行
    - 缺点：要编写自动执行器
 - Async/Await
    - 优点：1、Generator+自动执行器；2、更像同步写法
 - WebWorker
    - 优点：开启了一个“新线程”

## callback、Async/Await和Promise
### 回调函数
 如果是以前，可以用`回调函数`实现：
 ```js
 function runAsync(callback){
     if(/* 异步操作成功 */) {
         callback(value)
     }
 }

// 传入一个匿名函数作为回调函数
 runAsync(funtion(data) {
     console.log(data)
 })
 ```
 缺点：
  - 容易造成 **回调地狱**
  - 影响阅读体验

### Promise
 Promise是一个容器，而且代表的是一个异步操作，有3种状态：
  - `Pending（进行中）`
  - `Fulfilled（已成功）`
  - `Rejected（已失败）`
  
  只有 **异步操作的结果** 可以决定当前是哪一种状态，任何其他操作都无法改变这个状态（也就是“承诺”的意思）。
  
  并且，**它的状态可以影响后续的then行为**
 ```js
 // Promise的构造函数接收一个函数作为参数，这个函数又可以传入两个参数：resolve、reject；
 // 它们分别表示：异步操作执行后，Promise的状态变为Fulfilled/Rejected的回调函数。
 var promise = new Promise(function (resolve, reject) {
     // ...
     if(/* 异步操作成功 */) {
         resolve(value) // 这个value表示的是异步操作后获得的数据
     } else {
         reject(error) // 这个error表示的是异步操作后报出的错误
     }
 })
 ```
 优点：
  - 解决了 **回调地狱**
  - 方便阅读

 缺点：
  - 返回值传递
    - 仍然需要创建`then`调用链，需要创建匿名函数，把返回值一层层传递给下一个`then`
  - 异常不会向上抛出
    - `then`里函数有异常，`then调用链`外面写`try-catch`没有效果
  - 不方便调试
    - 在某个`.then`设置断点，不能直接进到下一个`.then`方法

对于Promise的异常捕获：

`Promise.prototype.catch()`是`.then(null, function(err) { ... })`的别名
```js
p.then(data => console.log(data))
.catch(err => console.log(err))

// 等价于
p.then(data => console.log()})
.then(null, err => console.log(err))
```
可知，`catch()`和`then()第二个参数的区别`：
 - catch()可以捕获前面所有的异常（`包括Promise里的reject、then里的`）
 - 第二个参数只能捕获`Promise里的reject、前一个then`的错误

### Async、Await
`async`是一个函数修饰符，表示函数里有异步操作
 > `async`函数会返回一个`Promise`对象，可以使用`then`添加回调函数；

`await`表示紧跟在后面的表达式需要等待结果；
 > 后面跟也是`Promise`，

 好处：
  - 简洁。易于阅读和理解
  - 错误处理。
    - 可以被`try-catch`捕捉到
  - 方便调试。


## async/await
async是Generator函数的语法糖。它会返回一个promise对象（并且会等到内部所有await后面的Promise对象执行完才会发生状态改变）
```js
async function f() {
    return 'Hello world'
}
f().then(v => console.log(v)) // 'Hello world'
```
可见，函数f内部return返回的值，会被then方法回调函数接收到。

### async的使用形式
```js
// 函数声明
async function func1 () { ... }

// 函数表达式
var func1 = async function () { ... }

// 对象的方法
var obj = {
    async func1() { ... }
}

// 类的方法
class Storage {
    async func1() { ... }
}

// 箭头函数
var func1 = async () => { ... }
```

### async函数的实现原理
async函数实际上是`Generator函数`和`自动执行器`的一个包装
```js
async function func1(args) {
    // ...
}

// 等价于
function func1(args) {
    return spawn(function* () {
        // ...
    })
}
```
其中spawn函数
```js
function spawn(genF) {
    return new Promise((resolve, reject) => {
        var gen = genF()
        function step(nextF) {
            try {
                var next = nextF()
            } catch(e) {
                return reject(e)
            }
            if (next.done) {
                return resolve(next.value)
            }

            Promise.resolve(next.value).then(v => {
                step(function() { return gen.next(v) })
            }, e => {
                step(function() { return gen.throw(e) })
            })
        }

        step(function() { return gen.next(undefined) })
    })
}
```
因为立即resolved的Promise是在`本轮事件循环的末尾执行`，所以最好前面加个`return`

### async的错误处理机制
由`async函数的实现原理`可知，函数内部await 后面跟的Promise只要有一个reject了，那就会使得async函数所返回的Promise对象也被reject。

如果不想整个async函数中断，有两个方法
```js
async function f () {
    // 方法一：用try-catch捕获可能会抛出异常的await
    try {
        await Promise.reject('error')
    } catch(e) {
        console.log(e)
    }

    // 方法二：对可能会抛出异常的await声明catch
    await Promise.reject('error').catch(e => console.log(e))

    return await Promise.resolve('Hello world')
}
```

### 多个await并发执行
若两个异步操作是互不依赖的，那可以并发���行
```js
let [foo, bar] = await Promise.all([getFoo(), getBar()])
```

注意：
```js
// forEach、map也可以使这些await是并发执行
// 原因：每次迭代会生成新的async。只能保证同一个async内部的await是继发
// 可使用场景：一组异步操作的按顺序输出
arr.forEach(async (doc) => {
    await fetchUrl(doc)
})

// 使用for循环可以保证是继发执行
for (let doc of arr) {
    await fetchUrl(doc)
}

```

### await
await后面跟的是一个Promise对象（如果不是，他会被转成一个立即resolve的Promise对象）


### [JS]Promise.all()的用法、异常处理
#### `Promise.all([])`接收一个数组，数组中每个元素都是`Promise的实例`。
例如：
```js
var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'first')
})
var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 0, 'second')
})
var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'third')
})

var p = Promise.all([p1, p2, p3])
p.then(data => console.log(data)) // ['first', 'second', 'third']
```

 - 当`p1、p2、p3`都为fulFilled，按`参数的顺序`传给p的回调函数（then）
 - 当`p1、p2、p3`其中一个为rejected，会把`第一个变rejected`的值传给p的回调函数（catch）
> 注意：如果

#### 异常处理
因为`Promise.all()`方法是**一旦抛出其中一个异常**，那其他正常返回的数据也无法使用了

 ![alt](././img/JSAsync-1.png)

解决办法：
 - 方法一：改为串行调用（失去了并发优势）
 - 方法二：将p1、p2、p3这些promise`自身定义一个catch方法`。
    - 那它被rejected时，也`不会触发Promise.all()的catch`。而是会`触发自身定义的catch`。因为他们自身定义的catch方法`返回的是一个新Promise实例`，`作为参数的这个promise`实际上指的是这个新实例，这个`新实例会变成resolved`。
 - 方法三：在Promise内，先用try-catch吃掉这个异常。在其catch内再调用resolve(err)，让外面的Promise“感觉”像是调用成功（和方法二的区别是，方法二是个新实例）
 ```js
 // 方法二：
 var p2 = new Promise((resolve, reject) => {
     setTimeout(resolve, 0, xxx)
 })
 .then(result => result)
 .catch(err => err)
 ```
 ```js
 // 方法三：
 var p2 = new Promise((resolve, reject) => {
     setTimeout(() => {
         try {
             console.log(xxx) // xxx未声明，会抛出异常给下面的catch块
         } catch(err) {
             resolve(err) // 在内部的catch里调用resolve(err)
         }
     })
 })
 ```
 ![alt](./img/JSAsync-2.png)

### [JS]Generator函数
看一个`Generator函数`：
```js
function* asyncJob(x) {
    console.log('aaa')
    var y = yield x + 2
    console.log('bbb')
    console.log('y', y)
    var y2 = yield y + 6
    return y2
}

var g = asyncJob(1) // Generator函数会返回一个遍历器g
console.log(g.next())
// ① 先输出'aaa'
// ② 再输出{ value: 3, done: false }
// value表示：yield语句后面跟的表达式的值，此时y的赋值还未完成！
// done表示：Generator函数是否执行完毕
// -----此时Generator函数执行到此处，执行权交给外面（第一个yield前的、且其后的表达式并返回）-----
console.log('ccc')
// ③ 输出'ccc'
console.log(g.next(660))
// next函数把执行权交回里面，继续执行
// 因为往next()传参（只能带一个），上一次“yield后跟的表达式返回值 = 参数（即666）”，给了y
// 完成y的赋值，因为next传参660，所以y = 660
// ④ 先输出'bbb'
// ⑤ 再输出'y, 660'
// 遇到第二个yield，执行yield后跟表达式
// ⑥ 返回对象{ value: 666, done: false }，此时y2的赋值还未完成
// -----此时Generator函数执行到此处，执行权交给外面（第二个yield前的、且其后的表达式并返回）-----
console.log(g.next(3))
// next函数把执行权交回里面，继续执行
// 因为往next()传参（只能带一个），上一次“yield后跟的表达式返回值 = 参数（即3）”，给了y
// 完成y的赋值，因为next传参3，所以y2 = 3
// ⑦ 最后输出{ value: 3, done: true }
```
```
aaa
{ value: 3, done: false }
ccc
bbb
y, 660
{ value: 666, done: false }
{ value: 3, done: true }
```
#### Generator函数能封装异步的原因？
根本原因：Generator函数可以**暂停执行**和**恢复执行**

两个特性：
 - 函数内外的数据交换
    - 内对外：next返回的value
    - 外对内：next传入的参数（只能传一个）
 - 错误处理


#### yield的特点
- 用来说明`next函数`返回的`value值`
- 每个`yield`调用后，后面的代码都会停止执行
- `yield`不能穿透函数（即`不能使用forEach`来遍历声明yield，`必须用for`！！）

迭代器对象可以任意具有.next方法的对象

#### Generator函数的自动执行
Generator是一个异步操作的容器，它的自动执行需要一种机制（当异步操作有了结果，这种机制就要自动交回执行权），有两种方法：
 - 回调函数。
    - 将异步操作包装成Thunk函数，在回调函数里交回执行权
 - Promise对象。
    - 将异步操作包装成Promise对象，在then方法里交回执行权