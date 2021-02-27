# Hooks的管理机制

> Hook可以在不编写 class 的情况下 使用 state 以及其他 React 特性。

[[toc]]

```js
// 通过 useState 声明了 2 个状态: age、name
function PersionInfo ({initialAge,initialName}) {
    const [age, setAge] = useState(initialAge);
    const [name, setName] = useState(initialName);

    return (
        <>
            Age: {age}, Name: {name}
            <button onClick={() => setAge(age + 1)}>Growing up</button>
        </>
    );
}
```
问题
 - 对于多个 `useState` ，**如何区分这些状态？**
 - 每次重新渲染，如何获取最新状态？
 - 为什么不能在 **循环、条件、嵌套** 里用 Hooks？
 - Hook的状态存在哪？

```ts
export type Hook = {
    memoizedState: any,

    baseState: any,
    baseUpdate: Update<any, any> | null,
    queue: UpdateQueue<any, any> | null,

    next: Hook | null, // 指向下一个Hook
}
```
**可以把 Hook 当做一个链表节点（具有`next`属性，指向下一个Hook）。**


## 多个`useState`，如何区分两个状态？
初次渲染时，每次调用Hook方法，就会调用 `mountState`。

它内部会通过 `mountWorkInProgressHook` 去创建一个 Hook节点 ，并把它添加到 **Hooks链表** 上。

![alt](./img/img-1.png)


## 每次重新渲染，如何获取最新状态？
对于每个 Hook节点 都维护自身的 `更新链表（queue）`，用来存放所有的“历史更新操作”。

当重新渲染时，会从 `更新链表（queue） ` 的 表头 开始遍历，执行每一次更新，最后**只返回最新的状态**。

![alt](./img/img-2.png)

![alt](./img/img-3.png)

## 为什么不能在嵌套、条件、循环里用Hooks
重新渲染时，每次调用Hook方法，就会调用 `updateState` 。

它内部会通过 `updateWorkInProgressHook` 去获取 “当前对应的链表节点” （基于 初次渲染时生成的 `Hooks链表` 各个节点的 `next` 指针）。

如果在 “条件语句” 中使用Hook，若不符合条件未执行对应 Hook，就会导致 **从 Hooks链表 通过 `next`指针 获取信息不正确**。
> 初次渲染：state1 => hook1, state2 => hook2, state3 => hook3...
>
> 再次渲染：state1 => hook1, state3 => hooks2，乱套！

## Hook的状态存在哪？
`Hooks链表` 会挂载到 `FiberNode.memoizedState`
> 每个 Fiber 就是一个 Virtual DOM，每个组件就对应 Fiber树 上对应的 Fiber节点。

## 父Hook引用子Hook，它们内部Hooks之间的执行顺序？
会先执行 子Hook 内的 hook。
```js
// 父Hook
import React, { useEffect } from "react";
import useChild from "./useChild";

function App() {
  const { childName } = useChild("hsy"); // 会先输出子Hook内的useEffect

  useEffect(() => {
    console.log("App的effect");
  });

  return <div className="App">我是App,{childName}</div>;
}
```

```js
// 子Hook
import { useState, useEffect } from "react";
function useChild() {
  const [childName, setChildName] = useState("");

  useEffect(() => {
    console.log("useChild的useEffect");
    console.log(setChildName);
  }, []);

  return { childName };
}

export default useChild;

```
[代码示例](https://codesandbox.io/s/antd-reproduction-template-ft5cm?file=/index.js)

**正解：** 父Hook调用子Hook，其实也是把子Hook**当做一个函数被调用**。（可以尝试将`const { childName } = useChild('hsy');`这行放到useEffect的下一行执行）
> 也就是说，将子Hook里的Hook“平摊”到子Hook被调用的地方，那随后会按按照类似“JS事件循环 - 微任务”的机制来处理父、子内部的这些Hook。


## 参考链接
 - [剖析useState的执行过程](https://zhuanlan.zhihu.com/p/64354455)
 - [React中useEffect的源码解读](https://www.cnblogs.com/vvjiang/p/12160791.html)
 - [React Hooks源码解析，原来这么简单～](https://juejin.im/post/5e5e66d6e51d4526e651c796#comment)
 - [React Hooks 进阶](https://github.com/SunShinewyf/issue-blog/issues/50)