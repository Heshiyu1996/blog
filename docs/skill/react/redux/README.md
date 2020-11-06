# Redux
> Redux 是一个 Web应用 的**状态管理方案**。

[[toc]]

## 基本组成
 - **store**：一个状态容器（全局唯一），存储所有状态（state）。
 - **state**：状态
 - **action**：View 发出的一种 **能让 state 发生变化** 的通知
 - **dispatch**：View 发出 Action 的媒介
 - **reducer**：接收 action、state，返回一个新的 state（通过替换旧的）

![alt](./img/redux.png)

使用前 vs 使用后

<img src="./img/img-2.png" width="300" /> vs <img src="./img/img-3.png" width="300" />

## 三个原则
 - **单一数据源：** 整个应用只有唯一的 `Store`；

 - **State只读：** 唯一改变 `state` 的方法就是 `dispatch` 一个 `action`

 - **纯行为函数：** 只能通过一个 纯函数`reducer`  来描述修改。

## 特点
 - 遵循单向数据流
 - 每一个 state 的变化可预测
 - 状态可统一处理“修改前的校验”






## react-redux
在 React 里使用 Redux。

部分概念和上面提到的差不多，除此之外，还有一些新的概念：

#### Provider
`<Provider>`是一个容器。

**原理：通过React `Context`实现。**
```js
export const ReactReduxContext = React.createContext(null);

function Provider({ store, context, children }) {
  // ...
  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}
```
在业务组件内与 `connect` 配合，可以实现 **跨层级数据传递**。

#### connect
是一个高阶组件，接收 2 个函数：
 - `mapStateToProps`：将需要的 `state` 注入到组件的props中
 - `mapDispatchToProps`：将 `dispatch` 注入到组件的props中

除了上面的作用，还有当 `state` 发生变化时，通知关联的组件更新。

```js
import {Component} from "react";
import React from "react";
import {PropTypes} from 'prop-types'

// connect是个纯函数，它返回一个组件的类定义
const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent => {
    class Connect extends Component {
        constructor() {
            super()
            this.state = {}
        }

        componentWillMount() {
            this.unSubscribe = this.context.store.subscribe(() => {
                this.setState(mapStateToProps(this.context.store.getState()))
            })
        }

        componentWillUnmount() {
            this.unSubscribe()
        }

        render() {
            return (
                <WrappedComponent 
                    {...this.state}
                    {...mapDispatchToProps(this.context.store.dispatch)}
                />
            )
        }
    }

    Connect.contextTypes = {
        store: PropTypes.object
    }

    return Connect
})

export default connect
```


### [实践] react-redux
1、**新建`reducer.js`**：接收 action、state，返回新的 state

2、**实例化`store`**：向 `createStore` 传入 `reducer`

3、**引入`Provider`组件**：传入`store`

4、**注入到`业务组件`**：利用 `connect` 包裹业务组件，将 `state`、`dispatch` 注入到组件

[react-redux-demo](https://codesandbox.io/s/react-redux-demo-k1jbe)

## 参考链接
 - [从 Redux 设计理念到源码分析](https://mp.weixin.qq.com/s/8A-uOiuiMpAfhX0S6YwhbA)
