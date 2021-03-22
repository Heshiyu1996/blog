
# AudioContext

[[toc]]

## 简略的Audio
> 特点：简单音频播放/暂停、单线程。

```html
<audio src="./song.mp3"></audio>
```

```js
const audio = new Audio();
audio.src = './song.mp3';
```

更高级地控制音频：声道的合并与分割、音调、音频振幅压缩、混响等等，则需要 `Web Audio Api`。


## Web Audio Api
> 特点：音频合成/处理、模块化设计、可视化音频。

`Web Audio API` 可以通过 “音频节点（`AudioNode`）” 去处理 音频 ，多个音频节点 `connect` 到一起就形成了 “音频导向图”。

:::tip
1. `AudioContext`（环境） 与 `AudioNode`（模块） 的关系

=> 可以理解为： `webpack` （环境）与`loader` （模块） 的关系。

2. `buffer`

=> 可以理解为 `js、css、image`
:::

### 音频合成/处理（Audio Context）
`Audio Context` 是 “音频播放和处理” 的上下文环境，包含一系列 “用来处理音频的 API”。
> 内置方法：创建 AudioNode、解码音频文件。

#### AudioNode
`AudioNode` 是位于 `source` 、 `destination` 之间的一系列 “音频处理器”。

**类型：**
 - `GainNode`：音量处理器
 - `BiquadFilterNode`：音调处理器
 - `PannerNode`：3D环绕音效

```js
const gainNode = audioContext.createGain();

const BiquadFilterNode = audioContext.createBiquadFilter();

const PanerNode = audioContext.createPanner();
```

<img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7968374102/7b04/42fb/ff6d/af124ff5e968b7236f42ec24e1187e82.png" width="500px" />

```js

source.connect(gainNode);
gainNode.connect(source.destination);
```

#### API
`decodeAudioData`：解码音频文件。把 “音频数据” 转成 “buffer” （“音频数据”为由请求 './song.mp3' 后的响应）
 - 入参：(data, callback)
 - 出参：buffer（传入callback参数）

`createBufferSource`: 创建 `source` 节点

```js
const URL = 'path/to/music.mp3';
const audioContext = new AudioContext();
const playAudio = function (buffer) {
   const source = audioContext.createBufferSource();
   source.buffer = buffer;
   source.connect(audioContext.destination);
   source.start();
};
const getBuffer = function (url) {
   const request = new XMLHttpRequest();
   return new Promise((resolve, reject) => {
request.open('GET', url, true);
       request.responseType = 'arraybuffer';
       request.onload = () => {
           audioContext.decodeAudioData(request.response, buffer => buffer ? resolve(buffer) : reject('decoding error'));
       };
       request.onerror = error => reject(error);
       request.send();
   });
};
const buffer = await getBuffer(URL);
buffer && playAudio(buffer);
```

 - buffer: `audioContext.decodeAudioBuffer()`
 - source: `audioContext.createBufferSource()`
 - connect: source.connect
 - destination: `audioContext.destination`



### 模块化设计
- 一个音频源`source`，可以使用多个处理器`audioNode`；
- 多个音频源`source`，可以合并为一个输出`destination`

<img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7968440285/2a72/f651/cde4/e90944d48d887b5632c088ed192893e2.png" width="400px" />

## 参考
 - [看得到的音频流](https://www.barretlee.com/blog/2014/02/22/cb-webAudio-show-audio/)
 - [深入浅出 Web Audio Api](https://zhuanlan.zhihu.com/p/28745323)
