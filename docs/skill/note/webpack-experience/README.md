# 《Webpack实战》-居玉浩

[[toc]]

## 第一章 Webpack简介
### 什么是Webpack
`Webpack`是一个开源的JavaScript模块打包工具，其最核心的功能是解决模块之间的依赖，把各个模块按照特定的规则和顺序组织在一起，最终合成一个JS文件（有时可能为多个）。
 > 类似模块处理工厂。

规模大了，引入的模块多了，人工维护代码的成本逐渐变高。

ES6模块标准：
 - 无法使用code splitting和tree shaking（webpack的两个特别重要的特性）
 - 大多数npm模块还是CommonJS形式，浏览器并不支持其语法，因此这些包没办法直接拿来用

webpack就是来解决以上问题的，让我们在模块化的同时，也能正常在浏览器中。

注意：
webpack打包时，会为每一个文件包装一层函数作用域来避免全局污染
 > 所以那些在文件内进行“隐式全局变量声明”的变量，将无法挂在全局（解决办法，挂到window对象上）

### 全局/本地安装webpack的区别：
 - 与他人协作，若全局安装，有可能他人版本不同，导致输出结果不一致
 - 部分依赖于webpack的插件会调用项目中webpack的内部模块，这种情况下仍然需要在项目本地中安装webpack

安装webpack的命令：
```
yarn add webpack webpack-cli -D
```
其中`webpack`是核心模块，`webpack-cli`是命令行工具

可以通过`npx webpack -v`来查看项目内webpack的版本

### 维护复杂的webpack配置
 - 借助npm scripts来维护命令行脚本
 - 当脚本参数过多时，可以转化为`webpack.config.js`

#### 对于webpack.config.js文件的一些配置：
```js
module.export = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        // path: '...'
    }
}
```
其中，`output`里的path要求使用绝对路径（从系统的根路径开始）。
 > 解决方法，用Node.js的路经拼装函数path.join，将__dirname（Node.js的内置全局变量，值为当前文件的绝对路径）与dist（输出目录）连接起来。

配置好webpack.config.js时，当我们运行webpack指令，就可以预先读取它，来进行打包了。

### `webpack-dev-server`
启动一个本地服务，它可以：
 - 处理`打包资源`的请求（去指挥webpack进行模块打包）
 - 处理`静态文件`的请求（本身就是Web Server）

另外，它的`live-reloading（自动刷新）`特性可以监听文件变化，自动刷新页面来提升开发效率。

## 第二章 模块打包
### CommonJS
CommonJS最初只为服务端而设计，直到有了Browserify（一个运行在Node.js环境下的模块打包工具），它可以将CommonJS模块，打包为浏览器可以运行的单个文件。这意味着客户端的代码也可以遵守CommonJS标准来写了。

#### 通过script标签引入、封装成CommonJS模块的区别
CommonJS中规定每个文件就是一个模块。

前者的顶层作用域是全局作用域，在进行变量及函数声明时会污染全局环境

后者会形成一个属于模块自身的作用域，所有的变量及函数只有自己能访问。导出是一个`模块向外暴露自身`的唯一方式——`module.exports`。

#### 导出（module.exports）
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
// 注意：（否则会导出失效）
// 1、不要直接给exports赋值；
// 2、不要module.exports和exports混合用
```
:::tip
建议将该语句放在模块的末尾
:::

#### 导入（require）
在CommonJS中使用`require`进行模块导入
 > 将要导入的模块的module.exports对象作为require函数的返回值进行返回

当我们require一个模块时，会有两种情况：
 - 是第一次被加载。
    - 此时会首先执行该模块，然后导出内容
 - 曾被加载过。
    - 此时该模块的代码不会再次执行，直接导出上次执行后得到的结果

这是因为`module`对象里有一个`loaded`属性（默认为false），用于记录该模块是否被加载过

可以直接使用require
```js
require('./task.js')
```

可以接受表达式
```js
var filename = 'math.js'
require('./' + filename)
```
#### webpack模块打包原理
为什么说`CommonJS`是值的拷贝？（因为底层实现的是浅拷贝）
```js
// a.js
const b = require('./b');
console.log(b.count);

// b.js
module.exports = {
  count: 1,
};
```

webpack生成的bundle.js：
```js
(function(modules) {
  // 为模块的加载、执行做一些准备工作：
  // 定义模块缓存
  var installedModules = {}

  // 定义__webpack_require__函数
  // webpack实现的require函数（当执行require时会调用）
  function __webpack_require__(moduleId) { }
  // ...
  // 开始进行require
  return __webpack_require__(__webpack_require__.s = 0);
})([
  // 可见，以下每个模块都会被自动分配moduleId，值为下标
  // a.js
  (function(module, exports, __webpack_require__) {
    const b = __webpack_require__(1); // 返回了b.js这个模块的module.exports
    console.log(b.count);
  }),

  // b.js
  (function(module, exports) {
    // 进行了浅拷贝（对于基本类型，是拷贝了）
    module.exports = {
      count: 1,
    };
  })
])
```
```js
 // __webpack_require__函数
  function __webpack_require__(moduleId) {
    if(installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }

    // 模块缓存id、加载状态和导出值
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}    // 关键点：模块导出预置了一个空对象
    };
    // 模块代码执行
    // 通过调用call，将那个要导入的模块的module对象里exports进行了对象浅拷贝（见下）
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.l = true;
    return module.exports;
  }

```
:::tip
步骤（待完善）：

 1、最外层定义一个立即执行函数（参数为一个数组，装有各个模块），构成自身的作用域

 2、定义installedModules对象
    （每个模块只在第一次被加载时执行，之后其导出值都被存储到这个对象里。之后再次被加载时直接从这里取值）

 3、定义__webpack_require__函数（将使用它来完成模块导入）

 4、在函数里，从“返回一个`moduleId为0的require函数`”开始（即a.js为入口文件）

 5、当moduleId为0时，先判断有无导入过（若有，直接返回exports），否则进行下一步

 6、新建一个空对象module，通过调用call方法，将那个要导入的那个模块（b.js）的this值改为空对象module的exports属性，并传入一些参数（空对象module、空对象的exports属性）

 7、call执行后，会使得原先这个空对象module里的exports属性，变成了带有值的一个对象（即要导出的内容，这里是count），这时就完成了浅拷贝（即值的拷贝：对于基本类型是值拷贝，对于引用类型是共用地址拷贝）
:::
webpack为每个模块创造了一个可以导出、导入模块的环境，但本质上**并没有修改代码的执行逻辑**（因此**代码执行的顺序与模块加载的顺序完全一致**）

### ES6 Module
ES6 Module也是将每个文件作为一个模块，每个模块拥有自身的作用域。（同时会采取严格模式）

#### 导出（export）
export有两种形式：
 - 命名导出
 ```js
    // 写法一：
    export const name = 'heshiyu'
    export const add = (a, b) => (a + b)

    // 写法二：
    const name = 'heshiyu'
    const add = (a, b) => (a + b)

    export { name, add }
 ```
 - 默认导出
 ```js
 export default {
     name: 'heshiyu',
     add: (a, b) => (a + b)
 }
 ```
export default可以理解为：对外输出了一个名为default的变量。

#### 导入（import）
 - 命名导入
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
 - 默认导入
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
其中，React对应模块（react）的默认导出，Component对应模块（react）的命名导出中的一个变量。
:::warning
这里`React`（即默认导入）必须写在前面，不能颠倒顺序，否则会语法错误！
:::

#### 复合导入
有时会有**专门用来集合所有页面或组件的入口文件**：
```js
// 以下两种写法只对那些通过“命名导出”方式导出的变量有效
export { name, add } from './calculator.js'

export * from './calculator.js'

// 对于“默认导出”方式导出的变量可以这样写：
import myCalculator from './calculator.js'
export default myCalculator
```

### CommonJS和ES6 Module的区别
#### 动态vs静态
`CommonJS`：
 - 是动态的（require的模块路径可以动态指定）
 - 模块依赖关系的建立发生在代码运行阶段；（模块被执行前，并没有办法明确确定依赖关系）

`ES6 Module`：
 - 是静态的
 - 模块依赖关系的建立发生在代码编译阶段；
 - 优势：
    - 未使用的代码检测、排除（通过静态分析，在打包时去掉这些未曾使用过的模块，以减小打包资源体积）
    - 模块变量类型检查。
    - 直接导入变量，而不是一个对象（减少引用层级，程序效率更高）

#### 值的拷贝vs动态映射
`CommonJS`：导出的是值的拷贝`（可写，但影响的只是副本）`

`ES6 Module`：导出的是值的动态映射`（只读）`