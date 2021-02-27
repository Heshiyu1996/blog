# 性能优化
> 这里会记录下一些有关React的性能优化知识

## Key
`key` 可以在 `Element Diff阶段` 尽可能复用旧节点，从而减少 Diff 时间。

## shouldComponentUpdate
指定 `shouldComponentUpdate` 可以在 `Component Diff阶段` 对 “同一类型组件” 直接跳过Diff，从而减少 Diff 时间。
> 声明 `PureComponent` 时，会以 “浅层比较” 的方式，来比较 `props`、`state`，从而实现类似 `shouldComponentUpdate` 的效果。


## 避免使用匿名函数
尽量避免每次渲染都**重新声明不同的函数引用**。

## 延迟加载
通过 `React.lazy` 将 非必要组件 进行拆包，从而实现延迟加载。

## 减少DOM数量
`<> </>`、`React.Fragment`

## SSR
提升页面首屏渲染性能。
