# 生命周期
首先，从`new Vue()`开始
 - 初始化生命周期、事件系统
 - `beforeCreate`
 - 初始化State（props、data、computed...）、watcher
 - `Created`
 - 有el选项吗？
    - 没有的话，等待 **vm.$mount(el)** 被执行时，才开始编译
 - 有template选项吗？
    - 有，将template编译到render函数
    - 没有，将el的outerHTML整个内容作为template，编译到render函数
 - `beforeMount`（此时已准备好render函数了）
 - 将render函数返回的VNode树渲染到真实DOM上
 - `mounted`（挂载成功！）

----
 - 当data发生变化（未重绘）
 - `beforeUpdate`
 - 执行diff算法，更新虚拟DOM，并将变化的部分patch到真实DOM
 - `updated`
----
 - 当调用vm.$destroy()时
 - `beforeDestroy`
 - 摧毁子组件、事件绑定、数据监听
 - `destroyed`（摧毁成功！）

![alt](./img/img-1.png)
