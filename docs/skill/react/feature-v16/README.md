# React16新特性
> react 16

## 生命周期
将三个生命周期设为`UN_SAFE`：
 - componentWillMount
 - componentWillUpdate
 - componentWillReceiveProps

取代的是：
 - getDerivedStateFromProps
 - getSnapshotBeforeUpdate

[React生命周期](/skill/react/life-cycle/)

## Hooks
Hooks 主要是解决`状态逻辑复用问题`，将组件的UI与状态分离。

[Hooks](/skill/react/hooks/)

## 全新的context API
`React`官方不推荐使用原有的Context API，因为context值更新后，顶层组件向目标组件`props`透传过程中，如果中间某个组件`shouldComponentUpdate`返回了false，那将无法触发底层组件`render`，新的context值也无法达到目标组件。

新的Context API采用声明式写法，并且可以透过 `shouldComponentUpdate`返回false的组件继续向下传播

## 代码分割
`React.lazy` 提供了`动态 import 组件`的能力，实现代码分割。

`Suspense` 作用：在等待组件时 suspend（暂停）渲染，并显示加载标识。

## 错误处理机制
新增生命周期`componentDidCatch`
