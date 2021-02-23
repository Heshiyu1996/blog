# 跨域资源共享（CORS）
[[toc]]
## 定义
**跨域资源共享（CORS）** 是一种 **基于HTTP头部** 的跨域机制。

> 服务端可以通过 CORS 来指定哪些源站可以访问。

特点：
  - 支持所有请求类型
  - 服务端只需将数据直接返回，**不需特殊处理**

## 类型
有两类 CORS 请求：简单请求、非简单请求。
### 简单请求
应该同时满足以下两种条件：

1. 请求方法：`HEAD`、`GET`、`POST`

2. **人为设置** 的HTTP头部字段范围
 - `Accept`
 - `Accept-Language`
 - `Content-Language`
 - `Content-Type`
    - text/plain
    - multipart/form-data
    - application/x-www-form-urlencoded

### 与服务端通信
原理：
 - **Request Header**，携带 `Origin`
 - **Response Header**，下发 `Access-Control-Allow-Origin`

<img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7602167601/64ed/8659/4609/c2e44c62e581d4d506d7971b0748e71f.png" width="400px" />

```js
/* 例如：站点 http://foo.example 想要访问 http://bar.other 的资源 */

// Request Header
Origin: http://foo.example


// Response Header（允许 http://foo.example 访问 ）
Access-Control-Allow-Origin: http://foo.example

// Response Header（允被 任意外域 访问 ）
Access-Control-Allow-Origin: *
```
> 若不允许跨域，**Response Header** 则没有 `Access-Control-Allow-Origin`，同时会触发 xhr 的 `onerror`。



## 非简单请求
除了“简单请求”外，都属于“非简单请求”。
> 注意：常见的 `Content-Type: application/json` 的请求也是非简单请求。

### 与服务器通信
**非简单请求** 会先发送一个`预检请求（OPTIONS）`。

对于预检请求，**Request Header** 也会自动加上以下字段：
 - `Origin`: 表明请求源
 - `Access-Control-Request-Method`: 列出 **接下来的CORS请求** 会用到哪些方法
 - `Access-Control-Request-Headers`: 列出 **接下来的CORS请求** 会额外发送哪些自定义头部

<img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7602183006/a573/8a60/5d3a/fd88c161425e28375d47ac3f3a61600c.png" width="400px" />

 服务器收到`预检请求`后，若允许跨域：
 - `Access-Control-Allow-Origin`: 表示允许访问的源（其值要么是`Origin`的值，要么是`*`）
 - `Access-Control-Allow-Methods`: 表示允许访问的方法
 - `Access-Control-Allow-Headers`: 表示允许访问的Header字段
 - `Access-Control-Max-Age`: 表示预检请求的有效期
    
> 若不允许跨域，**Response Header** 则没有以上字段，同时会触发 xhr 的 `onerror`

一旦通过了 **预检请求**，只要在有效期内，请求方式就与 **简单请求** 一样了：
 - **Request Header**，携带 `Origin`
 - **Response Header**，下发 `Access-Control-Allow-Origin`
 


> 有关Cookie（前提：源在许可范围内）
>    - 响应头信息会有`Access-Control-Allow-Credentials`（`true`：请求可以带Cookie；`false`：相反）
>    - 响应头信息的`Access-Control-Allow-Origin`不能设为`*`，必须指定明确
>    - 浏览器也要设置`xhr.withCredentials = true`才可以发Cookie，且只有用`服务器域名`设置的Cookie才会上传（其他域名的Cookie不会上传）

## 携带Cookie
对于跨域请求，浏览器一般不会携带Cookie。需要额外设置。

客户端需要：

```js
xhr.withCredentials = true;
```

服务端需要：
 - 在 **Response Header** 下发 `Access-Control-Allow-Credentials: true`
 - 在 **Response Header** 下发 `Access-Control-Allow-Origin` 不能为“`*`”，而是具体的 `Origin` 值。




## 解决跨域的其它方法
除了 CORS ，还有：
 - JSONP
 - Nginx
 - 【iframe】window.postMessage
 - 【iframe】window.name

### JSONP
原理：利用`<script>`标签，远程调用 JSON 文件来实现数据传递。


 `JSONP`的特点：
  - 只支持`GET`，不支持`POST`（相当于下载一个js文件，相当于浏览器输入一个url一样）
  - 服务端返回的数据需要通过 callback 包裹（需要客户端和服务端提前约定）
  - 安全问题
  - 要确定jsonp请求是否失败**并不容易**

`JSONP`使用步骤：

1、定义一个callback：
```html
<script>
    var myHandler = function(data) {
        alert('获得从服务端的数据：', data)
    }
</script>
```

2、发送请求给服务器

#### 写法一：利用script标签的src属性
```html
  <script src="http://flightQuery.com/jsonp/flightResult.aspx?code=CA1998&callback=myHandler"></script>
```

#### 写法二：利用jQuery的ajax方法
  ```html
  <script>
  $.ajax({
      url: 'http://www.baidu.com',
      async: false,
      type: 'get',
      data: {
          'id': 1
      },

      dataType: 'jsonp', // 1、指定服务器返回的数据类型
      jsonpCallback: 'myHandler', // 2、指定回调函数名称，要与服务器响应的文件里，调用的callback名称相同

      success: function(data) {
          alert(data)
      },
      error: function(err) {
          alert(err)
      }
  })
  </script>
  
  ```
3、服务端（flightResult.aspx）组装好数据，返回以下js代码：
```js
myHandler({
    "code": "200",
    "desc": 'hello',
    "detail": "hehe"
})
```
以上代码会用于调用`myHandler`这个回调函数。

#### 安全性考虑
1、JSON劫持

2、Callback可定义导致的安全问题
[https://www.cnblogs.com/52php/p/5677775.html](https://www.cnblogs.com/52php/p/5677775.html)

### Nginx
利用Nginx通过 **反向代理** 来转发请求，来满足浏览器的同源策略，实现跨域。

例如：

前端`http://localhost:8080`，想请求`http://localhost:1234/api/basic/login`这个接口

1、配置Nginx.conf，里面的定位规则：
```conf
# 代表启动的一个服务
server {
    listen      8080;  #监听端口
    server_name localhost;

    # 定位规则
    location / {
        root html; #文件根目录
        index index.html index.htm; #默认起始页
    }

    # 定位规则
    location /rest {
        # 结合正则表达式、标志位，对url进行重写、重定向
        rewrite ^.+rest/?(.*)$ /$1 break; # 只取标志位 $1 ，作为重定向地址
        proxy_pass http://localhost:1234; # 该请求要代理到的主机
    }
}
```

2、前端访问时，url填写`/rest/api/basic/login`即可。


### 【iframe】window.postMessage
```html
<!-- a.html （端口: 3000） -->
<body>
    <iframe id="frame" src="http://localhost:4000/b.html" onload="sendData()" />

    <script type="text/javascript">
        function sendData() {
            // A1. 拿到 iframe 页面中的 window 对象（通过 frame.contentWindow）
            let iframeWindow = document.querySelector('#frame').contentWindow;
            // A2. 向 端口为4000 的域发送内容 "hi"
            iframeWindow.postMessage('hi', 'http://localhost:4000')

            // B1. 监听 iframe 的消息
            window.onmessage = function(e){
                console.log(e.data);
            }
        }
    }
    </script>
</body>
```

```html
<!-- b.html （端口: 4000） -->
<body>
    This is B page.
    <script type="text/javascript">
        // A1. 监听 父窗口 的消息
        window.onmessage = function(e) {
            // A2. 接收 父窗口 传来的数据
            console.log('父级传来的数据', e.data);

            // B2. 向 端口为3000 的域（即父级）发送内容 "你好"
            e.source.postMessage('你好', 'http://localhost:3000');
        }
    </script>
</body>
```

### 【iframe】window.name
在一个 window 的生命周期内，载入的所有页面的 `window.name` 都不会改变（除非手动设置）。
> 通过 iframe 加载 “要跨域的页面”，将要跨域的数据写到iframe内的 window.name；再将 iframe.src 改为当前域下的其他页面，再次读取 iframe.contentWindow.name 。

示例: 将 `localhost:4000/b.html` 的数据传递到 `localhost:3000/a.html`。

```html
<!-- localhost:4000/b.html -->
<script>
    var person = {
      name: 'heshiyu',
      age: 24,
    };

    // 修改 window.name
    window.name = JSON.stringify(person);
</script>
```

```html
<!-- localhost:3000/a.html -->
<body>
    <iframe id="frame" src="http://localhost:4000/b.html" onload="sendData()" />

    <script type="text/javascript">
        function sendData() {
            let iframe = document.querySelector('#frame');

            // onload次数标志（第二次及以后才能读取 iframe.contentWindow.name）
            let flag = 0;

            iframe.onload = function () {
                if (!flag) {
                    flag = 1;
                    // 将 iframe 地址转到同域下
                    iframe.contentWindow.location = 'http://localhost:3000/proxy.html';
                } else {
                    console.log('刚刚端口4000跨域传的数据', iframe.contentWindow.name);
                }
            }
        }
    }
    </script>
</body>
```


## 为什么form表单可以跨域
因为原页面用 form 提交到另一个域名之后，原页面的脚本无法获取新页面中的内容。

所以浏览器认为这是安全的。

而 AJAX 是可以读取响应内容的，因此浏览器不能允许你这样做。


## 参考
 - [nginx解决跨域问题](https://segmentfault.com/a/1190000019227927)