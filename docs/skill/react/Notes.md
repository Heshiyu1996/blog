# React 16.9注意事项
> 为了更好地学习、使用React 16.9，现将平时开发中遇到的一些疑点、难点以及对应的解决方案稍作记录，清点如下：

[[toc]]

## React-🔥-Loader: react-hot-dom patch is not detected. React 16.6+ features may not work.
虽然出现此提示时热加载依然能用，但可能在某些场景热加载会失效（`@hot-laoder/react-dom`会作为补充）

### 产生问题的原因：
 - 没有安装`@hot-loader/react-dom`
 - 没有在`webpack.config.js`中对`react-dom`设置`alias`

### 需要安装的包
```
"react-hot-loader": "^4.12.11",
"@hot-loader/react-dom": "^16.8.6",
```

### 需配置的文件
```js
// App.jsx
import { hot } from 'react-hot-loader/root'

export default hot(App)
 

// .babelrc
{
  "plugins": ["react-hot-loader/babel"]
}
 

// webpack.config.js
{
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  }
}
```
参考链接：[https://github.com/gaearon/react-hot-loader/issues/1227](https://github.com/gaearon/react-hot-loader/issues/1227)

## Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?

### 产生问题的原因：
 - 需要子组件支持ref属性时（`例：antd Form组件getFieldDecorator方法`）
 - 函数式组件不是一个实例，而是一个函数（`ref`属性不能应用在函数上）
 ![alt](./img/notes-1.png)

### 解决方案：
使用`React.forwardRef`。它会创建一个组件，并将其接受到的`ref`属性转发到其组件树下的另一个组件中。
```js
import React, { forwardRef } from 'react';

const RateQuest = forwardRef((prop, ref) => { /* 原来stateless component里的内容 */})
```

### 效果：
此时的组件就是一个实例了：

 ![alt](./img/notes-2.png)
 
 后面的使用方法就和原来一样了：`<RateQuest {...props} />`

参考链接：
 - [React.forwardRef](https://zh-hans.reactjs.org/docs/react-api.html#reactforwardref)
 - [自定义或第三方的表单控件，也可以与antd Form组件一起使用，需遵循3个约定](https://github.com/ant-design/ant-design/issues/16386)

 ## React里对于const存不存在暂时性死区？
 ### 产生原因
 ![alt](./img/notes-3.png)

明明`RateQuest`是一个const变量（值为一个函数），为何在`123`处，可以输出undefined，而不是`未定义？`

```
一般const会存在暂时性死区：
若在const变量所在的代码块范围内，在其声明前的其它语句不允许访问该变量。
```
 ![alt](./img/notes-4.png)