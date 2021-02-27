
# Nginx
Nginx 是一个高效的 “HTTP负载均衡器”，它可以 **将 请求 分发到 各个服务器**，从而提高web应用性能。

```js
server {
    server_name www.baidu.com;
    listen 80;

    location /api/auth {
        proxy_pass http://10.1.2.3:8800;
    }

    // 定位规则
    location /product.html {
        // 静态资源根目录
        root /home/static/baidu/build;
        // 首页
        index product.html
        // 重定向
        try_files $uri /product.html
    }
}
```

## Nginx实现负载均衡的4种模式
### 4种模式
 - 轮询（默认）：请求会 **随机** 分发到 服务器 上
 - 最少连接分配：请求会 分发到 **当前连接数最少** 的服务器上
 - 权重分配：根据 `服务器配置的 weight` 分发，（权重越高，被分发到的概率也越高）
 - 哈希分配：根据 `客户端IP` 分发到同一台服务器
