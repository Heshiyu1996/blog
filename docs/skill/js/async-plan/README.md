# JS异步解决方案
> JS异步解决方案

[[toc]]

## 方案汇总
| 方案 | 优点 | 缺点 |
| ----- |:---|:---|
| callback |  | 1. 回调地狱<br/> 2. 捕获错误困难 |
| Promise | 1. 解决回调地狱 | 1. 返回值传递<br/> 2. 异常不会向上抛出<br/> 3. 不方便调试 |
| Generator | 1. 控制函数的执行 | 需要编写自动执行器 |
| Async/Await | 1. Generator + 自动执行器<br />2. 更像同步写法 |  |

## Callback（回调函数）
 ```js
 function runAsync(callback){
     if(/* 异步操作成功 */) {
         callback(value)
     }
 }

// 传入一个匿名函数作为回调函数
 runAsync(function(data) {
     console.log(data)
 })
 ```

## Promise
`Promise` 可以理解为 **是一个代表异步操作的容器**，它有 3 种状态：
  - `Pending`（进行中）
  - `Fulfilled`（已成功）
  - `Rejected`（已失败）
  
> Promise 的特点：只有 **异步操作的结果** 可以决定 Promise 是哪一种状态，任何其他操作都无法改变这个状态（也就是“承诺”的意思）。
  
**它的状态可以影响后续的then行为**
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

**缺点：**
  - 返回值传递
    - 仍然需要创建`then`调用链，需要创建匿名函数，把返回值一层层传递给下一个`then`
  - 异常不会向上抛出
    - `then`里函数有异常，`then调用链`外面写`try-catch`没有效果
  - 不方便调试
    - 在某个`.then`设置断点，不能直接进到下一个`.then`方法

**Promise的异常捕获：**

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


### Promise.all()的用法、异常处理

`Promise.all()` 接收一个数组，数组中每个元素都是 `Promise的实例` 。

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

// 执行到这时，上面的 p1、p2、p3 早已经发出
var p = Promise.all([p1, p2, p3])
p.then(data => console.log(data)) // ['first', 'second', 'third']
```

 - 当 `p1、p2、p3` 都为**fulFilled**，会按照 `参数的顺序` 传给 `p` 的回调函数 `then`
 - 当 `p1、p2、p3` **其中一个为rejected**，会把 `第一个变rejected` 的值传给 `p` 的回调函数 `catch`

#### 异常处理
因为`Promise.all()`方法是**一旦抛出其中一个异常**，那其他正常返回的数据也无法使用了

 ![alt](././img/JSAsync-1.png)

解决办法：
 - 方法1：**定义 promise 内的 catch 方法，从而 catch 会返回一个新实例**
 - 方法2：**定义 promise 内的 try-catch 方法，在 catch 内执行 resolve**

 ```js
 // 方法1：定义 promise 内的 catch 方法，从而 catch 会返回一个新实例
 var p2 = new Promise((resolve, reject) => {
     setTimeout(resolve, 0, xxx)
 })
 .then(result => result)
 .catch(err => err)
 ```

 ```js
 // 方法2：定义 promise 内的 try-catch 方法，在 catch 内执行 resolve
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
 
#### 实现Promise.all
```js
 var mockAll = function (args) {
    // 1. 定义 promise结果 数组
    let result = [];

    // 2. 返回一个 大Promise，不断填充res
    return new Promise((resolve, reject) => {
            let i = 0;
            next();

            function next() {
                // 3. 收集每个 子promise 的结果
                args[i]
                    .then(res => {
                        result.push(res);
                        i++;

                        // 4. 当 i 为 子promise长度，表示收集完毕，执行resolve
                        if (i === args.length) {
                            resolve(result)
                        } else {
                            next()
                        }
                    })
                    // 5. 当出现 catch，立马执行 reject
                    .catch(err => reject(err))
            }
    })
}
```

### Promise源码思路
 - [detail](/skill/js/promise)
 




## Generator函数
- [generator](./generator/)

## Async、Await
`async`是一个函数修饰符，表示函数里有异步操作。
 > 返回: `Promise`对象

`await`后面紧跟 Promise对象。

 好处：
  - 简洁。易于阅读和理解
  - 错误处理。
    - 可以被`try-catch`捕捉到
  - 方便调试。


### async
async是Generator函数的语法糖。

它会返回一个 promise 对象，并且**会等到内部“所有await紧跟的Promise对象”执行完才会发生状态改变**
> 另一方面，当函数内部 await 紧跟的 Promise对象 只要有一个reject了，也会使得 **async函数所返回的Promise对象** 变成 reject。


#### async的使用形式
```js
// 函数声明
async function func1 () { ... }

// 函数表达式
var func1 = async function () { ... }

// 箭头函数
var func1 = async () => { ... }

// 对象的方法
var obj = {
    async func1() { ... }
}

// 类的方法
class Storage {
    async func1() { ... }
}
```

#### async函数的实现原理
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
// genF 表示 generator函数
function spawn(genF) {
    return new Promise((resolve, reject) => {
        // 1. 执行generator函数，返回一个遍历器
        /**
         * gen:
         *  {
         *    next: function, // 执行到下一个yield前的代码，并返回yield紧跟的值
         *    throw: function
         *  }
         **/
        var gen = genF();

        function step(nextF) {
            try {
                var next = nextF();
            } catch(e) {
                return reject(e);
            }

            if (next.done) {
                return resolve(next.value) // asyn 的内部返回值会作为then的回调入参
            }

            Promise.resolve(next.value).then(v => {
                step(function() { 
                    return gen.next(v);
                })
            }).catch(e => {
                step(function() { 
                    return gen.throw(e);
                })
            })
        }

        step(function() { 
            return gen.next(undefined);
        });
    })
}
```
因为立即resolved的Promise是在`本轮事件循环的末尾执行`，所以最好前面加个`return`

##### asyn的内部返回值会作为then的回调入参
```js
async function f() {
    return 'Hello world'
}
f().then(v => console.log(v)) // 'Hello world'
```
#### async的错误处理机制
由`async函数的实现原理`可知，函数内部await 后面跟的Promise只要有一个reject了，那就会使得 **async函数所返回的Promise对象** 也被reject。

如果不想整个async函数中断，有两个方法
```js
async function f () {
    // 方法一：用try-catch捕获：“可能会抛出异常的await”
    try {
        await Promise.reject('error')
    } catch(e) {
        console.log(e)
    }

    // 方法二：对“可能会抛出异常的await”声明catch
    await Promise.reject('error').catch(e => console.log(e))

    return await Promise.resolve('Hello world')
}
```

### await
await后面跟的是一个Promise对象（如果不是，他会被转成一个立即resolve的Promise对象）

#### 多个await并发、继发执行
**并发执行：**
> 常见场景：一组异步操作的按顺序输出

原理：每次迭代会生成新的async。（原理上只能保证同一个async内部的await是继发）
```js
// ① forEach、map
arr.forEach(async (doc) => {
    await fetchUrl(doc)
})
// ② Promise.all
let [foo, bar] = await Promise.all([getFoo(), getBar()])

```

继发执行：
```js
// for ... of
for (let doc of arr) {
    await fetchUrl(doc)
}
```