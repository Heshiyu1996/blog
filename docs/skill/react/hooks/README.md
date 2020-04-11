# Hooks
> Hook是React 16.8的新特性。它可以让你在不编写class的情况下使用state以及其他的React特性（By React官网）。
>
> 以下是笔者在最近三个月使用React Hooks开发过程中的实践记录。（本文部分内容也参考了各个大牛观点，可详见参考链接）
>
> update: 2019-12-11

[[toc]]

## 【引言】Hooks组件、Class组件的渲染行为
#### Hooks组件的渲染行为
Hooks组件每次render都是调用不同的渲染函数，所以每次都会**拥有完全独立的函数作用域**。
> 后续的render每次都会生成全新且独立的props、state

![alt](./img/hooks-1.png)

#### Class组件的渲染行为
Class组件每次render都是调用同一个渲染函数。
> 后续的渲染只会改变this.props、this.state的值，而不是引用地址（唯一的this.props、this.state只在初始化时的构造函数中生成）

![alt](./img/hooks-2.png)

## Hooks的使用规则
> 目前Hooks包括useCallback、useContext、useEffect、useImperativeHandle、useLayoutEffect、useMemo、useReducer、useRef、useState和useDebugValue。

 - 可以在函数组件、自定义Hooks中调用；
 - 不能在Class组件、循环、条件判断或者子函数中调用；[为什么？](./HooksSourceCode.md)

:::tip
相对于Class组件
 - 没有复杂的生命周期
 - 没有Class组件的this指向
 - 没有类似于HOC、render props等复用模式
:::

因为Hooks组件**每次render都会拥有独立的作用域**，所以在开发中有一些我们**需要注意的常用技巧**。他们分别是：
 - **函数组件内，变量/方法的声明位置**
 - **useState —— Hooks中的state状态**
 - **useRef —— 不变常量的声明方式**
 - **useEffect —— 副作用的声明方式**
 - **useCallback —— 缓存函数的声明方式**
 - **useMemo —— 缓存值（计算值）的声明方式**

### 函数组件内的变量/方法的声明位置
函数组件内的变量/方法在每次render时都会**重新声明**，因此我们应该**减少在组件内部声明变量/方法**。

**判断条件：要声明的函数与组件内state、props是否存在相关性**。（注意“相关”二字）
```js
// 类似这种函数的返回结果一般仅供展示，可以在组件外声明：
function formatName(name) {
    return `Hello, your name is ${name}`
}

function App(props) {
    const [name, setName] = useState('heshiyu');

    return (
        <div>
            <div>{formatName(name)}</div>
            <button onClick={() => setName('new life')}>Click Me!</butotn>
        </div>
    )
}
```


### useState —— Hooks中的state状态
实现组件内部state状态（类似Class组件的state）。

> 一般来说，在函数退出后变量就就会”消失”，而 state 中的变量会被 React “保留”。React 会在重复渲染时记住它当前的值，并且提供最新的值给函数。

这时候，**useState**就派上用场了！

:::warning
#### 以下引自 React官方文档📚
```js
const [state, useState] = useState(initialState);
```
`useState`会返回一个`state`，以及`更新state的函数`*（笔者注：以下统称`setState`）*。

在初始渲染期间，返回的状态 (state) 与传入的第一个参数 (initialState) 值相同。

```js
setState(newState)
```
在后续的重新渲染中，`useState`返回的第一个值将始终是**更新后、且最新的state**。
:::

#### setState的两种用法
由文档可知，我们可以通过调用`setState`来更新当前的`state`。

```js
// 1、直接设置state
setState(newState)

// 2、基于之前的state来更新state
setState(prevState => prevState + 1)
```

#### setState的特点
 - **用于更新state。**
    - 它接收一个新的state值，并将**组件的一次重新渲染**加入队列。
 - **引用地址不变**
    - 其引用地址不会在重新渲染时发生变化（即不必写入依赖项中）
 - **如果`newState`和`prevState`相同，React将跳过子组件的渲染和effect的执行（？）**
    - If you update a State Hook to the same value as the current state, React will bail out without rendering the children or firing effects. (React uses the Object.is comparison algorithm.
 - **和Class组件中的`setState`不同**
    - Class组件可以自动合并更新，但`useState返回的setState`只能覆盖原有值（可通过`展开运算符`来实现合并更新）
    ```js
        setState(prevState => {
            return {...prevState, ...newState}
        })
    ```



### useRef —— 不变常量的声明方式
如果我们需要一个对象，希望它**从一开始到之后的每次render**都是不变的。
> “不变”指的是不会重新生成，**可变其值，但不可变其址**

这时候，**useRef**就派上用场了！

:::warning
#### 以下引自 React官方文档📚
```js
const refContainner = useRef(initialValue);
```
`useRef`会返回一个可变的ref对象（`refContainner`），其`.current`属性会被初始化为传入的参数（`initialValue`）。**返回的ref对象在组件的整个生命周期内保持不变**。

:::
#### 项目中使用useRef的常见情况
 - 引用某个指定的dom实例时

例子1：
```jsx
function App(props) {
    const videoRef = useRef();
    const start = () => {
        videoRef.current.play();
    };
    
    return (
        <div>
            <video ref={videoRef}>
                <source src="https://www.163.com/happy.mp4" type="video/mp4" />
                你的浏览器不支持该视频格式
            </video>
            <button onClick={start}>Play!</button>
        </div>
    )
}
```

例子2：
```jsx
// 1、有一个自定义Form表单：CustomizedForm
class CustomizedForm extends React.Component { ... }

// 2、经过 Form.create 包装后，组件EnhancedForm会自带 this.props.form 属性（该属性拥有各种对该form表单的各种操作方法）
const EnhancedForm =  Form.create()(CustomizedForm);

// 3、有一个App组件，调用了这个EnhancedForm表单组件...
function App(props) {
    let formRef = useRef();

    const onSubmit = () => {
        const { form } = formRef.current;
        form.validateFields((err, values) => {
            if (err) return;

            addData({ moduleType, [option.key]: formatParam(values) }).then(data => {
                formValueCache.current = {};
                setVisible(false);
                dispatch();
            });
        });
    };
    
    // 4、对被 Form.create 包装过的组件，可通过 wrappedComponentRef 这个属性拿到它的ref
    return <EnhancedForm wrappedComponentRef={(form) => (formRef.current = form)} />
}
```
这样之后，`formRef.current`指向的就是CustomizedForm表单的实例了。

 - 给自定义Hooks传入“被定义在依赖项的参数”时
```js
function App(props) {
     // 使用useRef，返回一个稳定状态的引用值，避免死循环
    let ref = useRef({ resumeAll: true });
    // 此处useFetch是一个用于获取后端数据、且依赖于传入的请求参数的自定义Hooks（第二个参数表示接口请求参数）
    const { data = {}, isLoading } = useFetch(getResumeInfo, ref.current);
}
```

### useEffect —— 副作用的声明方式
虽然Hooks组件没有生命周期，但我们需要在某些指定时段执行一些事情。

> 可以通过useEffect来实现和之前（`componentDidMount`、`componentDidUpdate`、`componentWillUnmount`）这3种钩子相近的逻辑。

这时候，**useEffect**就派上用场了！

:::warning
#### 以下引自 React官方文档📚
```js
useEffect(didUpdate);
```
因为在React组件的**渲染阶段**，不应该有任何副作用（如：*改变DOM、添加订阅、设置定时器*等）。一般来说，在这里执行操作都太早了，还可能会产生bug并破坏UI的一致性。

若要进行一些副作用操作，可以使用`useEffect`在**渲染结束后**进行。
> 传给`useEffect`的函数叫作`effect`，它会在浏览器完成布局与绘制后、在下一轮渲染前延迟执行。

:::
无论如何，`effect`总是**位于同步执行队列的最后面**执行（即在dom更新或者渲染函数返回之后）。

#### effect的执行时机
`effect`的执行时机可概括为以下3种情况：
 - 如果 dependencies 不存在（为`null`），那么 callback 每次 `render结束后` 都会执行

 - 如果 dependencies 存在且为空数组`（[]）`，那么 callback 仅在 `初次render结束后` 会执行

 - 如果 dependencies 存在且不为空数组，只有当 每次 `render结束后` 且`依赖项中的元素发生了变化`， callback 才会执行

> 1、依赖项中应该包含：**所有外部作用域中，会随时间变化的、并且在effect中有用到的变量**（by 官方文档）。
>
> 2、官方推荐通过`eslint-plugin-react-hooks`来自动绑定依赖。 [eslint-plugin-react-hooks](#eslint-plugin-react-hooks)


<!-- #### 每轮渲染的effect都是独立的
上面提到，Hooks组件每次render都会拥有独立的函数作用域，所以传给`useEffect`的`effect`函数也是独立的。
```js
// 代码1：
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log(`You clicked ${count} times`);
    }, 3000);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
```js
// 代码2:
function Counter() {
  const [count, setCount] = useState(0);
  
  setTimeout(() => {
      console.log(`You clicked ${count} times`);
  }, 3000);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
以上两段代码，在3s内点击N次按钮（间隔随意），输出的结果都是一样的。因为每次render都会重新执行setTimeout，生成一个独立全新的计时器。

由上可知，每次render后的都会生成新的`effect`，并且都是独立的。 -->

#### effect还有哪些特点？
下面有个例子，我们来初探effect的特点。
```jsx
function App(props) {
    const [counter, setCounter] = useState(0); // 数量
    const [money, setMoney] = useState(0); // 总消费
    // const [integral, setIntegral] = useState(0); // 总积分

    useEffect(() => {
        console.log('我是第一个【依赖项为null】的effect');

        return () => console.log('我是第一个effect的清除函数');
    });

    useEffect(() => {
        console.log('我是第二个【依赖项为空数组】的effect');

        return () => console.log('我是第二个effect的清除函数');
    }, []);

    useEffect(() => {
        console.log('我是第三个【依赖项为counter】的effect');
        // setIntegral(counter * 100);

        return () => console.log('我是第三个effect的清除函数');
    }, [counter]);

    useEffect(() => {
        console.log('我是第四个【依赖项为counter且带有setState】的effect');
        setMoney(counter * 10);
        // setIntegral(counter * 200);

        return () => console.log('我是第四个effect的清除函数');
    }, [counter]);

    console.log('render渲染');

    return (
        <div className="App">
            <button onClick={() => setCounter(counter + 1)}>苹果+1</button>
            <div>总消费：{money}</div>
            {/* <div>总积分：{integral}</div> */}
        </div>
    );
}
```
输出结果如下：
```js
// 首次渲染
render渲染
我是第一个【依赖项为null】的effect
我是第二个【依赖项为空数组】的effect
我是第三个【依赖项为counter】的effect
我是第四个【依赖项为counter且带有setState】的effect
```
可见，“首次渲染”会先执行render函数同步代码，随后**从上往下依次执行**`effect`。

```js
// 点击“+1”后
render渲染
我是第一个effect的清除函数
我是第三个effect的清除函数
我是第四个effect的清除函数
我是第一个【依赖项为null】的effect
我是第三个【依赖项为counter】的effect
我是第四个【依赖项为counter且带有setState】的effect
render渲染
我是第一个effect的清除函数
我是第一个【依赖项为null】的effect
```
“点击+1”后：
 - 1、**先执行render函数同步代码**
 - 2、**从上往下依次执行`“依赖项发生变化了的”effect`的清除函数**
 - 3、**再依次执行`“依赖项发生变化了的”effect`**。

此处是因为`第四个effect`在执行后（`setMoney`）需触发render更新视图，所以会紧接着触发下一次render。React会在下次render中再判断各个effect“**依赖项是否发生变化**”，以此类推。

[依赖项“发生改变”是指改变了什么？](#依赖项“发生改变”是指改变了什么？)

> 若将代码中的注释去掉，得到的也会是同样的打印输出。因为setState会在下次渲染前合并执行（？）

:::tip
由以上代码，可知useEffect有以下特点：

 - React将按照**effect的声明顺序**依次调用组件中的每一个effect

 - React会在调用一个新的effect之前对前一个effect进行**清理**（若存在清理函数）

 - 各个effect会把**副作用累积**（？），在下次render时渲染。
:::

#### effect总结图
![alt](./img/hooks-3.png)


### useCallback —— 缓存函数的声明方式
如果我们希望在Hook组件内定义函数，并不希望它因渲染而重新声明，而是能条件般地缓存下来。
> “缓存”指的是当依赖项未发生改变时，useCallback会直接返回这个被缓存的函数（达到被赋值的变量的引用地址不变的效果）。[依赖项“发生改变”是指改变了什么？](#依赖项“发生改变”是指改变了什么？)

这时候，**useCallback**就派上用场了！

:::warning
#### 以下引自 React官方文档📚
```js
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
```
`useCallback`会返回一个`memoized`回调函数。

把内联回调函数、依赖项数组作为参数传入`useCallback`，它将返回这个回调函数的`memoized`版本，该回调函数仅在某个依赖项改变时才会更新。

:::
#### 例子
```js
function Home(props) {
    const [counter, setCounter] = useState(0);

    // 使用useCallback来返回这个“缓存函数”
    const onClick = useCallback(() => {
        setCounter(props.count)
    }, [props.count])

    return (
        <div className="App">
            <button onClick={() => setCounter(counter + 1)}>苹果+1</button>
        </div>
    )
}
```
这样传入`useCallback`的回调函数就会被缓存下来，每次render后的onClick都是指向同一个引用；当props中count发生改变时才会重新声明这个回调函数，使得onClick方法指向新的引用。


### useMemo —— 缓存值（计算值）的声明方式
如果我们希望在Hooks组件内声明“计算值”（类似Vue.js的computed），并希望它只在依赖项改变时才重新计算，其它情况下保持“不变”。
> “计算值”指的是当依赖项未发生改变时，useMemo直接返回上次的缓存值（以达到被赋值的变量的引用地址不变的效果）。相反，当依赖项发生改变时，能够重新计算新的值。

这时候，**useMemo**就派上用场了！

:::warning
#### 以下引自 React官方文档📚
```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
`useMemo`会返回一个`memoized`值。

把一个带有返回值的函数、依赖项数组作为参数传入`useMemo`，它仅会在某个依赖项改变时才重新计算`memoized`值。这种优化有助于避免在每次渲染时都进行高开销的计算。
:::

#### useMemo的执行时机
```js
function Home(props) {
    const [counter, setCounter] = useState(0); // 数量
    const [like, setLike] = useState(0); // 点赞数

    // 根据“数量counter”来计算出“总消费money”
    const money = useMemo(() => {
        console.log('计算总消费'); // 为了打印useMemo执行时机
        return counter * 10;
    }, [counter]);

    // 根据“点赞数like”来计算出“总人气popularity
    const popularity = useMemo(() => {
        console.log('计算总人气'); // 为了打印useMemo执行时机
        return like * 0.1;
    }); // 此处没有传入依赖项，和上方作对比

    console.log('render渲染');

    return (
        <div className="App">
            <button onClick={() => setCounter(counter + 1)}>苹果+1</button>
            <div>总消费：{money}</div>

            <button onClick={() => setLike(like + 1)}>赞+1</button>
            <div>总人气：{popularity}</div>
        </div>
    );
}
```
上面的代码各情况的输出如下：

首次渲染的`useMemo`都会执行，且执行时机是在**渲染过程中**：
```js
// 首次渲染
计算总消费
计算总人气
render渲染
```

点击“苹果+1”后，因为**在本次render过程中**，`counter`发生了变化而导致`money`重新计算，所以会打印“计算总消费”。又因为`popularity`的依赖项为`null`，表示**依赖项发生了改变**，所以会打印“计算总人气”。随后同步代码继续执行，输出“render渲染”：
```js
// 点击“苹果+1”
计算总消费
计算总人气
render渲染
```

点击“赞+1”后，因为**在本次render过程中**，`counter`并未发生变化，所以`money`不会重新计算。又因为`popularity`的依赖项为`null`，表示**依赖项发生了改变**，所以会打印“计算总人气”。随后同步代码继续执行，输出“render渲染”：
```js
// 点击“赞+1”
计算总人气
render渲染
```

可见，`useMemo`具有以下特点：
:::tip
 - 在**渲染过程中**进行（相当于执行同步代码的顺序）；
    - 所以不要在useMemo中传入的函数内部进行与渲染无关的操作（通常称之为“**副作用**”）
 - 若依赖项为`null`，`useMemo`在每次渲染时都会计算新的值；
 - 若依赖项为`([])`，只会在`初次渲染时`重新计算；
 - 否则只会在依赖项发生改变时，会重新计算；[依赖项“发生改变”是指改变了什么？](#依赖项“发生改变”是指改变了什么？)
:::

## 依赖项“发生改变”是指改变了什么？
由上面的知识可知，

1、`useEffect`、`useCallback`、`useMemo`都有用到依赖项；
> 通过areHookInputsEqual方法比较前后两次依赖项

2、`useState`也只在两次state发生“变化”时才会触发组件重新渲染。
> 通过Object.is方法比较前后两次state

那`areHookInputsEqual`是如何判断 **依赖项发生了改变** 呢？

```js
import is from 'shared/objectIs';
function areHookInputsEqual(
    nextDeps: Array<mixed>, // 本次渲染时的依赖项
    prevDeps: Array<mixed> | null, // 上次渲染时的依赖项
) {
    // 注：返回true则表示：依赖项并未发生变化；

    // 1、若上次渲染时的依赖项为null，表明发生了变化
    if (prevDeps === null) {
        return false;
    }

    // 2、若两次渲染时的依赖项的长度不一样，表明发生了变化
    if (nextDeps.length !== prevDeps.length) {
        return false
    }
 
    // 3、依次对比两次渲染时的依赖项中的各项，只要存在一项在`is方法`检验时返回了false，表明发生了变化
    for (let i = 0; i < prevDeps.length && i < nextDeps.length; i++)   {
        if (is(nextDeps[i], prevDeps[i])) {
            continue;
        }
        return false;
    }
    // 4、以上都不符合，则表明未发生变化
        return true;
}
```
以上可知，当依赖项传递空数组`([])`，只在初次、末次渲染时发送变化。
[ReactFiberHooks源码](https://github.com/facebook/react/blob/7bf40e1cfdb780788700a41bf30163fdb8d105a3/packages/react-reconciler/src/ReactFiberHooks.js)

其中`is方法`是ES6中`Object.is`的兼容性写法：
```js
function is(x: any, y: any) {
  return (
    (x === y && (x !== 0 || 1 / x === 1 / y)) || (x !== x && y !== y) 
  );
}

export default (typeof Object.is === 'function' ? Object.is : is);
```
可知，[Object.is 比较算法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Description)属于**浅比较**（**即只要引用地址发生了变化，就表明发生了变化**）。


## 依赖项检查插件：eslint-plugin-react-hooks
上面提到的：`useEffect`、`useCallback`、`useMemo`都可以**通过传入依赖项**来达到条件渲染的效果。

React官方推荐启用`eslint-plugin-react-hooks` 中的 `exhaustive-deps` 规则。
> 此规则会在添加错误依赖时发出警告并给出修复建议。

1、npm安装：
```
yarn add eslint-plugin-react-hooks -D
```

2、ESLint配置：
```js
// .eslintrc.js
module.exports = {
    // ...
    plugins: ['react-hooks'],
    rules: {
        // ...
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
    }
}
```


## 参考链接
[React Hooks工程实践总结](https://juejin.im/post/5de4e47f6fb9a07160543ebb)

[React Hook](https://zh-hans.reactjs.org/docs/hooks-intro.html)

[Object.is()——MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Description)

[State Hook与Effect Hook解析](https://zhuanlan.zhihu.com/p/64881911)


<!-- 一些常用的Hooks -->