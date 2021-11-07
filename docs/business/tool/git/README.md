# Git

## 删除已提交到远程的文件
先在 `.gitignore` 文件里添加需要忽略，然后执行

```bash
git rm -r --cached <fileName>
```
将`<fileName>`整个替换为要删除的文件夹。
> 该操作不会影响本地的文件


## git rebase
场景：当 `dev分支` 开发过程中，`master`也发生了其他commit。需要把这些同步到到 `dev` 上

操作：
 - 切换到`dev分支`
 - 右键`master` - “将当前变更变基到 master”
 - 逐步变基，解决冲突
 - `dev分支`上即可获得最新的`master`

![alt](./img/img-1.png)



## 参考链接
- [git忽略文件,删除远程仓库文件操作](https://blog.csdn.net/s740556472/article/details/82825434)
