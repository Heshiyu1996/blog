# mac查找被占用的端口并关闭
例如：查找8081端口
```
sudo lsof -i :8081
```

然后根据PID杀进程：
```
sudo kill -9 61342（即pid）
```