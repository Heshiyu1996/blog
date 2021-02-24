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
为了避免不必要的重新渲染，进而影响页面的渲染效率，React 对于 `setState` 采用了 **批量更新策略**。

例子：
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

#### 原理
1. 当触发 **React合成事件** 时，会触发一个 **事务**(`batchedUpdates`)，执行 `isBatchingUpdates = true`；
> 所以可理解为，“整个合成事件的执行过程” 都处在一个大的事务

2. 在这期间，如果触发了 `setState` ，都会将 “要更新的Component” 存到 `dirtyComponents`

3. 当 **合成事件** 的事务结束(`close`) 时，会遍历 `dirtyComponents`；进而调用 `updateComponent` 更新组件，并执行 `setState` 传入的 callback

不仅是 **React合成事件**，对于 **生命周期** 也是同理的。
 
 ![alt](./img/img-1.png)


## 总结
| 类型 | 方式 | 说明 |
| ----- |:---:|:---:|
| **合成事件**、<br/>**生命周期函数**<br/>（除了`componentDidUpdate`） | 会触发一个大事务 | 异步 |
| **原生事件**、<br/>**setTimeout** | 执行时 **不存在大事务**，会立即发起新的批量更新 | 同步 |


 - **setState是异步还是同步的？**
    - 对于 **合成事件、生命周期**，是异步；
    - 对于 `setTimeout`、`addEventListener` 是 同步 的。

 - **为什么在setTimeout方法中调用setState表现出来是同步？**
    - 因为setTimeout已经完成了原组件的更新流程，不会放入`dirtyComponents`

 - **setState中传入一个Function，为何里面的state值是最新的？**
    - 函数接收的state是上轮更新过的state。
    ```js
    this.setState(prevState => ({ count: prevState.count + 1 }))
    ```

### 事务（Transaction）
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
## 参考链接
 - [【React进阶系列】 setState机制](https://segmentfault.com/a/1190000016805467#item-7)
 - [把setState整明白](https://www.jianshu.com/p/885743d7a094)
 - [React - setState源码分析（小白可读）](https://juejin.im/post/5aa25967518825558251f61f#heading-6)
 - [[第10期] 了解 React setState 运行机制](https://cloud.tencent.com/developer/article/1592636)
