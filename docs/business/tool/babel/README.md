# Babel
> 在项目中我们用到Babel的原因：
> 
> 1、【语法转译】利用 `presets` 进行转译：ES6新语法（箭头函数、扩展运算符）、JSX语法；
> 
> 2、【API实现】利用 `plugins`（`babel-polyfill`） 进行实现：比如：Array的includes、Promise（通过旧API）

[[toc]]

## 基本工作原理
（以“将ES6转换成ES5”为例）：

 `Babel`是一个转译器，它的原理分三个部分：
  - 解析（parsing）
    - 把ES6代码生成AST
  - 转译（transforming）
    - 把AST遍历，优化成新的AST
  - 生成（generating）
    - 按照新的AST生成ES5代码

## plugins
 `plugins`应用于整个过程（尤其是`transforming`）的插件。

 `presets`是一些预设的插件集。

 > 关系：`presets`实际上是一堆插件（`plugins`）的集合。

### 常用的presets
#### @babel/preset-env
作用：**转译【新语法】**。
> 如：箭头函数、Class、扩展运算符（...）

它包含了以下 **转译插件**：

:::tip
transform-arrow-functions {}

transform-classes {}

// ...
:::

一般我们会赋予 `@babel/preset-env` 配置项：
```js
// .babelrc
{
    "presets": [
        "@babel/preset-env",
        {
            // 指定将es6 modules转换为哪种模块规范
            // 可配置项： "auto"（默认） | "amd" | "umd" | "systemjs" | "commonjs" | "cjs" | false
            "modules": false // false则表示：将module交由webpack处理，而不是babel。
        }
    ]
}
```


#### @babel/preset-react
作用：**识别并转换JSX语法**。

它包含了以下 **转译插件**：
- `@babel/plugin-syntax-jsx`
- `@babel/plugin-transform-react-jsx`
- `@babel/plugin-transform-react-display-name`


### 常用插件（plugins）

#### @babel/polyfill
作用：**转译【新API】**。
> `polyfill`是垫片的意思。

要使用`@babel/polyfill`，一般我们会赋予 `@babel/preset-env` 配置项：
```js
// .babelrc
{
    "presets": [
        "@babel/preset-env",
        {
            "modules": false,

            // 可配置项：false（默认） | "entry" | "usage"
            // false：加载所有polyfill
            // "entry"：根据 “browserlist” 来加载需要的polyfill
            // "usage"：根据 “browserlist” + “实际代码需要” 来加载需要的polyfill（最终的打包文件里，每种polyfill的特性仅load一次）
            "useBuiltIns": "usage", // <-- 新增
            "corejs": 3 // <-- 新增
        }
    ]
}
```
前提是在 入口文件内 执行`import '@babel/polyfill'`
> 不要使用 `entry: ['@babel/polyfill', './src/index.js']` 这种写法，属于 多主入口 方式。打包体积会比较大

缺点：**污染全局作用域**
> 如：引入 Array.prototype.includes 修改了 Array 的原型，除此外还有 String...

## 参考链接
 - [babel preset env配置](https://segmentfault.com/a/1190000017929781)
 - [webpack - babel 篇](https://juejin.im/post/5bfe541bf265da6179748834)
 - [https://browserl.ist/](https://browserl.ist/)
