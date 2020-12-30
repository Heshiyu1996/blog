#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f https://${token}@${address} master:master
# git push -f https://github.com/Heshiyu1996/Heshiyu1996.github.io.git master
# git push -f git@github.com:Heshiyu1996/Heshiyu1996.github.io.git master


# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/Heshiyu1996/blog.git master:gh-pages

cd -
