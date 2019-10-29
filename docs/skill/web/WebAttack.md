# XSS、CSRF、SQL注入
针对Web服务器的攻击，常见的有：`XSS（跨站脚本攻击）`、`CSRF（跨站请求伪造）`、`SQL注入`

## XSS（跨站脚本攻击）
**含义**：发生在目标用户的浏览器层面上的，当渲染DOM树的过程，发生了不在预期内执行的JS代码时，就发生了XSS攻击。

XSS攻击分为两种：反射性攻击、存储型攻击

- 反射型攻击
    - 1、引诱用户去点击链接
    - 2、正规网站的服务端将恶意代码`从URL的参数`里取出
    - 3、`拼接在HTML中`返回给浏览器
    - 4、被拼接的恶意代码就是：`1、获取该用户cookie；2、把cookie发送给黑客`

- 存储型攻击
    - 恶意代码被保存到目标网站服务器，其他用户加载时执行（**例如：博客、论坛、私信**）

**防御**：

对`cookie`的保护：
 - `httpOnly`。对于`cookie`设置为`httpOnly`（防止客户端通过document.cookie读取cookie）

对用户输入的处理：
 - `参数过滤`。在**表单提交**或**url参数**传递前，对需要的参数进行`过滤`
 - `转义`，对用户输入的数据进行字符实体转码`转义`

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