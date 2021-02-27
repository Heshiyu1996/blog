# PC兼容性方案

[[toc]]

## IE
### CSS
#### IE7不兼容display: inline-block
版本：**IE7**

**解决方法：** 

```css
```


### JS
#### IE下Promise为undefined
版本：**所有版本**

**原因：** 在IE下，不支持ES6的新API（Promise）

**解决方法：** 使用`Babel`、`@babel/polyfill`，并指定 **corejs版本为3** ，实现按需加载`polyfills`。
 
#### IE9及以下不兼容`requestAnimationFrame`
版本：**IE9及以下**
```js
window.requestAnimationFrame = window.requestAnimationFrame || function(a){return setTimeout(a, 1000 / 60)};//时间刻自行设置
window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;
```



## FireFox
### FireFox不兼容Video标签：
在`FireFox`上无法通过`<video>`标签播放视频：
```html
    <!-- before -->
    <video data-id="2" data-prime="true" data-time="5000" loop preload="none" playsInline autoPlay>

    <!-- after -->
    <video data-id="2" data-prime="true" data-time="5000" loop preload="none" playsInline autoPlay muted={true}>
    ```
    解决方法：添加一个`muted`属性，值为`true`即可。
```
> `muted`属性用来设置该段视频是否被静音


## 部分谷歌浏览器在页面跳转后白屏问题
范围：部分谷歌浏览器、与用户/文件无关

报错信息：
```
DOMException: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
```

corona -> 联系用户截图 -> 经调查，由`react-dom`报错。查找相关[问题](https://stackoverflow.com/questions/54880669/react-domexception-failed-to-execute-removechild-on-node-the-node-to-be-re/62455196#62455196?newreg=0baf965a10e24694a3dd39465f538b7f)，找到答案：由 谷歌翻译 导致的报错

其它链接：
 - https://github.com/facebook/react/issues/11538
 - https://stackoverflow.com/questions/12238396/how-to-disable-google-translate-from-html-in-chrome/12238414#12238414

