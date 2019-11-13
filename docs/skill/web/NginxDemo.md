# Nginx配置Demo

## 1、下载私钥：id_rsa
记录对应文件所在路径（第2步要用）。

## 2、配置ssh
命令行执行：
```
vim ~/.ssh/config
```
添加以下内容：
```
Host myName123
HostName 10.170.1.1
User heshiyu
Port 8888
IdentityFile ~/.ssh/id_rsa
```
:::tip
**Host**可随意命名（第3步命令行执行时要用）

**HostName**：服务器ip

**User**：要连接的用户名

**Port**：要连接的端口

**IdentityFile**：第1步对应私钥文件的所在路径。
:::

## 3、执行ssh
命令行执行：
```
ssh myName123
```
连上对应跳板机。

## 4、打开appops
```
sudo -iu appops
```

## 5、进入Nginx配置目录
```
cd /etc/nginx/sites-enabled/
```
进入当前**HostName**下，各个项目的Nginx配置目录

6、修改Nginx配置
```
vim www.baidu.com
```
可进行www.baidu.com的Nginx反向代理配置。

> 可执行ls可查看所有域名下的Nginx配置