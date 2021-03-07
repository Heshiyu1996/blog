# RN
> RN是跨平台移动端开发框架。

[[toc]]

## RN的优点
1. 跨平台兼容性
    - 编写一套代码，部署到 iOS、Android
2. 用户体验上，与 “原生应用” 几乎相同
    - 最终产出是真正的移动应用
3. 学习成本低
    - React、CSS即可开发

### 缺点
对于 “复杂应用” 的开发效率较低，甚至需要 “原生开发” 来实现。

## React Native 容器生命周期

```js
/**
 * React Native 容器生命周期
 * - 容器维度（非路由维度）
 */

import {
    Platform,
    NativeModules,
    NativeEventEmitter,
    DeviceEventEmitter,
} from 'react-native';

export const LIFE_STATE = {
    WillAppear: 1,
    DidAppear: 2,
    WillDisappear: 4,
    DidDisappear: 5
};
export default function onLifeStateChange(callback) {
    const { NMRCTRootViewLifeCircleModule = {} } = NativeModules;
    const LifeEventEmitter = Platform.select({
        ios: new NativeEventEmitter(NMRCTRootViewLifeCircleModule),
        android: DeviceEventEmitter,
    });

    return LifeEventEmitter.addListener('onStateChange', ({ state }) => {
        callback(state);
    });
}
```

业务侧使用方式:
```js
import onLifeStateChange, { LIFE_STATE } from './life-state.js';

function App() {

    const onLifeChange = (state) => {
        // 曝光回调
        if (state === LIFE_STATE['DidAppear']) {
            /* 曝光执行 */
        }
    }
    useEffect(() => {
        onLifeStateChange(onLifeChange);
    }, []);
}
```


## 获取设备屏幕宽高
```js
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
```

## (Android)获取new Date()转换时间提示Invalid Date
传入的`timestamp`只能为数字，不能为字符串。

## RN安卓的空数组为null
```js
// 否则为null，没有length数据
(list || []).length
```


## 字体相关优化处理
```js
// text.js
import { Text } from 'react-native';
import { setCustomText } from 'react-native-global-props';
import { isAndroid } from '@utils/env';

// 禁用系统字体缩放
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

// 解决小米兰亭 Pro 字体问题：https://www.jianshu.com/p/131470cfc799
// iOS 这么写会 crash，所以要判断一下环境
if (isAndroid) {
    setCustomText({
        style: {
            fontFamily: ''
        }
    });
}
```


## 工程搭建问题
### 提示watchman isn't running

> React Native uses watchman to detect when you've made code changes and then automatically build and push the update your device without you needing to manually refresh it.

![alt](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5770133057/c3c6/fa3b/4737/669db5956eafae58b553d624198b05d7.png)


方法一：（电脑内存问题）
 - 用同事电脑直接启动，观察是否存在`pending`问题

方法二：（watchman的缓存数上限问题）
> 保持`metro.config.js`下的`watchFolders`的`packages`
 - `watchmanconfig`的`content-hash-max-items`
    - 在`packages`下执行：`find /Users/coolman/project/react-native-app | wc -l`查找文件数量
    - https://github.com/facebook/watchman/issues/731
    - 记得将内存清理

不行再尝试手动指定监听文件夹：
 - 在 `metro.config.js`的`watchFolders`手动加`-core、-rn、-h5`或`-rn、-h5`

 1. Clear watchman watches: `watchman watch-del-all`.
  2. Delete the `node_modules` folder: `rm -rf node_modules && npm install`.
  3. Reset Metro Bundler cache: `rm -rf /tmp/metro-bundler-cache-*` or `npm start -- --reset-cache`.
  4. Remove haste cache: `rm -rf /tmp/haste-map-react-native-packager-*`.
    at ModuleResolver.resolveDependency (/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-rn/node_modules/metro/src/node-haste/DependencyGraph/ModuleResolution.js:183:15)


### package.json内的main字段
```
error: bundling failed: Error: While trying to resolve module `@music/rpc-audio-rn` from file `/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-demo/src/pages/home/index.js`, the package `/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-rn/package.json` was successfully found. However, this package itself specifies a `main` module field that could not be resolved (`/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-rn/dist/index.js`. Indeed, none of these files exist:

  * `/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-rn/dist/index.js(.native||.ios.js|.native.js|.js|.ios.json|.native.json|.json|.ios.ts|.native.ts|.ts|.ios.tsx|.native.tsx|.tsx)`
  * `/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-rn/dist/index.js/index(.native||.ios.js|.native.js|.js|.ios.json|.native.json|.json|.ios.ts|.native.ts|.ts|.ios.tsx|.native.tsx|.tsx)`
    at ResolutionRequest.resolveDependency (/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-demo/node_modules/metro/src/node-haste/DependencyGraph/ResolutionRequest.js:65:15)
    at DependencyGraph.resolveDependency (/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-demo/node_modules/metro/src/node-haste/DependencyGraph.js:283:16)
    at Object.resolve (/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-demo/node_modules/metro/src/lib/transformHelpers.js:264:42)
    at dependencies.map.result (/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-demo/node_modules/metro/src/DeltaBundler/traverseDependencies.js:399:31)
    at Array.map (<anonymous>)
    at resolveDependencies (/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-demo/node_modules/metro/src/DeltaBundler/traverseDependencies.js:396:18)
    at /Users/heshiyu/pros/rpc-audio/packages/rpc-audio-demo/node_modules/metro/src/DeltaBundler/traverseDependencies.js:269:33
    at Generator.next (<anonymous>)
    at asyncGeneratorStep (/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-demo/node_modules/metro/src/DeltaBundler/traverseDependencies.js:87:24)
    at _next (/Users/heshiyu/pros/rpc-audio/packages/rpc-audio-demo/node_modules/metro/src/DeltaBundler/traverseDependencies.js:107:9)
```

### 修改了.babelrc配置不生效
需要清除RN缓存
```bash
npm start --reset-cache
```
