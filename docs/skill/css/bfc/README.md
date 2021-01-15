# BFC和浮动
> `BFC`指的是块级格式化上下文

[[toc]]

## 浮动
浮动的目的：**一行显示多个div元素**

 规则：若元素A是浮动的：
 - 若他前一个元素也是浮动的，那会跟随前一个元素的**后边**
 - 若他前一个元素是在标准流的，那会和前一个元素的**底部对齐**

 牢记：`clear`规则只能影响`使用清除的元素本身`（**可以使xx元素的左/右边不允许出现浮动元素**）
 
 例子：
 `div1`、`div2`都是浮动的，希望做到`div2`紧跟`div1`底部对齐
 ![alt](./img/BFC-1.png)

 解决方法：
 ```css
 .div2 {
    clear: left; /* 指定 div2元素左边 不允许出现浮动元素 */
 }
 ```
 ![alt](./img/BFC-2.png)
 
### 浮动会带来什么问题？
  - 导致父元素高度无法撑开
  - 影响后面的非浮动元素（待考证）：
    - 内联元素：会跟随其后
    - 块级元素：压在浮动元素下方

### 清除浮动
  - 在父元素最后一个子元素后，再加一个子元素（或伪类），属性为`clear: both;`
  - 将父元素声明为BFC容器（如`overflow: hidden;`、`float: left;`等）

## 块级格式化上下文（BFC）
`BFC`（Block Formatting Context）指的是 **块级格式化上下文** 。
> 即：把BFC理解为一个封闭的大箱子，箱子内部的元素无论如何都不会影响到外部。

### 触发BFC的条件
 - 根元素（body）
 - 浮动元素（float）
 - 绝对定位元素（absolute、fixed）
 - display为`inline-block`、`table-cell`、`flex`
 - overflow为`hidden`、`scroll`、`auto`


### BFC的特性及应用
触发了 BFC特性 的容器存在一些特性：**清除浮动、不被浮动元素覆盖、内部子元素外边距存在重叠**等。

#### BFC容器可以清除浮动
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
