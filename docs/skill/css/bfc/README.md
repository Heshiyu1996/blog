# BFC和浮动
> `BFC`指的是块级格式化上下文

[[toc]]

## 浮动
浮动的目的：**脱离标准流，实现多列布局**。

### 浮动带来的问题
**对于父元素**：
  - “父元素的高度” 无法撑开

**对于浮动元素自身**：
  - 前面为 “浮动元素”：紧跟它后面
  - 前面为 “标准块级元素”：紧贴它底部
  - 前面为 “标准行内元素”：浮动到它前面

**对于后面的元素**：
  - 块级元素：被压在 “浮动元素” 下方
  - 行内元素：会紧跟在 “浮动元素” 后面

<img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7934563754/9ee9/606d/858c/4b98d69de201a93612b403447ddea6b2.png" width="400px" />


### 清除浮动
有 2 种方法：
  - 在 父元素 最后添加子元素/伪元素（声明 `clear: both; display: block;`）

  - 将 父元素 声明为 “BFC容器”（如：`overflow: hidden;`）
  
- [demo](https://codesandbox.io/s/broken-sound-94xl1?file=/src/styles.css)

#### clear
`clear` 只能影响 `应用的元素本身`
> 即：可以使该元素的 左/右 不出现浮动元素

##### 示例
浮动元素 `div1`、`div2`，希望做到 `div2` 紧贴 `div1` 底部。

 ![alt](./img/BFC-1.png)

 ![alt](./img/BFC-2.png)

**解决方法：对于 `div2` 声明 `clear: left`**

```css
 .div2 {
    clear: left; /* 指定 div2元素左边 不允许出现浮动元素 */
 }
```

## 块级格式化上下文（BFC）
`BFC`（Block Formatting Context）指的是 **块级格式化上下文** 。
> 即：把 BFC 理解为一个封闭的大箱子，箱子 内部的元素 不会影响到 外部 。

### 触发BFC的条件
 - 根元素（body）
 - 浮动元素（`float`）
 - 绝对定位元素（`absolute`、`fixed`）
 - `display: inline-block`、`display: flex`
 - `overflow: hidden`


### BFC的特性及应用
“BFC容器” 的特性：
 - 清除浮动

 - 不被浮动元素覆盖
 
 - 内部子元素外边距存在重叠

#### BFC容器清除浮动
```html
<style>
   .parent {
      border: 1px solid red;
      /* overflow: hidden;  */ /* 打开它，将它声明为一个BFC容器 */
   }
   .child {
      float: left;
      width: 100px;
      height: 100px;
      background: blue;
   }
</style>

<body>
    <div class="parent">
        <div class="child"></div>
    </div>
</body>
```

 由下图可知，普通容器内的存在浮动元素，容器只剩下2px的边距高度。

 > 解决办法：触发 父元素parent 的BFC特性（overflow: hidden;）

 - before

 ![alt](./img/BFC-6.png)

 - after

 ![alt](./img/BFC-7.png)
 
#### BFC容器不会被其他浮动元素覆盖
```html
 <style>
    .first {
       float: left;
       width: 100px;
       height: 100px;
       background: blue;
    }
    .second {
       width: 200px;
       height: 200px;
       background: red;
       /* overflow: hidden; */ /* 打开它，将它声明为一个BFC容器 */
    }
 </style>

 <body>
    <div class="first">我是第一个</div>
    <div class="second">我是第二个</div>
 </body>
```
由下图可知，第一个div元素有自己的BFC容器，但是对于第二个div元素处于标准流会被覆盖。

> 解决办法：触发 元素second 的BFC特性。

 - before

 <img src="./img/BFC-4.png" width="300px" />
 
 - after

 <img src="./img/BFC-5.png" width="300px" />

#### 同一个BFC下，“元素的外边距（margin）”会存在重叠
 ```html
 <style>
    div {
       width: 100px;
       height: 100px;
       background: blue;
       margin: 100px;
       /* overflow: hidden; */ /* 打开它，将它们各自放到一个新的BFC容器 */
    }
 </style>

 <body>
    <div></div>
    <div></div>
 </body>
 ```
 由下图可知，两个div元素都`处于同一个BFC容器下`（指body元素）。
 
 上一个div的`margin-bottom: 100px;`，下一个div的`margin-top: 100px;`，可看出margin是重叠过的（即两个100px只算一个）

 <img src="./img/BFC-3.png" width="300px" />

 > 解决方法：触发它们各自的BFC特性。将它们各自放到 不同的BFC容器 中。


##### margin重叠现象
在css中，**同一个BFC下，相邻的两个子元素的外边距（margin）会存在重叠**
 - 若两个相邻的外边距`都是正数（+）`，结果是`最大值`
 - 若两个相邻的外边距`都是负数（-）`，结果是`两者绝对值较大的那个数`
 - 若两个相邻的外边距`一正（+）一负（-）`，结果是`两者之和`
