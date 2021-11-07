# React前端工程脚手架
> 主要技术： react(16.9.0) + antd(3.23.3) + webpack(4.39.1) + react-router-dom(5.0.1) + react-loadable(5.5.0)

[[toc]]


## 基本属性
**种类：** 目前一共有3套脚手架（单页js、单页ts、多页js），底层配置大体相同。

**支持工具：**
  - React v16.9.0
  - Antd v3.23.1
  - Webpack v4.39.1
  - ESLint & Stylelint & Prettier
  - Husky
  - HappyPack
  - DLL 动态链接库
  - CDN下载依赖（lodash、moment）
  - react-router v4（BrowserRouter）

## npm包的放置策略
| 方式 | DLL | CDN | webpack打包 | 高速缓存 |
|--|--|--|--|--|
| 开发 | react、react-router-dom、react-dom、antd | lodash、moment | / | ✔ |
| 打包 | / | lodash、moment | react、react-router-dom、react-dom、antd | ✘ |

### Q1：为什么antd在开发时放DLL、打包时放webpack、不考虑CDN？
 - 开发时，通过DLL会提前完整构建，提高编译速度
 - 打包时，可以利用 tree shaking，减少打包体积
 - CDN 需要 externals。若通过 Babel “按需引入”，最终 externals 效果会有差异；并且CDN体积较大（400kb），不考虑CDN

### Q2：详细放置策略？
 - DLL：将第三方库提前完整构建，体积较大，且不可tree shaking
    - 推荐：仅在 开发阶段 使用DLL

 - CDN：和DLL类似，但需额外 externals
    - externals 对于 “设置了按需加载”的 antd 不起作用，需额外 externals 掉 antd 里的某种组件
    - 推荐：不影响主程序、体积较小的第三方库可使用（如：lodash、moment）

 - webpack打包：参与tree shaking、JS代码压缩
    - 推荐：生产阶段 尽量使用webpack打包，体积较小

## 有关Happypack的使用
目前在开发环境（webpack.dev.js）使用了 happypack 多线程处理，来加快编译速度。

声明 线程数 为最大利用数：

```js
// happypack线程池（个数为操作系统cpu的数量）
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
```
目前只针对 eslint-loader、babel-loader、css-loader 这三类loader进行了额外线程处理。


## 有关DLL的使用（可引入类似auto dll的plugin进行改进）
1、声明DLL打包范围（config/dll.config.js）
 - 目前只针对 react、antd 进行了DLL打包
 - 采用了 devtool: 'eval-cheap-source-map' 的 sourcemap 方式

2、运行 yarn run dll，可在 根目录下vendor 生成 DLL 文件

3、在 webpack.dev.js 的 plugins，处理与 webpack 的关联
```js
/* DLL相关（开始） */
// 将 DLL 和 webpack进行关联
new webpack.DllReferencePlugin({
    manifest: path.join(paths.vendor, 'react.manifest.json')
}),
new webpack.DllReferencePlugin({
    manifest: path.join(paths.vendor, 'antd.manifest.json')
})
/* DLL相关（结束） */
```

4、在 public/index.html 下，声明 dll 的插槽变量
```html
<script type="text/javascript" src="<%= htmlWebpackPlugin.options.dll.react %>"></script>
<script type="text/javascript" src="<%= htmlWebpackPlugin.options.dll.antd %>"></script>
```

5、在 webpack.base.js 的 plugins 利用 HtmlWebpackPlugin 插件，针对 dll 插槽变量 进行赋值
```js
plugins: [ 
    new HtmlWebpackPlugin({
        // ...
        dll: {
            react: !isProduction ? './vendor/react.dll.js' : '',
            antd: !isProduction ? './vendor/antd.dll.js' : ''
        }
    })
]
```

6、运行 yarn run dll 即可完成
> 也可以通过组合指令 yarn run dev，来实现打包 DLL 后立即启动项目。

## 有关高速缓存
通过高速缓存可以节省90%的编译时间
> 一般启动项目10s内，热编译1s内

```js
new HardSourceWebpackPlugin({
    // cacheDirectory声明缓存存放的文件夹。默认情况下，将缓存存储在build/node_modules下的目录中
    cacheDirectory: 'node_modules/.cache/hard-source/[confighash]',
    recordsPath: 'node_modules/.cache/hard-source/[confighash]/records.json',
    // configHash在启动webpack实例时转换webpack配置
    // 并针对cacheDirectory，为不同的webpack配置来构建不同的缓存
    configHash: function(webpackConfig) {
        // node-object-hash on npm can be used to build this.
        return require('node-object-hash')({ sort: false }).hash(webpackConfig);
    },
  
    // 如果Hash与之前构建的不同，会使用新的缓存
    environmentHash: {
        root: process.cwd(),
        directories: [],
        files: ['package-lock.json', 'yarn.lock']
    },
 
    // 自动清除过期的、体积大的缓存
    cachePrune: {
        // 设置缓存的最大有效期（2d）
        maxAge: 2 * 24 * 60 * 60 * 1000,
        // 设置缓存的最大体积（50M）
        sizeThreshold: 50 * 1024 * 1024
    }
});
```

但是要注意：因为是读取 cache 的编译内容，所以一般会在 第二次启动时 高速缓存才会生效


启动方法：
```
yarn start:cache
```

## 有关路由自动化渲染

### 使用方式
1、定义路由表

2、需要渲染子路由时，在父路由使用 `<Routes {...props} />`


### 优点
 - 支持路由组件的多种配置方式
    - 导入方式：动态导入、静态导入
    - 响应式：pc、mobile
 - 支持路由表的统一管理&维护
 - 提供工具函数
    - getRouteInfo：根据props，查找指定路由及其父路由信息；
        - 可用于：渲染当前路由的同级tabList
    - getRouteLine：根据props，查找当前路由在路由表中的层级关系
        - 可用于：生成当前路由的面包屑路径；


### 扩展性
可以针对项目对 权限设置 的要求，适当搭配使用。

[查看详情](./DEMO.md)


## 链接
 - [单页项目（react16.9 + webpack4）](https://github.com/netease-frontend-institute/ehr-react-template/tree/single/js')
 - [单页项目（react16.9 + webpack4 + Typescript）](https://github.com/netease-frontend-institute/ehr-react-template/tree/single/ts')
 - [多页项目（react16.9 + webpack4）](https://github.com/netease-frontend-institute/ehr-react-template/tree/multiple/js')
 - [搭建踩坑笔记](./react-project-note)
