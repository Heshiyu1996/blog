# 其他
> React v16.9（以前）的一些常用知识点：

[[toc]]




## setState的两种常用方式
### 传递一个对象 + 回调
```js
this.setState({ count: this.state.count + 1 }, this.saySomething);
this.setState({ count: this.state.count + 1 }, this.saySomething);

// this.state.count: 1
```

### 传递一个函数
```js
this.setState(state => ({ count: state.count + 1 }))
this.setState(state => ({ count: state.count + 1 }))

// this.state.count: 2
```
此时的state是最新版的state

原理：`setState`的异步的，且它的调用是分批的。所以可以`链式地进行更新`。

## 将函数绑定到组件实例的3种方法
### 在构造函数中
```jsx
class HomeIndex extends Component {
    constructor(props) {
        super(props);
        // 方法1、绑定在构造函数中
        this.addCount = this.addCount.bind(this);
    }

    addCount() {
        console.log('hi');
    }

    render() {
        return <button onClick={this.addCount}>Click</button>;
    }
}
```

### 在class field中
```jsx
class HomeIndex extends Component {
    constructor(props) {
        super(props);
    }

    // 方法2、绑定在class fields中
    addCount = () => {
        console.log('hi');
    }

    render() {
        return <button onClick={this.addCount}>Click</button>;
    }
}
```

### 在render中
```jsx
class HomeIndex extends Component {
    constructor(props) {
        super(props);
    }

    addCount() {
        console.log('hi');
    }

    render() {
        // 方法3、绑定在render中
        return <button onClick={this.addCount.bind(this)}>Click</button>;
    }
}
```
这种方法在每次组件渲染时，会创建一个新的函数，可能**会影响性能**

## 为什么React要用className？
因为`class`在JavaScript里是关键字，而JSX是JavaScript的扩展。

## 参考链接
 - [useCallback、useMemo 分析 & 差别](https://juejin.im/post/5dd64ae6f265da478b00e639)