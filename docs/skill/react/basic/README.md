# React基础知识
> 收录了v15、v16通用的基础知识点（轻量级）。

[[toc]]

## 单向数据流
**单向数据流**，如果把整个react应用当作一个瀑布，那props就是瀑布水流的额外水源：
```jsx
<FormattedDate date={this.state.date}>
```
 - `FormattedDate`组件本身无法知道它是来自于`Clock`的state，还是`Clock`的props，还是手动输入。
 - 任何state总是所属于特定的组件，而且从该state派生的任何数据或UI（Any data or UI derived from that state）只能影响树中“低于”它们的组件。

## setState是浅合并

setState是浅合并。`this.setState({ comments })`完整保留了`this.state.posts`，但完全替换换了`this.state.comments`。

## 更新会执行render
每次组件更新时，render方法都会被调用。但只要在相同的DOM节点中渲染`<Clock />`，就仅有一个Clock组件的class实例被创建使用。


## 受控组件与非受控组件
### 受控组件
对于受控组件来说，输入的值始终由 **React的state** 驱动。
> With a controlled component, the input's value is always driven by the React state.
<!-- > 注：这里的prop指的是元素的属性，不是react里的props -->


定义一个受控组件的value后，会阻止用户输入。并且我们需要通过`onChange`去修改挂在value的state。
> Specifying the value prop on a `controlled component` prevents the user from changing the input unless you desire so.

我们需要 **为数据变化的每种方式** 都指定事件处理函数，并通过一个React组件去管理所有state。
> An event handler for every way your data can change and pipe all of the input state through a React component.

`<input type="text">`、`<textarea>`和`<select>`这些标签都非常相似——它们都接受一个`value`属性，我们可以使用它来实现受控组件。


### 非受控组件
我们可以使用`ref`去获取DOM节点的value值。
> you can use a `ref` to get from values from the DOM.

```js
this.input = React.createRef()

console.log(this.input.current.value) // this.input.current拿到DOM节点

<input ref={this.input} />
```
由上，可以通过ref来读取当前input的value。
 - 不需要去定义state挂在value上、阻止用户输入
 - 也不需要像 **受控组件** 一样编写onChange事件去取value从而改变state

<!-- 
在React渲染生命周期里，表单元素上的`value`这个props属性会覆盖掉DOM节点里的`value`。
> In the React rendering lifecycle, the `value` attribute on form elements will override the value in the DOM.  -->

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