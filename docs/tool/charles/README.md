# 利用charles调试

[[toc]]

## 安装
[Charles官网下载](https://www.charlesproxy.com/download/)

## 抓真机请求
 - 电脑和手机连在同一个Wifi下
 - `手机设置` > `Wi-Fi` > `当前Wifi下的高级配置` >` HTTP代理/配置代理` > `手动` > `输入服务器、端口`
> 其中 “服务器” 为当前Wifi的ip。
> 
> MAC可通过 CMD > ifconfig > en0 > inet
>
> ![alt](./img/pic-3.png)
> 
> “端口”，可通过`Charles` > `Proxy` > `Proxy Settings` > `HTTP Proxy` > `Port` 查看。

这样就可以让真机和电脑处于同一个网络环境（**电脑上开启的Nginx对真机同样有效**）。
> 此处的Host配置需要是全局的Host文件：`/etc/hosts`

## 抓HTTPS包
打开Charles，点击`Proxy` > `SSL Proxying Settings`，输入要抓的HTTPS域名（如：`www.dbxyyxt.com`）即可

<img src="./img/pic-1.png" width="200" />

<img src="./img/pic-2.png" width="400" />
