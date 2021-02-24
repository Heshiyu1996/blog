# 生命周期

[[toc]]

## React 16以前
![alt](./img/img-1.png)

## React 16及以后
![alt](./img/img-2.png)


### React 16生命周期调整
#### 3 个钩子被标记不安全
`componentWillMount`、`componentWillReceiveProps`、`componentWillUpdate`。

**原因：采用 Fiber结构 后，这些生命周期可能会触发多次。**

> React16采用了 Fiber结构 表示 virtual dom，使得可在 构建阶段 被打断。对于
#### 取代的 2 个钩子
#### getDerivedStateFromProps
**执行时机：** 首次挂载（willMount）、每次更新前(render前，willReceiveProps、willUpdate)

**使用：** 返回一个对象来更新当前state值，不更新时返回null

> 注意：因为是静态方法，所以不能用this

#### getSnapshotBeforeUpdate
**执行时机：** 每次更新后（render后，DidUpdate前；属于 pre-commit 阶段）

## 其它注意
### shouldComponentUpdate(nextProps, nextState)
可以通过 `shouldComponentUpdate` 比较 “新、旧的props、state” 来决定 **是否执行render**。
> **但传下来的 props 依然是会更新的**

### forceUpdate()
调用 `forceUpdate` 与 “更新props/state” 一样，但会跳过 `shouldComponentUpdate`:
 > forceUpdate() => getDerivedStateFromProps => render -> getSnapshotBeforeUpdate => componentDidUpdate



## 参考链接
[React新生命周期图谱（官方文档）](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

[React新生命周期-三个钩子删除原因](https://blog.csdn.net/zhangwx6/article/details/81667631)