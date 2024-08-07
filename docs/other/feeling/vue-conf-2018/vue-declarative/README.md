
## 挖掘Vue的声明式交互能力（演讲者：Winter）
 > 主题介绍：声明式与命令式设计是Vue和React的核心区别之一，我的分享中将会从几个方面来探讨如何挖掘声明式编程的优势，分别包括：声明式与双向绑定，声明式与交互，声明式与递归

 ### “交互能力编程”包括什么
 * 声明式与图灵完备性
 * 声明式与UI编程
 * 声明式与UI架构
 * 声明式与交互
 
 ### 声明式 VS 命令式
 “声明式”是指：直接想要达到某种效果，并不注重过程。`例如：HTML、CSS等`
 > 一个月后，我要看到你站在这里讲一份关于Vue的PPT

 “命令式”是指：为了达到某种效果，并且注重过程的。`例如：JS、JAVA、C++等`
 > 你先去学习Vue，上官网深入他的一些规则原理，然后做一份PPT给我

 ### 图灵完备性
 图灵完备性，即“可计算性”。表示在这个系统中写代码能够解决任何计算性的问题，也就是说**一切可计算的问题都能计算**

 对于“声明式”语言，则指：if/递归
 对于“命令式”语言，则指：if/for, if/goto

 `Vue.js的组件系统是具有图灵完备性的`，这一点会上劭非大神分别“计算阶乘”、“计算斐波那契数列”这两个demo来证明了。

 ### 声明式的优势
 #### 可重复绑定性（recycle-list）
 类似于在可视区域滚动。
 
 当用户滚出可视区域后，从DOM树上摘下那些**已滚出区域的DOM节点**，放入池子中（如果池子已满则先销毁池子中的DOM节点再放入）。当下次再进来这部分的可视区域后，再从池子中把DOM节点挂到树上（实际上是再把数据绑上而已），以达到提高性能的效果。

 ![alt](./img/top-2-1.png)

 ### 声明式与UI编程

  与UI编程的各个阶段：

  - 70年代，MVC的诞生，人们意识到**视图**是应该被**独立抽象**的

  - 80年代，标记语言大热，最开始更是与文本相关

  - 90年代，可视化编辑器出现“独立的UI代码文件”

  - 2000年，markup language + programming language

  - 2009年，“HTML5”

 ### 声明式与UI架构
  MVC => MVP => MVVM，一脉相承的演化

  MVVM是为**声明式/多语言**量身定做的编程模型，它的数据绑定是**声明式的数据**与**UI**通讯

 ### data的写法
 在演示demo时，留意到邵非大神的代码，发现他的data都是这样写的：
 ```js
 // new
 data: () => ({
     /* ... */
 })

 // old
 data() {
     return {
         /* ... */
     }
 }
 ```

 ### 总结
这一part还是属于比较干货的内容，劭非大神谦虚地说自己一个月前才学的Vue，然而像Vue一样类似的声明式语言的主要特点都是大同小异的，都是具有：“图灵完备性”、“UI编程”、“UI架构”等特点。

通过这节学到了Vue.js的组件系统是具有图灵完备性的一门语言，任何可计算的问题都可以利用Vue.js本身的语法被计算出来。同时对“UI编程”的各个发展阶段，以及对“MVVM的数据绑定”的来源有了一定的认识。最后邵非大神还推荐用`Vue Directive`(指令)来给元素添加行为。
