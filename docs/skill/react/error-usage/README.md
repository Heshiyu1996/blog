# React常见的易错用法
> 日常中在使用React开发，记录一些易错的用法。

[[toc]]

## 「不可变性」相关
由于“不可变性”，使得React在渲染过程中的每一处都有可能产生Bug。
> 以下搜集于[TC39提案（Records & Tuples）对React的影响](www.apple.com.cn/retail/westlake/)
 - 性能上：可以避免的重复渲染
 - 行为上：重复执行一些多余的effect、无限循环
 - API上：对于一些重要的对象不能做到准确表示

大部分的React开发者都已经习惯了**不可变性（immutability）**
> 通俗点来说，就是每次试图去更新一个不可变的对象时，都会创建新的对象
>
> ![alt](./img/img-1.png)
>
> ![alt](./img/img-2.png)