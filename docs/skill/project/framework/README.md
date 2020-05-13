# 脚手架搭建踩坑

1、React-hot-Loader: react-hot-dom patch is not detected. React 16.6+ features may not work.
虽然出现此提示时热加载依然能用，但可能在某些场景热加载会失效（@hot-laoder/react-dom会作为补充）

产生问题的原因：
 - 没有安装@hot-loader/react-dom
 - 没有在`webpack.config.js`里，对react-dom设置alias

需要安装的包
`
"react-hot-loader": "^4.12.11",
"@hot-loader/react-dom": "^16.8.6",
`

需配置的文件
`js
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
`
参考链接：https://github.com/gaearon/react-hot-loader/issues/1227

2、Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
产生问题的原因：
 - 需要子组件支持ref属性时（例：antd Form组件getFieldDecorator方法）
 - 函数式组件不是一个实例，而是一个函数（`ref`属性不能应用在函数上）

解决方案：
使用React.forwardRef。它会创建一个组件，并将其接受到的ref属性转发到其组件树下的另一个组件中。
`js
import React, { forwardRef } from 'react';
const RateQuest = forwardRef((prop, ref) => { /* 原来stateless component里的内容 */})
`

效果：
此时的组件就是一个实例了，后面的使用方法就和原来一样了：<RateQuest {...props} />

参考链接：
 - [React.forwardRef](https://zh-hans.reactjs.org/docs/react-api.html#reactforwardref)
 - [自定义或第三方的表单控件，也可以与antd Form组件一起使用，需遵循3个约定](https://github.com/ant-design/ant-design/issues/16386)

3、React里对于const存不存在暂时性死区？
场景复现：
代码底部有一个const变量RateQuest（值为一个函数），为何在代码顶部处，可以输出为undefined，而不是未定义？

`
一般const会存在暂时性死区：
若在const变量所在的代码块范围内，在其声明前的其它语句不允许访问该变量。
`
4、Warning: componentWillReceiveProps has been renamed, and is not recommended for use. See https://fb.me/react-async-component-lifecycle-hooks for details.
产生原因：
 antd组件库有些还用到componentWillReceiveProps的方法，目前正在迁移

解决方案：
  - Antd版本升级至4.0（*尚未发布*）
  - React版本下降至16.8.6（*不推荐*）
  - 无视该warning

参考链接：
 - [Migrate to new lifecycle methods](https://github.com/ant-design/ant-design/issues/9792)

5、React-hot-loader配置导致打包后的路由不跳转
产生原因：
 将webpack的alias配置打包进了prod。

解决方案：
 方案一：只将alias配置进webpack.config.dev.js

 方案二：在yarn包的层面就将`react-dom`加个补丁（不推荐，还是有问题1提示）
 `
 yarn add react-dom@npm:@hot-loader/react-dom
 `

参考链接：
 - [hot-loader/react-dom](https://github.com/hot-loader/react-dom)
6、favicon.ico找不到？
产生原因：
在index.html中设置了<link>，但是网站图标却404。
`html
<link ref="shortcut icon" href="favicon.ico" />
`

解决方案：
在webpack.config.js中
`js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            favicon: './public/favicon.ico'
        })
    ]
}
`
7、warning ../../package.json: No license field
产生原因：
 yarn（或npm）默认会先进入父目录查找package.json

解决方案：
若是MAC系统，进入~文件夹，删除package.json文件。

8、npm WARN lifecycle The node binary used for scripts is /var/folders/db/bc53rp1d2ks_2yxcgvb4kb2h0000gn/T/yarn--1569291634982-0.6225204723113884/node but npm is using /usr/local/bin/node itself. Use the 
−
−
s
c
r
i
p
t
s
−
p
r
e
p
e
n
d
−
n
o
d
e
−
p
a
t
h
 option to include the path for the node binary npm was executed with.

解决方案：
`
npm config set scripts-prepend-node-path true
`
 
9、打开控制台出现很多warning：warning：DevTools failed to parse SourceMap
 
产生原因：
 
应该是webpack升级导致的DllPlugin内部机制发生变化了，没有把node_modules里对应sourcemap打进dll文件里

解决方案：
 
在dll的配置文件dll.config.js中，新增：
module.exports = {
devtool: 'cheap-module-eval-source-map'
// ...
};

 
10、ts提示找不到模块
产生原因：

使用了webpack.alias，但编译器找不到别名信息。

解决方案：

 
先确保tsconfig.json中paths字段（下面是例子）
"paths": {
    "@/*": ["src/*"],
    "@ant-design/icons/lib/dist$": ["src/utils/antd-icon.js"],
    "react-dom": ["@hot-loader/react-dom"]
}
若依然报错，重启编译器即可（VSCode只在项目加载时读取配置文件）
