# koa2
> koa2由Express原班人马打造，是基于Node.js的web开发框架。

[[toc]]

## koa2的优点
 - **轻量、扩展性强** （将 Express 的 router、view 都移除了）
 - 采用 **中间件机制**（洋葱模型）
    - 基于 `async/await` 的中间件容器机制
 - `context`封装
    - 将 node 的 `request` 和 `response`对象 封装到单个对象中
 - 模块化
> Node.js的api支持的都是 **callback形式** 的异步编程模型。（callback嵌套问题）

## 中间件机制
中间件可以看作是一个函数。

它的执行顺序 是一个类似 “洋葱模型” 的 **“从皮到心，从心到皮”**。

**实质**
 1. 遇到 `next` 执行时，会去执行下一个中间件
 2. 直到 最后一个中间件 执行完后，会再次回到 上一个中间件 在 `next` 后未执行的代码。

> 通过 **compose** 来管理这些中间件执行顺序

### compose
一个值需要经过多个函数，才能变成另一个值。那我们可以把中间的所有步骤合并成一个函数，叫做 **compose**。
```js
const compose = (f, g) {
    return (x) {
        return f(g(x));
    }
}
```

#### 柯里化
柯里化：把一个多参数的函数，转化为单参数函数。


![alt](./img/img-1.png)


### context封装
Koa Context 将 node 的 `request`、`response`对象 封装到单个对象中。

每个请求都会创建一个 `Context`，并在中间件中，作为接收器使用

```js
app.use(async ctx => {
    ctx; // 这就是 context
    ctx.req; // 这是 node request
    ctx.res; // 这是 node response
    ctx.request; // 这是 koa request
    ctx.response; // 这是 koa response
})
```

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
