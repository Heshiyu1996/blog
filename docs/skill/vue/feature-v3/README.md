# Vue3.0新特性

[[toc]]

## Function-based API
### 在使用上
 - 更灵活的逻辑复用
 - 没有命名空间冲突
 - 数据来源清晰

### 目前Vue里逻辑组合复用的方式
 - Mixins
 - HOC
 - Renderless Component（基于scoped slots封装逻辑的组件）

缺点：
 - 数据来源不明（Mixins、HOC）
 - 命名空间冲突（Mixins）
 - 性能损耗（HOC）

### setup
调用时机：在组件实例被创建、且初始化props后

作用：`return`对象里的属性会被暴露给模板的渲染上下文

![alt](./img/img-1.png);


## Proxy
vue3.0 会用 `Proxy` 来实现响应式数据。

### 废弃`Object.defineProperty`原因
在 vue2.x 无法通过数组下标来实现响应式数据的自动更新。
 - 虽然能vue的实现中，处于性价比考虑，所以放弃了这个特性
 - 因为对于 `push` 、 `unshift` 会增加索引，对于新增加额属性，需要再手动初始化（`vm.$set`）才能被 `obeserve`

**但实际上，`Object.defineProperty`是能监听 数组和的对象 的。**

#### 重写数组方法
但我们平时可以通过调用数组的`变异方法`来实现响应式，是因为 `vue 2.x` 重写了数组方法。

> 在Observer类里，对数据进行了判断，会将`arrayMethods`重写到原型上

当触发这些被重写的数组方法时，会触发手动observe


### Object.defineProperty和Proxy的区别
`Object.defineProperty`只能对属性进行劫持，需要遍历对象的每个属性。

`proxy`可以直接代理对象。

```js
const handler = {
    set (target, key, value) {
        cocnsole.log(key, 'set');
        target[key] = value;
        return true;
    }
}

const target = [];
const proxy = new Proxy(target, handler);
proxy.push(1)
```

但是`Proxy`的兼容性差，IE不支持。但后续可能会出现polyfill方案。

## 参考链接
[为什么Vue3.0使用Proxy实现数据监听？defineProperty表示不背这个锅](https://juejin.im/post/5da29a87518825094e37301c)