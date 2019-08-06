# Git规范

[[toc]]

## Git分支命名
 - **master：主分支**
    - 负责记录线上版本的迭代

 - **develop：开发分支**
    - 负责目前最新开发进度的版本

 - **feature/\*：功能分支（*“\*”代表的是功能的简称*）**
    - 用于开发新的功能
    - 基于`develop分支`检出
    - 局部开发完成并自测通过后，需要合并到`develop分支`，随后删除

 - **release：提测分支**
    - 用于代码上线准备，创建后由QA部署到测试环境进行测试
    - 基于`develop分支`检出
    - 提测过程中，发现bug，则在`release分支`进行修复；
    - 上线前，需将`release分支`合并到`master`、`develop分支`

 - **hotfix：紧急修复分支**
    - 用于线上bug的修复
    - 基于`master分支`检出
    - 修复完后，合并到`master`、`develop分支`

 - **refactor：代码优化分支**
    - 用于代码的优化（一般在提测之后），优化在开发阶段产生的冗余或不完善的代码
    - 基于`release分支`检出
    - 优化完后，合并到`release分支`

## Git分支的Commit格式
格式：`type: message`

### type（提交类型）
 - feature: 新特性
 - refactor: 代码重构 && 优化
 - style: 样式修改
 - fix: bug修复（提测阶段 && 紧急线上）
 - docs: 文档修改（文案修改 && 文件更新）

### message（提交描述）
对应内容是commit简短描述：大致修改内容、影响文件/范围、进度等。
 > 英文中文皆可，一般不超过50个字符

### 部分统一描述
 - 文件打包：`npm run build`
 - 代码格式化：`npm run format`

### Git分支图
![alt](./img/git-branch.jpg)

## Commit校验工具——Husky
原理：在`git commit`提交代码前，利用Git钩子——`pre-commit`来实现代码规范检测。一旦发现检测结果带有`error`，则不允许提交到远程仓库。

### 安装Husky
    yarn add husky -D

### package.json配置
```json
"scripts": {
    "format": "prettier --write \"./src/**/*.{js,jsx,json}\"",
    "lint": "eslint --fix --ext .js,.jsx src"
},

"husky": {
    "hooks": {
        "pre-commit": "npm run format && npm run lint && git add ."
    }
}
```

### 使用注意
 1、由于使用了`git add .`，会将`待定区`文件全部提交 *（尽量保证每次的“小功能提交”）*；

 2、即使被husky退回提交，也会代码格式化、语法检查/修正；

 3、ESLint的`warning`不会被Husky拦截 *（ESLint rules尽量配置成error）*；

 4、跳过检测，强制提交（不推荐）

    git add . && git commit --no-verify -m "force commit"