# 开发小技巧

## 一行代码去重数组
```js
const list = [1, 1, 2, 3]
const uniqueList = [...new Set(list)];
```

## 遍历类数组对象
利用`[].prototype.forEach.call()`
```js
const elements = document.querySelectorAll(selector);
[].prototype.forEach.call(elements, (el, idx, list) => {
    console.log(el) // 元素节点
})
```