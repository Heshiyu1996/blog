# React SSR

[[toc]]

<!-- 
## 传统的CSR
### 步骤

浏览器发起请求

=> 服务器返回HTML文件

=> 解析HTML，并加载、执行其中的 JS，通过 JS 渲染页面

=> JS 完成事件绑定。 -->

## 定义
通过 服务器 进行渲染，吐出 html 文件到前端。

SSR采用 **同构直出** 的方案（即：**服务端、客户端使用同一套代码，并输出HTML**）
> 可以提升代码复用率、可维护性

> 在 浏览器 与 服务端 之间，多了个 node中间层。

### 步骤
浏览器发起请求

=> node中间层 请求服务器数据

=> node中间层 将 数据 渲染到HTML

=> 下发一个 包含完整内容的HTML 给浏览器（**不包括事件绑定**）

<img src="./img/csr-ssr.png" width="500px" />

<img src="./img/csr-ssr-2.png" width="500px" />

### 优缺点
**优点：**
1. 提升首屏渲染性能
2. 对 SEO 更友好

**缺点：**
1. 增加服务器成本
2. 维护性较差（修改、部署）


## 注意事项
使用 SSR，有 2 点要注意：
 - 事件挂载
 - `window`对象

### 事件挂载
node渲染完后，给浏览器下发HTML字符串（**不包括事件绑定**），需要 客户端 来完成事件挂载。

所以对于 “事件逻辑” 的处理，需要注意：
 1. 尽量放到 `componentDidMount` 触发
    - node层的生命周期只走到 `componentWillMount`
    - 客户端有完整生命周期，所以可以在 `componentDidMount` 处理
 2. 保持 DOM 结构一致
    - 否则会报错 或 重新渲染

### node无法访问window对象
 1. 可以延迟到 `componentDidMount` 后触发
 2. 给 node环境 mock一个 全局window对象（通过 `ssr-window` 等库，通过简单patch，避免报错）



### 路由相关
**服务端路由：** 根据请求路径，找到路由组件，从而判断要展示什么样的页面

**客户端路由：** 根据浏览器中的地址，找到路由组件；

#### 服务端路由
`<StaticRouter>`：react-router 专门为 服务端渲染 而提供的一个路由组件。

通过传入的 location 来分析当前需要的路由组件

```jsx
const App = () => {
  return 
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>
          <Route path='/' component={Home}>
        </div>
      </StaticRouter>
    </Provider>
}

return ReactDom.renderToString(<App/>);
```
最后通过 `renderToString` 将 组件 转成 对应的HTML字符串。
> `renderToString`不会处理任何event listener，所以不管怎么点击按钮都没反应（node层不处理事件绑定）

#### 客户端路由
`<BrowserRouter>`能匹配到当前浏览器所访问的路由组件，然后通过 `render` 挂载。
```jsx
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route path='/' component={Home}>
  		</div>
      </BrowserRouter>
    </Provider>
  )
}

ReactDom.render(<App/>, document.querySelector('#root'))
```
### 渲染入口
SSR、CSR 对于 webpack 的入口不一样，webpack配置也要分开：
 - `webpack.client.js`
 - `webpack.server.js`
