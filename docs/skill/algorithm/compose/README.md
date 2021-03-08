# 实现compose函数
> redux源码里有用到 工具函数compose

`compose函数` 的作用是 把 “接收到的函数” 合成为一个 “最终函数”。

若向这个 “最终函数” 传参，就相当于 “从右到左” 依次执行 “接收到的函数”。

### 特点
 - **参数均为函数，返回值也是函数**
 - “最右的函数” **可接收多个参数**；“其它函数” **只可接收一个参数（即上一个函数的返回值）**

### 例子
```js
let sayHello = (...str) => `Hello , ${str.join(" And ")}`; 
let toUpper = str => str.toUpperCase(); 

let combin = compose(toUpper, sayHello); 
combin("jack", "bob"); // HELLO , JACK AND BOB
```

### 实现
 - **lodash** 的 实现思路： 最后一个函数`apply` + 其它函数`call`
 - **redux** 的 实现思路： `reduce`
```js
// lodash 中的 compose
function compose (...funcs) {
    // 1. 记录 传入函数的个数
    let length = funcs.length;

    return function(...arg) {
        // 如果没有传入函数，直接返回参数
        if (!length) return arg;

        // 2. 从最右边开始遍历（因为 “最右边的函数” 可接受多个参数）
        let i = length - 1;
        let result = funcs[i].apply(this, arg); //注意 arg 为数组，要用apply

        // 3. 执行剩下的函数（因为 “其他函数” 只可接受一个参数，即上个函数的返回值）
        while(i >= 0) {
            result = funcs[i].call(this, result);
            i--;
        }
        return result;
    }
}
```

```js
// redux 中的 compose
// 特点：“从右往左” 执行函数，最右一个函数可传多个参数，其他函数接收上一个函数的返回值
function compose (...funcs) {
    if (funcs.length === 0) {
        return arg => arg;
    }

    if (funcs.length === 1) {
        return funs[0];
    }

    return funcs.reduce((total, cur) => (...args) => total(cur(...args)));
}

// compose(f1, f2, f3) 执行过程
// => funcs.reduce((total, cur) => (...args) => total(cur(...args)));
// loop1: total = f1, cur = f2, ret1 = (...args) => f1(f2(...args))
// loop2: total = ret1, cur = f3, ret2 = (...args) => ret1(f3(...args))
// 即：ret2 = (...args) => f1(f2(f3(...args)));
```

## 参考
 - [redux实现compose源码](https://github.com/reduxjs/redux/blob/3cf3b0f48c4093aaa094eedb11efa8656e9b0309/src/compose.ts#L46)
 - [lodash实现compose源码](https://github.com/lodash/lodash/blob/86a852fe763935bb64c12589df5391fd7d3bb14d/flow.js#L23)

