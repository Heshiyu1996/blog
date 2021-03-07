# 梳理
> “程序员” 不是 “程序机器”；机器可以不用产生疑惑，人却需要不断产生疑惑！

[[toc]]

## 一、基础
CSS：
 - CSS权重（父嵌子，子哪个权重比较大）
 - CSS实现两列布局
 - 伪类、伪元素的区别

JS：
 - 排序算法、复杂度
 - 尾递归是什么？
 - Sort方法的运用
 - 深拷贝、复杂度
 - “恒等”和“等于”的区别
 - Set、Map、类数组
 - this指向
 - ES7新功能，Async、Await
 - Async、Promise的执行顺序
 - 如何理解TypeScript
 - TS里interface、type的作用、区别（以及typeof）
 - 介绍下Promise，底层如何实现链式？
 - JS设计模式
 - JS正则
 - JS事件循环
 - PWA是什么
 - 原型链相关（用ES5实现一个Class；实现继承。Prototype、Constructor、obj）
 - 事件委托（addEventListener的参数）

Web：
 - Web攻击
 - 强缓存/协商缓存
 - HTTP相关（HTTP、HTTPS、HTTP2.0）
 - 长轮询、短轮询、WebSocket
 - CORS跨域
 - 介绍下Nginx
 - 路由模式（History、Hash）
 - JSBridge的工作原理（两端的调用方式，callback是谁执行、如何执行）

Node：
 - Node事件循环
 - express和koa的区别
 - 中间件的特点
 - 洋葱模型


## 二、框架
 - 生命周期
 - 什么情况会触发Render
 - setState原理
 - React的Hooks和class比较
 - React合成事件的理解、触发时机（冒泡）、与"原生事件"的区别/触发顺序（原生先）
 - Diff算法具体
 - Fiber
 - React跨组件通信（context、数据管理工具）
 - React性能优化
 - PureComponent、shouldComponentUpdate、React.memo
 - HOC的写法（几种）、作用、ref转发（以及用过哪些HOC）
 - HOC、render prop、Hook的区别（render prop的缺点）
 - 底层API（React.createElement）
 - 如何实现对象的浅、深比较
 - useCallback的内部实现
 - 为什么React组件要用大写
 - 为什么写Class组件时要 import React from ‘react’
 - Class组件的方法为什么要用bind绑定？

## 三、项目
通用：
 - 移动端响应式方案（rem原理）
 - 移动端兼容性问题（1px的伪元素解决方案、Android单行字体行高）
 - 组件的设计原则
 - 脚手架里的各种工具（webpack、Babel、ESLint、Prettier、Stylelint、Husky）
 - Webpack是什么？用过哪些loader、plugins
 - Babel用来做什么事情？babel-polyfill是做什么的？如何按需引入
 - SASS相关配置
 - dpr怎么计算？
 - import 和 require 有什么区别？
 - 离线包的工作原理
 - RN的好处在哪？
 - 小程序和H5的区别在哪？
 - 多并发请求的处理？（客户端：强缓存/协商缓存、CDN；服务端：Nginx）
 - SSR的原理、好处、注意事项（为什么其他页面不用SSR？）
 - 【Node】如果遇到不支持的对象（如window、document），在Node这边如何解决？

实践：
 - 移动端的性能优化、检测方案
    - 性能优化的做法（具体成果），常用名词的含义（秒开率、大盘性能）
    - 性能优化：指标认识（FID采集时间、各指标标准、应对极端情况的采集）
    - 性能优化：如何拆包、延迟加载（是否影响用户体验）
    - 性能优化：JS、CSS代码瘦身的有哪些做法
    - window.performance ，fetchStart的含义（计算白屏时间）
    - 性能优化：如何优化首屏时间？（代码瘦身/拆包、延迟加载、强缓存、CDN、SSR、WebView-接入离线包）
    - 性能优化：以往传统的优化方式、手段是怎样的
    - 性能优化：为什么用gzip进行比较？
    - 针对CSS如何拆包，CSS的加载时机？
    - 有哪些优化方式
    - 图片压缩的方式（webpack、tiny、有损、无损）
    - 怎么做首屏优化
 - 大列表数据渲染性能做了哪些措施（虚拟列表）
 - 组件封装是做了哪些工作？（如何设计的组件，大致组成）
 - 哪个项目令你印象最深，为什么


## 四、编程
 - 数组的全排列
 - 一串整型数字的最长连续子序列长度（输入：4125678；输出：4）
 - 实现一个EventEmitter类（具有on、off、emit方法）
 - React合成事件、生命周期、原生事件下的setState
 - 实现compose函数

## 五、开放性问题
 - 你认为你在业务的贡献、产出？
 - 最近关注了哪些前端前沿技术（Web-Vitals、Webpack5 Module Federation）
 - 平时如何学习前端？
