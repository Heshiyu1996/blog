# React常见的易错用法
> 日常中在使用React开发，记录一些易错的用法。

[[toc]]

## 「不可变性」相关
由于“不可变性”，使得React在渲染过程中的每一处都有可能产生Bug。
> 以下搜集于[TC39提案（Records & Tuples）对React的影响](www.apple.com.cn/retail/westlake/)
 - 性能上：可以避免的重复渲染
 - 行为上：重复执行一些多余的effect、无限循环
 - API上：对于一些重要的对象不能做到准确表示

大部分的React开发者都已经习惯了**不可变性（immutability）**
> 通俗点来说，就是每次试图去更新一个不可变的对象时，都会创建新的对象
>
> ![alt](./img/img-1.png)
>
> ![alt](./img/img-2.png)



## 事件监听器里的state不会更新
### 现象
处理事件监听时注册监听器，发现监听器内无法获取最新state值。
```js
  const printId = () => {
    console.log(id);
  };

  // 绑定事件
  useEffect(() => {
    document.getElementById("btn").addEventListener("click", printId);
    console.log("事件绑定完成");
  }, []);
```

[Demo地址](https://codesandbox.io/s/eloquent-meadow-dnirn?file=/src/App.js)

### 分析
 1. 初步怀疑为“js监听器本身逻辑处理问题”
 2. 原组件是用hook实现。通过改成class组件写法([Demo](https://codesandbox.io/s/clever-brook-b9qty?file=/src/App.js))，发现在监听器内可正常获取最新state
 3. 和state值的存储形式、更新机制有关

### 总结
Hooks可以用来实现绝大部分class能解决的事情，但也有许多不一样的特性在日常开发要注意：
 1. 它是个纯函数，每次触发更新拥有完全独立的函数作用域
 2. 所以每次render，hooks里定义的每个函数都是一个新的引用地址（如不用useCallback包裹）
 3. 自身的useState、ussEffect等都是用单链表管理。重渲染时通过更新链表

所以，事件监听注册的监听器函数会在下次render时改变地址，而“前监听器”内部管理的state依然是绑定时的那个旧值（类似闭包）。

### 解决
法1：利用useEffect清除函数，并将id加入依赖项
```js
  useEffect(() => {
    document.getElementById("btn").addEventListener("click", printId);
    console.log("事件绑定完成");

    return () => {
      document.getElementById("btn").removeEventListener("click", printId);
    };
  }, [id]);
```

法2：组件改成class写法
