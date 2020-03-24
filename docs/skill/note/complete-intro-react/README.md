# Complete intro react

## JSX的自定义组件需首字母大写，否则会识别成HTML标签
The first letter being a capital one is actually a requirement since we will be dealing with be dedaling with a mix of HTML elements and React elements.

A JSX compiler(like Babel) will consider all names that start with a lowercase letter as names of HTML elements. This is important because HTML elements are passed as strings to `React.createElement` calls while React elements need to be passed as variables:

```jsx
<button></button>
// is equal to
React.createElement('button', null)

<Button></Button>
// is equal to
React.createElement('Button', null)
```

## JSX不是HTML
JSX is not understood by browsers. What browsers understand (given the React library is included) is the `React.createElement` API calls.

### Example1:
```jsx
function Button(props) {
    return <button type="submt">{props.label}</button>
}

ReactDOM.render(<Button label="Save" />, mountNode);
```

It will be translated to below one by Babel:

```js
function Button(props) {
    return React.createElement(
        'button',
        { type: 'submit' },
        props.label
    )
}

ReactDOM.render(
    React.createElement(Button, { label: 'Save' }),
    mountNode
)
```

### Example2:
```jsx
<ul>
    {todos.map(item =>
        <li>{item.content}</li>
    )}
</ul>
// will be translated to below one by Babel:
React.createElement(
    'ul',
    null,
    todos.map(item =>
        React.createElement('li', null, item.content)
    )
)
```
React takes this tree of objects and transforms it into a tree of DOM elements. From our point of view, we're done with this tree. We don't manage any actions on it. We just manage actions in the `todos` array itself.

![alt](./img/img-1.png)

![alt](./img/img-2.png)

## 每当调用<Button>时，React会做什么事情？
Every time we use the `Button` class-based component (by rendering a `<Button />`), React will instantiate an object from this class-based component and use that object's representation to create a DOM element

> React会实例化一个 这个基于class的组件 的对象，然后使用对象的形式去创建一个DOM节点

## Class-based组件的render方法不接受任何参数
Unlike function components, the `render` function in class-based components does not receive any arguments.

## Components vs Elements
React learner needs to understand the important distinctions between `Components` and `Element`:
 - A React Component is a template. A blueprint. A global definition. This can be either a function or a class (with a render method).

 - A React Element is what gets returned from components. It's an object that virtually describes the DOM nodes that a component represents. With a function component, this element is the object that the function returns and with a class component the element is the object that component's render method returns. React elements are not what you see in the browser. They are just objects in memory and you can't change anything about them.

 React internally creates, updates, and destroys objects to figure out the DOM elements tree that needs to be rendered to the browser. When working with class components, it's common to refer to their browser-rendered DOM elements as component instance. You can render many instances of the same component. The instance is the `this` keyword that you use inside class-based components. You would not need to create an instance from a class manually. You just need to remember that it's there somewhere in React's memory. For function components, React just uses the invocation of the function to determine what DOM element to render.

 > React Component是一种模板，一个蓝图，一个全局的定义。它是一个function或是一个class（带有render方法）

 > React Element是从React Component返回的。它是一个描述DOM节点的对象。对于函数式组件，element是函数式组件返回的对象；对于class组件，element是class组件返回的对象。React Element是你在浏览器中看不见的，他们只是存在内存中。同时，你也不能改变它们。

 > React可以通过在内部新增、修改以及删除对象，来判断出`需要被渲染到浏览器对的DOM树`。当使用class组件时，它通常指的是作为组件实例的DOM元素（？）。你可以用同一个component来渲染多个实例。这个实例就是你在class组件里用到的`this`所指的对象。你不需要手动地创建一个实例，你只需记得它存在React内存中。对于函数式组件，React通过函数对的调用来确定要渲染的DOM节点。


## 原文链接
[https://jscomplete.com/learn/complete-intro-react](https://jscomplete.com/learn/complete-intro-react)