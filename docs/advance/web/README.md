# Web
[[toc]]

## HTTP协议
[HTTP协议](./../detail/HTTP.md)

## XSS、CSRF、SQL注入
[XSS、CSRF、SQL注入](./../detail/WebAttack.md)

## 跨域和CORS
[跨域和CORS](./../detail/CORS.md)

## CDN
[CDN](./../detail/CDN.md)

## 与后端保持不断通信（WebSocket）
 - 短轮询：客户端周期性地向服务器发起HTTP请求（一个request对应一个response）
 - 长轮询：客户端发起HTTP请求，服务器并不是每次都立即响应（等待数据更新后才响应，否则保持该连接直到超时）（一个request对应一个response）
 - WebSocket

### WebSocket
WebSocket是一种协议，和HTTP协议一样位于应用层，都是TCP/IP协议的子集。
 - HTTP是单向通信协议（只有客户端发起HTTP请求，服务端才会返回数据）
 - WebSocket是双向通信协议（建立连接后，客户端、服务器都可以主动向对方发送或接受数据）
它建立前需要借助HTTP协议，建立连接后，持久连接的双向通信就和HTTP协议无关了。
