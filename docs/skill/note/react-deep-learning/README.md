# 《深入React技术栈》-陈屹

[[toc]]

## 第五章 深入Redux应用架构
Redux提供API让我们去使用reducer创建store，并能更新store中的数据或获取store中最新的状态
> Redux = Reduce + Flux（思想）

### 三大原则
 - 单一数据源
    - 一个应用永远只有唯一的数据源

 - 状态是只读的
    - 定义一个reducer，它负责响应action并修改数据

 - 状态修改均由纯函数完成
    - 每个reducer本质上函数（接受一定的输入，必定会得到一定的输出）
```js
reducer(previousState, action) => newState
// 根据previousState、action来计算出新的newState
```

### createStore
`createStore`是Redux中最核心的API
```js
import { createStore } from 'redux';
import reducers from './reducer';

const store = craeteStore(reducers);
```
以上`store`是个对象，包含4个方法：
 - getState()：获取store中当前的状态
 - dispatch(action)：分发一个action，并返回这个action
    - 这是唯一能改变store中数据的方式
另外还有2个不常用的方法：subscribe()、replaceReducer()

### react-redux
`react-redux`提供了一个组件、一个API帮助Redux和React绑定
:::tip
 - 组件：`<Provider store={store}/>`
    - 接收一个store作为props值
    - 是整个Redux应用的顶层组件

 - API：connect()
    - 使得任意组件都具有获取store中数据的功能
:::

## 第三章 解读React源码
### diff算法
React把Virtual DOM与diff完美结合，使得原有传统的diff算法的算法复杂度从O(n3)变为O（n）

### diff策略
 - tree diff
    - 对树进行分层比较，两棵树只会对同一层次的节点进行比较
 - component diff
    - 对于组件之间，会根据组件的类型是否相同采取不同策略：
    - 若是同类型组件，按照原策略比较Virtual DOM
    - 若不是，则该组件为dirty component，替换整个组件下的所有节点
    - React可以通过`shouldComponentUpdate`来判断该组件是否需要进行diff算法
 - element diff
    - 当节点处于同一层级时，diff有三种节点操作：插入、移动、删除

### diff步骤
1、对新集合中的节点进行循环遍历；
> 通过唯一key来判断新旧集合中是否存在相同的节点，可见key值的重要性

2、如果不存在，则创建新节点，且不移动；

3、如果存在，则继续比较【“**当前节点在旧集合中的位置**”＜“**lastIndex**”】；如果成立，则移动；否则不移动；

4、不管移动/创建与否，都会**更新lastIndex**
```js
// lastIndex表示：刚刚在新集合中，访问到的这些元素里，在旧集合中的最大长度
// 因为，如果当前元素在旧集合中的位置，比“刚刚访问到的元素在旧集合中的最大长度”还要大的话
// 就证明当前这个元素是不会影响到其他元素的，所以就不会加入到差异队列，也就不执行移动操作了
lastIndex = Math.max(prevChild._mountIndex, lastIndex) // 取最大值
```

### React Patch
所谓的Patch，就是将**tree diff**计算出来的**DOM差异队列**更新到**真实的DOM节点**上。

主要是通过**遍历差异队列**、同时**执行更新类型的相应操作**
> 更新类型的操作包括：新节点的插入、已有节点的移动和移除等

:::tip
是否可以**直接根据差异队列**依次插入节点？

可以。

因为在diff阶段**添加差异节点到差异队列**时，本身就是**有序添加**。队列里的顺序本身就是最终真实DOM的顺序
:::
而且，是会在**计算出全部差异、并放入差异队列**后，才会**一次性地**去执行Patch来完成真实DOM的更新。
