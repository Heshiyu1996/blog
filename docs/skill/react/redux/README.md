# react-redux
> Redux和 React 无关，React-Redux才是结合 React 使用

Redux 是一个 **全局数据管理中心**。它通过一定的使用规则 和 限制，保证了数据的可控、可追溯、可预测。

## 核心理念
 - **单一数据源：** 整个应用只有唯一一个状态树；

 - **状态只读：** Redux Store中的数据无法被直接修改；

 - **纯行为函数：** 只能通过一个纯行为函数（Reducer）来描述修改。

## 实现原理

![alt](./img/img-1.png)

## 在React里使用redux

### 在根组件使用Provider
```jsx
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

const store = createStore(todoApp)

render(
  // 在根组件使用Provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

### Store
一个应用程序中只有一个 store对象。它本质上是一个状态树，保存了所有对象的状态。
 - store接收到一个action，它将action代理给相关reducer。reducer会执行这个action并返回一个辛庄天

### Provider
Provider是一个外层容器，它的作用是通过配合 `connect` 来达到跨层级传递数据。
> 使用时，将Provider定义为整个项目的最外层组件，并传入store属性

原理：通过React `Context`实现。
```js
export const ReactReduxContext = React.createContext(null);

function Provider({ store, context, children }) {
  // ...
  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}
```


### connect
```js
const mapStateToProps = state => {
    const { projectListState } = state
    const { responsive = { data: {} } } = state.httpData

    return { projectListState, personalMenuState: state.personalMenuState, responsive }
}

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Banner)
```
`mapStateToProps` 的作用是将store里的state注入到组件的props中

`mapDispatchToProps` 的作用是将store里的action（操作数据的方法）绑定到指定组件的props中


connect将 组件 和 Store 连接的原理：
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

    Connect.contentType = 

    return Connect
})

export default connect
```

### action
**action** 是把数据从应用传到 store 的有效载荷。它是 **store数据** 的唯一来源。

### reducer
**reducer**指的是纯行为函数，描述store的修改。


## 实践
 - 新建`reducer.js`：定义 各类行为 对 store 的影响
 - 实例化`store`：向 `createStore` 传入 `reducer`
 - 引入`Provider`组件：利用React context，将传入的 store传递给子组件
 - 注入到`业务组件`：利用`connect`包装业务组件，将 store、dispatch 注入到组件

**reducer.js**：
```jsx
export default (state = {}, action) => {
    if (!state) return {
        themeColor: 'red';
    }

    // 修改颜色的方法
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, themeColor: action.themeColor };
        default:
            return state;
    }
}
```

**index.js**：
```jsx
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer)

const App = () => (
    <Provider store={store}>
        <Component store={store} />
    </Provider>
)
```


**./Header.jsx**：
```jsx
class Header extends React.Component {
    render() {
        return (
            <div>
                现在的颜色是：{ this.props.themeColor }

                <button onClick={() => this.props.changeColor('blue')}>Change to Blue</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    themeColor: state.themeColor;
})
const mapDispatchToProps = dispatch => ({
    changeColor: color => {
        dispatch({ type: 'CHANGE_COLOR', themeColor: color }); // 调用dispatch来通知redex store修改数据，必须有type告诉 store 要修改哪些数据
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
```