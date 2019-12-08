# Babel7使用实践
> 在项目中我们用到Babel的原因：
> 
> 1、对JS的新语法（比如：箭头函数、Class、扩展运算符（...））进行转译；
> 
> 2、利用`babel-polyfill`将ES6的新API（比如：Array的includes、Promise）进行实现（通过浏览器能使用的旧API）
> 
> 本文将记录在实践过程中Babel7的配置经验。

[[toc]]

## 配置方式
在根目录新建`.babelrc`

## 常用预设（presets）
`presets`实际上也是插件（`plugins`），只不过它是一堆plugins的集合。

### @babel/preset-env
转化最新语法。
> 如：箭头函数、Class、扩展运算符（...）

一般我们会赋予配置项：
```js
// .babelrc
{
    "presets": [
        "@babel/preset-env",
        {
            // 是否将ES6 module转换为其他模块规范
            // 可配置项： "auto"（默认） | "amd" | "umd" | "systemjs" | "commonjs" | "cjs" | false
            "modules": false,
            "useBuiltIns": "usage", // 可配置项：false（默认） | "entry" | "usage"
            "corejs": 3,
        }
    ]
}
```
`modules`：指定将es6 modules转换为哪种模块规范。
> 一般在webpack 项目中，我们会将此参数设置为false，表示将module交由webpack处理，而不是babel。

`useBuiltIns`：



### @babel/polyfill
`polyfill`是垫片的意思。就比如桌子的桌脚有一边矮了一点，就需要拿一个东西把桌子垫平。所以会用来**修补浏览器的一些API缺陷**。
- `false`：对`@babel/polyfill`不作任何处理
> 在入口文件手动`import '@babel/polyfill`的话，会加载所有polyfills
- `"entry"`：使得`@babel/polyfill`按照browserlist来加载
> 在入口文件手动`import '@babel/polyfill'`的话，会根据browserlist去加载需要的polyfill
- `"usage"`：使得`@babel/polyfill`按照browserlist、实际需要来加载
> 告诉Babel在每个需要polyfill的文件里，import指定的polyfills。（这可以保证最终的打包文件里，每个polyfill的特性仅load一次）








### @babel/preset-react
识别并转换JSX语法。

这个`preset`其实包含了以下三种插件：
- `@babel/plugin-syntax-jsx`
- `@babel/plugin-transform-react-jsx`
- `@babel/plugin-transform-react-display-name`

## 常用插件（plugins）

### @babel/plugin-transform-runtime
运行时引入`generators/async`、`babel-runtime/core-js`
> 不会污染全局


https://browserl.ist/

## 实践遇到的问题
### Promise在IE下undefined问题
**原因**：在IE下，不支持ES6的新API（Promise）。

**解决方法**：使用`Babel`、`@babel/polyfill`，并指定`corejs`版本为`3`，实现按需加载polyfills。

## 目前项目中的babel配置
```js
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "modules": false
            }
        ],
        "@babel/preset-react"
  ],
    "plugins": [
        "react-hot-loader/babel",
        "@babel/plugin-transform-runtime",
        [
            "@babel/plugin-proposal-decorators",
            {
            "legacy": true
            }
        ],
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-syntax-dynamic-import",
        "react-loadable/babel",
        [
            "import",
            {
                "libraryName": "antd",
                "libraryDirectory": "es",
                // "style": "css"
                "style": true
            }
        ]
    ],
    "ignore": ["xxx.js", "xxx/**/*.js"]
}
```

## 参考链接
[babel preset env配置](https://segmentfault.com/a/1190000017929781)