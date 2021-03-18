# HOC、render prop
> 组件是React代码复用的基本单元。

[[toc]]

## HOC
**高阶组件（HOC）** 是个 纯函数 。

当调用这个函数时，**传入一个 “组件”，会返回一个 “新组件”**。

> 常见的HOC：`connect`(Redux)

```js
const withContext = Component => props => (
    <Consumer>{value => <Component {...props} {...value} />}</Consumer>
);
```

特点：**可以把组件之间 可复用的代码、逻辑 抽离到 HOC 当中**。
> 如：withContext、withLoadData

### HOC的两种写法
实现 HOC 的方式有 2 种：
 - 属性代理
 - 反向继承

#### 属性代理
从 “组合” 的角度。

**属性代理** 是最常见的实现方式。通过将组件包装在容器组件中。（父子组件）

**缺点：**
 - 会影响原组件某些生命周期方法
 - 无法直接获取 `refs`

```jsx
const HOC = WrappedComponent => {
    return class extends React.Component {
        render() {
            const newProps = { type: 'HOC' };
            return <WrappedComponent {...this.props} {...newProps} />
        }
    }
}

function HOC(WrappedComponent) {
    const newProps = { type: 'HOC' };
    return props => <WrappedComponent {...props} {...newProps} />
}
```


#### 反向继承
从 “继承” 的角度。返回一个 **继承了子组件的类组件**。

**特点：**
 - 传入组件的生命周期 会被重写（但可通过 `super` 劫持）
 ```jsx
    componentDidMount(){
      // 劫持 WrappedComponent 组件的生命周期
      if (super.componentWillMount) {
        super.componentWillMount.apply(this);
      }
      ...
    }
 ```

```jsx
const HOC = WrappedComponent => {
    return class extends WrappedComponent {
        render() {
            return super.render();
        }
    }
}
```

#### 两种写法的对比
 - 属性代理 是从 “组合” 角度出发，有利于从外部去操作 `WrappedComponent`，可以操作的对象是 `props`、或者在 `WrappedComponent` 外面加一些拦截器、控制器等

 - 反向继承 是从 “继承” 角度出发，是从内部去操作 `WrappedComponent`，可以操作组件内部的 `state`、生命周期、`render`函数等


### 示例
包装 `Input`组件 以实现 “函数防抖” 效果的 HOC 组件。

```jsx
import React from "react";
import debounce from 'lodash.debounce';

const EnhanceDebounce = (WrappedComponent) => {
    class MyHoc extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: ''
            }
        }

        // 组件卸载时，取消防抖
        componentWillUnmount() {
            this.handleChange.cancel();
        }

        // 输入函数通过防抖
        handleChange = debounce(() => {
            this.setState({ value: e.target.value });
        }, 800);

        render() {
            return (
                <WrappedComponnet
                    defaultValue={this.state.value}
                    onChange={this.handleChange}
                    {...this.props}
                />
            )
        }
    }

    return MyHoc;
};

export default EnhanceDebounce;
```


### HOC缺点
 - `ref` 不会被传递（会挂到 HOC 上，而不是被包裹的组件）
    - 解决：`React.forwardRef`

 - 嵌套地狱
    - 当嵌套层级过多时，追溯数据源会变的困难
 
 - 命名冲突
    - props属性名冲突，某个prop可能被多个HOC重复使用

 - 原组件的 静态方法 会丢失
    - 解决：需准确指定 静态方法 到 新组件 上。

 - 性能
    - 额外的组件实例存在性能开销

#### 转发ref
```jsx
import React from "react";

const Enhance = (WrappedComponent) => {
    class MyHoc extends React.Component {
        render() {
            // return <WrappedComponent />;
            const { forwardRef } = this.props;
            return <WrappedComponent ref={forwardRef} />;
        }
    }

    // return MyHoc;
    // 转发 ref
    return React.forwardRef((props, ref) => {
        return <MyHoc forwardRef={ref} />;
    });
};

export default Enhance;
```
这里， Api `forwardRef` 接收一个渲染函数。这个渲染函数会接收 `props`、`ref`，并返回一个 `React节点`。


#### 原组件的静态方法会丢失
丢失：
```jsx
// 1. 原组件MyComponent 存在 静态函数 staticMethod
MyComponent.staticMethod = function() {/*...*/}

// 2. 用 HOC 将 原组件MyComponent进行包裹，生成一个新组件
const EnhancedComponent = hoc(MyComponent);

// 3. 新组件 EnhancedComponent.staticMethod 不存在
typeof EnhancedComponent.staticMethod === 'undefined' // true
```
解决：
```jsx
function hoc (Component) {
    // 新组件Enhance
    class Enhance extends React.Component { /* ... */ }

    // 指定将 staticMethods 方法拷贝给 新组件Enhance
    Enhance.staticMethod = Component.staticMethod;
    return Enhance;
}
```

## render props
`render props` 同样也是 提高组件复用 和 抽象 手段。

提供一个能接收 “指定prop” 的组件，这个组件能根据这个 prop 来 “动态决定” 需要渲染什么内容：

```jsx
class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }

    handleMouseMove = event => this.setState({ x: event.clientX, y: event.clientY });

    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                /* 提供 render 方法 可以让 `<Mouse>` 能够 “动态决定” 需要渲染什么内容 */
                {this.props.render(this.state)}
            </div>
        )
    }
}
```

```js
class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <h1>移动鼠标！</h1>
                
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )} />

            </div>
        )
    }
}
```

```js
class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;

        return (
            <img src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
        )
    }
}
```

### render props的优缺点
#### 优点
解决了 HOC 的 组件嵌套、命名冲突、ref传递

#### 缺点
 - 函数嵌套

 - 无法在 return 语句外访问数据
 
 

### 注意事项
#### Render Props和React.PureComponent搭配时，要小心使用
若给render属性传入一个匿名函数，那每次`render`都会生成一个新的值。

```js
<Mouse render={mouse => (
    <Cat mouse={mouse} />
)}/>
```
解决：将函数定义为实例方法。




## 参考
 - [React Hooks 深入系列 —— 设计模式](https://muyunyun.cn/posts/32fb0f08/)
 - [React高阶组件(HOC)的入门📖及实践💻](https://juejin.cn/post/6844904050236850184#heading-17)
