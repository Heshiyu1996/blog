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