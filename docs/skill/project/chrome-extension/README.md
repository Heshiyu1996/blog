# Chrome Extension

[[toc]]

## 特点
拥有一份清单（`manifest.json`），可以声明并赋能以下行为：
 - 浏览器行为：监听标签⻚/窗⼝、LocalStorage
 - ⽹页⾏为：操作DOM
 - 特殊⾏为：跨域请求、消息通信、cookies读写

## 4类JS
分别是：`background`、`content`、`injected`、`popup`

| JS 种类 | 可访问API | DOM | JS | 是否跨域 | 职责 |
| ------ | -------- | --- | --- | --- | --- |
| background | 绝大部分API | ✘ | ✘ | ✔ |  1、监听标签页<br />2、跨域请求<br />3、和content通信 |
| content | 只访问插件部分API | ✔ | ✘ | ✘ | 1、嵌入到目标页<br />2、获取网页DOM<br />3、和background、inject通信 |
| injected | 不能访问 | ✔ | ✔ | ✘ | 1、展示数据<br />2、接收用户行为<br />3、和content通信 |

<!-- | popup | 绝大部分API | ✘ | ✘ | ✔ | -->

### JS之间通信
![alt](./img/img-1.png)

## 业务需求
用户打开指定页面时，插件界面自动弹出：
 
 1、会立即**向服务器请求**进行判断，将**结果呈现**到插件界面；

 2、将界面的**DOM信息**以base64图片形式发送给服务器


## manifest.json
```json
{
    "manifest_version": 2, // 固定
    "name": "hehsiyu", // 插件名称
    "version": "1.0", // 插件版本
    "description": "The first extension.", // 插件描述
    "browser_action": {
        "default_icon": "icon.png", // 图表图片
        "default_title": "Hello", // 图标title
        "default_popup": "popup.html" // 单击图标会执行的文件
    },
    // 允许插件访问的url
    "permissions": [
        "http://*/",
        "tabs",
        "storage" // 如果需要通过popup页面保存数据，可以通过通信将数据交给后台页面处理；或者通过chrome.storage保存到用户的硬盘上。
    ],
    // background script，即插件运行的环境。
    // 因为popup页面在关闭后，就相当于用户关闭了相应的标签页，这个页面再次打开时，所有DOM和JS空间变量都将被重新创建。所以需要扩展实时处理数据，而不是在用户打开时才运行
    "background": {
        "page": "background.html",
        // "scripts": ["js/jquery-1.9.1.min.js","js/background.js"]//数组.chrome会在扩展启动时自动创建一个包含所有指定脚本的页面
    },
    // 对页面内容进行操作的脚本
    "content_scripts": [{
        "matches": ["http://*/*", "https://*/*"],
        "js": ["js/jquery-1.9.1.min.js", "js/js.js"],
        "run_at": "document_start" // 在document加载时执行该脚本
    }]
}
```

## 难点记录
### background.js监听tabs事件
需要考虑打开页面的每种情况：`打开新tab（跳转）`、`打开新tab（不跳转）`、`在当前tab打开/刷新`、`标签页切换`

相关事件：`onActivated`、`onUpdated`

### content.js的注入时机
`document_start`：css之后、DOM构建之前

`document_end`：DOM构建之后

### 其它
**技术**：
 - chrome API大部分都是异步操作、且传参严格
 - permissions若为无限跨域，发布审核会很严格；且版本迭代时，会通知给使用者

**非技术**：
 - 隐私政策：需提供隐私政策说明才能发布

## 实践笔记
 - [实践笔记](./DEMO.md)
 - [分析与实践PDF](/chrome-extension-practise.pdf)

## 参考链接
[stackoverflow连接](https://stackoverflow.com/questions/5544256/chrome-extensionhow-to-pragmatically-open-the-popup-window-from-background-htm)