# Redux
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
