# React常用知识点
> React 16.9的一些常用知识点：

[[toc]]

## setState的两种常用方式
### 传递一个对象 + 回调
```js
this.setState({ count: this.state.count + 1 }, this.saySomething);
this.setState({ count: this.state.count + 1 }, this.saySomething);

// this.state.count: 1
```
此时，this.state

### 传递一个函数
```js
this.setState(state => ({ count: state.count + 1 }))
this.setState(state => ({ count: state.count + 1 }))

// this.state.count: 2
```
此时的state是最新版的state

原理：`setState`的异步的，且它的调用是分批的。所以可以`链式地进行更新`。

## classnames包
可以用`classnames包`来动态添加class。

动态添加class可以用：

1、三目运算符
```js
render() {
    return <button className={isHide ? 'hide' : ''`}></button>;
}
```

2、classnames（需安装到save）
```js
import classNames from 'classNames';
render() {
    const btnClass = classNames({
        btn: true,
        'btn-pressed': true
    });
    return <button className={btnClass} onClick={this.addCount}>{count}</button>;
}
```

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
        // 方法4、绑定在render中，通过使用箭头函数
        return <button onClick={() => this.addCount()}>Click</button>;
    }
}
```
这种方法在每次组件渲染时，会创建一个新的函数，可能**会影响性能**

## class Fields语法
React（包括Create React App）可以通过`class Fields语法`，使得函数能够绑定到组件实例上：
```js
  class Bork {
    // 在类中有以下4种属性：
    // 属性初始化
    instanceProperty = "bork";
    boundFunction = () => this.instanceProperty;

    // 静态的类属性
    static staticProperty = "babelIsCool";
    static staticFunction = function() {
      return Bork.staticProperty;
    };
  }

  let myBork = new Bork;

  // 箭头函数没有在原型上
  console.log(myBork.__proto__.boundFunction); // > undefined

  // * 箭头函数被绑定到“类实例”上 *
  console.log(myBork.boundFunction.call(undefined)); // > "bork"

  // 静态方法存在“类”上
  console.log(Bork.staticFunction()); // > "babelIsCool"
```