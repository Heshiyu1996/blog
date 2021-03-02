# ref对象
> `ref对象` 是[可变的](/skill/js/other/#可变（mutable）和不可变（immutable）对象的区别)（每次都是修改其下的 `.current` 属性）

[[toc]]

## 创建ref对象
有 2 种方式都可以创建ref对象：
 - createRef
    - 一般用于 `Class Component`
    - 每次重新渲染 **都会使得引用地址发生改变**（在 `constructor` 内定义时除外）
 
 - useRef
    - 一般用于 `函数式组件`
    - 每次重新渲染 **不会导致引用地址发生改变**

### createRef
```js
// 每次调用都会生成 新的引用地址 ，所以一般会在 constructor 内定义
this.inputRef = React.createRef();
```

### useRef
```js
// 每次调用不会生成 新的引用地址
const inputRef = useRef(null);
```

## ref的作用
`ref` 可以获取 **子组件的实例** 或 **DOM对象**。

 - 作用于 **HTML元素** 时，其 `.current` 属性为 **DOM元素**
 - 作用于 **组件** 时，其 `.current` 属性为 **组件实例**

两者的 `.current` 属性，如图所示：

<img src="./img/img-3.png" width="400px" />

> 注意：
> 
> 1. 方法要 bind 到组件实例上（或使用箭头函数），才能通过 `.current` 读取到方法
> 
> 2. 由于 “函数式组件” 没有组件实例，需要 `React.forward` + `useImperativeHandle`。

## 转发ref
`React.forwardRef` 可用于转发 `ref`，一般用于：
 - 为 HOC 组件 转发 `ref`
 - 为 函数式组件 转发 `ref`

> `React.forwardRef` 接收一个渲染函数，这个函数接收 `props`、`ref`，并返回一个 `React节点`。
> 
> React节点 可理解为：return MyComp，但需要 `<MyComp />` 才能使用

### 为HOC组件转发ref
```js
import React from "react";

const Enhance = (WrappedComponent) => {
    class MyHoc extends React.Component {
        render() {
            // 不转发ref
            // return <WrappedComponent />;

            // 转发ref
            const { forwardRef } = this.props;
            return <WrappedComponent ref={forwardRef} />;
        }
    }

    // 不转发ref
    // return MyHoc;

    // 转发 ref
    return React.forwardRef((props, ref) => {
        // 因为 ref 直接通过 props 传递会被过滤（和 key 一样）
        // 所以这里通过 “其他props值”（这里是 forwardRef） 进行传递
        return <MyHoc forwardRef={ref} />;
    });
};

export default Enhance;
```
> [demo](https://codesandbox.io/s/gifted-shtern-jlpy0?file=/src/Enhance.js:0-414)

### 为函数式组件转发ref
由于 **“函数式组件”没有组件实例** ，需要 `React.forward` + `useImperativeHandle`：
 - `React.forwardRef`： `ref` 转发

 - `useImperativeHandle`：自定义暴露给父组件的 “实例值”

#### 示例
假设有一个 函数式组件`CustomInput` ，通过 `转发ref` 将它内部的实例 “暴露” 给父组件。

 - 子组件：
```js
// CustomInput.jsx
import 

// 1. 利用 React.forwardRef 作 ref 转发
const CustomInput = forwardRef((props, ref) => {
    const show = () => { /* ... */ };

    const close = () => { /* ... */ };

    // 2. 自定义向 父组件 暴露的实例值
    useImperativeHandle(ref, () => ({
        show,
        close
    }));

    return <div></div>;
})
```

 - 父组件：
```js
// Parent.js

// 1. 定义一个ref
const myRef = useRef();

// 3. 执行 子组件实例 上的 show 方法
console.log(myRef.current.show());

 // 2. 给 子组件 赋值 myRef
<CustomInput ref={myRef} />
```

## 参考
 - [What's the difference between useRef and createRef?](https://stackoverflow.com/questions/54620698/whats-the-difference-between-useref-and-createref)
