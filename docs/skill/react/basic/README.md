# React基础知识
> 收录了v15、v16通用的基础知识点（轻量级）。

[[toc]]

## 单向数据流
**单向数据流**：把整个react应用看作一个瀑布，那props就是瀑布水流的额外水源。
```jsx
<Component data={this.state.data}>
```
 - `Component`组件不知道`data`来源。
 - 任何state总是所属于某个特定的组件，而且从该state派生的任何数据或UI（Any data or UI derived from that state）只能影响比它们下方的组件。

## 受控组件与非受控组件
**受控组件：** 由 `state` 管理输入值，由 `事件处理函数` 去修改state。
> 会阻止用户输入

`<input type="text">`、`<textarea>`这类标签都接受一个`value`属性，可以利用它实现受控组件。


### 非受控组件
我们可以使用`ref`去获取DOM节点的value值。
> you can use a `ref` to get from values from the DOM.

```js
this.input = React.createRef()

console.log(this.input.current.value) // this.input.current拿到DOM节点

<input ref={this.input} />
```
由上，可以通过ref来读取当前input的value。

> 不需要像 **受控组件** 一样去定义state挂在value上、编写onChange事件去取value从而改变state

对于非受控组件，我们可以定义一个`defaultValue`而不是`value`，来达到给组件赋予初始值，而不控制后续更新。
> With an uncontrolled component, you often want React to specify the initial value, but leave subsequent updates uncontrolled. You can specify a `defaultValue` attribute instead of `value`

### 受控组件 vs 非受控组件
在受控组件中，表单数据是由`React组件`来管理

在非受控组件中，表单数据是由`DOM节点`来处理。

## Context
Context可以共享那些对于一个组件树而言是“全局”的数据。
> Context is designed to share data that can be considered "global" for a tree of React Component

### React.createContext
```js
const MyContext = React.createContext(defaultValue); // 创建一个Context对象
```
当组件所处的树中没有匹配到Provider时，才会使用`defaultValue`值。
> The `defaultValue` argument is only used when a component does not have a matching Provider above it in the tree.


### Context.Provider（生产者）
```jsx
<MyContext.Provider value={/* 某个值 */}>
    /**/
</MyContext.Provider>
```
`Provider`接收一个`value`属性，传递给消费组件。
> Accepts a `value` prop to be passed to consuming components that are descendants of this Provider


当`Provider`的value值发生变化时，它内部的所有消费组件都会重新渲染。
> All consumers that are descendants of a Provider will re-render whenever the Provider's `value` props changes.

对于任何消费者（无论消费模式是`.contextType`还是`useContext`）来说，这种传播不会受到中间组件`shouldComponentUpdate`的影响。
> The propagation from Provider to its descendant consumers(including `.contextType` and `useContext`) is not subject to the `shouldComponentUpdate` method

### class.contextType（订阅Context）
将`Context对象`挂载到class上的`contextType`属性，就可以通过`this.context`取得`Context`的值
> The `contextType` property on a class can be assigned a Context object created by `React.createContext()`. This lets you consume the nearest current value of that Context type using `this.context`.

`this.context`可以在任何生命周期（包括render函数）中使用。
>  You can reference this in any of the lifecycle methods including the render function.

以下Way1、Way2是等价的：
```js
class MyClass extends React.Component {
  // Way1: use a static class field to initialize your `contextType`
  static contextType = MyContext;

  render() {
    let value = this.context;
    /* render something based on the value */
  }
}

// Way2: The `contextType` property on a class can be assigned a Context object created by `React.createContext()`.
// MyClass.contextType = MyContext;
```

### Context.Consumer
消费者：能读取Context值，并能订阅它的变化。
> lets you read the context and subsccribe to its changes.

当React渲染 **一个订阅了Context对象的** 组件，那这个组件会从最近的`Provider`去取Context值
> When React renders a component that subscribes to this Context object it will read the current context value from the closest matching `Provider` above it in the tree.


即便父组件跳过了更新，作为消费者的子组件依然能够触发更新。
> so the consumer is updated even when an ancestor component skips an update.

```jsx
<MyContext.Consumer>
    {value => /* */}
</MyContext.Consumer>
```
指定子组件为一个函数。回调里的`value`就是最近的Provider提供的value
> Requires a `function as child`. The `value` argument passed to the function will be equal to the `value` prop of the closest Provider for this context above in the tree.

#### useContext
对于函数式组件，也可以通过`useContext`取得Provider的value：
```js
function ThemedButton(props) {
    const value = useContext(MyContext); // 把Context对象传入useContext
}
```
同样也不会受中间组件`shouldComponentUpdate`影响。

### Demo
**theme-context.js**：（创建context对象）
```js
export const MyContext = React.createContext('init')
```

**app.js**（生产者）：
```js
// 引入context对象
import { MyContext } from './theme-context';

class App extends React.Component {
    render() {
        let props = this.props;
        let theme = this.context;
        return (
            // 定义Provider，提供value值
            <MyContext.Provider value={'这里是根组件的水源'}>
                <Toolbar />
            </MyContext.Provider>
        );
    }
}

function Toolbar() {
    return (
        <ThemedButton />
    );
}
```

**themed-button.js**（消费者）：
```js
// 引入context对象
import { MyContext } from './theme-context';

class ThemedButton extends React.Component {
    render() {
        let theme = this.context; // Using this.context to consume the nearest current value of that Context type

        return /**/;
    }
}

// 订阅了context变化，能读取this.context
ThemedButton.contextType = MyContext;
```

对于函数式组件：
```js
function ThemedButton(props) {
    // 订阅了context变化，能读取this.context
    const value = useContext(MyContext); // 把Context对象传入useContext
}
```

## 合成事件
**触发时机：**

React的合成事件处理函数一般会在 **冒泡阶段** 触发（如：onClick、onChange）。
> 如果**需要注册捕获阶段的事件处理函数**，可以在事件名后紧接`Capture`（如：onClickCapture）

### 和原生事件不同 
| 方面 | 原生事件 | 合成事件 |
| --- | ------- | ------ |
| 绑定事件处理程序 | 传入字符串，函数的执行 | 传入函数 |
| 兼容性 | 不兼容跨浏览器 | 返回的是`SyntheticEvent实例`，能够兼容不同浏览器 |
| 阻止默认行为 | 返回`false` | 显示调用`ev.preventDefault()` |

### SyntheticEvent实例
特点：
 - 兼容所有浏览器
 - 拥有原生事件接口（`stopPropagation`、`preventDefault`）
 - 由于合并而来，可能会被重用 **（即在事件回调触发完毕后，所有属性都会失效）**

![alt](./img/img-1.png)

## 触发Render的方式
 - 首次加载（`ReactDOM.render()`）
 - setState()
 - props发生改变
 - forceUpdate()

其中，`setState`、`props`发生改变都可以通过`shouldComponentUpdate`决定**是否执行render**
> 注意：
> 1、只是render的执行与否，数据还是会修改掉的
>
> 2、只要在相同的DOM节点中渲染`<Clock />`，就仅有一个Clock组件的class实例被创建使用。



## 函数内部的this绑定
### 利用bind
```jsx
class HomeIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'heshiyu' };
        this.addCount = this.addCount.bind(this); // 或者在render里再调用bind
    }

    addCount() {
        console.log(this.state.name);
    }

    render() {
        return <button onClick={this.addCount}>Click</button>;
    }
}
```

### 利用箭头函数
```jsx
class HomeIndex extends Component {
    constructor(props) {
        super(props);
    }

    addCount = () => {
        console.log(this.state.name);
    }

    render() {
        return <button onClick={this.addCount}>Click</button>;
    }
}
```

![alt](./img/img-2.png)


## 为什么React要用className？
因为`class`在JavaScript里是关键字，而JSX是JavaScript的扩展。