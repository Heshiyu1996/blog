# 浏览器
[[toc]]

## WebStorage
[WebStorage](./../detail/WebStorage.md)

## 浏览器内核
 - Trident （IE内核）
 - Gecko （Firefox内核）
 - Presto（Opera，已废弃）
 - Webkit（Safari、Chrome28前）
 - Blink（Chrome28后）

## 浏览器缓存
 第一次请求成功后，再次请求同一个网页：
  - 获取第一次请求成功后缓存下来的`Header`，里面包括：`Expires`、`Cache-control`、`Last-Modified`和`ETag`。前两者属于强缓存，后两者属于协商缓存
  - 先看`Expires`和`Cache-control`，检查是否命中 `强缓存`
    - 若是，直接从本地磁盘获取资源（200）
    - 若不是，再看`Last-Modified`、`ETag`检查是否命中 `协商缓存`
        - 若是，浏览器会响应新的Header信息给客户端（但不会返回资源内容），没有新修改的地方（304）
        - 若不是，响应全新的资源内容给客户端

 ## 输入URL，会发生什么？（完整的http过程）
 1、浏览器输入url

 2、浏览器检查`强缓存`（Expires、Cache-control）

 3、DNS解析url，获取主机ip

 4、组装HTTP报文

 5、发起TCP的3次握手

 6、TCP连接建立后，发送HTTP请求

 7、服务器接收并解析，检查`协商缓存`（ETag、Last-Modified）

 8、通过TCP返回响应报文

 9、浏览器缓存响应

 10、浏览器进行`解析HTML（构造DOM树）`、`下载资源`、`构造CSSOM树`、`执行JS脚本`
 
 > HTML解析器会根据HTML文档，从上往下进行解析
 > 
 > DOM的渲染，是在加载完`<head>`里的css、js后开始执行的
 > 
 > 所以，最好不要把js放在`<head>`(特别是操作DOM的js)
 > 
 > 对于没有声明defer、async的`<script>`就会按顺序直接加载、执行。`JS引擎`会抢夺`HTML解析器`的控制权。直到加载、执行完才会把控制权交给`渲染引擎`
