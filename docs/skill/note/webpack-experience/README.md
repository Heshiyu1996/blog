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

webpack就是来解决以上问题的，让我们在模块化的同时，也能正常在浏览器中

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
#### 一个demo（webpack如何构建各个模块之间的依赖）
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

webpack删除的bundle.js：
```js
(function(modules) {
  // ...

  // webpack实现的require函数（当执行require时会调用）
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
:::tip
步骤：

 1、定义了一个立即执行函数，参数为一个数组，装有各个模块

 2、在函数里，从“返回一个`moduleId为0的require函数`”开始（即a.js为入口文件）

 3、当moduleId为0时，先判断有无导入过（若有，直接返回exports），否则进行下一步

 4、新建一个空对象module，通过调用call方法，将那个要导入的那个模块（b.js）的this值改为空对象module的exports属性，并传入一些参数（空对象module、空对象的exports属性）

 5、call执行后，会使得原先这个空对象module里的exports属性，变成了带有值的一个对象（即要导出的内容，这里是count），这时就完成了浅拷贝（即值的拷贝：对于基本类型是值拷贝，对于引用类型是共用地址拷贝）
:::