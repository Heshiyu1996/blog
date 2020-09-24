# 使用Hooks而不是Class的6个理由
> 原文链接：[6 Reasons to Use React Hooks Instead of Classes](https://blog.bitsrc.io/6-reasons-to-use-react-hooks-instead-of-classes-7e3ee745fe04)

React hooks发布有一段时间，但并没有引起很多开发人员的关注。我看到背后两个比较大的原因：
 - 老项目比较大、版本低（＜16.8），使用Hooks重构困难
 - 对Class比较熟悉（各类生命周期，天然this指向）

在这篇文章，我们会提供 6个理由 让你考虑看看是否用Hooks。

## 一、当组件功能变多时，你不需要因此而重新改造成class组件
一般简单的组件会是从函数式开始的，如果后续有功能迭代（特别是利用到state、生命周期等）时，可能需要一番改造变成class组件才能实现。
```jsx
export function ShowCount(props) {
  return (
    <div> 
      <h1> Count : {props.count} </h1>
    </div>
  );
}
```

如果我们希望增加一个功能：组件先是基于props传入的count作为初始值，随后内部维护这个state支持递增。

对于class组件就需要：
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

## 二、你不需要再担心"this"
React官方文档有一句话：“Classes confuse both people and machines”（class组件使“开发人员想法”和“真实”可能不太一样）。其中一个原因就是`this`。如果你对JavaScript很熟悉（好比如你知道JavaScript里的`this`和其他语言中的功能并不完全一样）。在Hooks里你不需要担心`this`了，这不但对新手还是有经验的开发人员来说都是好的。

就拿上面例子来说，我们不需要 **为了引入state而必须使用`this`**。

## 三、不再有方法绑定
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

这样做的理由是因为，**当方法被执行时，它的执行上下文是不同的**。（？）

这对于新手来说，可能比较难理解。

除了将所有方法都绑定到`this`上，也可以使用`箭头函数`，将`this`绑定到**自身被创建时的对象**上。

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

## 四、使得“逻辑组件”、“UI组件”可以更简单地解耦、可重用

## 五、将有关联的逻辑放在一起
开发class组件时，我们有不同的生命周期（像`componentDidMount`、`componentDidUpdate`等等）。好比如在`componentDidMount`订阅服务A、B，并在`componentWillUnmount`卸载它们。这样一来，有很多逻辑都会囊括于这两个生命周期里，这很难看出，在挂载这边的某个功能，是对应在卸载那边的哪块功能。


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

可以看出，我们可以把有关联逻辑的订阅、取消订阅逻辑都放到`useEffect`里。同样的，如果需要其它的订阅，或是不想管的逻辑，我们也可以通过写多个`useEffect`来将它们从逻辑层面分离开来。

## 六、组件间的状态逻辑共享
class组件很难实现逻辑共享。就好比如有两个组件，它们各自都需要通过不同的接口，来进行数据的`获取`、`排序`、`展示`。虽然两个组件有相似的函数，但很难共享这些逻辑，因为它们的数据源、state不一样。

当然，可以通过`render props`（或者HOC）来实现。但需要额外的开销，就好比如我们需要重组组件的逻辑。

可以通过自定义Hooks来实现状态逻辑共享。

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
