# setState
> setState是同步的还是异步的？在什么场景下是同步？什么场景下是异步？

## setState的更新机制
当调用`setState`时：
 - 实际上是把要更新的`state`放入到`当前组件实例`下的待更新队列（`_pendingStateQueue`）
 - 判断目前是否正处于`批量创建/更新组件`过程中
    - 若是，把组件实例放到`dirtyComponents`中，等到下次再更新
    - 若不是，开始执行更新事务。
 - 开始执行事务前（`transaction.perform()`），先设置“事务的状态标志”`isBatchingUpdates = true`
 - 开始遍历`dirtyComponents`，调用`updateComponent`
 - `updateComponent`会将待更新队列里的`state`合并到`nextState`。来执行所有生命周期钩子，实现组件更新
 - 更新完成后，会设置“事务开始标志”`isBatchingUpdates = false`

 ![alt](./img/img-1.png)

## 事务（Transaction）
**事务** 可以让某个方法在执行前、执行后分别做一些事情。
> 在Wrapper里定义`initialize`和`close`方法，它们 **分别** 会在`anyMethod`执行前、执行后执行。

## 何时异步？何时同步？
`setState`本身的执行过程是同步的，只是因为`合成事件、生命周期函数`的执行顺序在更新之前，所以不能直接拿到更新后的值，形成了所谓的异步。

### 异步：合成事件、生命周期函数
**合成事件** 中也有`batchedUpdates`方法，也是通过同样的事务完成的。

**生命周期函数** 本身就是一个大的事务（此时标志位`isBatchingUpdates === true`），所以`组件实例`都会加入到`dirtyComponents`中。

### 同步：原生事件、setTimeout
**原生事件** 不会通过像合成事件的方式处理，所以不会进入更新事务的处理流程。
> 原生事件是指：非react合成事件（如：addEventListener、document.querySelector().onclick等）

**setTimeout** 回调执行时，已经完成了原组件更新流程（基于Event Loop），不会放入`dirtyComponents`

## 批量更新
现象：**在合成事件（生命周期钩子函数）中，对同一个state进行多次调用setState，只执行最后一次**

原因：当调用`setState`时，react内部会创建一个更新队列（`updateQueue`）。在最终的performWork，相同key值会被覆盖，只有最后一次生效。

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

## 为什么这么设计
**避免不必要的重新渲染**，从而提升性能。

## 总结
 - setState是异步还是同步的？
    同步的。但有时候表现出来是异步。

 - 在setTimeout方法中调用setState的值为何马上就能更新
    因为setTimeout已经完成了原组件的更新流程，不会放入`dirtyComponents`

 - setState中传入一个Function，为何里面的state值马上就能更新
    因为在`updateComponent`过程中，会判断传入的是对象还是函数。如果是函数，那函数接收的state是上轮更新过的state。
    ```js
        this.setState(prevState => ({ count: prevState.count + 1 }))
    ```


## 参考链接
 - [【React进阶系列】 setState机制](https://segmentfault.com/a/1190000016805467#item-7)
 - [把setState整明白](https://www.jianshu.com/p/885743d7a094)