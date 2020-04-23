# Sass和Less的作用、区别

## 作用
**Sass** 是一种动态样式语言，属于缩排语法。

**Less** 也是一种动态样式语言。

它们都扩展了CSS语言，增加了**变量、嵌套、函数、Mixin、继承**等特性。


## 区别
Sass **基于Ruby** 的，是在服务端处理的；也可以在开发过程中，使用`node-sass`、`sass-loader`来编译成css文件

Less在开发过程中使用less-loader，编译成css文件。


## 在工程上使用sass
需要安装以下4个npm包：
```
yarn add node-sass sass-loader css-loader style-loader -D
```

配置loader规则：
```js
// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}
```

- **css-loader**：将`.css`编译成JavaScript可读的文件
- **style-loader**：将 css代码（经css-loader打包好） 以 `<style>` 标签的形式 插入到 html 中
