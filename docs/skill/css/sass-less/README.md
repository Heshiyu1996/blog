# Sass和Less的作用、区别

## 作用
**Sass** 、**Less** 是一种动态样式语言，都属于缩排语法（像写文章一样有一定缩进排布会更有整体感）。

它们都扩展了CSS语言，增加了**变量、嵌套、函数、Mixin、继承**等特性。


## 区别
Sass 是通过 **node-sass** 、**sass-loader** 编译成css
> 基于 Ruby 的

**Less** 是通过 **less-loader** 编译成css


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

- **css-loader**：将`.css`编译成 JavaScript可读的文件
- **style-loader**：将 css代码（经css-loader打包好） 以 `<style>` 标签的形式 插入到 html 中
