# 项目笔记
> 记录在项目中的一些笔记

## 官网响应式
响应式 是同一页面，在不同设备上，布局和内容有很大不同；
自使用 是同一页面，在不同设备上，布局和内容基本一样，只是尺寸略不同


```
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="HandheldFriendly" content="true">

```
user-scalable属性能够解决ipad切换横屏之后触摸才能回到具体尺寸的问题。

## webpack中运用externals
一些类似包体积比较大的包（如：lodash），可以通过CDN的形式在`index.html`引入后，再通过`webpack.config.js`里加一个`externals`配置。

```html
<!-- index.html -->
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js"></script>
```

```js
// webpack.config.js
module.exports = {
    externals: {
        lodash: '_'
    }
}
```

好处：
 - 在业务层里可以继续通过import的方式使用lodash这个包
 - 将lodash从webpack的打包中剥离
 - 加快webpack的打包速度
 

## 将一组下载URL打包成zip
有一组数据，需要将其下载，并打包&另存为到zip中：
```js
const LINKS = ['www.baidu.com/a1.pdf', 'www.baidu.com/a2.pdf']
```

推荐npm包：
```
jszip
jszip-utils
file-saver
```
[使用demo](./SaveAsZip.md)

