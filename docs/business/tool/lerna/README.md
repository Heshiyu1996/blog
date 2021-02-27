# Lerna
提供了一种集中管理package的目录模式，提供了一套自动化管理程序。让开发者在根项目就可以全局掌控（基于`npm scripts`）

将多个子包放到一个大工程下，然后通过`packages`里管理它们。

> 注意: 这些子包的仓库只有一个，也就是这个大工程。

## 初始化lerna工程
```bash
lerna init
```
会创建一个最普通的lerna脚手架：
```
lerna-repo/
    packages/
    package.json
    lerna.json
    Lerna-debug.json // 存储错误日志
```


## 创建子包
会在`packages`下新建一个子包，供lerna统一管理。
```bash
lerna create pkg-name
```

## 导入子包
```bash
lerna package <path>
```
lerna会将指定路径的工程全部导入到`packages`下，并将所有的commit记录一并提交
> 注：这种形式下，子包的所在仓库依然是属于根目录工程下的

## 本地开发时，引用其他包

## lerna clean 清除所有子包的node_modules文件夹

## 注意
不要将子包设为`private: true`，否则它在lerna内的功能将受影响。

## 将子包间的依赖转为软链
 - [聊聊 package.json 文件中的 module 字段](https://loveky.github.io/2018/02/26/tree-shaking-and-pkg.module/)
![alt](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5774130483/76fe/01f0/a9f5/6f44c706a6225a994bd97de6c52d0b3c.png)
有 `WARN` 说明成功

软链优先级：`.babelrc`里的`alias`（Web） > `lerna link`

## 其它
在RN项目中，遇到软链失效时，可以参考：
 - [how-to-use-lerna-with-react-native](https://medium.com/@dushyant_db/how-to-use-lerna-with-react-native-1eaa79b5d8ec)

## 软链后，提示`Module not found: Can't resolve xxx`
可能由于webpack 设置了 `alias` 导致（但显示的依然是`alias`的名字）。
> webpack.alias -> 去子包里找不到`真身`
```js
// demo工程：
// webpack.config.js
resolve: {
    alias: {
        'react-native$': '@music/react-native-web-suffix',
        '@music/rn-util$': '@music/rn-util-web',
        '@music/mnb-rn$': '@music/mnb-music',
    }
},
```
一旦 `webpack` 里设置 `alias` ，工程里遇到`react-native`。若`react-native`在子包里也有被引用到，就会先去 `被引子包`（-rn）里取找这个包（`@music/react-native-web-suffix`）

### 软链失效，先检查版本
若`-core`被`-h5`引用，但发现`-h5`内的`-core`并不是本地的，检查`-core`的版本是否和`-h5`的`package-lock.json`中对的上

## 提示 script 所用的包不存在
将 `package-lock.son` 删除，再 `npm i`



![alt](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5777315048/2ba3/e893/0283/fae86b6d83d12e1ec0ef747c3fe97a64.png)

## lerna publish
![alt](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7024067070/fcfb/1988/351d/4c8801db08e27142909fd228784c8728.png)

解决：
 1. `nenpm whoami`检查是否已登录；未登录则`nenpm login`；
 2. 若已登录，可能与`~/.npmrc`内的 `authToken` 无效有关：
 3. `cat ~/.nenpmrc`，将下面这行复制到 `~/.npmrc` 即可
```bash
//rnpm.hz.netease.com/:_authToken=xxx
```
 4. 若还是不行，[重置`nenpm`密码](http://npmadmin.hz.netease.com/#/npmAccount)后重试 第3步。


## watchman error
> Watchman error: too many pending cache jobs. Make sure watchman is running for this project.




## module和main字段的优先级



## peerDependencies



## jest-haste-map: Haste module naming collision: react-native

![alt](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7042648181/e168/cba8/a737/81a85b4526efd16bd25977519738272f.png)


添加`metro.config.js`的`blacklist`:
https://stackoverflow.com/questions/41813211/how-to-make-react-native-packager-ignore-certain-directories


## 所有lerna bootstrap 会导致
![alt](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7048190758/d1d9/60da/d780/0de99e07578c74c1bd045bc74bd81639.png)





## 重装watchman，发生homebrew报错
```bash
cd /usr/local/Homebrew/Library/Taps/homebrew
rm -rf homebrew-core
brew upgrade
```

使用brew upgrade后会重新更新homebrew-core

## 使用sdp发布时，lerna接收参数前需进行转换
```bash
"build:demo:web": "lerna run --scope @music/rpc-audio-rn build:web -- -- ",
```
https://github.com/lerna/lerna/issues/1106