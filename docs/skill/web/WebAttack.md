# XSS、CSRF、SQL注入
针对Web服务器的攻击，常见的有：`XSS（跨站脚本攻击）`、`CSRF（跨站请求伪造）`、`SQL注入`
[[toc]]

## XSS（跨站脚本攻击）
攻击者**将恶意代码注入到网页**上，使得用户加载并执行。
> 攻击者也可以事先架设好一个网站，让受害者通过恶意脚本，把自己的私密数据（如：cookie）作为参数提交出去。

### XSS类别
一共有3种：`反射性攻击`、`存储型攻击`、`DOM-Based攻击`

#### 反射型攻击
Web服务器`从URL的参数`中取出恶意代码，并返回到浏览器上。
> 如：需要将一些**错误信息、搜索结果**直接显示在页面上时

#### 存储型攻击
恶意代码被`永久地保存`到Web服务器。
> 如：**评论、博客、私信**

#### DOM-Based型攻击
利用**原生JS代码**，`篡改客户端的DOM结构`，导致用户执行了意外的动作。

```html
<!-- 下面是某网站的代码，它的Select是由document.write的方式去实现的 -->
Select your language:
<select>
    <script>
        document.write("<OPTION value=1>" + document.location.href.substring(document.location.href.indexOf("default=")+8) + "</OPTION>");

        document.write("<OPTION value=2>English</OPTION>");
    </script>
</select>
```

通常访问时：
```
http://www.some.site/page.html?default=French
```

黑客修改后：
```
http://www.some.site/page.html?default=<script>alert(document.cookie)</script>
```

### 防御手段：
对**用户输入**的处理：
 - `过滤`。在提交表单、传递url参数之前，对敏感参数直接进行过滤。
 - `转义`。对用户输入的数据进行转义。
    > 1、`在React中使用JSX`。因为React DOM会使得所有内容在渲染前，都会被**转换成字符串**。
    >
    > 2、[常用转义规则](#常用转义规则)
 
对**cookie**的保护：
 - `httpOnly`。对于`cookie`设置为`httpOnly`
    > 防止客户端通过document.cookie读取cookie

对**HTTP头**的处理：
 - `Content-Type: application/json; charset=utf-8`
    > 1、避免输出内容被HTML解析
    > 
    > 2、不使用：Content-Type: text/html; charset=utf-8
 - `Content-Security-Policy`。
    > 允许网站管理者去声明：**在指定页面中，浏览器能够加载哪些资源**。


### 常用转义规则
```
& --> &amp;
< --> &lt;
> --> &rt;
" --> &quot;
' --> &#x27;
/ --> &#x2F;
```

### 恶意代码示例
 - `><script>alert(document.cookie)</script>`
 - `<img src="javascript:alert('XSS')" />`
 - `<img src="http://888.888.com/999.png" onerror="alert('XSS')" />`



## CSRF（跨站请求伪造）
**含义**：攻击者通过`CSRF攻击`来`欺骗用户的浏览器`，使得浏览器`以用户的名义`去运行操作。

**原因**：因为浏览器的机制，当发送请求给某个域名，就会把关联的cookie（如果未过期的话）一起带过去。

> Cookie是`存在本地磁盘`的、并且是`跟着域名`来发送的

**例子**：
 - 1、用户登录并认证了网站A；
 - 2、当用户是登入状态时，攻击者诱导用户进入网站B；
 - 3、在网站B中，“悄悄地”向网站A发送请求；
 - 4、网站A认为是用户本人发出，接受请求。

**防御**：
 - 检查`Referer`字段
    - 缺点：要正确判断`是否为合法请求源`不容易
 - 设置`Token`并验证
    - 【方法一：Token + cookie + 请求体参数/请求头自定义属性】
        - 服务端在响应头设置`Set-Cookie`，值是服务端**随机生成**的`Token`
        - 浏览器收到响应头，会把`cookie`种到浏览器。
        - 浏览器解析`cookie`，并把`Token`放到请求体参数中，提交请求。
        - 服务端验证：`请求头中cookie中的Token`与`请求体中的Token`是否一致
    - 【方法二：sessionId + cookie + 请求体参数/请求头自定义属性】
        - 和“方法一”类似，只是把`Token`改成了`sessionId`
        - 服务端会根据`请求体中的sessionId`查找`Token`
 - 图片验证码

## SQL注入
攻击者把SQL命令插入到web表单的输入框，欺骗服务器执行恶意的SQL命令。

防止：对用户的输入进行检查、过滤
