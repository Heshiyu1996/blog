# 浏览器基础
[[toc]]

## 浏览器内核
 - Trident （IE内核）
 - Gecko （Firefox内核）
 - Presto（Opera，已废弃）
 - Webkit（Safari、Chrome28前）
 - Blink（Chrome28后）

## 浏览器缓存
先检查 **强缓存**，再检 查**协商缓存**

在上一次请求成功之后，再次对同一个资源进行请求时：
  - 浏览器会先检查是否命中 **强缓存**，主要是看`Expires`和`Cache-control`（分别代表资源的有效期以及缓存策略）
    - 若命中 **强缓存** ，直接从本地磁盘获取资源（**200**）
    - 若没有命中 **强缓存**，会组装请求报文，与服务器建立TCP链接，检查是否命中协商缓存。请求头会通过`If-Modified-Since`、`If-None-Match`携带`Last-Modified`、`ETag`的值。
        - 若命中 **协商缓存**，浏览器会组装响应报文，状态码为 **304**，让浏览器本地取资源即可。
        - 没有命中 **协商缓存**，响应全新的资源内容给浏览器，状态码为 **200**

> 若用户访问的资源仍处于强缓存中，需要对资源进行更新，如何解决？
>
> 解决：替换资源的url即可，因为html一般是不会被强缓存的。

 ## 输入URL，会发生什么？（完整的http过程）
 1、浏览器输入 url

 2、浏览器检查`强缓存`（Expires、Cache-control）

 3、DNS解析url，获取主机ip

 4、组装HTTP报文

 5、发起TCP的3次握手

 6、TCP连接建立后，发送HTTP请求

 7、服务器接收并解析，检查`协商缓存`（ETag、Last-Modified）

 8、通过TCP返回响应报文

 9、浏览器缓存响应

 10、浏览器进行`解析HTML（构造DOM树）`、`下载资源`、`构造CSSOM树`、`执行JS脚本`
 
### 说明
  - **HTML解析器**：会 从上往下 解析 “HTML文档”
 
  - **对于 DOM** ：通过 解析（`parse`），变成 DOM树
 
  - **对于 CSS** ：通过 解析（`parse`），变成 CSSOM树
    - CSS 不会阻塞 DOM解析，但会 阻塞 JS 执行

  - **对于 JS** ：通过 加载（`fetch`），变成 AST。然后执行（`execute`）
    - 声明 `defer`、`async` 可实现 异步加载（`fetch`）
    
    - “JS 的执行” 会 阻塞 DOM解析

![alt](./img/img-1.svg)
