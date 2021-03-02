# React性能优化
> 这里会记录下一些有关React的性能优化知识

[[toc]]

## 通用
### Key
`key` 可以在 `Element Diff阶段` 尽可能复用旧节点，从而减少 Diff 时间。

### 避免使用匿名函数
尽量避免每次渲染都**重新声明不同的函数引用**。

### 延迟加载
通过 `React.lazy` 将 非必要组件 进行拆包，从而实现延迟加载。

### 减少DOM数量
`<> </>`、`React.Fragment`

### SSR
提升页面首屏渲染性能。

### 子组件尽可能少地触发渲染
默认情况，当父组件渲染时，都会连带着子组件重新渲染。（不管有没有 props 传递）。

所以对于明确不需触发渲染的子组件，可以通过：
 - shouldComponentUpdate（Class组件）
 - PureComponent（Class组件）
 - React.memo（函数式组件）


## Class组件

### shouldComponentUpdate
```js
shouldComponentUpdate(nextProps, nextState) {
    // ...
}
```
> 默认行为是 `state` 每次发生变化，组件都会触发渲染

当手动指定 `shouldComponentUpdate` 返回 `false` 时， **不会触发渲染** 。（但不会阻止 子组件 “在 `state` 更改时触发渲染” 这一行为）


注意：“触发渲染” 不一定会导致 DOM 更新（如：render -> diff(发现DOM未变更) -> 不更新DOM）


### PureComponent
`PureComponent` 相比于 `shouldComponentUpdate`，只是加了一层 针对 `props`、`state` 的 “浅比较”。

如果两者的前后值都相同， **不会触发渲染** 。


#### 注意
误用 `React.PureComponent` 每次都会进行 `shallowEqual` ，而 `React.Component` 则不会，无形中花了更多的时间。





## 函数式组件
### React.memo
`React.memo` 是个 **高阶组件**。

当组件用 `React.memo` 包裹时，**若 `props` 没发生变更，不会触发渲染**。
> [demo](https://codesandbox.io/s/lingering-butterfly-c9uci?file=/src/App.js)

```jsx
function MyComponent (props) {}

function areEqual(prevProps, nextProps) {
    // return nextProps === prevProps;
}

// 默认情况只会做 “浅比较”，
// 也可传 第二个参数（areEqual） 进行 “自定义” 比较
export default React.memo(MyComponent[, areEqual]);
```
