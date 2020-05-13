# React复用
> 组件是React代码复用的基本单元。

[[toc]]

## HOC
高阶组件（HOC）是**以 组件 为参数、以 新组件 为返回值** 的一个纯函数。

> 是将组件包装成新组件，HOC是个纯函数，没有副作用。

不应该修改原组件，而应该使用组合的方式，通过将组件包装在容器组件中实现功能：
```js
// HOC是个纯函数
const withMouse = Component => {
    return class extends React.Component {
        state = { x: 0, y: 0 };

        handleMouseMove = ev => {
            this.setState({
                x: ev.clientX,
                y: ev.clientY
            })
        }

        render() {
            return (
                <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                    <Component {...this.props} mouse={thhis.state} />
                </div>
            )
        }
    }
}

class App extends React.Component {
    render() {
        // 从props里取公共的撞他逻辑
        const { x, y } = this.props.mouse;

        return (
            <div>
                <h1>The mouse position is ({x}, {y})</h1>
            </div>
        )
    }
}

const AppWithMouse = withMouse(App) // 将旧组件传入HOC，获得新组件
```

### 注意事项
 - 组件经HOC包装后，原静态方法将丢失
    - 解决：需在HOC内指定静态方法到新组件上。

 - 不会传递Ref
    - 因为`ref`实际上不是props，会由React专门处理。
    - 同时，如果将`ref`添加到HOC的返回组件中，`ref`会指向容器组件，而不是被包装的组件
    - 解决：React.forwardRef

## Render Prop
Render prop是一个 **用于告知组件需要渲染什么内容的函数prop**。

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
                {this.props.render(this.state)}
            </div>
        )
    }
}

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