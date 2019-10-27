# webpack
`webpack`是模块打包的机制，它是通过`loader`、`plugins`对资源进行处理，最后打包成浏览器成识别的js等文件。

原理：
 - 识别入口文件
 - 分析模块依赖
 - 解析模块（通过不同`Loader`）
 - 编译模块，生成抽象语法树`AST`
 - 循环遍历`AST`
 - 打包成`bundle.js`

### bundle.js
`bundle.js`实际上是一个`立即执行的匿名函数`。
 - 函数的参数是一个数组，数组中的每一项都是一个`function`
 - 每个`function`就对应每个`模块`的内容，会按照`require`的顺序排列，
 - 每个模块都有一个唯一的id（从0递增）

[查看bundle.js](.//bundle.js)

### Loader
`Loader`是对加载的文件进行处理。

本质上是一个函数，输入参数是一个`字符串`，输出参数也是一个`字符串`。（但是输出参数会被当成是JS代码，随后会解析成`抽象语法树AST`）

### Plugins
`Plugins`是用来扩展webpack功能的，会在整个构建过程中生效，执行相关的任务。

和`Loader`的区别：
 - `Loader`是在打包构建过程中，用来处理源文件的（JSX、SCSS...），一次处理一个；
 - `Plugins`并不是直接操作单个文件，而是会`对整个构建过程都起作用`

### 使用方法
 - ./node_modules/.bin/webpack `input.js` `output.js`
    - 不同环境下全局安装的webpack版本可能不符合这个项目，所以还是用局部依赖
 - 从入口文件`input.js`开始，找出`所有依赖`的文件，然后用对应的`loaders`去处理它们
 - 最后打包成为一个浏览器可识别的js文件`output.js`

### gulp与webpack的区别
`gulp`强调的是前端开发流程。

用法：通过定义一系列的task，再定义task处理的事物、顺序，最后让gulp执行task，从而构建前端项目。

4个常用的方法：
 - src（）：获取流
 - dest（）：写文件
 - task（）：定义任务
 - watch（）：用来监听事件

 IE8下最好用`gulp`，IE9用`webpack`

### path.resolve(__dirname, './src)
有两个知识点:
 - path.resolve()
 - __dirname

#### path.resolve()
> 作用：将路径片段解析成绝对路径；

![alt](./img/pathresolve-1.png)

参数：`String`（逗号分割）

返回值：`String`（绝对路径）

使用说明：
 - **从右向左**解析，`一旦遇到绝对路径，就不继续`
    - path.resolve('/foo', '/bar', 'baz') => '/bar/baz'

#### __dirname
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