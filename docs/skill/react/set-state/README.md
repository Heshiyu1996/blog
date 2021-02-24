# setState
> setState是同步的还是异步的？在什么场景下是同步？什么场景下是异步？

[[toc]]

## 特点
1. 浅合并

2. 批量更新策略

### 浅合并
```jsx
this.setState({ comments }); // ===> this.setState({ ...this.state, comments })
```
`this.setState({ comments })` 完整保留了 `this.state.posts`，但完全替换换了 `this.state.comments`。

### 批量更新策略
### 原理
当 React 在触发 合成事件（或生命周期） 时，会初始化一个 **事务**。

```js
class App extends Component {
    state = { 
        val: 0
    }

    componentDidMount () {
        this.setState({ val: this.state.val + 1 });
        console.log('第 1 次 val: ', this.state.val);
        this.setState({ val: this.state.val + 1 });
        console.log('第 2 次 val: ', this.state.val);

        setTimeout(() => {
            this.setState({ val: this.state.val + 1 });
            console.log('第 3 次 val: ', this.state.val);
            this.setState({ val: this.state.val + 1 });
            console.log('第 4 次 val: ', this.state.val);
        }, 0)
    }

    render() {
        return null;
    }
}

// 0 0 2 3
// 解释：
// 前两次 isBatchingUpdates === true，没有更新 state，输出 0 0
// 后两次 同步更新，输出 2 3
```

### 更新机制
调用`setState`时：
 - 根据 `isBatchingUpdates` 判断 “是否处于 `批量更新` 的过程”
    - 若是，将 setState结果 放到 `dirtyComponents` 中（还未应用到组件）

 - 否则，调用 `batchedUpdates` 进行 `批量更新`
    - “批量更新”做法: 设置 `isBatchingUpdates = true`，通过 `transaction.perform()` 发起事务 

 - 事务结束时，`isBatchingUpdates = false`，遍历所有 `dirtyComponents`，调用 `updateComponent` 刷新组件，并执行 `pendingCallbacks`（即 setState 中的 callback）

 ![alt](./img/img-1.png)


:::tip
**事务（Transaction）** 用 Wrapper 封装要执行的方法，暴露一个`perform`方法来调用原方法。
> 在Wrapper里定义 `initialize` 和 `close` 方法：它们 **分别** 会在 `指定方法` 执行前、执行后执行。
```
 * 
 *                       wrappers (injected at creation time)
 *                                      +        +
 *                                      |        |
 *                    +-----------------|--------|--------------+
 *                    |                 v        |              |
 *                    |      +---------------+   |              |
 *                    |   +--|    wrapper1   |---|----+         |
 *                    |   |  +---------------+   v    |         |
 *                    |   |          +-------------+  |         |
 *                    |   |     +----|   wrapper2  |--------+   |
 *                    |   |     |    +-------------+  |     |   |
 *                    |   |     |                     |     |   |
 *                    |   v     v                     v     v   | wrapper
 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
 * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | +---+ +---+   +---------+   +---+ +---+ |
 *                    |  initialize                    close    |
 *                    +-----------------------------------------+
 * 
```
:::

## 总结
| 类型 | 方式 | 说明 |
| ----- |:---:|:---:|
| **合成事件**、<br/>**生命周期函数**<br/>（除了`componentDidUpdate`） | 会触发一个大事务 | 异步 |
| **原生事件**、<br/>**setTimeout** | 执行时 **不存在大事务**，会立即发起新的批量更新 | 同步 |


 - **为什么state要批量更新？**
    - **避免不必要的重新渲染**，从而提升性能。

 - **setState是异步还是同步的？**
    - 对于 **合成事件、生命周期**，是异步；对于 `setTimeout`、`addEventListener` 是 同步 的。

 - **为什么在setTimeout方法中调用setState表现出来是同步？**
    - 因为setTimeout已经完成了原组件的更新流程，不会放入`dirtyComponents`

 - **setState中传入一个Function，为何里面的state值是最新的？**
    - 函数接收的state是上轮更新过的state。
    ```js
    this.setState(prevState => ({ count: prevState.count + 1 }))
    ```


## 参考链接
 - [【React进阶系列】 setState机制](https://segmentfault.com/a/1190000016805467#item-7)
 - [把setState整明白](https://www.jianshu.com/p/885743d7a094)
 - [React - setState源码分析（小白可读）](https://juejin.im/post/5aa25967518825558251f61f#heading-6)
 - [[第10期] 了解 React setState 运行机制](https://cloud.tencent.com/developer/article/1592636)
