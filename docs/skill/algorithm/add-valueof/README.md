# 实现add函数

实现 `add` 函数，使得 `add(1)(2)(3)(5)()` 输出 `11` （中间参数个数不定）

## 关键点
 - 柯里化
 - 闭包

## 实现

```js
add(1)(2)(3).valueOf() // 6

function add(...args) {
    // 1. 定义一个数组，存储所有参数
    var _args = [...args]

    // 2. 在内部声明一个函数，利用闭包的特性来保存 _args
    var _adder = function(x) {
        if (typeof x === 'undefined') {
            return _args.reduce((total, cur) => total + cur, 0)
        } else {
            _args.push(x);
            return _adder;
        }
    }

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.valueOf = function() {
        return _args.reduce((total, cur) => total + cur, 0);
    }

    return _adder
}
```

## 进阶
实现 `add(1)(2)(3).valueOf()`

```js
add(1)(2)(3).valueOf() // 6

function add(x) {
    // 1. 定义一个数组，存储所有参数
    var _args = [x];

    // 2. 在内部声明一个函数，利用闭包的特性来保存 _args
    var _adder = function(x) {
        _args.push(x);
        return _adder;
    }

    // 3. 改写 _adder 函数的 valueOf 函数
    _adder.valueOf = function() {
        return _args.reduce((total, cur) => total + cur, 0);
    }

    return _adder;
}
```
