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


### 缺点
 - `ref` 不会被传递（会挂到 HOC 上，而不是被包裹的组件）
    - 解决：`React.forwardRef`
 
 - 原组件的 静态方法 会丢失
    - 解决：需准确指定 静态方法 到 新组件 上。
 
 - 避免 render 中使用 HOC （会生成一个新组件引用）
    - 解决：通过 “生命周期” 或 “构造函数” 调用


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

## render Prop
`render prop` 同样也是 提高组件复用 和 抽象 手段。

提供一个带有函数prop的`<Mouse>`组件，它能够动态决定需要渲染什么内容：
```js
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
                /* 提供 render 方法 可以让 `<Mouns>` 能够 动态决定 需要渲染什么内容 */
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

### 注意事项
#### Render Props和React.PureComponent搭配时，要小心使用
若给render属性传入一个匿名函数，那每次`render`都会生成一个新的值。

```js
<Mouse render={mouse => (
    <Cat mouse={mouse} />
)}/>
```
解决：将函数定义为实例方法。


## HOC和render prop的缺点
**多个组件间的逻辑复用**：
 - 嵌套地狱
    - 当嵌套层级过多时，追溯数据源会变的困难
 
 - 性能
    - 额外的组件实例存在性能开销

 - 命名重复
    - 在同个组件使用多个HOC，不排除这些 **HOC里的方法** 存在命名冲突问题

**单个组件中的逻辑复用**
 - 可能拆散在各个生命周期


## 参考
 - [React Hooks 深入系列 —— 设计模式](https://muyunyun.cn/posts/32fb0f08/)
 