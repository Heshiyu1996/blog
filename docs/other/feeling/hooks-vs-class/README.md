# 使用Hooks而不是Class的6个理由
> 原文链接：[6 Reasons to Use React Hooks Instead of Classes](https://blog.bitsrc.io/6-reasons-to-use-react-hooks-instead-of-classes-7e3ee745fe04)

[[toc]]

React hooks发布有一段时间，但好像并没有引起更多开发人员的关注。

我看到背后两个比较大的原因：
 - 老项目比较大、版本低（＜16.8），使用Hooks重构困难
 - 对Class比较熟悉（各类生命周期，天然this指向）

在这篇文章，我们会提供 **6个原因** ，方便你在考虑 “用class还是hooks”时 更有方向。

## 一、对组件的迭代更友好
一般简单的组件都是从函数式开始的，如果后续有功能迭代（特别是需要用到state、生命周期等）时，可能需要一番改造，变成 class组件 才能实现。

那使用Hooks的好处就是，当组件功能变多时，你不需要将整个组件重新改造成 class组件 。

```jsx
export function ShowCount(props) {
  return (
    <div> 
      <h1> Count : {props.count} </h1>
    </div>
  );
}
```

要增加新功能：count基于props传入值作为初始值，随后也需在内部维护这个state，并支持递增。

那如果是 class组件 就需要：
```jsx
export class ShowCount extends React.Component {
    // 构造函数内声明this.state
    constructor(props) {
        super(props);
        this.state = {
        count: 0
        };
    }

    // 引入生命周期
    componentDidMount() {
        this.setState({
        count: this.props.count
        })
    }

    render() {
        return (
            <div>
                <h1> Count : {this.state.count} </h1>
            </div>
        );
    }
}
```

但如果用Hooks来实现的话：
```jsx

export function ShowCount(props) {
    const [count, setCount] = useState();

    useEffect(() => {
        setCount(props.count);
    }, [props.count]);

    return (
        <div>
            <h1> Count : {count} </h1>
        </div>
    );
}
```

## 二、不需要担心"this"
React官方文档有一句话：**“Classes confuse both people and machines”**（class组件使“开发人员想法”和“真实”可能不太一样）。

我认为其中一个原因就是`this`。

> 因为需要你对JavaScript很熟悉（好比如你已经知道JavaScript里的`this`和其他语言中的`this`并不完全一样）。

但在Hooks里你不需要担心`this`了，这不仅对新手还是有经验的开发人员来说都是好的。

就拿上面例子来说，我们不需要 **为了引入state而必须使用`this`**。

## 三、不需要绑定方法
针对上面的例子，我们引入`handleClickEvent`方法，使得用户点击时可以更新`state`：
```jsx
export class ShowCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleClickEvent = this.handleClickEvent.bind(this);
    }
    componentDidMount() {
        this.setState({
            : this.props.count
        });
    }

    handleClickEvent() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <div>
                <h1 onClick={this.handleClickEvent} > Count : {this.state.count} </h1>
            </div>
        );
    }
}
```

为了使用`handleClickEvent`方法，我们需要将它绑定到组件的`this`上。
```js
this.handleClickEvent = this.handleClickEvent.bind(this);
```

这样做的理由是，因为 **当方法被执行时，它的执行上下文是不同的**。

这对于新手来说，可能比较难理解。

除了将所有方法都绑定到`this`上，也可以使用`箭头函数`，将`this`绑定到 **自身被创建时的那个对象** 上。

```js
handleClickEvent = () => {
  this.setState({count: this.state.count + 1});
}
```

如果用Hooks的话，就不需要绑定，也不需要用箭头函数了：
```js
export function ShowCount(props) {
    const [count, setCount] = useState();

    useEffect(() => {
        setCount(props.count);
    }, [props.count]);

    function handleClickEvent() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1 onClick={handleClickEvent}> Count : {count} </h1>
        </div>
    );
}
```

## 四、将“状态逻辑”从“UI”抽离
使用Hooks可以使得“状态逻辑”很简单地就从“UI”中抽离出来，不需要用到HOC（或者render props）就可以实现了。

**状态逻辑与UI的组合 是否直观、代码是否极简** 可以判定一个Hooks是否写得优雅。

当然，一个优雅的Hooks也可以使得组件更容易被理解、维护，从而被复用（特别是对于组件库开发）。


## 五、将有关联的逻辑放在一起
开发class组件时，我们可以使用各种生命周期（像`componentDidMount`、`componentDidUpdate`等等）。

就好像在`componentDidMount`订阅服务A、B，然后在`componentWillUnmount`卸载它们。

这样一来，可能会有很多好无相关的逻辑都囊括在了这两种生命周期里，提升代码阅读难度。


```js
import { getCounts } from "./reactive-service";

export function ShowCount(props) {
    const [count, setCount] = useState();

    useEffect(() => {
        const countServiceSubject = getCounts();
        countServiceSubject.subscribe((count) => {
            setCount(count);
        });
        return () => {
            countServiceSubject.unsubscribe();
        };
    }, []);

    return (
        <div>
            <h1> Count : {count} </h1>
        </div>
    );
}
```

我们可以把 相关联的逻辑 都放到`useEffect`里。

同样的，如果还需要引入其它不相关的逻辑，我们也可以通过写多个`useEffect`来将它们从 逻辑层面 分离开来。

## 六、组件之间的状态逻辑共享
class组件很难实现逻辑共享。

就好比如有两个组件，它们各自都需要通过不同的Api接口去`获取数据`，然后`设置Loading`、`展示`等等。

虽然这两个组件有相似的函数/功能，但对于class组件来说，因为它们的`数据源`、`state`都不一样，一般很难去共享这些逻辑，。

> 对于class组件，我们可以通过`render props`（或者HOC）来实现。但这需要额外的开销，就好比如我们需要改动到整个组件的逻辑（或是嵌套一层高阶组件）。

对于Hooks来说，实现 **状态逻辑共享** 是比较容易的。

根据上面的例子，可以将状态逻辑提取到一个自定义Hook：
```jsx
import { useState, useEffect } from "react";

// 因为不同组件的接口不一样，这部分可以通过参数从业务层传递进来
export function useCount(serviceSubject) {
    const [count, setCount] = useState();

    useEffect(() => {
        serviceSubject.subscribe((count) => {
            setCount(count);
        });
        return () => {
            serviceSubject.unsubscribe();
        };
    }, [serviceSubject]);

    return [count, setCount];
}
```

使用这个自定义Hook，我们可以对上面的组件进行重写：
```js
import { useCount } from "./use-count";

export function ShowCount(props) {
    const [count, setCount] = useCount(props.serviceSubject);

    useEffect(() => {
        setCount(-1);
    }, [setCount]);

    return (
        <div>
            <h1> Count : {count} </h1>
        </div>
    );
}
```

## 总结
上面列举的对我来说，基本都是尤为重要的、使用Hooks理由。如果你阅览了[官方文档](https://reactjs.org/docs/hooks-intro.html)，你可能还会发现Hooks其他更有趣的功能。

> 文中源码链接：[github](https://github.com/dilantha111/example-5-reasons-to-use-react-hooks)
