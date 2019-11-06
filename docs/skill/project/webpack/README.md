# webpack
`webpack`是模块打包的机制，它是通过`loader`、`plugins`对资源进行处理，最后打包成浏览器成识别的js等文件。

原理：
 - 识别入口文件
 - 分析模块依赖
 - 解析模块（通过不同`Loader`）
 - 编译模块，生成抽象语法树`AST`
 - 循环遍历`AST`
 - 打包成`bundle.js`

## 使用方法
 - ./node_modules/.bin/webpack `input.js` `output.js`
    - 不同环境下全局安装的webpack版本可能不符合这个项目，所以还是用局部依赖
 - 从入口文件`input.js`开始，找出`所有依赖`的文件，然后用对应的`loaders`去处理它们
 - 最后打包成为一个浏览器可识别的js文件`output.js`

## bundle.js
`bundle.js`实际上是一个`立即执行的匿名函数`。
 - 函数的参数是一个数组，数组中的每一项都是一个`function`
 - 每个`function`就对应每个`模块`的内容，会按照`require`的顺序排列，
 - 每个模块都有一个唯一的id（从0递增）

[查看bundle.js](.//bundle.js)

## Loader
`Loader`是对加载的文件进行处理。

本质上是一个函数，输入参数是一个`字符串`，输出参数也是一个`字符串`。（但是输出参数会被当成是JS代码，随后会解析成`抽象语法树AST`）

## Plugins
`Plugins`是用来扩展webpack功能的，会在整个构建过程中生效，执行相关的任务。

和`Loader`的区别：
 - `Loader`是在打包构建过程中，用来处理源文件的（JSX、SCSS...），一次处理一个；
 - `Plugins`并不是直接操作单个文件，而是会`对整个构建过程都起作用`

## gulp与webpack的区别
`gulp`强调的是前端开发流程。

用法：通过定义一系列的task，再定义task处理的事物、顺序，最后让gulp执行task，从而构建前端项目。

4个常用的方法：
 - src（）：获取流
 - dest（）：写文件
 - task（）：定义任务
 - watch（）：用来监听事件

 IE8下最好用`gulp`，IE9用`webpack`

## path.resolve(__dirname, './src)和path.join()
有两个知识点:
 - path.resolve()
 - __dirname

### path.resolve()
> 作用：将路径片段解析成绝对路径；

![alt](./img/pathresolve-1.png)

参数：`String`（逗号分割）

返回值：`String`（绝对路径）

使用说明：
 - **从右向左**解析，`一旦遇到绝对路径，就不继续`
    - path.resolve('/foo', '/bar', 'baz') => '/bar/baz'

### __dirname
> 指的是当前文件所在目录的路径

![alt](./img/dirname-1.png)

如图，`__dirname`的值为`C:\Users\GaoKai\Desktop\test`

以上两个可以解决`“虽然各个文件所在目录不同，但可以访问某个指定目录下的文件更方便”`（可以不使用`../../`），如下例子：
```js
// 修改前：
import foo from '../../../util/foo'
```
```js
// 修改后：
import foo from 'util/foo'

// webpack.config.js
resolve: {
    extensions: ['.js', 'vue'],
    alias: {
        // 快捷访问入口
        'util': path.resolve(__dirname, './src/util')
    }
}
```

### path.join()
参数：`String`（逗号分割）

返回值：`String`

使用说明:
 - **从左到右**解析，将`所有路径片段都`拼接起来
 - 每个片段之间用`/`链接（片段之间最多只能存在1个`/`）
 ```js
 path.join('a', 'b', 'c') => 'a/b/c'
 path.join('a', 'b', '/c') => 'a/b/c'

 path.join('/a', 'b', '/c') => '/a/b/c'
 path.join('/a', '/b', '/c') => '/a/b/c'
 ```

## process.env.NODE_ENV
在node环境，全局变量`process`表示**当前node进程**。其中`process.env`表示**当前系统环境的信息。**
> 实际上，process.env里并不存在NODE_ENV这个变量，是用户自定义的。

在node环境下，`console.log(process)`会得到：

![alt](./img/process-1.png)

在浏览器环境下，`console.log(process)`会得到：

![alt](./img/process-2.png)

### 设置node环境下的process.env.NODE_ENV
通过**cross-env**来配置环境变量（支持跨平台）
```json
"scripts": {
    "start": "cross-env NODE_ENV=development webpack-dev-server --open --config config/webpack.config.dev.js",
    "build": "cross-env NODE_ENV=production webpack --config config/webpack.config.prod.js"
}
```
这样，在node环境下，`process.env.NODE_ENV`就有值了。

### 设置浏览器环境下的process.env.NODE_ENV
平时我们会**在项目的运行过程中**去判断当前环境，比如在`@/axios/config.js`里配置了环境变量：
```js
export const isDev = process.env.NODE_ENV === 'development'
```
这里的`process.env.NODE_ENV`指的是**浏览器环境下的环境变量**。
> 和node环境一样，默认是没有NODE_ENV这个变量的。

通过**DefinePlugin**来配置环境变量
```js
// webpack.base.js
module.exports = {
    plugins: [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) })
    ]
}
```
这样，在浏览器环境下，`process.env.NODE_ENV`就有值了。

### webpack的配置模式mode
```js
// webpack.config.dev.js
module.exports = {
    mode: 'development' // 或'production'
}
```
根据官网描述，配置`mode`值会**自动开启某些优化配置**（笔者并未达到**DefinePlugin**效果）

![alt](./img/process-3.png)
### 链接
[webpack的配置模式mode](https://www.webpackjs.com/concepts/mode/)

[理解webpack之process.env.NODE_ENV详解(十八)](https://www.cnblogs.com/tugenhua0707/p/9780621.html)
