# 其他
> 这里会搜集一些有关HTML的零碎知识

[[toc]]

## HTML5的新语法
### 新增语义化标签（Semantic Elements）
 - 结构标签
    - header（头部信息、标题）
    - nav（导航条）
    - section（内容区块）
    - article（核心内容）
    - aside（侧边栏）
    - footer（底部信息）
    - <img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7023530523/7c26/f215/c822/51d1fdba0b2610e38d645c2a6c4a7699.png" widht="300px" />

 - 表单标签（input的type属性）
    - email
    - url
    - number
    - range
    - Date
    - search
    - color

 - 媒体标签
    - video
    - audio
    - embed（嵌入内容，包括各种媒体：PDF、MP3等）

### 语法优化
 - DOCTYPE html 简化
    - 字符编码更简洁
    - 不区分大小写

## 行内元素、块级元素有哪些
### 行内元素
`a`、`img`、`input`、`label`、`select`、`span`、`textarea`

### 块级元素
`div`、`form`、`h1`、`ol`、`ul`、`p`、`table`

 > 行内替换元素（例如`img`）。`height`、`width`、`padding`、`margin`均可用（效果等于块元素）

### 区别
#### 格式
默认情况下，行内元素不会以新行开始，块级元素会。

#### 内容
一般情况下，行内元素只能包含 **文本** 和 **其它行内元素**。

块级元素可以包含 **行内元素** 和 **其它块级元素**。