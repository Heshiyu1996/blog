# webpack5笔记

## 重点内容
 - 通过持久缓存提高构建性能
 - Tree Shaking支持嵌套、Commonjs
 - Module Federation
 - 改善长期缓存算法

### 持久缓存
以前现象：针对大部分`node_modules`以“Hash处理并加盖时间戳”的形式去构建的代价昂贵：会大大降低webpack的执行速度。

解决：跳过`node_modules`，并以npm包的name、version作为数据源。

提供缓存类型：文件系统（filesystem）
> 默认情况下**不会开启**

```js
module.exports = {
  cache: {
    // 1. Set cache type to filesystem
    type: 'filesystem',

    buildDependencies: {
      // 2. Add your config as buildDependency to get cache invalidation on config change
      // 当配置文件（或配置文件中通过require依赖的任何内容）发生变化时，缓存会失效
      config: [__filename]

      // 3. If you have other things the build depends on you can add them here
      // Note that webpack, loaders and all modules referenced from your config are automatically added
    }
  }
};
```

### Tree Shaking
嵌套Tree Shaking：可以清除未使用的导出

允许消除未使用的CommonJs导出
> 支持从`require()`调用中跟踪引用的导出名称

:::tip
“副作用”：

手动标记：在`package.json`中的`sideEffects`标记为“无副作用”

自动标记：webpack5对源代码进行静态分析，自动将模块标记为“无副作用”
:::

### Module Federation
可以依赖一个远程模块（可视作一个微前端独立模块）。

原理：宿主系统通过配置名称来引用远程模块，同时在编译阶段宿主系统不需要了解远程模块，仅仅在运行时通过加载**远程模块的入口文件**来实现。

模块的特点：
 - 模块之间可以声明公共的依赖库
 > 避免独立模块间的依赖冗余/冲突
 - 每个独立模块会在运行时生效，不影响编译时


扩展阅读：[hard-source-webpack-plugin](https://github.com/mzgoddard/hard-source-webpack-plugin)

### 改善长期缓存算法
针对`moduleId`、`chunkId`的计算方式进行了优化，使它们最终生成3-4位的数字id，实现长期缓存。
> moduleId 根据上下文模块路径，chunkId 根据 chunk 内容计算