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


## 原文链接
[https://jscomplete.com/learn/complete-intro-react](https://jscomplete.com/learn/complete-intro-react)