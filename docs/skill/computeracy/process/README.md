# 进程、线程
> 经常说 JS 是单线程执行的，指的是 **一个进程里只有一个主线程**。

## 定义
**进程是 CPU 资源分配的最小单位；线程是 CPU 调度的最小单位。**

### 示例
<img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7692628873/9cff/9812/4820/e3730d52a5f5970d58a1f9a16d788343.png" width="400px" />

 - 进程 可以理解为 图中的工厂，有单独的 **专属自己的工厂资源** （内存）
 - 线程 可以理解为 图中的工人，多个工人在同个工厂中协同工作
 - 工厂 与 工人 是 `1 : n` 的关系（即：**一个进程由多个线程组成，线程是一个进程中代码的不同执行路线**）
 - 工厂的空间是工人共享的（即：**一个进程的内存空间是所有线程共享的**）
 - 多个工厂之间独立存在