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
 - `async` 是一个函数修饰符，表示函数里有异步操作。

 - `await` 后面紧跟 `promise对象`。

**好处：**
  - 阅读性较高
  - 错误处理：可以被`try-catch`捕捉到


### async
`async` 是 “Generator函数” 的语法糖。

它会返回一个 `promise对象`：
> 状态转化时机：**“内部promise对象” 执行完**（最终状态类似`promise.all`）

对于 `async` 有 2 个关键点：
 - **实现原理**
 - **错误处理**


#### async的实现原理
`async` 是 `Generator函数` + `自动执行器（spawn）` 的一个包装。

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

其中，`spawn函数`：

```js
// genF 表示 generator函数
function spawn(genF) {
    return new Promise((resolve, reject) => {
        // 1. 执行generator函数，返回一个遍历器
        /**
         * gen:
         *  {
         *    next: function, // 执行到下一个yield前的代码，并返回 yield 紧跟的值
         *    throw: function
         *  }
         **/
        var gen = genF();

        function step(nextF) {
            try {
                // 2. 执行 gen.next，拿到 next对象
                /**
                 * next:
                 *  {
                 *    value: any, // yield语句后面跟的表达式的值
                 *    done: boolean //表示是否执行完
                 *  }
                 **/
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

        // 2. 开始执行，传入 nextF
        step(function() { 
            return gen.next(undefined);
        });
    })
}
```
##### 说明
1. `spawn` 接收一个 generator，返回一个 promise对象
2. `promise`对象 会先拿到 `gen`（迭代器），开始调用 `step`
3. `step` 内部会拿到 `next`，执行 `Promise.resolve`，并不断执行 `step`
4. 当 `next.done === true` 时，表示执行结束，调用 `resolve` 返回最终结果。

#### async的错误处理
由上面可知，`async函数` 内部的promise 只要有一个 `rejected`了，那就会使得 **async函数所返回的Promise对象** 也被 `rejected`。

“错误处理” 有以下 2 个方法：
 - `try-catch`
 - 声明 `.catch`

> 原理和 `Promise.all` 做法类似。

```js
async function f () {
    // 方法一：用 try-catch 捕获
    try {
        await Promise.reject('error')
    } catch(e) {
        console.log(e)
    }

    // 方法二：声明catch
    await Promise.reject('error').catch(e => console.log(e))
}
```


### await
`await` 后面跟的是一个 `promise对象`。
> 如果不是 promise对象，它也会被转成一个 “立即resolve的promise对象”。

#### 继发执行
**继发**：即串行，先执行完 1，再执行 2。

```js
// 方法一：普通串行
async function loadData() {
    let res1 = await fetch(url1);
    let res2 = await fetch(url2);
    let res3 = await fetch(url3);
}
```

```js
// 方法二：for...of
async function loadData() {
    for (let url of arr) {
        await fetch(url);
    }
}
```

#### 并发执行
**并发**：一起执行 1 2。
> 常见场景：一组异步操作的并发执行，并按顺序输出

```js
// 方法一：Promise.all
let [foo, bar] = await Promise.all([getFoo(), getBar()]);
```

```js
// 方法二：map + for...of
// 原理：每次迭代会生成新的async。
// 因为对于 “同一个async内部” 的 await 是继发；“不同的async内部” 的 await 不是。
async function loadData(arr) {
    const resultList = arr.map(async (doc) => {
        return await fetchUrl(doc);
    })

    for (let result of resultList) {
        // 这里使用 await 是保证在大的 async 下按顺序输出
        console.log(await result);
    }
}
```
