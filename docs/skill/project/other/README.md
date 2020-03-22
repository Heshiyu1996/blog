# 开发小技巧

## 一行代码去重数组

```js
const list = [1, 1, 2, 3];
const uniqueList = [...new Set(list)];
```

## 遍历类数组对象

利用`[].prototype.forEach.call()`

```js
const elements = document.querySelectorAll(selector);
[].prototype.forEach.call(elements, (el, idx, list) => {
  console.log(el); // 元素节点
});
```

## npm install --save 和 --save-dev 分不清

- `yarn add xxx`：安装模块到项目目录下的`node_modules`，不会将模块依赖写入`devDependencies`或`dependencies`（同 `npm install xxx`）

- `yarn add xxx -S`：安装模块到项目目录下的`node_modules`，同时会将模块依赖写入`dependencies`（同 `npm install --save xxx`）

- `yarn add xxx -D`：安装模块到项目目录下的`node_modules`，同时会将模块依赖写入`devDependencies`（同 `npm install --save-dev xxx`）

- `yarn global add xxx`: -g 的意思是将模块安装到全局，具体安装到磁盘哪个位置，要看 npm cinfig prefix 的位置（同 `npm install -g xxx`）
