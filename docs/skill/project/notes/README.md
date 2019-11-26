# 项目笔记
> 记录在项目中的一些笔记

## 官网响应式
**响应式** 是同一页面，在不同设备上，布局和内容有很大不同；

**自适应** 是同一页面，在不同设备上，布局和内容基本一样，只是尺寸略不同


```
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="HandheldFriendly" content="true">
```
`user-scalable`属性能够解决ipad切换横屏之后触摸才能回到具体尺寸的问题。


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

## Video标签兼容
在`FireFox`上无法通过`<video>`标签播放视频：
```html
<!-- before -->
<video data-id="2" data-prime="true" data-time="5000" loop preload="none" playsInline autoPlay>

<!-- after -->
<video data-id="2" data-prime="true" data-time="5000" loop preload="none" playsInline autoPlay muted={true}>
```
解决方法：添加一个`muted`属性，值为`true`即可。
> `muted`属性用来设置该段视频是否被静音

## Promise在IE下undefined问题
在IE下，不支持ES6的新语法。

 - 通过`babel`转译，可以将ES6的语法 **（比如：箭头函数、解构赋值、class）** 转译成浏览器能识别的语法；
 - 通过`babel-polyfill`可以将ES6的API **（比如：Array的includes、Promise）** 通过浏览器能使用的旧API来实现

:::tip
`polyfill`是垫片的意思。就比如桌子的桌脚有一边矮了一点，就需要拿一个东西把桌子垫平。所以会用来**修补浏览器的一些缺陷**。
:::

## polyfill的加载方式
#### 全局加载
直接在业务代码中，`import '@babel/polyfill`

**效果：会无视browserlist，同时将所有polyfill加载进来。**

#### 按需加载
可以通过 Babel7 的`@babel/preset-env`的`useBuiltIns`选项。

 - 配置1（按“浏览器”需）：
```js
// .babelrc
{
    "presets": [
        ["@babel/preset-env", {
            "useBuiltIns": "entry"
        }]
    ]
}
```
**效果：启用polyfill。但需要在业务代码里手动`import '@babel/polyfill'`，会*根据browserlist*把需要的polyfill加载进来。**

 - 配置2（按“浏览器” + “业务代码”需）：
```js
// .babelrc
{
    "presets": [
        ["@babel/preset-env", {
            "useBuiltIns": "usage"
        }]
    ]
}
```
效果：启用polyfill。不需要手动`import '@babel/polyfill'`，会**根据browserlist**、**业务代码** 把需要的polyfill**按需**加载进来
 > 上面提到的`browserlist`可以通过插件的配置项（即同个数组下的第二个参数这个对象）配置`targets.browsers`，也可以提取到`.browserslistrc`

### useBuiltIns: "usage"搭配corejs
根据“浏览器” + “业务代码”，按需加载polyfill。

这种写法一般需要**npm安装corejs**，并且**声明corejs的版本**。

```node
yarn add corejs -S
```

```js
// .babelrc
{
    "presets": [
        ["@babel/preset-env", {
            "useBuiltIns": "usage",
            "corejs": 3
        }]
    ]
}
```

这种加载方式的原理：**会在每个需要polyfill的文件里，import指定的polyfills。（如果同一文件下出现相同的polyfills，只会引用一次）**

> Adds specific imports for polyfills when they are used in each file. We take advantage of the fact that a bundler will load the same polyfill only once.