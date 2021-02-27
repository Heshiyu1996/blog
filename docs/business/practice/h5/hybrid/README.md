# hybrid应用
> hybrid app 结合了 native app良好用户交互体验 和 web app跨平台开发的优势 ，能够显著节省移动应用开发的时间和成本，hybrid app得到越来越多公司的青睐。

## 问题：排查RPC回调是否正常
### 背景
针对小程序 `mp.view.queryDidChanged` RPC协议的回调下发问题。

 - 前端侧：没有触发RPC回调；
 - 客户端侧：已经监听成功并下发了回调信息。

### 分析
 - 最初是因为 `@mnb/mnb-music` 没有`on`方法（无任何报错，v2.0后支持）
 - 接着升级包后，客户端反馈已能监听事件，但紧接着就解绑了
 - 由于协议在`mp.view`容器下，且本地无法模拟“通过小程序打开，并切换同AppID下不同参数的情况”（尝试使用MusicDevTools，但每次退出小程序都不会保活（就算加了reuse也无效）
 - 计划在测试环境排查日志。改变了 `window.MNBCallback` 的this指向后，查看到的RPC回调日志如下：

<img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5180461967/8499/a309/1230/600050f3140f3ad4517d97d398b27c6a.png" width="375px" />

<img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5180465777/1fd8/91ff/be5d/2ea48a886353feb1abc9b20a5a458311.png" width="375px" />

 - 发现“并无”打印出相应的回调记录
 - 经过执行以下语句模拟客户端执行回调，发现协议回调可正常执行。同时也看到打印出真实的报错日志
```js
MNBCallback("",null,{"query":"channelId=19147"},{"objectId":null,"event":"queryDidChange","class":"mp.view","keepLive":false})
```
 
### 总结
 - 该协议正常
 - cello脚手架内的mnb-music版本较低（需2.0以上才支持mnb.on方法）
 - queryDidChange回调里执行了有错误逻辑的业务代码，导致mnb内对于该次回调的日志无法打印


## 直播流播放器抛出error后，后续操作无法进行
长时间断网，客户端会抛出onWaiting -> onError。error后这个播放器实例就会摧毁。

这种情况需要前端重新setInfo以实例化

 - JSBridge没有提供playerState为error情况（客户端所述，实际为idle，但对于业务只判断这个状态是不可取的）
 - 通过onError触发后重置播放状态，并记录error; 用户每次播放时校验error以进行正常播放还是setInfo




## mnb-core、mnb-rn、mnb-music、mnb-schema的区别
**mnb-core**: JSBridge的底层调用逻辑，仅封装与客户端之间的通信逻辑，不包含任何协议。
> 默认支持`@music/mnb-extension-mobile`
> 
```js
import mnb from './core/context';
import addMethod from './core/addMethod';
import addClass from './core/addClass';
import addFallback from './core/addFallback';
import { postMessage, onJSBridgeCallback } from './core/postMessage';
import { bindEvent, unbindEvent } from './core/event';

const onEvent = mnb.on;
const offEvent = mnb.off;

Object.assign(mnb, {
    /** 用于添加全局方法 */
    addMethod,

    /** 用于添加对象和实例方法 */
    addClass,

    /** 用于添加降级逻辑 */
    addFallback,

    /**
     * 添加扩展包，用于支持不同的环境，扩展包请在 npm 中搜索 mnb-extensions
     * @param {Array} extensions 扩展包，例如 require('@music/mnb-extensions-mobile')
     */
    register(extensions) {
        if (!extensions || typeof extensions.forEach !== 'function') return;

        extensions.forEach((extension) => {
            // 每个客户端环境只会有一个扩展包
            if (mnb.extension) return;

            if (extension.isSupport()) {
                // eslint-disable-next-line no-underscore-dangle
                this._setExtension(extension);
            }
        });
    },

    on(...args) {
        const { event, callback } = bindEvent.call(this, ...args);
        onEvent.call(this, event, callback);
    },

    off(...args) {
        const { event, callback } = unbindEvent.call(this, ...args);
        offEvent.call(this, event, callback);
    },

    /** 直接调用 native 协议 */
    _postMessage: postMessage,

    /** 执行客户端回调 */
    _onJSBridgeCallback: onJSBridgeCallback,

    // eslint-disable-next-line no-underscore-dangle
    _setExtension(extension) {
        mnb.extension = extension;
        extension.init(mnb);
    }
});

/** 默认支持移动端 */
// eslint-disable-next-line global-require
mnb.register([require('@music/mnb-extension-mobile')]);

export { isInNEMusic } from './utils/env';

export default mnb;

```

**mnb-music**：云音乐的JSBridge，基于`mnb-core`的业务封装
> 会判断isInMusic()再添加协议

```js
/* eslint-disable no-param-reassign */
import mnb from '@music/mnb-core';
import meta from '@music/mnb-schema';
import fallbacks from './fallback';
import { isInMusic } from './utils/env';

if (isInMusic()) {
    // 添加协议
    const data = meta.data;
    const list = [...data.general, ...data.mp, ...data.music];
    list.forEach((item) => {
        if (item.methods) {
            // OOP
            mnb.addClass(item);
        } else {
            // 全局方法
            mnb.addMethod(item);
        }
    });

    // 添加fallback
    fallbacks.forEach((fallback) => {
        mnb.addFallback(fallback);
    });
}

export default mnb;

```

**mnb-rn**：基于`mnb-core`
> 由`mnb-core`注册了`@music/mnb-extension-rn`后生成，包含`@music/mnb-core`的所有功能，以及RN的特定协议

```js
/* eslint-disable no-param-reassign */
import mnb from '@music/mnb-core';
import meta from '@music/mnb-schema';
import { schemas } from './utils/schema';

// eslint-disable-next-line global-require
mnb.register([require('@music/mnb-extension-rn').default]);

const defaultSchema = meta && meta.data;

schemas.forEach((schema) => {
    if (schema.methods) {
        // OOP
        mnb.addClass(schema);
    } else {
        // 全局方法
        mnb.addMethod(schema);
    }
});

if (defaultSchema) {
    for (const key in defaultSchema) {
        // eslint-disable-next-line no-prototype-builtins
        if (defaultSchema.hasOwnProperty(key)) {
            defaultSchema[key].forEach((schema) => {
                if (schema.methods) {
                    // OOP
                    mnb.addClass(schema);
                } else {
                    // 全局方法
                    mnb.addMethod(schema);
                }
            });
        }
    }
}


export default mnb;

```

**mnb-schema**：业务场景会引用`src/data/index`（通过获取mnb工作台接口自动生成）

```js
{
    md5: '', // data 对应的 md5 ，用于验证协议是否发生变化
    data: {
        // 云音乐的协议
        music: [
            {
                schema: '', // 客户端协议名
                name: '',   // 对应的 JS 方法名

                // 如果是 oop ，则有子方法，否则为 undefined
                methods: [
                    // 格式同上，但不会再嵌套 methods 字段
                ]
            },
            // ...
        ],

        // 直播的协议
        live: [
        ]
    }
}

```