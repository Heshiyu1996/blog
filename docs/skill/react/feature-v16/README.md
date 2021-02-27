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



## 函数式组件 与 Class组件
|   | 函数式组件 | Class组件 |
|:--- |:---|:---|
| 定义 | 被定义为一个**纯函数**。<br />它接收一个props对象，并返回`React Element` | 被定义为一个**Class**。<br />它继承于`React.Component`，并 **通过render函数** 返回`React Element` |
| 状态 | 没有自身的state。<br />（**在v16.8添加了hooks，可以使用useState钩子去管理state**） | 拥有自身的state |
| 生命周期 | 没有生命周期。<br />（**在v16.8后可通过`useEffect`去模拟部分生命周期**） | 有 |
| render行为<br /> | 每次组件触发更新：<br />**拥有完全独立的函数作用域**，<br />返回相应的`React Element` | 每次组件触发更新：<br /> **调用`render()`**，<br />返回`React Element` <br />（对于同一处调用的class组件，**只有一个class实例**被创建/使用，后续的render**只会改变this.props、this.state的值**） |

## React Hooks的优缺点
**优点：**
 - 状态逻辑复用
    - 通过组合`useState`、`useEffect`等去实现状态逻辑复用、避免分散在各个生命周期中
 - 更贴合 函数式编程 思想

**缺点：**
 - 调用顺序：
    - 要在组件的最顶层使用，**不能在class组件、循环、条件、回调内使用Hooks**
 - 依赖声明的关键性
    - 部分Hooks**需要根据依赖来判断是否需要重新渲染**

## 函数式编程
`函数式编程`的特点：
 - 函数是第一等公民
 - 没有副作用（不会影响外部变量）
 - 引用透明（输入相同，输出也相同）

## 参考链接
 - [useCallback、useMemo 分析 & 差别](https://juejin.im/post/5dd64ae6f265da478b00e639)