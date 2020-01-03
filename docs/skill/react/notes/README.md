# 知识点整理（v16.8以前）
> React v16.9（以前）的一些常用知识点：

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

## class Fields语法
React可以通过`class Fields语法`，使得函数能够绑定到组件实例上：
```js
  class Bork {
    // 在类中有以下4种属性：
    // 属性初始化
    instanceProperty = "bork";
    // class Fields
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

## Render Prop
通过`Render Prop`，可以**告诉组件需要渲染什么内容**（*经常会用来组件复用*）。

```jsx
// 子组件
class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }

    handleMouseMove = event => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }

    render() {
        return (
            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        )
    }
}

// 父组件
class MouseTracker extends React.Component {
    handleMouse = mouse => {
        return <Cat mouse={mouse} />
    }

    render() {
        return (
            <div>
                <h1>移动鼠标!</h1>
                {/* 提供了`render`这个prop，让`<Mounse>`能够动态决定需要渲染什么。*/}
                <Mouse render={this.handleMouse} />
            </div>
        )
    }
}
```


### 拓展：也可以将父组件MouseTracker写成HOC
```jsx
function withMouse(Component) {
    return class extends React.Component {
        handleMouse = mouse => {
            return <Cat mouse={mouse} />
        }

        render() {
            return (
                <div>
                    <h1>移动鼠标!</h1>
                    <Mouse render={this.handleMouse} />
                </div>
            )
        }
    }
}
```

## 问题集结
### 为何useFetch里的param需要useRef才不会死循环？

### intl.init异步，导致子组件无法读取子组件的包