# CSS布局

[[toc]]

## 常见布局方案
发展历程：

[表格布局](#表格布局) > [定位布局](#定位布局) > [浮动布局](./../bfc/) > [Flex布局](./../flex-box/) > [网格布局](#网格布局) > [多列布局](#多列布局)

> 还有一种 多列布局 比较少用。



### 表格布局
`<table>`默认设置了 **table布局属性**。

当这些属性被应用于`非<table>`元素时，就是表格布局。
> 常用于兼容一些不支持 Flex、Grid 的浏览器。

 - `display: table`：指定为表格容器（类比于`<table>`）
 - `display: table-row`：指定为表行（类比于`<tr>`）
 - `display: table-cell`：指定为单元格（类比于`<td>、<th>`）

<img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5829472983/698c/98df/3375/cfa27af05e77008213bdb82d1a4efba3.png" width="500px" />

### 定位布局
脱离标准流（absolute、fixed、sticky达到阈值后）。

`position`有以下属性：
 - `static`
    - 默认定位
 - `absolute`
    - 绝对定位（相对最近一个非static的父元素）
 - `fixed`
    - 固定定位（相对浏览器视窗的左上角）
 - `relative`
    - 相对定位（相对本身所在位置，原位置遵循标准文档流）
 - `sticky`
    - [粘性定位](../other/#粘性定位（sticky）)（先保持`static`，达到阈值时变成`fixed`）
    - 该定位遵循`标准文档流`，**仍然保留**元素原本在文档流中的位置

### 浮动布局
[浮动布局](./../bfc/)
脱离标准流，**会影响** 标准流的排列。

### 网格布局
从 **行、列** 上定义元素的排列。
> 不建议使用：兼容性（需IE10 `及以上`）、安卓低版本不支持

 - `display: grid`：将父元素设为**网格容器**。

 - `grid-template-columns`：定义列轨道
 
 - `grid-template-rows`：定义行轨道

 - `grid-gap`：定义行列之间的间隙

```css
.container {
    display: grid;
    /* 定义 3种 不同宽度的列，分别为： 200px、自适应、200px */
    grid-template-colums: 200px auto 200px;
    /* 定义 2种 不同高度的行，分别为 100px、200px */
    grid-template-rows: 100px 200px;
    /* 定义行、列的间隙为20px */
    grid-gap: 20px;
}
```
如图所示：

<img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5829574880/68f3/c764/34c3/eeb492ef34447f9efc983714c4acdc73.png" width="500px" />


### 多列布局
把内容 **按列排序**（类似报纸）：
 - `colum-width`，指定 `按照至少某个宽度用尽可能多的列` 来填充
 - `column-count`，指定 **列的数量**

<img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5829645859/7d7c/f275/56c5/31fa62501c0e442d7f7d9978aa5c73ce.png" width="720px" />


### [扩展] 三列布局的实现
要求：三个元素：左、中、右，其中左、右固定宽度为200px，中间宽度自适应。（元素高度100px）

```html
<div class="container">
    <div class="left"></div>
    <div class="center"></div>
    <div class="right"></div>
</div>
```

以下为 **5种** 实现方式：

#### 定位方式
```css
.container {
    position: relative;
    height: 100px;
}

.left,
.right {
    position: absolute;
    width: 200px;
    height: 100%;
}

.left {
    left: 0;
}

.right {
    right: 0; /* 通过绝对定位的 right: 0 撑开 */
}

.center {
    position: absolute;
    left: 200px;
    right: 200px;
    height: 100%;
}
```

#### 浮动方式
```css
/* 
 * 注：因为浮动元素的前一个元素若为非浮动，则会紧贴底部
 * 所以这种方式需更换DOM的排列顺序：left、right、cente
 */
.left,
.right {
    width: 200px;
    height: 100px;
}
.left {
    float: left;
}
.right {
    float: right;
}
.center {
    height: 100px;
    margin: 0 200px; /* 通过margin撑开 */
}
```

#### Flex布局
```css
.container {
    display: flex;
    height: 100px;
}

.left,
.right {
    width: 200px;
}

.center {
    flex: 1;
}
```

#### 表格布局
```css
.container {
    display: table;
    width: 100%; /* 注意，这里因为是table，所以width是100% */
    height: 100px;
}

.left,
.center,
.right {
    display: table-cell;
}

.left,
.right {
    width: 200px;
}
```

#### 网格布局
```css
.container {
    display: grid;
    grid-template-columns: 200px auto 200px;
    grid-template-rows: 100px;
}
```


## 参考链接
 - [从网易与淘宝的font-size思考前端设计稿与工作流](https://www.cnblogs.com/lyzg/p/4877277.html)
 - [Responsive Web Design 基礎 : <meta name=”viewport” > 設定](https://medium.com/frochu/html-meta-viewport-setting-69fbb06ed3d8)
 - [前端基础知识概述 -- 移动端开发的屏幕、图像、字体与布局的兼容适配](https://www.lagou.com/lgeduarticle/40493.html)
 - [响应式布局的常用解决方案](https://www.boeyc.com/index.php/archives/11/)