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
 - 获取底层原生事件（`nativeEvent`属性）

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

## ReactDOM.createPortal
> [React Portals](https://reactjs.org/docs/portals.html)

特点：
 - 可以挂载在 根节点 的直接下一层
 - “事件冒泡”是按照声明处位置的规则

![alt](./img/img-4.png)

## 不建议直接修改this.state
会导致 `PureComponent` 可能不会触发重新渲染。

```js
const newObj = this.state.obj;
newObj.id = 2;

this.setState({ obj: newObj }); // 由于 newObj、obj 引用地址相同，shadowEqual结果相同
```

## shallowEqual（浅比较）、deepEqual（深比较）
> 不管浅、深比较，步骤大致相同（除了对比 `key` 的 `value` 这一步）。

 1. 先比较 “基本数据类型”（通过 `is`）

 2. 比较两者是否为 `null`

 3. 比较两者 key值长度

 4. 遍历其中一个 obj 的 key（基准是另外一个 obj）
    - 检查 key 是否存在于 基准对象
    - 浅比较：**判断两个对象对应 key 的 value 是否相等**（通过 `is`）
    - 深比较：**判断两个对象对应 key 的 value 是否相等**（通过 递归调用`equal`）

```js
// is 方法 和 === 相比：修复了 NaN 和 +-0 的情况。
// 针对“基本数据类型”的判定是准确的
function is(x, y) {
    // 引用 / 值 相等
    if (x === y) {
        // 处理 +0 === 0 的情况（我们希望返回false）
        return x !== 0 || 1 / x === 1 / y
    } else {
        // 处理 NaN === NaN（我们希望返回 true）
        return x !== x && y !== y
    }
}

export default function equal(objA, objB) {
    // 1. 先比较 “基本数据类型 ” 的值（通过 is）
    // 对于 “引用数据类型”，这里会返回 false（因为误判，所以下面要“补充相关判定逻辑”）
    if (is(objA, objB)) return true;

    // --- 过滤掉 “基本数据类型” 后，接下来就是对象的比较 ---

    // 2. 比较两者是否为 null
    if (objA === null || objB === null) return false;

    // 3. 比较两者 key值长度
    if (Object.keys(objA).length !== Object.keys(objB).length) return false;

    // 4. 遍历其中一个 obj 的 key（基准是另外一个 obj）
    for (var key in objA) {
        // 5. 检查是否存在于 基准对象
        if (!objB.hasOwnProperty(key)) return false;

        // shallowEqual（浅比较）
        // 6. 判断两个对象对应 key 的 value
        // 【注意】与 “深比较” 的区别在这里，只比较一次，不用递归比较
        if (!is(objA[key], obj[key])) return false;

        // deepEqual（深比较）
        // 6. 递归调用，判断两对象对应 key 的 value
        // if (!equal(objA[key], objB[key])) return false;
    }

    return true;
}
```
