# setState
> setState是同步的还是异步的？在什么场景下是同步？什么场景下是异步？

[[toc]]

## 特点一：浅合并
`this.setState({ comments })` 完整保留了 `this.state.posts`，但完全替换换了 `this.state.comments`。

## 特点二：批量更新策略
### 现象
**在合成事件（或生命周期钩子函数）中，对同一个state基于上一次的值多次setState，只有一次的效果**

```js
class App extends Component {

  state = { val: 0 }

  batchUpdates = () => {
    this.setState({ val: this.state.val + 1 })
    this.setState({ val: this.state.val + 1 })
    this.setState({ val: this.state.val + 1 })
 }

  render() {
    return (
      <div onClick={this.batchUpdates}>
        {`Counter is ${this.state.val}`} // 1
      </div>
    )
  }
}
```

### 更新机制
当调用`setState`时：
 - 把 `newState` 放入到 `当前组件实例` 下的更新队列

 - 判断：是否处于 `批量更新` 的过程
    - 若是，把 组件实例 push到 `dirtyComponents` 中，等待更新

 - 否则，进行 `批量更新`，设置 状态标识位，调用 `transaction.perform()`

 - 遍历`dirtyComponents`，调用`updateComponent`

 - 事务结束时，会将 所有临时state 合并、计算出最新state（`flushBatchedUpdates`），调用生命周期方法来更新组件，`isBatchingUpdates = false`

 ![alt](./img/img-1.png)

:::tip
**事务（Transaction）** 用 Wrapper 封装要执行的方法，暴露一个`perform`方法来调用原方法。
> 在Wrapper里定义 `initialize` 和 `close` 方法：它们 **分别** 会在 `指定方法` 执行前、执行后执行。
```
* <pre>
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
 * </pre>
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
    - 同步的。但有时（合成事件、生命周期）表现出来是异步。

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