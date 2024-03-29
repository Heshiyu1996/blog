# 梳理
> “程序员” 不是 “程序机器”；机器可以不用产生疑惑，人却需要不断产生疑惑！

[[toc]]

## 一、基础
CSS：
 - [CSS权重（父嵌子，子哪个权重比较大）](/skill/css/other/#css%E9%80%89%E6%8B%A9%E5%99%A8%E6%9D%83%E9%87%8D)
 - [CSS实现两列布局](/skill/css/layout/#%E5%B8%B8%E8%A7%81%E5%B8%83%E5%B1%80%E6%96%B9%E6%A1%88)
 - [伪类、伪元素的区别](/skill/css/other/#%E4%BC%AA%E7%B1%BB%E3%80%81%E4%BC%AA%E5%85%83%E7%B4%A0)
 - [class的声明顺序对最终无影响](/skill/css/other/#class的声明顺序对最终无影响)

JS：
 - [排序算法、复杂度](/skill/algorithm/sort/)
 - [尾递归是什么？](/skill/js/other/#%E5%B0%BE%E9%80%92%E5%BD%92)
 - [Sort方法的运用](/skill/js/sort/#%E5%90%84%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E7%AE%97%E6%B3%95%E5%AE%9E%E7%8E%B0)
 - [深拷贝、复杂度](/skill/js/other/#%E6%B7%B1%E6%8B%B7%E8%B4%9D)
 - [“恒等”和“等于”的区别](/skill/js/other/#%E5%92%8C-%E7%9A%84%E5%8C%BA%E5%88%AB)
 - [let未声明时提前输出](/skill/js/other/#var、let、const)
 - [Set、Map](/skill/js/other/#es6%E6%96%B0%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84set%E3%80%81map)
 - [类数组](/skill/js/other/#%E7%B1%BB%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E3%80%81%E5%8F%AF%E9%81%8D%E5%8E%86%E5%AF%B9%E8%B1%A1)
 - [this指向](/skill/js/other/#this%E7%9A%84%E6%8C%87%E5%90%91)
 - [new操作符的原理](/skill/js/other/#new操作符经历了哪些步骤)
 - [ES7新功能，Async、Await](/skill/js/async-plan/#async、await)
 - Async、Promise的执行顺序
 - [介绍下Promise，底层如何实现链式？](/skill/js/promise)
 - [如何理解TypeScript](/skill/js/typescript/#%E5%A6%82%E4%BD%95%E7%90%86%E8%A7%A3typescript)
 - [TS里interface、type的作用、区别（以及typeof）](/skill/js/typescript/#type%E4%B8%8Einterface)
 - JS设计模式
 - JS正则
 - [JS事件循环](/skill/js/event-loop/#%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF-eventloop)
 - 原型链相关（用ES5实现一个Class；实现继承。Prototype、Constructor、obj）
 - [事件委托（addEventListener的参数）](/skill/js/other/#%E4%BA%8B%E4%BB%B6%E5%A7%94%E6%89%98)

Web：
 - Web攻击
 - HTTP缓存机制（区别、优先级）
 - HTTP相关（HTTP、HTTPS、HTTP2.0）
 - 长轮询、短轮询、WebSocket
 - CORS跨域
 - 介绍下Nginx
 - [为什么静态资源要放在多台CDN服务器上](/skill/web/cdn/#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%B5%84%E6%BA%90%E8%A6%81%E7%94%A8%E5%A4%9A%E4%B8%AAcdn%E6%9C%8D%E5%8A%A1%E5%99%A8)
 - [PWA是什么、如何更新缓存](/skill/web/pwa/#service-worker)
 - 离线包的机制、时机、差量更新
 - [路由模式（History、Hash）](/skill/web/history)
 - [JSBridge的工作原理（两端的调用方式，callback是谁执行、如何执行）](/skill/web/jsbridge)

Node：
 - [Node事件循环](/skill/js/event-loop/#node%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF)
 - [express和koa2的区别](/skill/nodejs/koa/#koa2%E7%9A%84%E4%BC%98%E7%82%B9)
 - [中间件的特点、洋葱模型](/skill/nodejs/koa/#koa2%E7%9A%84%E4%B8%AD%E9%97%B4%E4%BB%B6)

## 二、框架
 - [生命周期](/skill/react/life-cycle)
 - [什么情况会触发Render](/skill/react/basic/#触发render的方式)
 - [setState原理](/skill/react/set-state)
 - [React的Hooks和class比较](/skill/react/feature-v16/#函数式组件-与-class组件)
 - [React事件系统（合成事件的理解、触发时机、与"原生事件"的区别/触发顺序）](/skill/react/events)
 - [Diff算法具体](/skill/web/diff)
 - [Fiber](/skill/react/fiber)
 - [React跨组件通信（context、数据管理工具）](/skill/react/context)
 - [React性能优化](/skill/react/optimize)
 - [PureComponent、shouldComponentUpdate、React.memo](/skill/react/optimize/#shouldcomponentupdate)
 - [HOC的写法（几种）、作用、ref转发（以及用过哪些HOC）](/skill/react/react-composition)
 - [HOC、render prop、Hook的区别（render prop的缺点）](docs/skill/react/react-composition)
 - [底层API（React.createElement）](/skill/react/basic/#react-createelement)
 - [如何实现对象的浅、深比较](/skill/react/basic/#shallowequal（浅比较）、deepequal（深比较）)
 - [useCallback的内部实现](/skill/react/hooks-usage/#依赖项-发生改变-是指改变了什么？)
 - [为什么React组件要用大写](/skill/react/basic/#react-createelement)
 - [为什么写Class组件时要 import React from ‘react’](/skill/react/basic/#react-createelement)
 - [Class组件的方法为什么要用bind绑定？](/skill/react/basic/#为什么react组件的方法需要bind)

## 三、项目
通用：
 - [移动端响应式方案（rem原理）](/business/practice/h5/responsive/#rem)
 - [移动端兼容性问题（1px的伪元素解决方案、Android单行字体行高）](/business/practice/h5/#android下line-height文字垂直居中偏移问题)
 - [组件的设计原则](/skill/js/design-patterns/#js设计原则（solid）)
 - [Webpack是什么？用过哪些loader、plugins（拆包）](/business/tool/webpack)
 - [Babel用来做什么事情？babel-polyfill是做什么的？如何按需引入](/business/tool/babel)
 - [dpr怎么计算？](/skill/css/px/#dpr)
 - [import 和 require 有什么区别？](/skill/js/modular/#commonjs%E5%92%8Ces6-module%E7%9A%84%E5%8C%BA%E5%88%AB)
 - [离线包的工作原理](/skill/web/h5-webcache/)
 - [RN的好处在哪？](/business/practice/rn/#rn的优点)
 - [小程序和H5的区别在哪？](/skill/web/mini-program)
 - 多并发请求的处理？（客户端：强缓存/协商缓存、CDN；服务端：Nginx）
 - [SSR的原理、好处、注意事项（为什么其他页面不用SSR？）](/skill/react/react-ssr)
 - [【Node】如果遇到不支持的对象（如window、document），在Node这边如何解决？](/skill/react/react-ssr/#node无法访问window对象)

实践：
 - 移动端的性能优化、检测方案
    - [指标认识（各指标标准、FID采集时间、秒开率、fetchStart）](/skill/web/optimize/#性能指标)
    - [JS、CSS代码瘦身的有哪些做法（拆包、减包、压缩）](/business/practice/h5/optimize/#拆包、减包、压缩)
    - [懒加载（是否影响用户体验）](/business/practice/h5/optimize/#懒加载)
    - [如何优化首屏时间？（代码瘦身/拆包、延迟加载、强缓存、CDN、SSR、WebView-接入离线包）](/business/practice/h5/optimize/#移动端首屏性能优化)
    - [图片压缩的方式（webpack、tiny、有损、无损）](/business/practice/h5/optimize/#资源加载)
    - 性能优化：以往传统的优化方式、手段是怎样的
    - 针对CSS如何拆包，CSS的加载时机？
    - 性能优化的做法（具体成果）
 - 大列表数据渲染性能做了哪些措施（虚拟列表）
 - 组件封装是做了哪些工作？（如何设计的组件，大致组成）
 - 哪个项目令你印象最深，为什么


## 四、编程
 - 数组的全排列
 - 一串整型数字的最长连续子序列长度（输入：4125678；输出：4）
 - 实现一个EventEmitter类（具有on、off、emit方法）
 - React合成事件、生命周期、原生事件下的setState
 - [实现compose函数](/skill/algorithm/compose/)
 - [实现add(1)(2)(3)()](/skill/algorithm/add-valueof)
 - [实现request函数](/skill/algorithm/request/)


## 五、开放性问题
 - 最近关注了哪些前端前沿技术（Web-Vitals、Webpack5 Module Federation）
 - 平时如何学习前端？
 - Vue3有哪些新特性
 - 自动化部署（ci、git 发http 到部署平台、webhook）
 - 你认为你在业务的杰出贡献、产出？
 - 目前在团队担任角色、职责，日常工作流程
 - 业务项目背后的思考
 - 平时如何学习前端、学习习惯
 - 对前端的看法，未来趋势
 - 个人的未来规划
 - 个人的优缺点
 - 如何看待加班？
 - 为什么当初选择杭州？
 - 为什么选择曲库？
 - 曲库的背景、业务前景