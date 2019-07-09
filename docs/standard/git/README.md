# Git规范

## Git分支命名
 - master：主分支
    - 负责记录线上版本的迭代
    - 该分支代码与线上代码是完全一致的

 - develop：开发分支
    - 负责目前最新开发进度的版本

 - feature/\*：功能分支（*“\*”代表的是功能的简称*）
    - 用于开发新的功能
    - 基于`develop分支`检出
    - 开发完成并自测通过后，需要合并到`develop分支`，随后删除

 - release：发布分支
    - 用于代码上线准备，创建后由测试同学发布到测试环境进行测试
    - 基于`develop分支`检出
    - 提测过程中，发现bug，则在`release分支`进行修复；
    - 上线前，需将`release分支`合并到`master`、`develop分支`

 - hotfix：紧急修复分支
    - 用于线上bug的修复
    - 基于`master分支`检出
    - 修复完后，合并到`master`、`develop分支`

## Git分支Commit格式
格式：`type: message`

### type（提交类型）
 - feature: 新特性
 - refactor: 代码重构 && 优化
 - style: 样式修改
 - fix: bug修复（提测阶段 && 紧急线上）
 - docs: 文档修改（文案修改 && 文件更新）

### message（提交描述）
对应内容是commit简短描述：大致修改内容、影响文件/范围、进度等。
 - 英文中文皆可，一般不超过50个字符

### 部分统一描述
 - 文件打包：`npm run build`
 - 代码格式化：`npm run format`

### Git分支图
![alt](./img/git-branch.jpg)
