# CommonJS、ES6模块规范
> JS模块规范

[[toc]]

::: tip
四种模块规范：
 - CommonJS
 - ES6 模块
:::

`AMD`、`CMD`不在此赘述，[可前往查看以往笔记](./AMDCMD.md)

## CommonJS
**CommonJS**最初只为服务端而设计，直到有了Browserify，这意味着客户端的代码也可以遵守**CommonJS**标准来写了。
> Browserify是一个运行在Node.js环境下的模块打包工具。它可以将CommonJS模块，打包为浏览器可以运行的单个文件。

### 封装成CommonJS模块的区别（对比“通过script标签引入”）
**CommonJS中规定每个文件就是一个模块。**

**通过script标签引入的脚本**的顶层作用域是全局作用域，在进行变量及函数声明时会污染全局环境；

**CommonJS模块**会形成一个属于模块自身的作用域，所有的变量及函数只由自己能访问。
> 对于**CommonJS**，`模块向外暴露自身`的唯一方式——导出（`module.exports`）。

### 导出（module.exports）
`module对象`用于存放当前模块的信息
```js
/* 为了更好理解
var module = {
    exports: {}
}
var exports = module.exports // 对象浅拷贝
*/

module.exports = {...} // 用来指定该模块要对外暴露哪些内容

exports.name = 'heshiyu' // 也可直接使用exports
// 注意：（不遵循的话，可能会导出失效）
// 1、不要直接给exports赋值；
// 2、不要module.exports和exports混合用
```
:::tip
建议将该语句放在模块的末尾
:::

### 导入（require）
在**CommonJS**中使用`require`进行模块导入
 > 将要导入的模块的**module.exports对象**作为**require函数的返回值**进行返回

当我们**require**一个模块时，会有两种情况：
 - **是第一次被加载**。
    - 此时会首先执行该模块，然后导出内容
 - **曾被加载过**。
    - 此时该模块的代码不会再次执行，直接导出上次执行后得到的结果

这是因为`module`对象里有一个`loaded`属性（*默认为false*），用于**记录该模块是否被加载过**。

可以直接使用require
```js
require('./task.js')
```

也可以接受表达式
```js
var filename = 'math.js'
require('./' + filename)
```

## ES6 Module
ES6 Module也是将每个文件作为一个模块，每个模块拥有自身的作用域。（同时会采取严格模式）

### 导出（export）
export有两种形式：
 - **命名导出**
 ```js
    // 写法一：
    export const name = 'heshiyu'
    export const add = (a, b) => (a + b)

    // 写法二：
    const name = 'heshiyu'
    const add = (a, b) => (a + b)
    export { name, add }
 ```
 - **默认导出**
 ```js
 export default {
     name: 'heshiyu',
     add: (a, b) => (a + b)
 }
 ```
**export default**可以理解为：对外输出了一个名为default的变量。

### 导入（import）
 - **命名导入**
    - 导入的效果相当于在当前作用域下声明了这些变量，并且不可以对其进行更改，也就是所有导入的变量都是**只读**的。
    - 在导入多个变量时，还可以采用整体导入的方式：
    ```js
    // calculator.js
    export const name = 'heshiyu'
    export const add = (a, b) => (a + b)

    // index.js
    import * as calculator from './calculator.js'
    console.log(calculator.add(2, 3)) // 5
    ```
 - **默认导入**
    ```js
    // calculator.js
    export default {
        name: 'heshiyu',
        add: (a, b) => (a + b)
    }

    // index.js
    import myCalculator from './calculator.js'
    calculator.add(2, 3)
    ```

两种可以混合起来导入：
```js
import React, { Component } from 'react'
```
其中，**React**对应模块（*react*）的默认导出，**Component**对应模块（*react*）的命名导出中的一个变量。
:::warning
这里的**React**（即默认导入）必须写在前面，不能颠倒顺序，否则会语法错误！
:::

### 复合导入（即导入又导出）
有时会有**专门用来集合所有页面或组件的入口文件**：
```js
// 以下两种写法只对那些通过“命名导出”方式导出的变量有效
export { name, add } from './calculator.js'
export * from './calculator.js'

// 对于“默认导出”方式导出的变量可以这样写：
import myCalculator from './calculator.js'
export default myCalculator
```

## CommonJS和ES6 Module的区别
### 动态vs静态
`CommonJS`：
 - 是动态的（require的模块路径可以动态指定）
 - 模块依赖关系的建立发生在代码**运行阶段**（模块被执行前，并没有办法明确确定依赖关系）

`ES6 Module`：
 - 是静态的
 - 模块依赖关系的建立发生在代码**编译阶段**（运行前）；
 :::tip
 优势：
  - 有利于Webpack的`Tree Shaking`
  - 未使用的代码检测、排除
    - 通过静态分析，在打包时去掉这些未曾使用过的模块，以减小打包资源体积
  - 模块变量类型检查
  - 直接导入变量，而不是一个对象
    - 减少引用层级，程序效率更高
 :::

### 值的拷贝vs动态映射
`CommonJS`：导出的是值的拷贝`（可写，但影响的只是副本）`

`ES6 Module`：导出的是值的动态映射`（只读）`
> 为什么**CommonJS是值的拷贝**？[可前往查看《webpack模块打包原理》](./../note/webpack-experience/README.md#webpack模块打包原理)

### this指向
`CommonJS`：顶层this`指向当前模块`

`ES6 Module`：顶层this`指向undefined`