# 性能优化
> 这里会记录下一些有关React的性能优化知识

## Key
`key`能让组件保持结构对的稳定性

## shouldComponentUpdate
相当关于`React.Memo`（是一个高阶组件，内置了useMemo方法来缓存）

## 避免使用匿名函数
每次渲染都会重新生成该函数

## 延迟加载不是立即需要的组件
`React.lazy(() => import('...'))`;

## 使用React.Fragment避免添加额外DOM

缺点：需手动引入所有Icon
