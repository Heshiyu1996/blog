# 跨域资源共享（CORS）
> `CORS`是W3C标准，叫“跨域资源共享”。
> 需要`浏览器`+`服务端`同时支持（IE10+），主要是在服务端增加一个 **过滤拦截器**。
> 
> 一共2类CORS请求：`简单请求`、`非简单请求`

[[toc]]

## 简单请求
 同时满足以下两种条件：

 条件一：请求方法：`HEAD`、`GET`、`POST`

 条件二：HTTP头部信息（不能多于以下字段）
 - `Accept`
 - `Accept-Language`
 - `Content-Language`
 - `Last-Event-ID`
 - `Content-Type`
    - application/x-www-form-urlencoded
    - multipart/form-data
    - text/plain

**简单请求的HTTP头部**会自动添加一个`Origin`字段（表明请求来自哪个源）。

若`Origin`指定的源：
 - 在许可范围
    - 响应头信息**会有**`Access-Control-Allow-Origin`（其值要么是`Origin`的值，要么是`*`）
 - 不在许可范围
    - 响应头信息**没有**`Access-Control-Allow-Origin`（能被`XMLHttpRequest`的`onerror`捕获）

> 有关Cookie（前提：源在许可范围内）
>    - 响应头信息会有`Access-Control-Allow-Credentials`（`true`：请求可以带Cookie；`false`：相反）
>    - 响应头信息的`Access-Control-Allow-Origin`不能设为`*`，必须指定明确
>    - 浏览器也要设置`xhr.withCredentials = true`才可以发Cookie，且只有用`服务器域名`设置的Cookie才会上传（其他域名的Cookie不会上传）

## 非简单请求
`非简单请求`是指请求方法：`PUT`、`DELETE` 或者 Content-Type：`application/json`的请求，它会先发送一个`预检请求`（`OPTIONS`）。

`预检请求`的HTTP头部会自动添加一个`Origin`字段（表明请求来自哪个源），以及以下两个特殊字段：
 - `Access-Control-Request-Method`
    - 列出**接下来的CORS请求**会用到哪些方法
 - `Access-Control-Request-Headers`
    - 指定**接下来的CORS请求**会额外发送哪些自定义头部

 服务器收到`预检请求`后，
 - 允许跨域
    - `Access-Control-Allow-Origin`
        - 表示允许访问的源（其值要么是`Origin`的值，要么是`*`）
    - `Access-Control-Allow-Methods`: GET, POST, PUT
        - 表示允许的方法
    - `Access-Control-Allow-Headers`
        - 表示允许访问的头部属性
 - 不允许跨域
    - 响应头信息没有任何CORS相关头信息字段(能被`XMLHttpRequest`的`onerror`捕获)

 注意：只要通过了“预检请求”，以后每次正常的CORS请求，都会跟`简单请求`一样了：
  - 对于请求头部，会有一个`Origin`字段
  - 对于响应头部，也会有`Access-Control-Allow-Origin`
  
 
### CORS的特点：
  - 支持所有请求类型
  - 服务端只需将数据直接返回，**不需特殊处理**

## 解决跨域的一些方法
 - JSONP
 - CORS
 - Nginx
 - 【iframe】window.postMessage
 - 【iframe】window.name

### JSONP
原理：利用`<script>`标签，远程调用 JSON 文件来实现数据传递。


 `JSONP`的特点：
  - 只支持`GET`，不支持`POST`（相当于下载一个js文件，相当于浏览器输入一个url一样）
  - 服务端返回的数据不能是标准的json格式，而是通过callback包裹（需要客户端和服务端提前约定）
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