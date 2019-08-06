# 《Webpack实战》-居玉浩

[[toc]]

## 第一章 Webpack简介
### 什么是Webpack
`Webpack`是一个开源的JavaScript模块打包工具，其最核心的功能是：**解决模块之间的依赖，把各个模块按照特定的规则和顺序组织在一起，最终合成一个JS文件（有时可能为多个）**。
 > 类似模块处理工厂。

### 安装webpack的命令：
```
yarn add webpack webpack-cli -D
```
其中`webpack`是核心模块，`webpack-cli`是命令行工具

可以通过`npx webpack -v`来查看项目内webpack的版本

#### 使用webpack的理由：
1、规模大了，引入的模块多了，人工维护代码的成本逐渐变高；

2、有关ES6模块标准：
 - 无法使用**code splitting**和**tree shaking**（webpack的两个特别重要的特性）
 - 大多数npm模块是**CommonJS形式**的，浏览器并不支持其语法，因此这些包没办法直接拿来用

:::tip
注意：
webpack打包时，会为每一个文件包装一层函数作用域来避免全局污染（所以，那些在文件内进行“隐式全局变量声明”的变量，将无法挂在全局）
:::
 > 
 >
 > 解决办法：将要全局的变量挂到window对象上

### 全局/本地安装webpack的区别：
 - 与他人协作时，可能会导致**输出结果不一致**（若全局安装，有可能和他人版本不同）
 - 部分依赖于webpack的插件**会调用项目中webpack的内部模块**，这种情况下仍然需要在项目本地中安装webpack

### 维护复杂的webpack配置
 - 借助npm scripts来维护命令行脚本
 - 当脚本参数过多时，可以转化为`webpack.config.js`

#### 对于webpack.config.js文件的一些配置：
```js
module.export = {
    // context: 
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        // path: '...'
    }
}
```
其中，
`entry`是资源入口，默认是相对于项目根目录下

`context`是资源入口的路径前缀（主要目的是为了让entry编写更简洁，尤其是多入口），默认值是**当前项目的根目录**

`output`里的path要求使用绝对路径（从系统的根路径开始）。
 > 解决方法：用Node.js的**路经拼装函数path.join**，将__dirname（Node.js的内置全局变量，值为当前文件的绝对路径）与**dist**（输出目录）连接起来。

配置好webpack.config.js时，当我们运行webpack指令，就可以预先读取它，来进行打包了。

### `webpack-dev-server`
启动一个本地服务，它可以：
 - 处理`打包资源`的请求（去指挥webpack进行模块打包）
 - 处理`静态文件`的请求（本身就是Web Server）

另外，它的`live-reloading（自动刷新）`特性可以监听文件变化，自动刷新页面来提升开发效率。

## 第二章 模块打包
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
