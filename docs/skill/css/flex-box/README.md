# 弹性盒模型（FlexBox）
> `FlexBox`指的是弹性盒模型。（兼容性：需IE10 `及以上`）

## 弹性盒模型
采用Flex布局的元素，成为`Flex容器`，它的子元素自动成为`Flex项目`

容器存在两根轴：`主轴（水平）`、`交叉轴（垂直）`。【`项目`默认沿主轴排列】

![alt](./img/FlexBox-1.png)

## 父容器的属性（6）
### justify-content
定义沿着主轴方向，元素的排列方式。
```
    取值：flex-start（默认） | flex-end | center | space-between | space-around
```
![alt](./img/FlexBox-2.png)

### align-items
定义沿着交叉轴方向，元素的排列方式。
```
    取值：flex-start | flex-end | center | baseline | stretch（默认）
```
![alt](./img/FlexBox-3.png)

### align-content
定义多根轴线的对齐方式（若只有一根轴线，该属性不起作用）

### flex-direction
定义主轴的方向。
```
    取值：row（默认） | row-reverse | column | column-reverse
```
![alt](./img/FlexBox-4.png)

### flex-wrap
定义 flex元素 是单行还是多行显示。
```
    取值：nowrap（默认） | wrap | wrap-reverse
```
![alt](./img/FlexBox-5.png)

### flex-flow
`flex-direction` 和 `flex-wrap` 的组合属性。
```
    取值：flex-direction || flex-wrap
```
## 子项目的属性（6）
### order
定义各个子项目的排列顺序（默认为0）
  - 数值越小，越靠前

![alt](./img/FlexBox-6.png)

### flex-grow
定义 flex元素 在父容器剩余部分中的瓜分比例。
  - 数值越大，瓜分得越多
    
    注意：
        - 若存在子项目设置了宽度，剩余空间要 减掉这部分宽度 才算“剩余空间”，即：最终宽度 = 本身宽度 + 最终剩余空间 * flex-grow中的所占比例
        - 若子项目没有设置宽度，剩余空间被子项目瓜分，即：最终宽度 = 最终剩余空间 * flex-grow中的所占比例

### flex-shrink
定义 flex元素 在超出部分中的缩小比例（默认为1）。
  - 数值越大，缩小得越厉害
        - 若存在子项目设置了宽度，则看占超出空间的多少，即`最终宽度 = 本身宽度 - 超出空间 * shrink中的所占比例

### flex-basis
定义 flex元素 在主轴方向上的初始大小。
```
    取值：auto（默认） | 固定px
        - 长度px固定，相当于 直接设定宽度一样，会覆盖width
```

### flex
`flex-grow`、`flex-shrink`、`flex-basis`的组合属性。
        - 常见缩写规则：
```css
/* 第1组 */
    .item {
        flex: 1
    }
    /* 等价于 */
    .item {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0%;
    }

/* 第2组 */
    .item {
        flex: auto;
    }
    /* 等价于 */
    .item {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: auto;
    }

/* 第3组 */
    .item {
        flex: 10%; /* 或固定值px */
    }
    /* 等价于 */
    .item {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 10%; /* 或固定值px */
    }

/* 第4组 */
    .item {
        flex: 2 3;
    }
    /* 等价于 */
    .item {
        flex-grow: 2;
        flex-shrink: 3;
        flex-basis: 0%;
    }
```
### align-self
    取值：auto（默认） | flex-start | flex-end | center | baseline | stretch
![alt](./img/FlexBox-11.png)

