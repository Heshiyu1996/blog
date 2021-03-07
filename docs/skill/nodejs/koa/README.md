# koa2
> koa2由Express原班人马打造，是基于Node.js的web开发框架。

[[toc]]

## koa2的优点
 - **轻量、扩展性强** （将 Express 的 router、view 都移除了）
 - 采用 **中间件机制**（洋葱模型）
 - 模块化
 - `context`封装
 - 错误处理

> Node.js的api支持的都是 **callback形式** 的异步编程模型。（callback嵌套问题）

## koa2的中间件
中间件可以看作是一个函数。

**它与其他函数的区别是：**
 1. 遇到 `next` 执行时，会去执行下一个中间件
 2. 直到 最后一个中间件 执行完后，会再次回到 上一个中间件 在 `next` 后未执行的代码。

从而实现一个类似洋葱模型的 **“从皮到心，从心到皮”**。
> 底层是通过 **compose** 来管理这些中间件执行顺序的。

![alt](./img/img-1.png)


## 使用示例
例如：开启一个 http服务

```js
// Node.js
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hi koala');
}).listen(3000);
```

```js
// koa2
const Koa = require('koa');
const app = new Koa();
const {createReadStream} = require('fs');

app.use(async (ctx, next) => {
    if (ctx.path === '/favicon.ico') {
        ctx.body = createReadStream('./avicon.ico');
    } else {
        await next();
    }
});

app.use(ctx => {
    ctx.body = 'hi koala';
})
app.listen(3000);
```
由上面代码可知，koa2在 **模块化方面** 会更方便。

## 参考链接
[读 koa2 源码后的一些思考与实践](https://cloud.tencent.com/developer/article/1552630)
