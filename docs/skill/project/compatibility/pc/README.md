# [pc] 兼容性方案

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

