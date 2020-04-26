# 其他
> 这里会搜集一些有关JS的零碎知识

[[toc]]

## 可变（Mutable）和不可变（Immutable）对象的区别
### Mutable对象：
在JavaScript中，对象是引用类型的数据，其优点在于频繁地修改对象时，都是在原对象基础上修改，并不需要重新创建，这样就可以有效地利用内存，不会造成内存空间的浪费。

### Immutable对象：
每次修改immutable对象时的都会创建一个新的不可变对象，在新对象上的操作不影响到原对象的数据。

## 闭包
`闭包`就是一个函数，只不过这个函数能够访问 **其他函数的作用域** 中的变量。

原理：**这个函数的作用域链，包含着另一个个函数的作用域**

特点：
 - 【读取别人】可以读取另外一个函数作用域里的变量（创建一些特权方法）
 - 【留在内存】可以将这些变量**长时间保存在内存**中，也可能造成内存泄露

### 为什么闭包可以访问其他函数的作用域链？
当 **调用一个函数** 时，
 - 调用该函数时，会将它的**执行上下文**（包括它的参数、变量、作用域链）以 **栈帧** 形式推入执行栈
 - 如果这个函数的作用域链还包含着另一个函数作用域，那**它在执行上下文推出栈帧前**，会一直保持这个引用而不被垃圾清除。

```js
function outer() {
    var a = 'heshiyu'
    var inner = function() {
        console.log(a)
    }
    return inner // 注意这里只是返回对这个方法的引用
}
var inner = outer() // 获得：闭包函数inner
inner() // 'heshiyu'

// 原理：这个函数的内部函数（inner）作用域链，包含着这个函数的作用域（变量a）
```
当程序执行完`var inner = outer()`，其实`outer`的执行环境并没有销毁。因为它里面的**变量a仍然被inner函数的作用域链所引用**，当程序执行完`inner()`，`inner`和`outer`的执行环境才被销毁。

## 事件委托
事件委托（也称事件代理）：**指定一个事件处理程序，来管理某一类型的所有事件**。

好处：
 - 性能的角度，减少DOM的交互次数
 - 动态新增子元素时，无需额外绑定事件

坏处：
 - 要对“不需要代理的节点”进行过滤
```js
window.onload = function(){
　　var oUl = document.getElementById("ul1")
　　oUl.onclick = function(ev){
        //兼容IE
        var ev = ev || window.event
        var target = ev.target || ev.srcElement
        if(target.nodeName.toLowerCase() == 'li'){
            alert(123)
            alert(target.innerHTML)
　　　　}
　　}
}
```

## 回调地狱
`回调地狱`：
 - 嵌套了很多层回调函数，使得代码**不易阅读与维护**。
 - 多个异步操作形成**强耦合**
    - 只要有一个操作需要修改，它的上层回调、下层回调就要跟着改
```js
asyncFunc1(opt, (...args1) => {
    asyncFunc2(opt, (...args2) => {
        asyncFunc3(opt, (...args3) => {
            asyncFunc4(opt, (...args4) => {
                // some operation
            })
        })
    })
})
```
可以看到左侧明显出现了一个**三角形缩进**。

（相关：[JS异步解决方案的发展历程](/skill/js/async-plan)）


## 原型、构造函数、对象和原型链
 - `原型`（prototype）可以让我们预定义`某一种特定类型`（如Person类型）中、**所有实例共享的属性**和**方法**，然后它们会自动应用到新对象实例上。
 > 每个原型都有一个`.constructor`属性，它指向的是构造函数本身（constructor）

 - `构造函数`通过new操作符，可以创建该实例对象。
 > 每个构造函数都有一个`.prototype`属性，它指向的是该构造函数的原型（prototype）

 - `对象`是通过`构造函数`实例化new出来的，每个对象都有`__proto__`属性，指向它的原型（prototype）

 - `原型链`是作为 **实现继承** 的主要方法，它基本思想是：`利用原型，让一个引用类型继承另一个引用类型的属性和方法`。**（实际上是`__proto__连起来的链条`）**

 > 当实例化一个对象的时候，我们不仅可以获得这个`对象的实例属性（和方法）`，还可以获得`原型对象上的原型属性（和方法）`

![alt](./img/Ptototype-1.png)


## 函数防抖、函数节流
 `函数防抖`（debounce），指的是在上次触发之后、再过N毫秒，才能执行该动作
 
 举例：类似电梯关门原理。当还有人进来时，电梯门不会关上。只有当一段时间没人上了，电梯才会关门。

 简单实现：
 ```js
 function debounce(fn, delay = 500) {
     let timer
     return function() {
         let args = arguments
         if (timer) {
             clearTimeout(timer)
         }
         timer = setTimeout(() => {
             fn.apply(this, args)
         }, delay)
     }
 }

var func1 = function(y) {
    console.log(y)
}

var myFunc1 = debounce(func1, -2)
myFunc1('caozuoxiao')
 ```

 `函数节流`（throttle），指的是函数按照一个周期N毫秒执行
 
 举例：类似等公交车原理。不管站点有没有人，公交车总会按时来。也不会来一个人就来一辆公交车。

 简单实现：
 ```js
 function throttle(fn, delay = 500) {
     let startTime = Date.now()
     return function() {
         let args = arguments
         let currentTime = Date.now()
         if (currentTime - startTime > delay) {
             fn.apply(this, args)
             startTime = currentTime // 刷新旧的startTime
         }
     }
 }

var func = function(x) {
    console.log(x)
}

var myFunc = throttle(func, -1) // 为了test，delay设为-1
myFunc('heshiyu') // 'hehsiyu'
 ```

## call、apply、bind
 3个方法的作用：
   - 改变`this`的指向；
   - 支持`传入参数`；
   - `call`、`apply`返回函数结果；`bind`返回新函数
 
 特点：
   - `call`：只能一个参数一个参数传
   - `apply`：只支持传一个数组（`arguments`）

### 用法
```js
var x = 2020
var fn = function ()  {
    return this.x
}
var obj = {
    x: 1996
}

let resultA1 = fn.call(this, 1, 2)
console.log(result1) // 2020
let resultA2 = fn.call(obj, 1, 2)
console.log(result2) // 1996

let resultB1 = fn.apply(this, [1, 2])
console.log(resultB1) // 2020
let resultB2 = fn.apply(obj, [1, 2])
console.log(resultB2) // 1996

let newFunc1 = fn.bind(this, 1, 2)
console.log(newFunc()) // 2020
let newFunc2 = fn.bind(obj), 1, 2)
console.log(newFunc()) // 1996
```
> 注意： 箭头函数里的this，在定义时就会确定了（为外层的this）

### 实现call
 ```js
 Function.prototype.myCall = function(obj, ...arg) {
     let result
     // 0、传参检测
     if (obj === null || obj === undefined) {
         obj = window
     } else {
         obj = Object(obj)
     }
     // 1、改变`this`指向
     // 要让传入的obj成为：函数调用时的this值
     obj._fn_ = this
     result = obj._fn_(...arg) // 2、支持`传入参数`
     delete obj._fn_
     return result // 3、利用变量保存函数的返回值
 }
 ```
### 实现apply
 ```js
 // 注意，第二个参数是一个数组
 Function.prototype.myApply = function(obj, arr) {
     return this.myCall(obj, ...arr)
 }
 ```
### 实现bind
 ```js
 Function.prototype.myBind = function(obj, ...arg) {
     return (...arg2) => {
         let args = arg.concat(arg2)
         // 以下和实现call的一样
         let result
         // 0、传参检测
         if (obj === null || obj === undefined) {
             obj = window
         } else {
             obj = Object(obj)
         }
     // 1、改变`this`指向
     // 要让传入的obj成为：函数调用时的this值
         obj._fn_ = this
         result = obj._fn_(...args) // 2、支持`传入参数`
         delete obj._fn_
         return result // 3、利用变量保存函数的返回值
     }
 }
 ```

## new操作符经历了哪些步骤
 - 创建了一个`新的对象`
 - 将`构造函数的作用域`赋值给`新的对象`（此时this指向新的对象）
 - 执行`构造函数`里的代码（为这个新对象添加属性）
 - 返回一个`新的对象`
 ```
 1、创建一个空对象obj
 2、将空对象的__proto__成员指向Base函数对象prototype成员对象
 3、将Base函数对象的this指针替换成obj，然后再调用Base函数。
 ```

 对于JS函数，有两个作用：
  - 普通函数
  - “构造器”
    - 通过new操作符，会返回一个新的对象，并且

    原型可以让我们预定义属性、方法，然后它们会自动应用到新对象实例上。
 
 参考：[https://www.cnblogs.com/cshi/p/5476416.html](https://www.cnblogs.com/cshi/p/5476416.html)

## window对象和document对象的区别
 `window`对象表示：浏览器中打开的窗口；

 `document`对象表示：当前页面；它是`window`的一个对象属性


## let、var
var：方法内部是局部变量，外部是全局变量（**var存在变量提升，但赋值undefined**）

> 不使用var，全局

**let声明的变量存在变量提升**， 但是由于 **死区** 我们无法在声明前访问这个变量

`setTimeout`与`var/let`：
```js
for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i) // 10 10 10 10 10
    }, 100 * i)
}
```

```js
for (let i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i) // 0 1 2 3 4 ...
    }, 100 * i)
}
```

原因：
 - `setTimeout`是在`下一轮事件循环开始时`触发
 - `let`在循环里`每次迭代`都会创建一个新的作用域

## ES5、ES6、ES7的区别
### ES7
 - Async、Await
 - 求幂运算符（`**`）
 - Array.prototype.includes()


## js数组的方法
### 变异方法
 - push()
 - pop()
 - shift()
 - unshift()
 - splice()
    - 参数1：要操作的下标
    - 参数2：要`删除`的项目数量
    - 参数3：要新加入的项目
    - 返回：被移除掉的项（array）
 - sort()
    - 参数：（可选）比较函数（function）
        - sort((a, b) => a - b) // 满足a-b，就交换，所以是升序（例子：[12, 2]）
        - sort((a, b) => 1) // 不管a和b谁大，每次都交换，就是倒序（相当于reserve）
    - 不传参数：按照`字符编码的顺序`进行排序
 - reverse()

### 非变异方法
 - slice()
    - 参数1：截取的起始下标，闭区间
    - 参数2：截取的终止下标，开区间（不指定，就是后面所有）
    - 返回：被截走的数组（array）

 - concat()
    - 参数：要收录进数组的项（也可以是数组）
    - 返回：合并后的数组

 - filter()
    - 参数：当前值为true，则会被返回
    - 返回：符合条件的数组
    ```js
    var arr = [1, 3, 5]
    arr.filter(item => item === 5) // [5]
    ```

 - join()
    - 参数：分隔符
    - 返回：字符串

 - forEach()
    - 参数1：当前项
    - 参数2：当前项索引
    - 参数3：数组本身
    - 返回：undefined

 - map()
    - 参数1：当前项
    - 参数2：当前项索引
    - 参数3：数组本身
    - 返回：一个新数组，旧数组不变

## 去重
方法一：（利用对象属性）
```js
function func1(arr) {
    let map = {}
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] in map ? arr.splice(i, 1) : (map[arr[i]] = true)
    }
    return arr
}
```
方法二：（new Set）
```js
const list = [1, 1, 2, 3]
const uniqueList = [...new Set(list)];
```

## for...in和for...of
 - for...in *（读取对象或数组的key值）*
    ```js
        var arr = [1, 9, 6, 7]
        var obj = {
            name: 'heshiyu'
        }

        for (var i in arr) {
            console.log(i)
        }
        // 依次输出：0 1 2 3

        for (var i in obj) {
            console.log(i)
        }
        // name
    ```
 - for...of *（读取数组的value值，且只能遍历部署了Iterator接口的数据）*
    ```js
        var arr = [1, 9, 6, 7]
        var obj = {
            name: 'heshiyu'
        }

        for (var i of arr) {
            console.log(i)
        }
        // 依次输出：1 9 6 7

        for (var i of obj) {
            console.log(i)
        }
        // error
    ```
因为`for...of`循环本质上是**调用Iterator接口产生的遍历器**，所以它只适用于`部署了Iterator接口`的数据（例如：数组、字符串、Set、Map、arguments、NodeList等）
> 普通对象没有部署Iterator接口
 
## Math.floor、parseInt
 相同：都能实现数字的向下取整

 不同：
 ```js
    // Math.floor 不能解析（非纯数字的）字符串
    Math.floor(0.89) // 0
    Math.floor("3") // 3
    Math.floor("760px") // NaN

    // parseInt不能解析（非数字开头的）字符串
    parseInt(0.89) // 0
    parseInt("3") // 3
    parseInt("760px") // 760
 ```

## this的指向
 `this`是运行时基于函数的执行环境所决定的。

 - 作为 **函数调用**，this指向window（非严格模式）；this指向undefined（严格模式）
 - 在 **构造函数里调用**，this指向新创建的对象
 - 作为 **某对象方法调用**，this指向该对象。
 - 使用call、apply、bind可以 **改变this指向**
 - 箭头函数 **没有自己的this** ，它指向箭头函数 **定义时外层函数所在的对象**

 ### 闭包里this的作用域

 ## Ajax
 原理：
  - 实例化一个`XMLHttpRequest`对象
  - 设置回调函数`onreadystatechange`
  - 使用`open`、`setRequestHeader`、`send`结合发送请求

  其中`xhr.readyState`有如下5种状态：
   - 0：open未调用
   - 1：open已调用
   - 2：接收到头信息
   - 3：接收到响应主体
     - 根据响应的MIME类型，把数据转换成能通过responseBody、responseText或responseXML属性存取的格式
   - 4：响应完成

 ```js
    var url = 'http://www.api.com/checkLogin'
    var xhr = new XMLHttpRequest() // 或ActiveXObject

    xhr.open('GET', url, true) // true表明该请求是异步的
    xhr.setRequestHeader('x-from', 'pc')

    xhr.onreadystatechange = function(res) {
        if (xhr.readyState == 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.response)
            if (response.success == false) {
                alert('您的账号暂无权限，请先注册~')
            } else if (response.success == true) {
                location.href = '/index/0'
            }
        }
    }

    xhr.withCredentials = true
    xhr.send()
 ```

## DOM绑定事件的三种方式
  - 【HTML 事件处理】在DOM元素上直接绑定
    ```html
    <div onclick="test()"></div>
    ```

  - 【DOM 0级事件处理】在JavaScript代码中绑定
    ```js
    document.getElementById('myID').onclick = function() {
        // ...
    }
    ```
  - 【DOM 2级事件处理】绑定事件监听函数
    ```js
    element.addEventListener(type, handle, useCapture)
    // 第一个参数：事件名称
    // 第二个参数：事件处理函数
    // 第三个参数：是否使用捕获（默认false，即事件冒泡）
    ```

## 三种事件流模型
  - IE的事件冒泡
  - Netscape的事件捕获
  - DOM的事件流
    - DOM 2级事件规定，事件流包括三个阶段：`事件捕获`、`目标阶段`、`事件冒泡`

## target、currentTarget
  - event.target：返回的是`触发事件`的元素
  - event.currentTarget：返回的是`绑定事件`的元素
 
## 检测变量类型
（待补）
- 方法一：
 `Object.prototype.toString.call(obj)`
 
 原因：`Array`、`function`是Object的实例，都重写了toString方法。根据原型链，直接调用的话，是对应的重写之后的toString方法，而不会去调用Object上原型的toString方法

 ```js
 Object.prototype.toString.call([]) // [object array]
 ```
- 方法二：
```js
let arr = []
arr.constructor === Array // true
```

## script标签的加载规则
 默认情况下，浏览器**同步加载JavaScript脚本**。
 > **渲染引擎**遇到`<script>`标签就会把控制权交给**JS引擎**去执行脚本，执行完毕再把控制权交给**渲染引擎**，继续向下渲染

 当然，浏览器也**允许脚本异步加载**，下面是两种 **异步加载** 的语法：
 ```js
 <script src="path/to/myModule.js" defer></script>
 <script src="path/to/myModule.js" async></script>
 ```
前者（`defer`）指的是：当页面渲染完成，再执行；

后者（`async`）指的是：一旦下载完成，渲染引擎就中断渲染，**执行这个脚本之后** 再继续渲染。

另外，`defer`会按照它在页面中出现的顺序加载，`async`不能保证按顺序。

## 扩展运算符（...）、Object.assign()
 `扩展运算符（...）`和`Object.assign()`可以对一个对象A进行一层的拷贝：
 ```js
 {...obj2}
 
 // 等价于
 Object.assign({}, obj2)
 ```

 
 但如果对象A里面还包含子对象/子数组，那么这部分就只是`浅拷贝`！！
 

 > 深拷贝：拷贝的是`值的副本`
 > 
 > 浅拷贝：拷贝的是`值的引用`

```js
let o1 = { 
    name: 'I am o1',
    address: {
        province: 'gd',
        city: 'qy'
    }
}
let o4 = { ...o1 }

o4.name = 'I am o4'
console.log(o4)
console.log(o1)
// { name: 'I am o4', address: { province: 'gd', city: 'qy' } }
// { name: 'I am o1', address: { province: 'gd', city: 'qy' } }

o1.name = 'I am new o1'
o1.address.province = 'hz'
console.log(o4)
console.log(o1)
// { name: 'I am o4', address: { province: 'hz', city: 'qy' } }
// { name: 'I am new o1', address: { province: 'hz', city: 'qy' } }
```

### 项目中的错误示范
利用`扩展运算符（...）`拷贝的对象里的`子对象/子数组`是`浅拷贝`。
```js
// 有这么一个对象defaultStart
let defaultStart = {
    name: '',
    children: []
}

// 第一次对newData进行拷贝
let newData = { ...defaultStart }
newData.children.push(cInfo)

// 第二次对newData进行拷贝
let newData = { ...defaultStart }
newData.children.push(cInfo) // 注意！这时的children其实还是上次的children

// 清除children的解决办法：
// ① newData.children = []
// ② newData.children.length = 0
```

## 深拷贝
`若没有function`，可以使用：
```js
// 将对象进行序列化后，再反序列化。
// 缺点：会忽略函数function
JSON.parse(JSON.stringify(obj))
```

`若有function`，可以使用：
```js
export const deepClone = source => {
    if (!souce || typeof source !== 'object') {
        // 不是对象
        throw new Error('error arguments', 'shallowClone')
    }
    var targetObj = source.constructor === Array ? [] : {}
    for (var keys in source) {
        if(source.hasOwnProperty(keys)) {
            if(!source[keys] || typeof source[keys] !== 'object') {
                targetObj[keys] = source[keys]
            } else {
                targetObj[keys] = source[keys].constructor === Array ? [] : {}
                targetObj[keys] = deepClone(source[keys])
            }
        }
    }
    return targetObj
}
```

## 暂时性死区（TDZ）
> Temporal Dead Zone

let、const是块级作用域；var是函数作用域

 => 只要块级作用域存在let命令，它们就不能在被声明之前读或写。
 
 => 虽然这些变量始终“存在”于它们的作用域里，但在直到声明它的代码之前的区域都属于`暂时性死区`
```js
var tmp = 123

if (true) {
    tmp = 'hsy' // ReferenceError
    let tmp
}
```
上面代码中，虽然在全局变量有声明tmp的值是123，但是在`let tmp`所处的块级作用域中，let又声明了一个同名的局部变量tmp，导致了后面的这个tmp绑定了这个块级作用域。所以在这个区域中，**只要是提前使用了tmp，就会报错**。

 => 总之，在代码块内，使用let声明变量之前，该变量都是不可用的。这就是**暂时性死区**（temporal dead zone，简称TDZ）


## reduce()
```js
array.reduce(function(total, curVal, curIndex, arr) {
    // 用于执行每个数组元素的函数
}, initVal)
```
例子：
```js
let arr = [1, 2, 3]
arr.reduce((total, curVal) => (total + curVal), 10) // 16
```

## 函数的内部属性
### 函数内部属性一：arguments
`arguments`是一个类数组对象，包含着：**传入函数中的所有参数**、**callee属性**、**length属性**。

![alt](./img/Argument-1.png)
 - `传入的参数`：
    - `argument[0]`、`argument[1]`...去获取对应位置传入的参数
    - 若在函数体里利用`argument[x]`修改 **对应位置x传入的参数** 的值，会同步在后续中对应位置x传入参数
    ![alt](./img/Argument-2.png)
 - `length属性`：返回 **实际传入参数的个数**
 - `callee属性`：是一个引用，指向 **当前所执行的函数**
    - 在`'use strict'`下，该callee属性会被禁用
```js
// 不足：函数的执行 与 函数名 紧密耦合。因为函数名最好别改，改了就会连同下面return的factorial也要改
function factorial(num) {
    if (num < 1) {
        return 1
    } else {
        return num * factorial(num - 1)
        // return num * arguments.callee(num - 1)
    }
}
// arguments.callee优势，可以消除上面提到的紧密耦合
```
注意：通过 **函数声明** 来定义函数的效果 和 直接通过 **函数表达式** 来定义函数的效果，是`一样`的，（`函数名` 实际上也是一个 `指向函数对象的指针`）。
```js
var factorial = function(num) { ... }
```

```js
// 改用arguments.callee后
var trueFactorial = factorial

factorial = function() { // 切断了 变量factorial 和 函数对象的联系
    return 0
}

trueFactorial(5) // 120
factorial(5) // 0
```
### 函数内部属性二：特殊对象this
`this`指向的是：函数执行的环境对象（若在全局中，this的值是`window`）
```js
var color = 'red'
var o = {
    color: 'blue'
}

function sayColor() {
    console.log(this.color) // 调用函数前，this的值并不确定。在执行过程中确定。
}

sayColor() // 'red'，因为在全局作用域


o.sayColor = sayColor
o.sayColor() // 'blue'，因为是在对象o的作用域
```
> `函数名` 实际上是一个 `指向函数对象的指针`，所以这里`o.sayColor = sayColor`之后，即使在不同环境执行，全局的`sayColor`函数与`o.sayColor`函数指向的仍然是同一个函数。

### 函数内部属性三：caller
`caller`指向的是 **调用当前函数的父函数引用**（若在全局中调用当前函数，caller的值是`null`）

> 使用：函数名.caller

也可以通过`arguments.callee.caller`，是一样的效果

```js
function outer() {
    inner()
}

function inner() {
    console.log(inner.caller) // 显示outer的源码
}
outer()
```
## 事件处理函数和默认行为的执行顺序
大多数情况下，是先执行**事件处理函数**，再执行**默认行为**。

> 理由：可以通过事件处理函数中，去阻止默认行为

也有例外：
 - checkbox的**事件默认行为会先执行**。如果一旦阻止了默认行为，就会**恢复到执行默认行为之前的状态**（用户无感知）

## for...in、Object.keys()、Object.getOwnPropertyNames()
for...in是遍历对象中的`所有可枚举属性`（包括自有属性和继承属性）

Object.keys()：返回一个数组，数组里是对象中`所有可枚举的自有属性`的名称

Object.getOwnPropertyNames()：返回一个数组，数组里是对象中`所有的自有属性`（不管是否可枚举）

## 计算随机数0-5、95-99
```js
Math.random() // [0, 1)之间的浮点数
Math.random() * 10 // [0, 10)之间的浮点数

// 0-5
Math.floor(Math.random() * 6) // [0, 6)之间的整数，向下取整

// 95-99
Math.floor(Math.random() * 5 + 95) // [95, 100)之间的整数，向下取整
```

## 柯里化
柯里化是一种采用了**高阶函数**的**函数式编程技巧**。

 - 先传递一部分参数给指定函数
 - 这个函数会返回另外一个函数
 - 由被返回的函数去处理剩下的参数

 ```js
 add(1)(2)(3).valueOf() // 6

 function add() {
    // 定义一个数组专门存储所有参数
    // var _args = Array.prototype.slice.call(arguments)
    var _args = [...arguments]

    // 在内部声明一个函数，利用闭包的特性来保存
    var _adder = function() {
        _args.push(...arguments)
        return _adder
    }

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.valueOf = function() {
        return _args.reduce(function(a, b) {
            return a + b
        })
    }

    return _adder
 }
 ```

 好处：
 - 参数复用
 - 提前返回
    ```js
    // before
    var addEvent = function(el, type, fn, capture) {
        if (window.addEventListener) {
            el.addEventListener(type, function(e) {
                fn.call(el, e)
            }, capture)
        } else if(window.attachEvent) {
            el.attachEvent('on' + type, function(e) {
                fn.call(el, e)
            })
        }
    }

    // after
    var addEvent = (function() {
        if (window.addEventListener) {
            return function(el, sType, fn, capture) {
                el.addEventListener(sType, function(e) {
                    fn.call(el, e)
                }, capture)
            }
        } else if (window.attachEvent) {
            return function(el, sType, fn, capture) {
                el.attachEvent('on' + sType, function(e) {
                    fn.call(el, e)
                })
            }
        }
    })()
    ```
 - 延迟运行


## ES6新数据结构Set、Map
### Set
Set类似于**数组**，特点是里面的`值是唯一`的（即不会出现重复）、且`遍历顺序就是插入顺序`。
```js
// 新建一个Set结构
var set = new Set(['贺世宇', '作者'])
```

它有两个实例属性：
 - constructor
 - size

它有4个操作方法、4个遍历方法
 - 操作：
    - add(value)
    - delete(value)
    - has(value)
    - clear()

 - 遍历：
    - keys() //由于Set没有键值，那么键名===键值
    - values()
    - entries()
    - forEach() // 接受第二个参数，用于绑定this

用处：`去除数组中重复成员`：
```js
var arr = [1, 3, 3, 5]

// 方法一：
var s = new Set()
arr.forEach(x => s.add(x))
var brr = Array.from(s)

// 方法二：
var crr = [...new Set(arr)]

```
### Map
Map类似于**对象**，也是键值对集合。特点是里面的`键（key）不仅限于字符串`、且`遍历顺序就是插入顺序`。**（可保证键值唯一）**

![alt](./img/Map-1.png)

```js
// 新建一个Map结构
var map = new Map([
    ['name', '贺世宇'],
    ['title', '作者']
])

// 
```

它有实例属性：
 - size

它有5个操作方法、4个遍历方法：
 - 操作
    - set(key, value) // 返回最新Map，所以可以链式调用
    - get(key)
    - has(key)
    - delete(key)
    - clear()

 - 遍历
    - keys() // 注意，无参数
    - values() // 注意，无参数
    - entries() // 注意，无参数
    - forEach() // 第一个参数是迭代函数（val, key, map），接受第二个参数，用于绑定this

和**普通对象**的区别：
 - key的类型：
    - 
| | Map | 普通对象 |
|--|--|--|
| key的类型 | 任意类型 | 只能是字符串 |
| keys() | 变量.keys() | Object.keys(obj) |
| 遍历顺序 | 插入顺序 | 对象散列结构，无顺序

和**WeakMap**的区别：
 - Map里的键可以是任何类型，但WeakMap里的键**只能是对象引用**
 - WeakMap不能包含无引用对象，否则会被自动清除出集合（垃圾回收机制）
 - WeakMap对象不可枚举
```js
const weakmap = new WeakMap();
let keyObject = { id: 1 };
const valObject = { score: 100 };

weakmap.set(keyObject, valObject);
console.log(weakmap.get(keyObject)); // { score: 100 }

keyObject = null; // 将这个对象置为null，无人引用
console.log(weakmap.has(keyObject)); // false
```

## ==和===的区别
`==`（相等）和`===`（恒等）的区别，前者`会进行类型转换（1）`再对`值进行比较（2）`；后者`值进行比较（1）`，`再进行类型转换（2）`。

## JS的继承
 - 原型链
    - 原理：1、先创建子类的实例对象this；2、再将父类的方法添加到this上
 - Class的extends
    - 原理：1、先创建父类的实例对象（调用super）；2、通过子类的构造函数修改this

### 组合继承：

组合`原型继承、借用构造函数`，使得实例化的对象具有各自的实例属性（方法），也有公用的原型属性（方法）。

```js
function Person() {
    this.skin = true
}
function Student(name) {
    this.name = name
    Person.call(this)
}

Student.prototype = new Person() // 此时Student.prototype被重写了，变成Student.prototype === Person
Student.prototype.constructor = Student // 将原型对象上的constructor重新指向Student构造函数

var stu = new Student('heshiyu')
```

## 垃圾回收机制
JS垃圾回收机制：
 - 标记清除
    -  **垃圾收集器** 会给内存中的所有变量加上标记。然后会去掉 **环境中的变量**、**被环境中变量引用的** 标记。此后，如果还有标记的，就视为**准备删除的变量**。

 - 引用计数
    -  跟踪每个值**被引用的次数**。当声明一个变量，并将一个引用类型赋值给变量时，这个值的引用次数为1。相反，如果取消引用换成别的值了，那这个值就-1。垃圾收集器下次运行时，会释放那些引用次数为0的值所占的内存。

## toString()、valueOf()
所有对象（**undefined、null除外**）都继承了这两个转换方法：
 - toString()：返回对象的字符串表示
 - valueOf()：返回对象的字符串、数值或布尔值表示

```js
var a = 3,
    b = '3',
    c = true,
    d = { test: '123', example: 123 },
    e = function(){ console.log('example') },
    f = ['test', 'example']

a.toString() // '3'
b.toString() // '3'
c.toString() // 'true'
d.toString() // '[object Object]'
e.toString() // function(){ console.log('example') }
f.toString() // 'text,example'。相当于arr.join(',')

a.valueOf() // 3
b.valueOf() // '3'
c.valueOf() // true
d.valueOf() // {test: "123", example: 123}
e.valueOf() // function(){ console.log('example') }
f.valueOf() // ['test', 'example']
```

## 类数组对象、可遍历对象
从`普通数组`开始说起：
```js
// 当我们对一个普通数组进行 扩展运算符 展开时，可正常展开
console.log(...[1, 2]); // 1 2
```

但 `对象` 是不行的：
```js
console.log(...{ name: 'heshiyu', age: 21 }); // Uncaught TypeError: Found non-callable @@iterator
```
因为对象没有部署`Iterator`接口。

### 类数组对象
**类数组对象** 指的是：
 - 具有 `length属性`
 - 除了`length`，**其余key值都为“下标”**
> 之所以提到 `length` ，是因为让人容易联想到 `array.length`

```js
var objLikeArr = {
    0: 1,
    1: 2,
    length: 2
}

// 对象没有部署Iterator接口，无法展开
console.log(...objLikeArr) // Uncaught TypeError: Found non-callable @@iterator
```

#### 如何展开类数组对象？
思想：**先转换成可遍历对象，再展开**。
```js
// 方法一：通过 `Array.from()` 对它转换后，再进行展开：
console.log(...Array.from(objLikeArr)) // 1 2

// 方法二：通过 `Array.prototype.slice.call()` 对它转换后，再进行展开：
console.log(...Array.prototype.slice.call(objLikeArr)) // 1 2
```

### 可遍历对象
**可遍历对象** 指的是：
 - 部署了 `Iterator` 接口
> 如：Array、Map、Set、String、函数的arguments对象、NodeList对象

也就是普通的情况，展开可遍历对象的方式：
 - 扩展运算符（...)
 - Array.from()


## [ ].find()、[ ].findIndex()和[ ].filter()
```js
[1, 3, 5, 8].find(x => x > 3)
// 5

[1, 3, 5, 8].findIndex(x => x > 3)
// 2

[1, 3, 5, 8].filter(x => x > 3)
// [5, 8]
```

## 判断对象是否为空对象
```js
// way1: 将对象序列化成字符串
if (JSON.stringify(obj) === '{}') {

}

// way2:
if (!Object.keys(obj).length) {

}
```

## Object.defineProperty
> 详细定义对象

### 通过Object.defineProperty给对象添加属性
 对象里的属性并不只有`属性名`和`属性值`那么简单。

`Object.defineProperty(obj, prop, descriptor)`

其中，第三个参数`descriptor`（描述符）可以分为：
  - 数据描述符
  - 访问器描述符

 | | configurable | enumerable | value | writable | get | set |
 | - | - | - | - | - | - | - |
 | 数据描述符 | √ | √ | √ | √ | × | × |
 | 访问器描述符 | √ | √ | × | × | √ | √ |

  - 如果一个描述符不具有`value、writable、get、set`任何一个关键字，那就默认是`数据描述符`。
  - 当描述符省略了字段的规则：configurable、enumerable、writable（默认false）；value、get、set（默认为undefined）
  - 使用`直接赋值`的方式创建对象的属性，enumerable为true

#### writable
能否 **修改** 对象里的这个属性。
> writable属性若为fasle，则不能修改对象里的这个属性。（不会报错，但值也不会变）
```js
var o = {} // Creates a new object

Object.defineProperty(o, 'a', {
  value: 37,
  writable: false
})

o.a = 25 // 不会报错，但值也不会变
```

#### enumerable
能否 **枚举** 对象里的这个属性。
> enumerable属性若为false,则不能再`for...in`或`Object.keys()`中被枚举。
```js
var o = {}
Object.defineProperty(o, "a", { value : 1, enumerable:true })
Object.defineProperty(o, "b", { value : 2, enumerable:false })
Object.defineProperty(o, "c", { value : 3 }) // 省略了指enumerable，默认false
o.e = 4 // 如果使用直接赋值的方式创建对象里的属性，则这个属性的enumerable为true

for (var i in o) {
    console.log(i)
}
// 'a' 'e'
```

#### configurable
能否 **删除** 对象里的这个属性。
> configurable属性若为false，则表示：1、该对象里的这个属性不能被删除；2、除了`value`、`writable`以外的其他特性能否被修改。
```js
var o = {}
Object.defineProperty(o, 'a', {
    get() {
        return 1
    },
    configurable: false
})
delete o.a // 返回false,删除不成功
```

 [configurable、enumerable和writable](http://www.softwhy.com/article-9359-1.html)


## var和const的区别
**var** 是函数作用域。
 > 值可以修改，允许变量提升，允许多次定义；

**const** 是块级作用域。
 > 值不可以修改，存在暂时性死区，不允许多次定义；

## with函数
`with`函数可以将某个对象添加到作用域链的顶部

```js
var obj = {
    name: 'heshiyu',
    age: 24
}

function fn1() {
    with(obj) {
        console.log(name, age)
    }
}

fn1() // 'heshiyu', 24
```

