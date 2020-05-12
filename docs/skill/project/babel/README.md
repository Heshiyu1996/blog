# [工具] Babel7
> 在项目中我们用到Babel的原因：
> 
> 1、【新语法】支持转译：比如：箭头函数、Class、扩展运算符（...）；
> 
> 2、【新API】利用`babel-polyfill`进行实现：比如：Array的includes、Promise（通过旧API）

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

## plugins和presets
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

可以通过 `@babel/runtime`、`@babel/plugin-transform-runtime`。

#### @babel/runtime、@babel/plugin-transform-runtime
`@babel/runtime`：提供辅助函数，像是分散的`polyfill`块。
> 使用时需要在各自的模块里单独引入

`@babel/plugin-transform-runtime`：协助`@babel/runtime`来自动化处理`polyfill`

```
yarn add  @babel/runtime-corejs3
yarn add @babel/plugin-transform-runtime -D
```


移除：**入口文件内的 `import '@babel/polyfill'`**
```json
{
  "presets": ["@babel/preset-env"],
  "plugins": [["@babel/plugin-transform-runtime", { "corejs": 3 }]]
}
```

## 实践遇到的问题
### Promise在IE下undefined问题
**原因**：在IE下，不支持ES6的新API（Promise）。

**解决方法**：
 - 方法一：实现按需加载polyfills
 - 方法二：@babel/runtime、@babel/plugin-transform-runtime

#### 方法一：实现按需加载polyfills
 1、在 入口文件 引入`@babel/polyfill`
 
 2、指定`corejs`版本为`3`

`index.js`
```js
import '@babel/polyfill';
```

`.babelrc`
```json
 {
    "presets": [
        ["@babel/preset-env", {
            "useBuiltIns": "usage",
            "corejs": 3
        }]
    ]
}
```
缺点：`@babel/polyfill`会污染全局作用域，并引入新的对象`Promise`、`WeakMap`

#### 方法二：@babel/runtime、@babel/plugin-transform-runtime
```json
{
  "presets": ["@babel/preset-env"],
  "plugins": [["@babel/plugin-transform-runtime", { "corejs": 3 }]]
}
```


## 参考链接
 - [babel preset env配置](https://segmentfault.com/a/1190000017929781)
 - [webpack - babel 篇](https://juejin.im/post/5bfe541bf265da6179748834)
 - [https://browserl.ist/](https://browserl.ist/)