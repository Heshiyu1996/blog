# Promise源码实现

[[toc]]

## 特点
 - 状态只能转化一次
 
 - 链式调用

## 使用
```js
new Promise((resolve) => {
    setTimeout(() => {
        console.log('done');
        resolve('hello');
    }, 2000);
})
// 上面是 promise-1
.then((res1) => {
    console.log(res1, 'one');
    return res1;
})
// 上面是 promise-2
.then((res2) => {
    console.log(res2, 'two')
})
// 上面是 promise-3
```

2s 后输出：
```js
// done
// hello one
// hello two
```

## 实现
```js
class Promise {
    constructor(fn) {
        this.state = 'pending'; // promise状态
        this.value = null; // 结果
        this.callbacks = []; // 保存 “.then传入的回调”：{ onFulFilled, resolve }

        fn(this._resolve.bind(this)); // 立即调用 fn
    }

    then(onFulfilled) {
        // 实现链式调用：执行 then 会返回一个 新promise
        // 这里的 Promise 依然是我们目前实现的 这个Promise，所以它也有自己的state、value、callbacks
        // （新promise 主要关注：resolve，以及传入的 onFulfilled）
        return new Promise(resolve => {
            this._handle({
                onFulfilled: onFulfilled || null,
                resolve: resolve
            })
        })
    }

    // 处理callback
    _handle(callback) {
        // 1. 若当前状态依为 pending，进行 当前promise 和 上一个promise 的衔接
        if (this.state === 'pending') {
            // 衔接 当前promise 和 后面promise
            this.callbacks.push(callback);
            return;
        }

        // 2. 若状态已发生转化
        // 如果 then 中没有传入任何东西
        if (!callback.onFulfilled) {
            callback.resolve(this.value);
            return;
        }

        // 手动执行传入的 onFulfilled，并传参 this.value
        // 所以 .then 能 拿到 this.value
        let ret = callback.onFulfilled(this.value);
        callback.resolve(ret);
    }

    _resolve(value) {
        this.state = 'fulfilled'; // 状态转化
        this.value = value; // 结果更新
        this.callbacks.forEach(callback => this._handle(callback));
    }
}
```
## 示例
```js
new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 1000);
})
// 上面是 promise-1
.then(result => {
    console.log(result);
})
// 上面是 promise-2
```

执行结果如下：
```js
[Promse-1]:constructor
[Promse-1]:then
[Promse-2]:constructor
[Promse-1]:_handle state= pending
[Promse-1]:_handle callbacks= [ { onFulfilled: [Function], resolve: [Function] } ]
=> Promise { callbacks: [], name: 'Promse-2', state: 'pending', value: null }
[Promse-1]:_resolve
[Promse-1]:_resolve value= getUserId异步请求耗时1秒
[Promse-1]:_handle state= fulfilled
getUserId异步请求耗时1秒
[Promse-2]:_resolve
[Promse-2]:_resolve value= undefined
```

**具体步骤：**

1. 执行 `new Promise()` ，实例化 `promise-1`，立即执行 `() => setTimeout()` ，推入 **宏任务**

2. 调用 `promise-1` 的 `then`方法，去实例化 `promise-2`，立即执行 `promise-1` 的 `_handle`方法
> `_handle`方法 主要是用来处理 `callbacks` 的

3. 此时 `promise-1` 还是 `pending`，`_handle`方法 就会把 “`promise-1` 的 `onFulfilled`函数” 以及 “`promise-2` 的 `resolve`”  保存到 `promise-1` 的 `callbacks`

4. 本轮事件循环结束，返回了 `promise-2`

5. 1s 后 **宏任务** 执行完毕，`promise-1` 执行 `resolve` ，改变了 `promise-1` 的 `state`、`value`；

6. 同时会遍历 `promise-1` 的 `callbacks`，来依次执行 `_handle`方法

7. `_handle`方法 首先处理 `promise-1` 的 `onFulfilled`函数，将 返回值 传入 `promise-2` 的 `resolve` 并调用

8. `promise-2` 的 `state`、`value` 改变。但由于 `promise-1` 的 `onFulfilled` 没有 `return`值，所以 `promise-2` 的 `value` 为 `undefined`

## 参考
 - [图解 Promise 实现原理（一）—— 基础实现](https://zhuanlan.zhihu.com/p/58428287)
 - [图解 Promise 实现原理（二）—— Promise 链式调用](https://zhuanlan.zhihu.com/p/102017798)
