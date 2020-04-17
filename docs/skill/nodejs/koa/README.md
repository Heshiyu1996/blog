# koa2
> koa2由Express原班人马打造，是基于Node.js的web开发框架。

## 什么是koa2
Node.js个官方api支持的都是 **callback形式** 的异步编程模型。（callback嵌套问题）

它有着 **轻量、扩展性强** 的特点（将Express的router、view都移除了）

## 与Node.js对比
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


## koa2的优点
 - 模块化
 - `context`封装
 - 中间件机制，采用`洋葱模型`
 - 错误处理

## 洋葱模型
每次执行`app.use`，是往 `函数数组` 里添加了一个函数。然后会通过 `compose` 函数，处理添加进来函数的执行顺序。
> 换句话说，就是 compose 实现了洋葱模型机制。

![alt](./img/img-1.png)

## 参考链接
[读 koa2 源码后的一些思考与实践](https://cloud.tencent.com/developer/article/1552630)

