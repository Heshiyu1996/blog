# CSS规范

## 小知识
### 浏览器会从右到左解析CSS选择器
```css
.content_box div p a {
    /* ... */
}
```
解析顺序：

1、首先找到页面上所有`<a>`元素；
2、然后向上找到被`<p>`元素包裹的`<a>`元素
3、再向上查找，一直到`.content_box`元素

所以，越靠右的选择器越具有唯一性，浏览器解析CSS属性的效率就越高。
