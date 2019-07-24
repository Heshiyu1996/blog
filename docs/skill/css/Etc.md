# 其他
> 这里会搜集一些有关CSS的零碎知识

[[toc]]

## display: none与visibility: hidden的区别
 - `display: none`的元素不**占据空间**，`visibility: hidden`的元素**占据空间**；
 - `display: none`会影响CSS的`transition`**过渡效果**，`visibility: hidden`不会
 - `display: none`会触发**重排（repain）和重绘（reflow）**，`visibility: hidden`只会触发重绘（reflow）
 - `display: none`的子、孙元素全都不可见，`visibility: hidden`的子孙元素可以设置`visibility: visible`来显示。

## 重排（reflow）和重绘（repain）
