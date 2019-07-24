# Web性能优化
> 前端性能优化设计到计算机网络、数据算法、图形图像处理、浏览器渲染等多方面计算机知识。

[[toc]]

## content方面
    - 减少DOM元素数量
    - 减少DNS查询
    - 减少HTTP请求
        - 原因
        ```js
        影响页面呈现有3个因素：
            1、服务端连接数据库，并返回数据
            2、http请求以及数据在网络中的传输（消耗80%）
            3、文件在浏览器中渲染呈现
        
        具体实践（减少HTTP请求）：
            1、充分利用浏览器缓存（使用Expires、Cache-Control响应头，配置ETag）
            2、CSS Sprites：把多张图片整合到一张图片中，再利用CSS的background属性进行定位
            3、合并CSS和JS文件：把多个js（css）合并为一个js（css）
            4、图片地图：允许在一张图片上关联多个URL，目标URL取决于点击的坐标
            5、对HTTP传输内容进行压缩（配置`Accept-Encoding`）
            6、
        ```
        另外还可以通过[图片转成base64](./../detail/Base64.md)达到减少HTTP请求效果
 
## Server方面
    - 使用CDN
    - 使用Expires、Cache-Control响应头，配置ETag

## Cookie方面
    - 减小cookie大小

## css方面
    - 将样式表放到页面顶部
    - 不使用CSS表达式

## js方面
    - 将脚本放到页面底部
    - 减少DOM访问
