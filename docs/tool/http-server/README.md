# http-server

通过`http-server`可以在本地启动一个微型服务器，来调试打包后的文件。
> 可以省去部署的麻烦。

前提：

需要修改打包文件的**输出路径前缀**：`publicPath`
> 一般在webpack.prod.js > output.publicPath

```
// 工程打包
npm run build

// 进入工程的dist（或build）文件夹
cd dist

// 启动http-server
http-server .
```

## 可能会遇到的跨域问题
 - 修改hosts，将`服务端域名`转到本地`127.0.0.1`
 - 修改**Nginx配置**，转到线上
```
upstream local {
    # 监听端口
    server 127.0.0.1:8080;
}

upstream online1 {
    # 线上ip
    server 31.101.360.155:443;
}


# 转发到xx环境
server {
    listen       80;
    listen       443 ssl;
    server_name  www.baidu.com;

    ssl_certificate      server.crt;
    ssl_certificate_key  server_nopwd.key;

    # 接口代理
    location ~ /(we)?api {
        proxy_set_header Host $http_host;
        # 【注意】此处协议(http?https?)需要检查
        proxy_pass https://online1;
    }

    # 静态资源代理
    location ~ ^/ {
        proxy_pass http://local;
        proxy_set_header Host $http_host;
    }
}
```

配置好Nginx之后，就可以解决跨域问题，从而直接通过`www.baidu.com`访问了

## 其他注意
执行`npm run build`后，原dist文件可能会被删。需要重新`cd`进入，再执行`http-server`。