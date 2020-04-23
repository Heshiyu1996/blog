# 其他
> 这里会搜集一些有关项目的零碎笔记

[[toc]]


## [jQuery]源码
 - 首先，是从`闭包` + `立即执行函数`开始的（传入了window对象）
    - 目的：将`$`变量保存在内存中（单例模式）
 - 然后，`重载`很常用
    - 原因：单单为了实例化一个jQuery对象，就有9种不同的方法
 - 最后，`链式调用`实现原理
    - 原因：实现很简单。只需**在实现链式调用的方法的返回结果里，返回this即可**

## [js]Babel将ES6转换成ES5的原理
 `Babel`是一个转译器，它是将`JavaScript的高版本规则`转移成`低版本规则`的一个工具。

 它的原理分三个部分：
  - parsing（解析）
    - 把ES6代码生成AST
  - transforming（转译）
    - 把AST遍历，优化成新的AST
  - generating（生成）
    - 按照新的AST生成ES5代码

 ### plugins和presets 
 `plugins`应用于整个转译过程（尤其是`transforming`）

 `presets`是官方提供的一些预设的插件集

 ### babel-polyfill和babel-runtime
 `Babel`默认只转换js的新语法，而不转换新的API。为了弥补这个不足，需提供一个`polyfill`

 `babel-polyfill`能够`加载整个polyfill库`

 引入方法：
 ```js
 // 第一种：在main.js里
 import 'babel-polyfill'

 // 第二种：在webpack.config.js中
 module.exports = {
     entry: ['babel-polyfill', './app/js']
 }
 ```

 问题：
  - 导致污染全局环境
  - 重复代码过多
 
 解决：使用`babel-runtime`（它可以提供一些`转译模块的工具函数`）

### vue-cli 3.0的babel
在vue-cli 3.0根目录下，有`babel.config.js`（采用babel7的新配置格式）。
 - 里面预先配置了`preset`，它的值是`['@vue/app']`
 - 也可以配置`plugins`（引用插件来处理代码的转换。和`preset`平级。）

## [工具]npm和和yarn的区别
`yarn`是Facebook和Google联合推出的`新的JS包管理工具`

`npm`是Node.js中`默认的包管理工具`

`yarn`有以下优点：
 - 速度快
    - 并行安装、离线模式
 - 版本锁定
    - yarn.lock
 - 更简洁的输出
 - 语义化的命令

## [小程序]登录过程
  - 微信
    - 小程序端调用`wx.login()`获取`code`
    - 带着`code`，传递给开发者后端
    - 开发者后端带着`code + appid + appsecret`跟微信后端换取`session_key + openid`
    - 开发者后端将`自定义登录态`与`session_key + openid`关联，并响应给小程序`登录态`
      - 并将session_key和openid存到redis里，过期后会重新请求
    - 小程序把`登录态`写入Storage，等到下次有需要登录权限时，从Storage获取
    - 开发者后端通过`自定义登录态`去查询`session_key + openid`，返回业务数据

  - 支付宝
    - 小程序端调用`getAuthCode`，向支付宝App获取`auth_code`
    - 小程序端携带`auth_code`给开发者后端，发起登录验证请求
    - 开发者后端通过`auth_code`与支付宝授权平台获取`token`和`uid`
    - 开发者将`token`和`uid`种到session里，并响应给小程序端验证成功
    - 在session有效期内，不需重复授权


## [小程序]生命周期
  - beforeCreate
  - created
    - 所有页面created会在项目加载的时候一起被调用，进入页面不会被调用，一般用onLoad代替
--------
  - onLoad，页面加载
  - onShow，页面显示
  - onReady，页面初次渲染完成
  - onHide，页面隐藏
  - onUnload，页面卸载
--------
  - beforeMount
  - mounted
    - 从B返回到A，A的mounted不会被触发，因为页面没有被重新加载，一般用onShow代替
  - beforeDestroy
  - destroyed

## [小程序]跳转区别
 `navigateTo`，跳转到指定页，**并将原页面加入堆栈，可回退**

 `redirectTo`，直接重定向到指定页，**不能回退到原页面**
 
 `switchTab`，只能用于跳转到tab页面，并关闭其他非tab bar页

### [小程序]fly.js
因为小程序是在jsCore环境下执行，在这个环境下并没有`window`，也没有`XMLHttpRequest对象`。

而`fly.js`它是通过 **自定义http engine** 来实现不同的adapter，来支持不同环境的。

## [Axios] 源码解析
 `Axios`是一个基于`Promise`的http请求库。

 ```js
 function Axios() {
     this.interceptors = {
         request: new InterceptorManager(), // 请求拦截器
         response: new InterceptorManager() // 响应拦截器
     }
 }
 ```
 每个axios实例都有一个`interceptors`实例属性，同时这个`interceptors`对象上有两个属性`request`、`response`，它们都是`InterceptorManager`的实例。
 
 `InterceptorManager`构造函数是用来实现拦截器的，且这个构造函数原型上有3个方法：`use`、`eject`、`forEach`。

 一般我们最常用的是`use`，
  - 对于`request`，我们就在`use`里对`config`进行修改，随后会覆盖掉默认配置
  - 对于`response`，我们就在`use`里对后端返回的数据进行一个预处理再返回

 
## 重构的好处？
 - 实现前后端分离
 - 代码优化
 - 减少后期维护的学习成本


## 两个异步请求，若第二个比第一个先返回，对于第一个的结果如何cancel掉？
栈


## 通讯录搜索（按姓名查询、或按首拼音）
将各个汉字各自存起

## 把svg当做字体


## 为什么IE8不能使用webpack？
 - IE8不怎么兼容ES5
 - 不支持__proto__
 - 不支持default关键字



## 如何限定只接收10个http响应？

## 对前后端分离的理解？
![alt](./img/img-1.png)

**部署方式：前后端分开部署，利用中间件（如Nginx）进行代理转发**

各端职责：
  - 前端
    - 负责控制页面的跳转、异步请求数据
    - 存放css、js等静态资源，并使用CDN加速；

  - 后端
    - 判断/接收请求
    - 组装并返回数据

优势：
  - 提升开发效率
  - 减少后端的负载压力
  - 增强项目代码的可读性和维护性

缺点：
  - 部署顺序（后端先部署）
  - 文档的重要性

## [web]前端项目搭建
 - 安装Node
 - npm init -y
  - 生成`package.json`
 - npm install --save-dev webpack
 - 安装插件（babel-core、loaders、vue...）
 - 进入webpack.config.js进行配置
  ```js
  module.exports = {
    entry: './index.js',
    devServer: {
      port: 8083,
      hot: true
    }
  }
  ```
 - 新建index.js、index.html
 - 进入package.json修改script
 ```json
 {
   start: "webpack-dev-server"
 }
 ```
 以下是结合vue的：
 - 新建src
  - 里面还有assets、pages、index.js、app.vue...
 - 配置webpack.config.js（特别是output、loaders）
 - 在index.html新增
 ```js
 <div id="root"></div>
 ```
 - 在app.vue新增
 ```js
 import vue from 'Vue'
 new Vue({...})
 ```
 - npm start

## [Vue.js]slot-scope
## [weppack]webpack常用的loader和plugins
loader:
 - vue-loader、sass-loader、babel-loader、url-loader

plugins:
 - html-webpack-plugin
    - 用于生成一个html文件，并将最终生成的js、css以及一些静态资源以`script`、`link`的形式动态插入其中。
 - webpack-dev-middleware
    - 生成一个和webpack的compiler绑定的中间件
 - webpack-dev-server
    ```js
    // 配置 webpack-dev-server 行为
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8081,
        https: false,
        proxy: null
    }
    ```

## [webpack]webpack插件是怎么实现的
webpack插件有以下特点：
 - 独立的JS模块，暴露相应函数
 - 函数原型上的apply方法会注入compiler对象
 - compiler对象上挂载了相应的webpack事件钩子
 - 事件钩子的回调函数里能拿到编译后的compilation对象（如果是异步钩子还能拿到相应的callback）

### 为什么要定义apply方法？
底层源码是通过`plugin.apply()`调用插件的。

### compiler对象
开发插件时，可以从`compiler`对象里拿到`所有和webpack主环境相关`的内容。

### webpack常见的事件钩子
 - after-plugins
    - 设置完一组插件的初始化之后
 - run
    - 在读取记录之前
 - compile
    - 在创建新的compilation之前
 - emit
    - 在生成资源、并输出到目录之前
 - after-emit
    - 在生成资源、并输出到目录之后
 - done
    - 完成编译

## [PC] keep-alive不能正常销毁
问题：设置了`<keep-alive>`组件的include属性后，keep-alive组件不能正常销毁，且会占用内存。

解决：
 - 1、给所有vue实例增加name实例选项（未解决）
 - 2、查看keep-alive源码：
 ```js
  // created时，创建cache对象
  created () {
    this.cache = Object.create(null)
    this.keys = []
  },

  // destroyed时，遍历cache对象
  destroyed () {
    for (const key in this.cache) {
      // pruneCacheEntry函数：将那些被缓存了的、但当前没有处于被渲染状态的组件都销毁掉
      pruneCacheEntry(this.cache, key, this.keys)
    }
  },
  
  // mounted时，会监听include、exclude这两个字段，然后实时地更新（删除）this.cache对象
  mounted () {
    this.$watch('include', val => {
      pruneCache(this, name => matches(val, name))
    })
    this.$watch('exclude', val => {
      pruneCache(this, name => !matches(val, name))
    })
  }
 ```
 通过断点，发现`destroyed`没有进入。查看该组件，发现是手动重写了this.$destroy方法，使得缓存组件无法正常摧毁。
 ```js
 // 错误示范
created() {
    let query = this.$route.query
    this.searchParams = { ...this.searchParams, ...query }

    window.parent.postMessage('fullscreen', '*')
    // 不要这样重写destroy
    this.$destroy = () => window.parent.postMessage('cancelfullscreen', '*')
}
 ```

 ## [pc]庞大数据的渲染、校验、保存问题
 问题：庞大的数据导致前端的渲染、保存，出现卡顿
 
 ### 解决方法
 #### 后端真分页、后端校验、单条保存
 缺点：HTTP请求增多；交互不友好
  
 #### 前端假分页、前端校验、整体保存
 优点：减少HTTP请求、校验快
 
 #### 利用vue-virtual-scroller
 优点：懒加载
 
 原理：将加载事件绑定在scroll事件上，并记录上次渲染item的startIndex、endIndex，利用一个buffer进行存储。

 目前方案：**前端假分页、前端校验、整体保存**
 
## 将一组下载URL打包成zip
有一组数据，需要将其下载，并打包&另存为到zip中：
```js
const LINKS = ['www.baidu.com/a1.pdf', 'www.baidu.com/a2.pdf']
```

推荐npm包：
```
jszip
jszip-utils
file-saver
```
[使用demo](./SaveAsZip.md)

## [web] SourceMap
因为大部分源码（尤其是各种函数库、框架）都要经过打包、压缩，才能投入生产环境。

好处：
 - 减小体积
 - 减少HTTP请求数

缺点：debug变得困难重重

解决方案：**使用`SourceMap`**

因为`SourceMap`记录着位置信息（即，转换后的代码的每一个位置，所对应的转换前的位置）

> 有了它，出错的时候，debug工具就直接显示 **开发代码** ，而不是转换后的代码，给开发者带来了极大的方便！

## Tree shaking
`Tree shaking`的本质是 **消除无用的JavaScript代码**，消除原理是依赖于ES6的模块特性。

它不支持动态导入（如：CommonJS的`require()`），只支持纯静态的导入（ES6的`import/export`）。

> 因为ES6模块依赖关系是确定的，可以在运行前进行 **可靠的静态分析**。

### ES6 module特点
 - 只能作为模块内的顶层语句出现
 - import的模块名只能是字符串常量


## Nginx
```js
server {
    server_name www.baidu.com;
    listen 80;

    location /api/auth {
        proxy_pass http://10.1.2.3:8800;
    }

    // 定位规则
    location /product.html {
        // 静态资源根目录
        root /home/static/baidu/build;
        // 首页
        index product.html
        // 重定向
        try_files $uri /product.html
    }
}
```

### Nginx实现负载均衡的4种模式
Nginx是一个非常高效的HTTP负载均衡器，它的作用是 **分发请求到各个应用服务器**，从而提高web应用性能。

#### 配置
```
#  首先，你要有两台或以上可以提供相同服务的Web服务器,不然这个负载均衡配置就没有意义！
#  在配置过程中只需要改代理服务器的配置就行，其他服务器不用管。
-    vim /usr/local/nginx/conf/nginx.conf
    #   在http下添加如下代码
        upstream item { # item名字可以自定义
            server 192.168.101.60:81 参数;
            server 192.168.101.77:80 参数;
            # 负载均衡模式(非必选项)
        }
    #   在server 80下添加如下代码
        location /{
            proxy_pass http://item;     # item是在上面命名的
        }
-   配置 'upstream' 的时候,可以把你的代理服务器也加在里面用来做 'web' 服务器, 但是端口就不用在用80了。
-   重启你的nginx组件，现在负载均衡就已经可以用了
```

#### 4种模式
 - 轮询（默认）：请求会随机分发到配置的服务器上
 - 权重分配：通过配置`weight`，权重越高，被分发到的概率也越高
 - 哈希分配：通过声明`ip_hash`，根据客户端IP来分发同一台服务器（可解决session共享）
 - 最少连接分配：通过声明`least_conn`，根据当前连接数最少的服务器进行分发