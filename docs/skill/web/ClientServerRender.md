# 浏览器/服务端渲染
 `浏览器渲染`是指：用 *JS* 去生成HTML，前端实现路由（特别是**单页面应用**）。

 渲染步骤：
  - **1、请求一个HTML**
  - 2、服务端返回一个HTML
  - **3、浏览器下载HTML里的css、js文件**
  - **4、加载js文件**
  - 5、执行js代码，向服务端端请求数据
  - 6、服务端端返回数据
  - **7、浏览器从无到有，将内容完整地渲染到页面上**
 
 好处：
  - 可实现局部更新
  - 可实现懒加载
  - 减轻服务端的压力
----
 `服务端渲染`是指：用 *后端语言* 通过一些 **模板引擎** 来生成HTML。

 渲染步骤：
  - **1、请求一个HTML**
  - 2、服务端在内网进行数据请求
  - 3、服务端渲染“可视部分”
  - 4、服务端返回HTML（已经有正确内容的页面）
  - **5、浏览器下载HTML里的css、js文件**
  - **6、加载js文件**
  - **7、浏览器将剩余部分渲染到页面上**

 好处：
  - 加载速度快（服务端在内网进行请求，数据响应快）
  - 对SEO搜索引擎友好