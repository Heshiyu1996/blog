# React16基础知识
> react 16

[[toc]]

## 新特性
 - [生命周期](/skill/react/life-cycle/)
    - 设为`UN_SAFE`：`componentWillMount`、`componentWillUpdate`、`componentWillReceiveProps`
    - 推荐使用：`getDerivedStateFromProps`、`getSnapshotBeforeUpdate`
 - [Hooks](/skill/react/hooks/)
    - 主要是解决`状态逻辑复用问题`，将组件的 UI 与 状态 分离。
 - **Context API**
    - 新的Context API采用 声明式写法，并且可以透过 **`shouldComponentUpdate` 返回 false 的组件**继续向下传播
 - **代码分割**
    - `React.lazy` 提供了`动态 import 组件`的能力，实现代码分割
    - `Suspense` 作用：在等待组件时 suspend（暂停）渲染，并显示加载标识
 - **错误处理机制**
    - 新增生命周期`componentDidCatch`


## useCallback、useMemo的区别
`useCallback`一般会用来缓存函数的引用；`useMemo`缓存计算数据的值。

> 它们都是根据 `依赖项` 去进行缓存。前者是缓存callback，后者是缓存callback执行后返回的值。

### useCallback
用法：
```js
const handleCount = useCallback(() => setCount(count => count + 1), []) // 依赖项为空代表这个函数在组件的生命周期内都会 **永久缓存**
```

### useMemo
用法：
```js
const calcValue = useMemo(() => Array(10000).fill('').map(v => v), [count]); // 当count改变时，重新计算calcValue的值
```
> `useMemo`一般会 用来去缓存需要进行大量计算量的函数。

## 通过Hooks获取上一个指定的prop值
```js
// usePrevious.js
import { useRef, useEffect } from 'react';

const usePrevious = value => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
}
```

使用时：
```js
const prevCalcValue = usePrevious(calcValue);
```



## 函数式组件 和 类组件 的区别
 - 语法上
    - 函数式组件是一个纯函数，它接收一个props对象，并返回一个react元素。（没有`this`，需要转发）
    - 类组件是一个class，它继承React.Component，并通过render函数去返回react元素（`this`指向自身实例）
 
 - 生命周期
    - 函数式组件没有生命周期
    - 类组件有各种生命周期

 - 状态
    - 函数式组件没有自身的内部状态state，数据依赖于props的传入。**在react16.8添加了hooks，可以使用useState钩子去管理state；使用useEffect钩子去执行副作用**

 - **渲染行为不一样**
    - 函数式组件每次render都是 **执行不同的渲染函数**，每次都会 **拥有独立的函数作用域**
    - 类组件每次render都是 **调用同一个渲染函数**，后续渲染 **只会改变this.props、this.state的值**

## React Hooks的优缺点
优点：
 - 状态逻辑复用
    - 通过组合`useState`、`useEffect`等来自定义Hook去实现状态逻辑复用
 - 逻辑统一
    - 以前需把同个逻辑分散在各个生命周期中，现在可以逻辑
 - 函数式编程

缺点：
 - 调用顺序：
    - 要在组件的最顶层使用，不能在循环、条件、回调内使用Hooks
 - 依赖要声明清楚
    - 部分Hooks需要根据依赖来判断是否需要重新渲染

## 函数式编程
`函数式编程`的特点：
 - 函数是第一等公民
 - 没有副作用（不会影响外部变量）
 - 引用透明（输入相同，输出也相同）