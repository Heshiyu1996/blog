# React Hooks Source Code
> Hook是React 16.8的新特性。它可以让你在不编写class的情况下使用state以及其他的React特性。以下是笔者在最近三个月使用React Hooks的源码阅读笔记。
>
> （本文部分内容也参考了各个大牛观点，可详见参考链接）
>
> update: 2019-12-06

[[toc]]

## useState
在初始化阶段，useState是基于其在组件中的创建顺序加入hook链表的，并且在update阶段是依据之前创建好的链表去获取到相应要更新的hook queue，所以如果每次进入组件的时候useState的声明顺序都不一致，则会在更新阶段无法找到正确的hook queue和update，导致整个setState的逻辑混乱。这也就是为什么不要在循环、条件判断或者子函数中去调用hook，因为这些操作无法保证每次的结果都是一致的。


[State Hook与Effect Hook解析](https://zhuanlan.zhihu.com/p/64881911)