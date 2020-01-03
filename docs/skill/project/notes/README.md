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

## 多页应用的Nginx配置
比如，前端是个多入口应用。

其中`test.html`是其中一个入口，那需要后端Nginx配置，**重定向回前端静态资源**去寻找对应资源。
```js
location /test.html {
    root /home/appops/my-static/myProject/build;
    index test.html;
    try_files $uri /test.html;
}
```