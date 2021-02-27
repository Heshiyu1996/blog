# React基础知识
> 收录了v15、v16通用的基础知识点（轻量级）。

[[toc]]

## React.createElement
`React.createElement` 可以创建并返回指定类型的 **新React元素**。
> 使用 `JSX` 编写的代码 会被 Babel 转换成调用 `React.createElement` 的形式。

<img src="./img/img-5.png" width="800px" />

### 用法
```js
React.createElement(
    type, // 可以是`div`，也可以是 React组件类型
    [props],
    [...children]
)
```


## 单向数据流
**单向数据流**：把整个react应用看作一个瀑布，那props就是瀑布水流的额外水源。
```jsx
<Component data={this.state.data}>
```
 - `Component`组件内部不知道`data`来源
 - 任何state总是 所属于某个特定的组件，而且 从该state派生的任何数据 或 UI（Any data or UI derived from that state）只能影响在它们下方的组件

## 受控组件与非受控组件
### 受控组件
由 `state` 管理 value，由 `事件处理函数` 去修改 state。

```jsx
<input 
    value="myValue"
    onChange={ev => this.setState({ myValue: ev.target.value })}
/ >
```
因为 `value` 受控于 state(`myValue`)，所以如果 `myValue` 不变化，则 `<input>` 的值就不会改变。

<!-- `<input type="text">`、`<textarea>`这类标签都接受一个`value`属性，可以利用它实现受控组件。 -->


### 非受控组件
定义一个`defaultValue`而不是`value`，来给组件赋予初始值，但**不控制后续更新**。

我们可以使用`ref`去获取DOM节点的value值。
> you can use a `ref` to get from values from the DOM.

```js
this.input = React.createRef()

console.log(this.input.current.value) // this.input.current拿到DOM节点

<input ref={this.input} />
```
由上，可以通过ref来读取当前input的value。

> 不需要像 **受控组件** 一样去定义state挂在value上、编写onChange事件去取value从而改变state

### 受控组件 vs 非受控组件
在受控组件中，表单数据是由`React组件`来管理

在非受控组件中，表单数据是由`DOM节点`来处理。






## React.Context
通过 `Context` 可以为 一个组件树（或子组件树） 去共享一些“全局”的数据。

### 创建Context对象
```js
const MyContext = React.createContext();
```


### 定义Context.Provider
```jsx
<MyContext.Provider value={myValue}>
    /* ... */
</MyContext.Provider>
```
`Provider` 的 `value`属性 会传递给 `Consumer`组件。

> 当 value 值变化时，它内部的所有 `Consumer`组件 都会**重新渲染**。



### 订阅Context
订阅 context 的方法(3种)：
 - `<Context.Consumer>`
 - `Class.contextType`（Class组件）
 - `useContext`（Hook组件）
> 它们都不会受到中间组件 周期`shouldComponentUpdate` 的影响，即子组件依旧能触发更新。

#### <Context.Consumer>
```jsx
<MyContext.Consumer>
    {value => /* */}
</MyContext.Consumer>
```
指定子组件为一个 函数 。回调里的 `value` 对应最近的 `<Context.Provider>` 提供的 `value`。

#### Class.contextType
对于 Class组件，可以通过 `contextType`，可以将 `Context对象` 挂载到 class 上，以订阅 context 变更。

这样就可以通过 `this.context` 取到 `<Context.Provider>` 提供的 `value`

```js
class MyClass extends React.Component {
  static contextType = MyContext;

  render() {
    let value = this.context;
  }
}
```


#### useContext
对于 函数式组件，可以通过 `useContext` 订阅到 context 变更：

```js
function ThemedButton(props) {
    const value = useContext(MyContext); // 把Context对象传入useContext
}
```

### 最佳实践
**withContext.js**：
```js
import React from 'react';

// 1. 创建 Context 对象
const Context = React.createContext({}); 

// 2. 获取 Provider、Consumer 组件
const { Provider, Consumer } = Context;

// 3. 定义 HOC，使用 Consumer 包裹
const withContext = Component => props => (
    <Consumer>{value => <Component {...props} {...value} />}</Consumer>
);

// 4. 导出 Provider组件 以及 HOC 组件，分别给 顶层组件、消费组件 使用。
export { Provider, withContext };
```

**app.js（顶层组件）**：
```js
import { Provider } from '@/components/withContext';

ReactDOM.render(
    <Provider
        value={{
            userInfo,
            currentId,
            setCurrentId
        }}>
        <Index />
    </Provider>,
    document.getElementById('app')
);
```

**my-component.js（消费组件）**：
```js
import { withContext } from '@/components/withContext';

function MyComponent(props) {} // 经过 HOC，props内可读取到 <Context.Provider> 提供的 value

export default withContext(MyComponent);
```


## 合成事件
**React的合成事件** 是 React 为了解决 **“跨浏览器的事件处理”** 而进行事件包装。
> 如：onClick、onChange

**触发时机：** 冒泡阶段。
> 如果需要在 **捕获阶段** 触发，可以在 `事件名+Capture`（如：onClickCapture）

### 合成事件、原生事件的区别 
| 特点 | 原生事件 | 合成事件 |
| --- | ------- | ------ |
| 兼容性 | 不兼容跨浏览器 | 返回的是`SyntheticEvent实例`，能够兼容不同浏览器 |
| 绑定事件处理函数 | 传入字符串 | 传入函数 |
| 阻止默认行为 | 返回`false` | 显式调用 `ev.preventDefault()` |

### SyntheticEvent实例
在合成事件的事件处理函数内，会传递进一个 `SyntheticEvent实例`。

 - 兼容所有浏览器
 - 拥有原生事件接口（`stopPropagation` 、 `preventDefault`）
 - 由于合并而来，可能会被重用 **（即在事件回调触发完毕后，所有属性都会失效）**

<img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7114440836/02c8/18a3/3f38/568eede47e6e2353b339335214ad2bc2.png" width="350px" />



## 触发Render的方式
 - 执行 `ReactDOM.render`
 - state、props发生改变（可以通过 `shouldComponentUpdate` 决定是否执行render；值依旧是会改变的）
 - forceUpdate


## 函数内部的this绑定
当调用一个组件内部 且 没有绑定到组件 `this` 上的方法时，这个方法内部读取到的 `this` 将为 `undefined`。
### 利用bind
```jsx
class HomeIndex extends Component {
    constructor(props) {
        super(props);
        // 调用 .bind，将 addCount 绑定到 this 上
        this.addCount = this.addCount.bind(this);
    }

    addCount() {}

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

    // 利用 箭头函数，将 addCount 绑定到 this 上
    addCount = () => {}

    render() {
        return <button onClick={this.addCount}>Click</button>;
    }
}
```

## 为什么React要用className？
因为`class`在JavaScript里是关键字，而JSX是JavaScript的扩展。

## ref对象
ref对象：是[可变的](/skill/js/other/#可变（mutable）和不可变（immutable）对象的区别)对象（每次都是修改其下的`.current`属性），并且在整个生命周期内保持不变。

### 通过createRef和useRef来创建ref对象
这两种方式都可以创建ref对象，但有区别。

#### createRef
一般我们会在`constructor`里定义ref对象：
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef(); // <-- 通过createRef创建ref对象
  }
}
```
也正是因为在 `constructor`内，让 `createRef` 只执行了一次。

但实际上，每次调用它都会**重新生成一个ref对象**（引用地址会发生改变），[What's the difference between useRef and createRef?](https://stackoverflow.com/questions/54620698/whats-the-difference-between-useref-and-createref)

由于引用地址发生变化，对于函数式组件就需要使用`useRef`

#### useRef
```js
function App() {
    const inputRef = useRef(null); // <-- 通过useRef创建ref对象
}
```
在函数式组件内，通过`useRef`返回的ref对象可以**在整个生命周期内保持不变**。


#### 结论
createRef：
 - 一般用于`Class Component`
 - 每次重新渲染**都会使得引用地址发生改变**（在 `constructor` 内定义时除外）

useRef：
 - 一般用于`函数式组件`
 - 每次重新渲染**不会导致引用地址发生改变**

### ref的作用
 - 当 `ref` 用于 “HTML元素” 时，其 `.current` 属性为**DOM元素**
 - 当 `ref` 用于 “组件” 时，其 `.current` 属性为 **组件实例**

以下打印了两者的`.current`属性：
![alt](./img/img-3.png)
> 对于 “组件” 需要注意：方法要 bind 到组件实例上（或使用箭头函数），否则无法通过 `.current` 读取到方法

### 将ref作用于函数式组件（forwardRef搭配useImperativeHandle）
因为“函数式组件”不存在实例，所以需要**转发`ref`**

**做法**：`forwardRef`搭配`useImperativeHandle`使用

但最终，还是需要让 `ref` 来指向一个DOM元素或者`组件`。

#### 转发ref
假设有一个`函数式组件CustomInput`，通过 `转发ref` 可以将它内部的 `ref` “暴露” 给父组件。

```js
// CustomInput.js
const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef(); // 1. 定义一个ref
    
    useImperativeHandle(ref, () => 
        // 3. 这个返回的对象表示：向父组件暴露的属性
        ({
            focus: () => {
                inputRef.current.focus();
            }
        })
    );

    // 2. 让 ref 指向一个DOM元素（或一个 “组件”）
    return <input ref={inputRef} />;
})
```

```js
// Parent.js
const myRef = useRef(); // 1. 定义一个ref

console.log(myRef);
/*
 *   current: {
 *      focus: ƒ focus() {}
 *   }
 */

 // 2. 给 子组件 赋值 myRef
<CustomInput ref={myRef} />
```

## ReactDOM.createPortal
> [React Portals](https://reactjs.org/docs/portals.html)

特点：
 - 可以挂载在 根节点 的直接下一层
 - “事件冒泡”是按照声明处位置的规则

![alt](./img/img-4.png)
