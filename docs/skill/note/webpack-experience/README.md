# 《Webpack实战》-居玉浩

[[toc]]

## 第一章 Webpack简介
### 什么是Webpack
`Webpack`是一个开源的JavaScript模块打包工具，其最核心的功能是：**解决模块之间的依赖，把各个模块按照特定的规则和顺序组织在一起，最终合成一个JS文件（有时可能为多个）**。
 > 类似模块处理工厂。

### 安装webpack的命令：
```
yarn add webpack webpack-cli -D
```
其中`webpack`是核心模块，`webpack-cli`是命令行工具

可以通过`npx webpack -v`来查看项目内webpack的版本

#### 使用webpack的理由：
1、规模大了，引入的模块多了，人工维护代码的成本逐渐变高；

2、有关ES6模块标准：
 - 无法使用**code splitting**和**tree shaking**（webpack的两个特别重要的特性）
 - 大多数npm模块是**CommonJS形式**的，浏览器并不支持其语法，因此这些包没办法直接拿来用

:::tip
注意：
webpack打包时，会为每一个文件包装一层函数作用域来避免全局污染（所以，那些在文件内进行“隐式全局变量声明”的变量，将无法挂在全局）
:::
 > 
 >
 > 解决办法：将要全局的变量挂到window对象上

### 全局/本地安装webpack的区别：
 - 与他人协作时，可能会导致**输出结果不一致**（若全局安装，有可能和他人版本不同）
 - 部分依赖于webpack的插件**会调用项目中webpack的内部模块**，这种情况下仍然需要在项目本地中安装webpack

### 维护复杂的webpack配置
 - 借助npm scripts来维护命令行脚本
 - 当脚本参数过多时，可以转化为`webpack.config.js`

#### 对于webpack.config.js文件的一些配置：
```js
module.export = {
    // context: 
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        // path: '...'
    }
}
```
其中，
`entry`是资源入口，默认是相对于项目根目录下

`context`是资源入口的路径前缀（主要目的是为了让entry编写更简洁，尤其是多入口），默认值是**当前项目的根目录**

`output`里的path要求使用绝对路径（从系统的根路径开始）。
 > 解决方法：用Node.js的**路经拼装函数path.join**，将__dirname（Node.js的内置全局变量，值为当前文件的绝对路径）与**dist**（输出目录）连接起来。

配置好webpack.config.js时，当我们运行webpack指令，就可以预先读取它，来进行打包了。

### `webpack-dev-server`
启动一个本地服务，它可以：
 - 处理`打包资源`的请求（去指挥webpack进行模块打包）
 - 处理`静态文件`的请求（本身就是Web Server）

另外，它的`live-reloading（自动刷新）`特性可以监听文件变化，自动刷新页面来提升开发效率。

## 第二章 模块打包
#### webpack模块打包原理
为什么说`CommonJS`是值的拷贝？（因为底层实现的是浅拷贝）
```js
// a.js
const b = require('./b');
console.log(b.count);

// b.js
module.exports = {
  count: 1,
};
```

webpack生成的bundle.js：
```js
(function(modules) {
  // 为模块的加载、执行做一些准备工作：
  // 定义模块缓存
  var installedModules = {}

  // 定义__webpack_require__函数
  // webpack实现的require函数（当执行require时会调用）
  function __webpack_require__(moduleId) { }
  // ...
  // 开始进行require
  return __webpack_require__(__webpack_require__.s = 0);
})([
  // 可见，以下每个模块都会被自动分配moduleId，值为下标
  // a.js
  (function(module, exports, __webpack_require__) {
    const b = __webpack_require__(1); // 返回了b.js这个模块的module.exports
    console.log(b.count);
  }),

  // b.js
  (function(module, exports) {
    // 进行了浅拷贝（对于基本类型，是拷贝了）
    module.exports = {
      count: 1,
    };
  })
])
```
```js
 // __webpack_require__函数
  function __webpack_require__(moduleId) {
    if(installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }

    // 模块缓存id、加载状态和导出值
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}    // 关键点：模块导出预置了一个空对象
    };
    // 模块代码执行
    // 通过调用call，将那个要导入的模块的module对象里exports进行了对象浅拷贝（见下）
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.l = true;
    return module.exports;
  }

```
:::tip
步骤（待完善）：

 1、最外层定义一个立即执行函数（参数为一个数组，装有各个模块），构成自身的作用域

 2、定义installedModules对象
    （每个模块只在第一次被加载时执行，之后其导出值都被存储到这个对象里。之后再次被加载时直接从这里取值）

 3、定义__webpack_require__函数（将使用它来完成模块导入）

 4、在函数里，从“返回一个`moduleId为0的require函数`”开始（即a.js为入口文件）

 5、当moduleId为0时，先判断有无导入过（若有，直接返回exports），否则进行下一步

 6、新建一个空对象module，通过调用call方法，将那个要导入的那个模块（b.js）的this值改为空对象module的exports属性，并传入一些参数（空对象module、空对象的exports属性）

 7、call执行后，会使得原先这个空对象module里的exports属性，变成了带有值的一个对象（即要导出的内容，这里是count），这时就完成了浅拷贝（即值的拷贝：对于基本类型是值拷贝，对于引用类型是共用地址拷贝）
:::
webpack为每个模块创造了一个可以导出、导入模块的环境，但本质上**并没有修改代码的执行逻辑**（因此**代码执行的顺序与模块加载的顺序完全一致**）

## 第三章 资源的输入输出
<!-- ### 资源处理流程
在一切流程的最开始，需要指定一个或多个入口（entry），告诉webpack从哪个文件开始打包。
> 如果把各个模块之间的关系总和比作一棵树，那入口文件就是树根 -->

### chunk
**chunk**表示的是**存在依赖关系**的一些模块（module）的集合。
> **bundle**是由**各个chunk**得到的打包产物；**每个chunk**（一般）由**1个entry**生成；**每个entry**下面有**多个module**。
>
> 由大到小：bundle -> chunk -> entry -> module
### 资源入口的前缀路径——context
:::tip
默认值：项目的根目录
```js
// 以下两种配置的效果相同，入口都为：<项目根路径>/src/scripts/index.js
const path = require('path')
module.exports = {
    context: path.join(__dirname, './src'),
    entry: './scripts/index.js'
}

module.exports = {
    context: path.join(__dirname, './src/scripts'),
    entry: './index.js'
}
```
:::

### 资源入口——entry
默认值：`./src/index.js`

#### 字符串类型入口
直接传入文件路径
> 默认的chunk name为“main”
```js
module.exports = {
    entry: './src/index.js', // 默认的chunk name为“main”
    output: {
        filename: 'bundle.js' // bundle name为“bundle”
    }
}
```

#### 数组类型入口
将多个资源预先合并 *（不是多入口！）*，打包时会将数组中**最后一个元素**作为实际的入口路径。
> 由于还是属于单入口，所以默认的chunk name叫“main”
```js
// 以下两种效果相同
module.exports = {
    entry: ['babel-polyfill', './src/index.js']
}

// webpack.config.js
module.exports = {
    entry: './src/index.js'
}
// index.js
import 'babel-polyfill'
```

#### 对象类型入口
定义多入口，必须使用对象的形式
> 对象的属性名（key）是chunk name；属性值（value）是入口路径
>
> 其中value可以为字符串、数组（效果同上）
```js
module.exports = {
    entry: {
        index: './src/index.js', // chunk name为index
        lib: './src/lib.js' // chunk name为lib
    },
    output: {
        filename: '[name].js'
    }
}
```
由于是多入口，所以必须为每一个chunk指定**chunk name**，同时**也需要为各个entry对应的每个bundle指定不同名字**。
> 也就是声明**output.filename**（利用模板变量）

### 资源出口——output
#### filename
作用是**控制输出资源的文件名（可以是相对路径）**

filename配置项模板变量：
| 变量名称 | 功能描述 |
| -- | -- |
| [name] | 指代chunk name |
| [hash] | 指代Webpack此次打包所有资源生成的hash |
| [chunkhash] | 指代当前chunk内容的hash |
| [id] | 指代当前chunk的id |
| [query] | 指代filename配置项中的query |

 - **控制客户端缓存**。
   - 原理：当chunk内容发生改变，会**引起资源文件名的更改**，这样可以最精确地更新客户端的缓存。
   - 通过使用与**chunk内容直接相关**的模板变量： **`[chunkhash]`、`[hash]`**

 :::tip
 **控制客户端缓存**一般只用在生产环境的配置下，在开发环境中不必配置`[chunkhash]`
 :::

 #### path
 path可以指定**资源输出位置**，**必须是绝对路径**。
 > 默认值：项目根目录（webpack4以前）、项目根目录/dist/（webpack4以后）
```js
const path = require('path')
module.exports = {
    entry: './scripts/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'src')
    }
}
```

#### publicPath
webpack的**output.path**指定资源的输出位置

webpack的**output.publicPath**指定间接资源的请求位置


### 实际中遇到的问题
#### 1、bundle超过**250kb**就会提示过大

#### 2、提取vendor

当第三方依赖较多时，我们可以通过提取vendor，将这些模块打包到一个单独的bundle中。
 > 作用：有效利用客户端缓存，加快页面渲染速度。
```js
module.exports = {
    entry: {
        app: './src/app.js',
        vendor: ['react', 'react-dom']
    }
}
```
上面的做法，是将`react`、`react-dom`打包进了vendor，之后再配置**optimization.splitChunks**将它们从各个页面中提取出来，生成单独的bundle。

**optimization.splitChunks**的前身是**CommonsChunkPlugin**（在webpack4后被废弃）


#### 3、publicPath

**webpack-dev-server**也有一个`publicPath`属性
> 表示的是webpack-dev-server的静态资源服务路径

为了避免开发环境、生产环境不一致，将**webpack-dev-server**的`publicPath`、**webpack**中的`output.path`保持一致，这样在**任何环境下资源输出的目录都是相同**的。

#### 4、单入口的chunk name不可改，多入口的话必须为每一个chunk指定chunk name

## 第四章 预处理器
`预处理器（loader）`赋予了Webpack**可以处理不同资源类型**的能力。

对于Webpack来说，所有静态资源都是**模块**，所以我们可以像**加载一个JS文件一样**去加载它们。
```js
// 引入了当前组件的自身样式
import './style.css'

// 引入了组件Calendar
import Calendar from '@/components/calendar/index'
```
可见，组件的JS、CSS可以作为一个整体被引入。


### loader的本质
#### 每个loader本质上都是一个函数。
 - **webpack4之前**，函数的输入、输出都必须为**字符串**
 - **webpack4之后**，loader也**支持抽象语法树（AST）的传递**，以达到减少重复的代码解析。
 ```js
 output = loader(input)
 // input可能是字符串，也可能是上一个loader转化后的结果
 // output包含：文件字符串、source map、AST
 ```

> loader可以是链式的：
> 
> 第一个loader的输入是源文件，之后所有loader的输入都是上一个loader的输出，最后一个loader则直接输出给Webpack。

#### loader的源码结构
```js
module.exports = function loader(content, map, meta) {
    var cb = this.async();
    var result = handler(content, map, meta);
    cb(
        null, // error
        result.content, // 转换后的内容
        result.map, // 转换后的source-map
        result.meta // 转换后的AST
    )
}
```
可见，loader本身是一个函数，在该函数中对“**接收到的内容**”进行转换，然后返回**转换后的结果（可能是source map和AST对象）**。

### loader的配置
与loader相关的配置都在module对象中，其中`module.rules`代表了模块的处理规则。
:::tip
每条**模块处理规则**包括：
 - 哪些模块生效（test、exclude、include配置）
 - 哪些loader（use配置）
:::

```js
module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
    ]
}
```
打包时，会按照数组里**从后往前**的顺序交给loader处理。
:::tip
**css-loader**：处理CSS的各种加载语法（`@import`和`url()`函数等）

**style-loader**：把样式插入页面，使其起作用
:::

要使用loader的配置项`options`，可以将“use”里的元素改为对象：
```js
module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        // css-loader配置项
                    }
                }
            ]
        }
    ]
}
```
#### 更多配置
**exclude**和**include**
- **exclude**：所有被正则匹配到的模块都**排除**在该规则之外
- **include**：只对正则匹配到的模块**生效**

他们和`test`、`use`并列，且**exclude**优先级更高
> 若exclude包含了include的范围，include会无效

### 常用loader
#### babel-loader
作用：处理ES6+的语法，将其编译为ES5。

安装：
```
yarn add babel-loader @babel/core @babel/preset-env
```
- **babel-loaders**：使Babel与Webpack协同工作的模块
- **@babel/core**：是Babel编译器的核心模块
- **@babel/preset-env**：是Babel官方推荐的预置器

使用：
```js
module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_module/,
            use: {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: [[
                        'env', {
                            modules:false
                        }
                    ]]
                }
            }
        }
    ]
}
```
注意：
 - 1、`cacheDirectory`可以启用缓存机制，对**未改变过的模块**在打包时防止二次编译，加快打包速度。
 - 2、**@babel/preset-env**会将**ES6 Module**转化为**CommonJS**形式，导致Webpack中的**tree-shaking**特性失效。
 - 3、**@babel/preset-env**的**modules配置项**设置为false会禁用模块语句的转化，将ES6 Module的语法交给Webpack本身处理。
 - 4、**babel-loader**可以从`.babelrc`读取Babel配置。可以将`presets`和`plugins`放到其中。

#### file-loader
作用：用于打包“文件类型”的资源，并返回其publicPath。

安装：
```
yarn add file-loader
```

使用：
```js
module: {
    rules: [
        {
            test: /\.(png|jpg|gif)$/,
            use: 'file-loader'
        }
    ]
}
```
对`png、jpg、gif`这类的资源使用file-loader，就可以在JS中加载图片了：
```js
import myPhoto from './photo.jpg'
console.log(myPhoto) // c6f482ac9a1905e1d7d22caa909371fc.jpg
```

#### url-loader
作用和`file-loader`类似。且支持设置一个阈值（limit），大于limit则和`file-loader`一样返回publicPath，否则返回**base64形式编码**。

安装：
```
yarn add url-loader
```

使用：
```js
module: {
    rules: [
        {
            test: /\.(png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10240,
                    name: '[name].[ext]'
                }
            }
        }
    ]
}
```
对`png、jpg、gif`这类的资源使用url-loader，就可以在JS中加载图片了：
```js
import myPhoto from './photo.jpg'
console.log(myPhoto) // data:image/jpeg;base64, /9j/2wCEAAgGBg...
```

## 第五章 样式处理
### 分离样式文件
前面提到，通过`style-loader`可以把CSS文件**通过标签的形式**引到页面中，那如果要单独输出CSS文件呢（特别是在生产环境下，因为更有利于客户端缓存）

提取样式到CSS文件的解决办法：
 - **webpack4之前**，extract-text-webpack-plugin
 - **webpack4之后**，mini-css-extract-plugin

#### extract-text-webpack-plugin
使用方法：
```js
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    // ...
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader' // 提取前，预先处理的loader
                })
            }
        ]
    },
    plugins: [
        new ExtraTextPlugin('bundle.css') // 提取后，CSS的文件名
    ]
}
```
其中，`plugins`表明：在Webpack打包过程的各个环节中添加的一些额外任务。

#### 多样式文件的处理
样式的提取是以资源入口（entry）开始的整个chunk为单位的，所以可能会出现重名
> chunk是对一组有依赖关系的模块的封装

解决办法：对插件提取的CSS文件使用类似模板的命名方式：
```js
plugins: [
    new ExtraTextPlugin('[name].css') // 提取后，CSS的文件名
]
```
其中，`[name]`指代的是chunk的名字

#### mini-css-extract-plugin
和`extract-text-webpack-plugin`最大的区别是支持**按需加载CSS**
 - 支持通过配置publicPath来指定异步CSS的加载路径
 - 需指定异步加载的CSS资源名（chunkFilename）

### 样式预处理
#### Sass与SCSS的关系
Sass有两种语法：
 - 缩排语法（不直观）
 - SCSS语法（Sassy CSS，直观）

所以说，虽然它的文件后缀是`.scss`，但实际上配置的是`sass-loader`（同时还要搭配`node-sass`）
 - sass-loader（**编译核心库与Webpack的连接器**）
 - node-sass（**编译核心库**）

安装：
```
yarn add sass-loader node-sass
```

#### Less
Less也是CSS的一种扩展，和SCSS类似，也需安装`loader`和其本身的`编译模块`

安装：
```
yarn add less-loader less
```

#### PostCSS
PostCSS并不能算是一个CSS预编译器，只是一个**编译插件的容器**（接收样式源代码，交给编译插件去处理）

可以结合`css-loader`使用，也可以单独使用。

安装：
```
yarn add postcss-loader
```

使用方法：

在*项目的根目录*下创建一个`postcss.config.js`

- autoprefixer
```js
// postcss.config.js
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        autoprefixer({
            browsers: [
                '> 1%', // 全球统计有超过1%的使用率
                'last 3 versions', // 主流浏览器的最新3个版本
                'android 4.2',
                'ie 8' // React不支持IE8（0.14以上）
            ]
        })
    ]
}
```
除了`autoprefixer`，还可以为**postcss容器**添加其它编译插件（例如：`stylelint`）等。

### CSS Modules
CSS Modules可以使CSS模块化，避免样式冲突

特点：
 - 每个CSS文件中的样式都拥有单独的作用域
 - 对CSS进行依赖管理（可以通过相对路径引入CSS文件）
 - 可以通过composes轻松复用其它CSS模块
```js
module: {
    rules: [
        {
            test: /\.css/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        // 表示打开CSS Module
                        module: true,
                        // 指定CSS代码中类名的生成规则
                        // [name]：模块名
                        // [local]：选择器标识符
                        // [hash]：根据“模块名”+“选择器标识符”一起计算的
                        localIdentName: '[name]__[local]__[hash:base64:5]'
                    }
                }
            ]
        }
    ]
}
```
使用方法：
```css
/* style.css */
.title {
    color: #f938ab;
}
```
```js
// app.js
import styles from './style.css';
document.write(`<h1 class="${styles.title}">My Webpack app.</h1>`)
```
使用CSS Modules时CSS文件会导出一个对象，`${styles.title}`这样才能和**编译后的CSS类名**匹配上。

## 第六章 代码分片
为了提高首屏速度，一般会**尽可能地每次只加载必要的资源**，次要资源**采用延迟加载**，这就用到了**代码分片**。
### 通过入口划分代码
原理：每个入口（entry）都生成一个对应的资源文件，可以对一些**不常变动的库/工具**放到一个单独的入口中，可以**有效地利用客户端缓存**。

缺点：
 - 只适合那些将接口绑定在全局对象上的库
 - 公共模块与业务模块处于不同依赖树

### CommonsChunkPlugin（webpack4之前）
原理：将多个chunk中公共的部分提取出来

好处：
 - 减少重复模块打包，提升开发速度
 - 减小整体资源体积
 - 有效地利用客户端缓存

未使用前（**保留注释**）：
```js
// webpack.config.js
// const webpack = require('webpack');

module.exports = {
    entry: {
        foo: './foo.js',
        bar: './bar.js'
    },
    output: {
        filename: '[name].js'
    },
    // plugins: [
    //     // 1、创建了一个插件实例
    //     new webpack.optimize.CommonsChunkPlugin({
    //         // 2、指定公共chunk名
    //         name: 'commons',
    //         // 3、指定提取后的资源名
    //         filename: 'commons.js'
    //     })
    // ]
}

// foo.js
import React from 'react'
document.write('foo.js', React.version)

// bar.js
import React from 'react'
document.write('bar.js', React.version)
```
上面是**没有使用CommonsChunkPlugin**的情况。

最终打包的结果是：**react被分别打包到了foo.js和bar.js里**。

> 若去掉注释，则最终打包的结果：**react及其依赖的模块都提到commons.js**。

#### 提取vendor（取交集）
```js
// webpack.config.js
// const webpack = require('webpack');

module.exports = {
    entry: {
        app: './app.js',
        vendor: ['react']
    },
    output: {
        filename: '[name].js'
    },
    plugins: [
        // 1、创建了一个插件实例
        new webpack.optimize.CommonsChunkPlugin({
            // 2、指定公共chunk名
            name: 'vendor',
            // 3、指定提取后的资源名
            filename: 'vendor.js'
        })
    ]
}

// app.js
import React from 'react'
document.write('app.js', React.version)
```
1、配置了一个入口vendor，只包含react

2、此时`react`就是两个入口（app、vendor）的公共模块

3、在`CommonsChunkPlugin`配置中，`name: 'vendor'`，表明产生的资源将**覆盖**由**vendor入口**所产生的资源，达到提取**单个入口**的公共模块的效果

#### 提取范围
通过`chunks`配置项可以规定从哪些入口中提取公共模块
```js
// 1、创建了一个插件实例
new webpack.optimize.CommonsChunkPlugin({
    // 2、指定公共chunk名
    name: 'vendor',
    // 3、指定提取后的资源名
    filename: 'vendor.js',
    // 4、表明只从a.js和b.js中提取公共模块
    chunks: ['a', 'b']
})
```
还可以配置多个CommonsChunkPlugin，来规定不同的提取范围。

#### 提取规则
默认规则：只要一个模块被两个入口chunk共用，就会被提取。

理由：有些公共模块可能经常修改，不应被提取，**否则影响客户端缓存**。

通过`minChunks`配置项来实现。（支持数字、Infinity、函数）


### optimization.SplitChunks（webpack4之后）

