# 个性化触达平台

[[toc]]

## 基本信息
 - 所用技术: React、Ant Design、Webpack、NOS、react-virtualized
 - 描述: 供云音乐运营同事使用的用户流失召回管理平台，具有“重组件、轻⻚面”特点。
 - 成果: 每日DAU贡献近30w;个性化用户触达运营工作耗时降低66%(从原来3天减少到1天);支持多产品多业务线的接入，且接入成本低;前端组件具有较好的复 用性和可维护性。

## 职责
 - 项目搭建；
 - 复杂表单组件开发；通用Hooks封装；
 - 大列表数据渲染性能调研/提升；
 - 大附件上传(对接NOS)；


## 难点
### 大列表数据渲染性能
渲染 10000 条数据（不采用分页），页面渲染缓慢，且滚动卡顿。
#### 思路
 - 一次性加载，白屏时间长达 9s（通过 `chrome - showRender / Performance` 发现 FPS 降到 30 以下）
 - `setTimeout` 分批渲染：白屏缓解，但会出现闪屏
 - `requestAnimationFrame` 分批渲染：白屏缓解，不会出现闪屏
 - 调研 `react-virtualized` 和 `react-tiny-virtual-list`

最终采用 `react-tiny-vitual-list` （轻量，简单）。
> 虽然 `react-virtualized` 支持动态高度，并且 Antd 也推荐使用；但对于此业务场景不匹配。

#### react-tiny-virtual-list
`react-tiny-virtual-list` 实现了 “虚拟列表”，只渲染 可视区域内 的一部分列表元素。


原理：
 1. 根据 滚动容器 的 `scrollTop` 先计算出 可视区域的第一个元素 `start` 值
 2. 根据 `start` 对应元素的 `offset` 以及 容器元素的大小，计算出 可视区域内 最后一个可见元素 的索引（即 `stop`）
 3. 根据 `start` 、 `stop` 来改变 可视区域 需要渲染的内容。


### 大附件上传（对接NOS）
基于 Antd 的 `Upload` 组件，实现的 “大附件分片上传”。

:::tip
使用到的 服务端Api：
 - multiUploadInit：初始化，获取 `nosKey`、`uploadId`
 - multiUpload：分片上传
 - multiUploadComplete：结束上传
:::

#### 思路
1. 指定 `Upload` 组件的 `customRequest` 属性（自定义上传行为）

2. 组装“分片数组”：
   - 确定分片的个数、每片大小
   - 将 file 转成 `blob对象` ，通过 `blob.slice()` 切片
   - 每片为一个 `formData` 对象，存入“分片数组”

3. 根据 “分片数组”，生成 “promise队列”，并传入 Promise.all

4. 当 Promise.all 状态改变时，调用结束上传
