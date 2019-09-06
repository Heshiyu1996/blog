# React 16.9使用注意事项
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