# 跨端音频组件上层封装（RN、H5）

## 基本信息
 - 所用技术: ES7、Babel、Webpack、ReactNative、Lerna、Mnb
 - 描述: 针对云音乐RPC音频播放能力的上层组件封装，以及抹平Native两端不一致问题。
 - 成果: 已承接云音乐App内部分播放场景(如排行榜、新歌发布⻚等);对⻬Native两端功能;提升音频RPC接入效率;提高工程维护性。

## 职责
 - 调研主流Audio Context;
 - 组件设计与封装;
 - 多平台(RN、H5)拆包;
 - 跟进客户端RPC问题;
 - 提供组件文档、Demo;

## 概念图
<img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7967604397/0251/f157/fd44/1bfabda833e745a965fdf708b2b922bc.png" width="400px" />

## 难点
### 组件设计与封装
组件设计原则
 - 单一原则：每个模块的职责单一
    - 事件管理实例（EventManager）：对于每个事件（playerChanged、songChanged）的JSBridge调用，进行单一封装。参数合法化
 - 开放封闭原则：模块允许扩展，避免在原设计上修改
    - 播放器实例（PlayerManager）：可以往PlayManager加入更多方法，但尽量不修改原有方法
 - 里式替换原则：调用子模块依然能保证父模块的功能
    - rpc-audio-h5依然能实现rpc-audio-core的功能
 - 接口隔离原则：在实现功能的前提下，依赖尽少的模块
    - rpc-audio-h5、rpc-audio-rn，根据平台只引入其中一个
 - 依赖倒置原则：复杂模块应该依赖于抽象的接口，而不应该依赖于低级模块的具体实现

### 设计模式
PlayerManager、EventManager、RPCManager
 - 工厂模式
 - 单例模式
    - 播放器实例（PlayerManager）：构造函数判断是否存在实例，若是则返回player
 - 观察者模式
 - 发布订阅模式
    - 事件管理实例（EventManager）：绑定（on）、触发（emit）、解绑（off）事件
 - 代理模式

### AudioContext
调研AudioContext