# XSS、CSRF、SQL注入
针对Web服务器的攻击，常见的有：`XSS（跨站脚本攻击）`、`CSRF（跨站请求伪造）`、`SQL注入`
[[toc]]

## XSS（跨站脚本攻击）
攻击者 **将恶意代码注入到网页** 上，使得用户不经意地加载并执行。
> 攻击者也可以事先架设好一个网站，让受害者通过恶意脚本，把自己的私密数据（如：cookie）作为参数提交出去。

### XSS类别
一共有3种：`反射性攻击`、`存储型攻击`、`DOM-Based攻击`

> 官方网站（A）、攻击者（B）

#### 反射型攻击
恶意代码被`不经意加载`到浏览器上。

 1、 B向用户发送一个url

 2、 A网站`从URL的参数`中取出恶意代码，并返回到浏览器上。
> 如：需要将一些**错误信息、搜索结果**直接显示在页面上时

#### 存储型攻击
恶意代码被`永久地保存`到Web服务器。

 1、 B在A网站留下恶意评论；
 
 2、 C访问A网站，加载了B的评论

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
 - `过滤`。对敏感参数直接进行过滤。（在提交表单、传递url参数之前）
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



## CSRF（跨站请求伪造，Cross-Site Request Forgery）
攻击者通过**欺骗用户的浏览器**，**以用户的名义**去执行恶意操作。
> 由于浏览器的机制，当请求某个域名的接口时，会把关联的cookie（存在本地磁盘、且未过期）一起带过去。

### 攻击方式：
 - 1、在用户成功登录`网站A`的情况下，攻击者诱导用户进入`网站B`；
 - 2、在网站B中，攻击者的脚本“偷偷”向`网站A`发请求；

结果：**网站A认为是用户本人发出，接受请求。**

### 防御手段：
CSRF的两个特点：**利用 cookie 自动携带的特性**以及**跨站**。

检查**Referer**字段：
> 该字段可以表示请求来源于哪个地址，所以可以用来判断**请求是否从本站发出**。
>
> 缺点：要正确判断`是否为合法请求源`不容易

设置**Token**并验证：

**原因：攻击者只能利用，但并不能获取用户的cookie**
 - 方法一：Token + cookie + 校验“请求体“与“请求头cookie”
    >
    > 1、服务端在响应头设置`Set-Cookie`（值是**随机生成**的`Token`）
    >
    > 2、浏览器在收到响应头后，会把`cookie`种到浏览器
    >
    > 3、浏览器解析`cookie`，把`Token`放到**请求体**（或**请求头**的自定义属性），和其它参数一同提交请求。
    >
    > 4、服务端检查**cookie里的Token**与**请求体**（或**请求头**的自定义属性）中的Token是否一致

 - 方法二：sessionId + cookie + 校验“请求体“与“请求头cookie”
    >
    > 1、和“方法一”类似，服务端根据`sessionId`生成一份`Token`，仅通过`cookie`返回`sessionId`
    >
    > 2、浏览器解析`cookie`，把`sessionId`放到**请求体**（或**请求头**的自定义属性），和其它参数一同提交请求。
    >
    > 3、服务端会根据**请求体**（或**请求头**的自定义属性）中的sessionId去校对身份

使用**图片验证码**

使用Cookie的**SameSite**属性（表明跨站点时能否访问该cookie）

## SQL注入
攻击者通过**把SQL命令插入到表单的输入框**，来**欺骗 服务器 执行恶意的SQL命令**。

### 防止手段
对用户的输入进行**检查、过滤**
