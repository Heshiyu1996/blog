# 其他
> 这里会搜集一些有关JS的零碎知识

[[toc]]

## JS数据类型
基本数据类型：string、number、boolean、undefined、null、Symbol

引用数据类型：object

### null和undefined的区别
null表示“没有对象”，不应该有值；

undefined表示“缺少值”，应该有值，但未赋值。

## 可变（Mutable）和不可变（Immutable）对象的区别
### 可变对象：
频繁地修改对象时，都是在原对象基础上修改，并不需要重新创建。（如：React中的ref）
> 这样就可以有效地利用内存，不会造成内存空间的浪费。

### 不可变对象：
每次修改 不可变对象（immutable） 时的都会创建一个新的不可变对象。
> 在新对象上的操作不影响到原对象的数据。

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

### 练习
求：p 的原型链

```js
function Parent(){}
var p = new Parent()
```



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

 `函数节流`（throttle）是指：**在给定的时间窗口内，函数的调用不能超过 1 次。**

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
 
 特点：
   - `call`：**返回函数结果**。只能一个参数一个参数传
   - `apply`：**返回函数结果**。只支持传一个数组（`arguments`）
   - `bind`：**返回新函数**。只能一个参数一个参数传

### 用法
```js
var x = 2020
var fn = function (num1, num2)  {
    console.log(this.x, num1, num2)
}
var arrowFn = (num1, num2) => {
    console.log(this.x, num1, num2)
}
var obj = {
    x: 1996
}

fn.call(this, 1, 2) // 2020 1 2
fn.call(obj, 1, 2) // 1996 1 2
arrowFn.call(obj, 1, 2) // 2020 1 2 （箭头函数）

fn.apply(this, [1, 2]) // 2020 1 2
fn.apply(obj, [1, 2]) // 1996 1 2
arrowFn.apply(obj, [1, 2]) // 2020 1 2（箭头函数）

let newFunc1 = fn.bind(this, 1, 2)
newFunc1() // 2020 1 2
let newFunc2 = fn.bind(obj, 1, 2)
newFunc2() // 1996 1 2
let newFunc3 = arrowFn.bind(obj, 1, 2)
newFunc3() // 2020 1 2（箭头函数）
```
> 注意： 箭头函数里的this，在定义时就会确定了（为外层的this）

### 实现call
将`myCall`方法绑定在每个函数的原型（`prototype`）上
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
     // 这里的this指的是：调用myCall的函数（即下方示例的fn）
     obj._fn_ = this
     // 2、支持`传入参数`
     // 这样就可以看作是在obj对象下，执行的fn
     result = obj._fn_(...arg)
     delete obj._fn_
     return result // 3、利用变量保存函数的返回值
 }
 ```
 调用`myCall`：
 ```js
 var obj = {
    x: 1996
}
var fn = function ()  {
    return this.x
}

fn.myCall(obj); // 改变调用fn方法时的this指向为obj
 ```

### 实现apply
 ```js
 // 注意：apply的第二个参数是一个数组
 Function.prototype.myApply = function(obj, arr) {
     return this.myCall(obj, ...arr)
 }
 ```
### 实现bind
 ```js
 Function.prototype.myBind = function(obj, ...arg) {
     // 可能调用新函数时还会传入参数（会接在原来的参数后面）
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

## new操作符的原理
```js
let obj = new Parent();
```

原理：
```js
// 1. 创建一个空对象
let obj = {};

// 2. 让 空对象的原型 指向 构造函数（Parent） 的原型对象
obj.__proto__ = Parent.prototype;

// 3. 调用 call，让 构造函数 的this 指向 这个空对象，执行构造函数，返回新对象
Parent.call(obj);
```

## window对象和document对象的区别
 `window`对象表示：浏览器中打开的窗口；

 `document`对象表示：当前页面；它是`window`下的一个对象属性


## var、let、const
3 个方面存在区别： **作用域**、**变量提升**、**能否修改**。

|       | 作用域 | 变量提升 | 可修改 |
| ----- |:---|:---|:---|
| var   | **函数作用域**<br/>  - 在 函数内部，声明为 “局部变量” <br/> - 在 函数外部，声明为 “全局变量”（会挂在`window`上）| 声明前就可以用，但值为 `undefined` | √ |
| let   | **块级作用域**<br/> 仅在 块级内部有效 | **不存在**，会提示不能在声明前使用 | √ |
| const | **块级作用域**<br/> 仅在 块级内部有效 | **不存在**，会提示不能在声明前使用 | × |
| 不使用声明符 | **全局作用域**<br/> | **不存在**，会提示变量未定义 | √ |


### 作用域
<!-- **var** 是函数作用域。
 - 在 函数内部，它会声明出 “局部变量”
 - 在 函数外部，它会声明出 “全局变量”（会挂在`window`上） -->
<!-- 
**let**、**const** 是块级作用域。
 - 声明的变量，仅在 块级内部有效 -->

```js
// var：函数作用域（在函数内部都有效）
(function letTest() {
  var y = 1;
  {
    var y = 2;  // 与“块外”且“函数内”的y，是相同的变量
    console.log(y);  // 2
  }
  console.log(y);  // 2
})()

// let、const：块级作用域（仅在块级内有效）
(function letTest() {
  const x = 1;
  {
    const x = 2;  // 不同的变量
    console.log(x);  // 2
  }
  console.log(x);  // 1
})()
```

### 变量提升
**var** 存在变量提升：在声明前就可以用，但值为undefined。

**let**、**const** 不存在变量提升。

```js
// var声明：存在变量提升，但未undefined
(function fn () {
    console.log(typeof name1, name1); // 'undefined' undefined

    var name1 = 1;
})()

// let声明，不存在变量提升（const是一样的error）
(function fn () {
    console.log(typeof name2, name2); // Uncaught ReferenceError: Cannot access 'name2' before initialization

    let name2 = 1;
})()
```

### 练习
#### 利用setTimeout输出当前的 i
现象：
 - var定义：i 均为 最后一个数
 - let定义：i 均为 正确的数
```js
// 使用 var 定义
for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i) // 10 10 10 10 10
    }, 100 * i)
}
```

```js
// 使用 let 定义
for (let i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i) // 0 1 2 3 4 ...
    }, 100 * i)
}
```

原因：
 - `setTimeout`是在 **下一轮事件循环开始时** 触发
 - `let`在循环体内会创建一个**新的块级作用域**

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
        - `sort((a, b) => a - b)` // 升序（例子：[1, 2, 3]），这里的function不能直接返回boolean
    - 不传参数：按照`字符编码的顺序`进行排序
 - reverse()

### 非变异方法
 - slice()
    - 参数1：起始下标，闭区间
    - 参数2：终止下标，开区间（不指定，就是后面所有）
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

### 其它
 - indexOf
    - 参数：目标元素
    - 返回：第一个目标元素下标，若找不到返回`-1`

 - findIndex
    - 参数：(item) => item === xxx
    - 返回：满足函数的第一个值的下标


## 数组去重
以下两种方法，对于**字符串、数字**皆可。

方法一：（利用对象属性）
```js
function func1(arr) {
    let map = {}
    // 从后向前遍历，以便于 arr.splice 不影响前面的元素
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

## for...in、Object.keys、for...of
### 枚举key值
 - for...in（包括“自有属性”、“继承属性”）
 - Object.keys（仅“自有属性”）
    ```js
        // for...in

        let name = 'heshiyu'
        for (let i in name) {
            console.log(i) // 依次输出: 0 1 2
        }

        let arr = [1, 9, 6, 7]
        for (let i in arr) {
            console.log(i) // 依次输出：0 1 2 3
        }

        let obj = {
            name: 'heshiyu'
        }
        for (let i in obj) {
            console.log(i) // 依次输出：name
        }
    ```

### 枚举value值
 - for...of *（读取数组的value值）*
    > 只能遍历 “部署了Iterator接口的数据”
    ```js
        let name = 'heshiyu'
        for (let i of arr) {
            console.log(i) // 依次输出：h e s h i y u
        }

        let arr = [1, 9, 6, 7]
        for (let i of arr) {
            console.log(i) // 依次输出：1 9 6 7
        }

        let obj = {
            name: 'heshiyu'
        }
        for (let i of obj) {
            console.log(i) // error
        }
        // 原因：普通对象没有部署Iterator接口
    ```
因为`for...of`循环本质上是**调用Iterator接口下的遍历器**，所以它只适用于部署了 **Iterator接口的数据**
> （例如：数组、字符串、Set、Map、arguments、NodeList等）

> 类似地，Object.getOwnPropertyNames()：返回一个数组，数组里是对象中`所有自有`属性（不管是否可枚举）
 
## Math.floor、parseInt
 相同：都能实现数字的 **向下取整**

 不同：
 ```js
    Math.floor(0.89) // 0
    Math.floor("3") // 3
    // Math.floor 不能解析 非纯数字的 字符串
    Math.floor("760px") // NaN

    parseInt(0.89) // 0
    parseInt("3") // 3
    parseInt("760px") // 760
 ```

## this的指向

“`this`的指向” 可以分为 2 种情况：非箭头函数、箭头函数。
> “this指向” 一般讨论的是 “函数内部this的指向”

### 非箭头函数
非箭头函数内的 `this指向` 取决于 **函数被调用时的上下文环境**。

常见的几种情况：全局函数内、构造函数内、对象方法内。

 - 在 **全局函数** 内，this指向`window`（非严格模式）；this指向`undefined`（严格模式）
```js
    function func1 () {
        console.log(this); // `window`
    }
    func1();
```

 - 在 **构造函数** 内，this 指向 **新创建的对象**
```js
    class Person() {
        this.name = 'heshiyu';
    }
```

 - 在 **对象的方法** 内，this 指向 **该对象**（可通过call、apply、bind可以改变`this`指向）。

```js
    let obj = {
        say() {
            console.log(this);
        },
        baseSay: () => {
            console.log(this);
        }
    }
    let fakeObj = {
        name: 1
    };

    obj.say(); // obj
    obj.say.call(fakeObj); // fakeObj

    obj.baseSay(); // window（指向“箭头函数在定义时的外层函数/对象”它所在的对象）
    obj.baseSay.call(fakeObj); // window（call无法改变箭头函数this指向）
```

### 箭头函数
**箭头函数**，不会创建自己的 this，它只会从自己的作用域链的上一层继承 this。

例子：https://juejin.cn/post/6844903573428371464

```javascript
function fn0() {
    return {
        fn1: function () {
            var obj = {
                a: function() { console.log(this) },
                b: {
                    c: () => console.log(this)
                }
            }
            return obj;
        }
    }
}
fn0().fn1().b.c() // 得到的{fn1: f}对象
```

## this绑定规则的优先级
优先级：**new绑定 > 显式绑定 > 隐式绑定 > 默认绑定**

### 4种绑定
 - **默认绑定**：此时this指向全局对象（若在严格模式下，this指向undefind）
 - **隐式绑定**：此时this指向当前对象
 - **显式绑定**：此时this指向`call`、`apply`、`bind`指定的对象
 - **new绑定**：此时this指向新对象

```js
var name = 'hehe'

function fn() {
    console.log(this.name);
}

var obj1 = {
    name: 'heshiyu',
    fn: fn
}

var obj2 = {
    name: 'huangxiaoming',
    fn: fn
}

fn(); // 'hehe'，属于“默认绑定”。此时this指向`Window`（严格模式下为undefind）
obj1.fn(); // 'heshiyu'，属于“隐式绑定”。此时this指向obj1对象
obj1.fn.call(obj2); // 'huangxiaoming'，属于“显式绑定”。此时this指向obj2对象
```


### 练一练
```js
const obj1 = {
 name: "obj1",
 say() {
   console.log(this.name);
 }
};
const obj2 = { name: "obj2" };
const obj3 = { name: "obj3" };
obj1.say();
obj2.say = obj1.say;
obj2.say(); 
obj3.say = obj1.say.bind(obj2);
obj3.say(); 
const func = obj1.say;
func();
```

答案：
```js
obj1.say() // 'obj1'。隐式绑定。this指向obj1

obj2.say() // 'obj2'。因为 非箭头函数this指向由执行环境 决定，此时可理解为 obj2的隐式绑定，所以this指向obj2

obj3.say() // 'obj2'。bind改变了this指向为obj2，属于“显式绑定” > “隐式绑定”

func() // 'undefined'。默认绑定。this指向全局。（若为严格模式，this指向undefined，会报错找不到name属性）
```


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

## script标签的加载规则
 <!-- > **渲染引擎**遇到`<script>`标签就会把控制权交给**JS引擎**去执行脚本，执行完毕再把控制权交给**渲染引擎**，继续向下渲染 -->
 
 js脚本可分为 **“加载”、“执行”** 两阶段。
 
 其中，**“加载” 阶段** 可以支持异步：
 ```js
// （默认）同步加载，会阻塞DOM渲染
 <script></script>

 // 异步加载。页面加载完后执行
 <script src="./test.js" defer></script>

 // 异步加载。js脚本加载完后立即执行（JS引擎会抢占执行权）
 <script src="./test.js" async></script>
 ```

![alt](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5621228646/44e5/62ec/1441/570e80c035d2087cf6c9e30ed8c08560.png)

 - `defer` 会按照它在页面中出现的顺序加载
 - `async` 不能保证按顺序

## 扩展运算符（...）、Object.assign()
对象浅拷贝：
 - 扩展运算符（...）
 - Object.assign()
 ```js
 {...obj2}
 
 Object.assign({}, obj2)
 ```
 **浅拷贝**拷贝的是`值的引用`，**深拷贝**拷贝的是`值的副本`。

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

### 堆、栈区别

## 深拷贝
若被拷贝的对象内没有 `function` 属性，可以使用：
```js
// 先序列化，再反序列化。
JSON.parse(JSON.stringify(obj))
```

或者 **使用递归**：
```js
// 时间复杂度: O(nlogn)
// for(O(n))内有递归(O(logn))
let deepClone = (source) => {
    // 若不是引用类型，直接返回本身
    if (!source || typeof source !== 'object') {
        return source;
    }
    
    // 要拷贝的引用类型是“数组”，还是“对象”
    let targetObj = Array.isArray(source) ? [] : {};

    // 遍历key
    // for...in可遍历出: “自有属性”、“继承属性”
    for (let key in source) {
        // 若当前key值不是自有属性，直接跳过
        if (!source.hasOwnProperty(key)) continue;
        
        // 若当前key值对应的值不是引用类型
        if (!source[key] || typeof source[key] !== 'object') {
            targetObj[key] = source[key];
        } else {
            targetObj[key] = deepClone(source[key]);
        }
    }

    return targetObj;
};
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
`arguments`是一个类数组对象，包含着：
 - **传入函数中的所有参数**
 - **callee属性**
 - **length属性**

![alt](./img/Argument-1.png)
 - `传入的参数`：
    - `argument[0]`、`argument[1]`...去获取对应位置传入的参数
    - 若在函数体里利用`argument[x]`修改 **对应位置x传入的参数** 的值，会同步在后续中对应位置x传入参数
    ![alt](./img/Argument-2.png)
 - `length属性`：返回 **实际传入参数的个数**
 - `callee属性`：是一个引用，指向 **当前所执行的函数**
> 在`'use strict'`下，该callee属性会被禁用
```js
// 不足：函数的执行 与 函数名 紧密耦合。
// 因为函数名一旦修改，就会连同下面 return的factorial 也要改
function factorial(num) {
    if (num < 1) {
        return 1
    } else {
        return num * factorial(num - 1)
        // 改成这样就不用担心“函数改名”问题了
        // return num * arguments.callee(num - 1)
    }
}
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
>
> **函数声明** 定义的函数、直接通过 **函数表达式** 定义的函数，效果是一样的（`函数名` 实际上是一个 `指向函数对象的指针`）。

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

> 因为可以通过 “事件处理函数” 去阻止“默认行为”

也有例外：
 - checkbox的**事件默认行为会先执行**。如果一旦阻止了默认行为，就会**恢复到执行默认行为之前的状态**（用户无感知）

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

实例属性：
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

用处：**对数组去重**：
```js
var arr = [1, 3, 3, 5]

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

实例属性：
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
| | Map | 普通对象 |
|--|--|--|
| key的类型 | 任意类型 | 只能是字符串 |
| 遍历key值 | 变量.keys() | Object.keys(obj) |
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

### 遍历value值（for...of）
对于`Map对象`，如果需要遍历`value`时，可以使用`map.entries()`：
```js
var map = new Map();

map.set(7, [7]);
// Map(1) {7 => Array(1)}

map.set(19, [19]);
// Map(2) {7 => Array(1), 19 => Array(1)}

// 使用`map.entries()`
for (let [key, value] of map.entries()) {
    console.log(value);
}
```

## ==和===的区别
`==`：先**类型转换**，再**比较值**；

`===`：先**比较值**，再**转换类型**。

## JS的继承
 - 原型链
    - 原理：1、先创建子类的实例对象this；2、再将父类的方法添加到this上
 - Class的extends
    - 原理：1、先创建父类的实例对象（调用super）；2、通过子类的构造函数修改this

### 组合继承：
组合`原型继承、借用构造函数`，使得 **实例化的对象** 具有：
 - 各自的实例属性/方法
 - 公用的原型属性/方法。

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

## JS垃圾回收机制
### 标记清除
原理：将 **仍拥有标记的变量** 清除。
> 主流浏览器都是使用 “标记清除”，只不过收集的间隔有所不同。
 - 先给内存中的所有变量加上标记
 - 然后会去掉：**环境中的变量**、**被环境中变量引用的** 的标记
 - “垃圾收集器”会将 **仍存在标记的变量** 进行清除。

### 引用计数
原理：将 **被引用的次数为0的堆内存** 清除。
 - 声明一个引用类型的变量时，对应堆内存的引用次数为1。
 - 相反，如果取消了引用，那 原来这块堆内存的值 就-1。
 - “垃圾收集器”会将 **引用次数为0的堆内存** 进行清除。

> 若存在循环引用，那这两个对象引用次数是2，永远不会被回收

## toString()、valueOf()
所有（**undefined、null除外**）都继承了这两个方法。

```js
var a = 3,
    b = '3',
    c = true,
    d = { test: '123', example: 123 },
    e = function(){ console.log('example') },
    f = ['test', 'example']

a.toString() // '3'（重写版）
b.toString() // '3'（重写版）
c.toString() // 'true'（重写版）
d.toString() // '[object Object]'
e.toString() // function(){ console.log('example') }（重写版）
f.toString() // 'text,example'。相当于arr.join(',')（重写版）

a.valueOf() // 3
b.valueOf() // '3'
c.valueOf() // true
d.valueOf() // {test: "123", example: 123}
e.valueOf() // function(){ console.log('example') }
f.valueOf() // ['test', 'example']
```


### toString()
返回"该对象的字符串表示"
 > 如果此方法在 “自定义对象中” 未被覆盖，toString() 返回 `"[object type]"`，其中 `type` 是对象的类型。
### 使用toString()检测对象类型
- 方法一：
 `Object.prototype.toString.call(obj)`
 
#### 为什么用`call`？
原因：`Number`、`String`、`Boolean`、`function`、`Array`是Object的实例，都重写了toString方法。根据原型链，直接调用的话，是对应的重写之后的`toString`，而不会去调用Object上原型的toString方法

```js
 Object.prototype.toString.call([]) // [object array]
```
- 方法二：
```js
let arr = []
arr.constructor === Array // true
```

### valueOf()
返回“该对象的原始值”
### 不同类型对象下valueOf()方法的返回值
| 对象 | 返回值 |
| -- | -- |
| String | 字符串 |
| Number | 数值 |
| Boolean | 布尔值 |
| Object | 对象本身 |
| Array | 返回数组的对象本身 |
| Date | 返回从 1970年 1 月 1 日午夜开始计的毫秒数 |
| Function | 函数本身 |

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
// 方法一：通过 `Array.prototype.slice.call()` 对它转换后，再进行展开：
console.log(...Array.prototype.slice.call(objLikeArr)) // 1 2

// 方法二：通过 `Array.from()` 对它转换后，再进行展开：
// `Array.from`除了可以对 `类数组对象` 进行转换成数组，
console.log(...Array.from(objLikeArr)) // 1 2
```

#### Array.from
`Array.from`也可以对 `NodeList` 、 `Set实例` 进行转换：
```js
// NodeList
Array.from(document.querySelectorAll('div'))

// Set实例
Array.from(new Set([1, 1, 3]))
```

### 可遍历对象
**可遍历对象** 指的是：
 - 部署了 `Iterator` 接口
> 如：Array、Map、Set、String、arguments对象、NodeList对象

展开可遍历对象的方式：
 - 扩展运算符（...)
 - ...Array.from()


## [ ].find()、[ ].findIndex()和[ ].filter()
```js
// find：找到符合条件的第一个元素
[1, 3, 5, 8].find(x => x > 3)
// 5

// findIndex：找到符合条件的第一个元素下标
[1, 3, 5, 8].findIndex(x => x > 3)
// 2

// filter：找到符合条件的子集
[1, 3, 5, 8].filter(x => x > 3)
// [5, 8]
```

## 判断对象是否为空对象{}
```js
// 方法一:
if (!Object.keys(obj).length) {}

// 方法二: 将对象序列化成字符串
if (JSON.stringify(obj) === '{}') {}
```

## Object.defineProperty
> 对象里的 属性值 并不只有 `值` 那么简单。

`Object.defineProperty`可以给对象添加属性，这个属性可以 **更定制化地** 去定义。

```js
Object.defineProperty(obj, key, descriptor)
```
 - **obj**: 被操作的对象
 - **key**: 要添加的 key 值
 - **descriptor**: 属性描述符，可以分为：
   - 数据描述符：不具有`writable`、`value`、`get`、`set`中的任何一个
   - 访问器描述符

 | | configurable | enumerable | writable | value | get | set |
 | - | - | - | - | - | - | - |
 | 默认值 | false | false | false | undefined | undefined | undefined |
 | 数据描述符 | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
 | 访问器描述符 | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ |

  - 描述符的默认值：
  ```js
    var o = {};

    // 省略了描述符
    // 效果：configurable、enumerable、writable（均为false）；
    // value、get、set（均为undefined）
    Object.defineProperty(o, 'a', {});
  ```
  - 使用`直接赋值`的方式创建对象的属性，enumerable为true

### writable（可修改性）
能否 **修改** 这个属性。
> 为 false 时进行值的修改，不会报错，但值也不会变

```js
var o = {}; // Creates a new object

Object.defineProperty(o, 'a', {
  value: 1,
  writable: false
});

o.a = 2; // 不会报错，但值也不会变
console.log(o.a); // 1
```

### enumerable（可枚举性）
能否 **枚举** 到这个属性。
> 若为false，则不能在 `for...in` 或 `Object.keys()` 中被枚举。

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

### configurable（可配置性）
- 能否 **删除** 这个属性
- 能否 操作这个属性的 **（除value、writable以外的）描述符** 。

```js
var o = {}
Object.defineProperty(o, 'a', {
    get() {
        return 1;
    },
    configurable: false
})
delete o.a // 返回false,删除不成功
```

 [configurable、enumerable和writable](http://www.softwhy.com/article-9359-1.html)

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


## scroll事件不能阻止冒泡
实例：弹出层的scroll滑到顶、底部会冒泡到外层的scroll

MDN：https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event

解决办法：
```js
componentDidMount() {
    document.body.style.overflow = 'hidden';
}
componentWillUnmount() {
    document.body.style.overflow = '';
}
```

## 向下、向上取整
`Math.ceil`: 向上

`Math.floor`: 向下

```js
let num = 1.1;

Math.ceil(num); // 2
Math.floor(num); // 1
```

## 尾递归
 - **尾调用** 是函数在 `return` 时 单纯调用 另一个函数
 - **尾递归** 是函数在 `return` 时 单纯调用 自身
 
（注意：单纯调用，指“不带别的操作”）

**特点：** **尾递归** 只会存一条调用记录，永远不会发生 **栈溢出**。
> 普通递归 非常耗费内存，因为需要同时保存 成千上百条 调用记录（容易发生“栈溢出”）。


### 改写成尾递归
**尾递归** 往往需要改写 递归 函数，确保最后一步 只调用自身 。
> 做法：把所有用到的 “内部变量” 改成 “函数的入参”。

```js
// 普通递归：最多需要保存 n 个调用记录。复杂度 O(n)
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}
factorial(5); // 120


// 尾递归：只保留一个调用记录。复杂度 O(1)
function factorial(n, total) {
    if (n === 1) return total;
    return factorial(n - 1, n * total);
}
factorial(5, 1); // 120


// 尾递归（更直观的形式）：
function tailFactorial(n ,total) {
    if (n === 1) return total;
    return tailFactorial(n - 1, n * total);
}
function factorial(n) {
    return tailFactorial(n, 1);
}
factorial(5); // 120
```

### 尾调用优化
**尾调用优化** 可以理解为，调用 `g(3)` 后，`函数f` 就结束了，所以执行到最后一步，完全可以删除 `f()` 的调用记录，只保留 `g(3)` 的调用记录。

ES6的 **尾调用优化** 只在 “严格模式” 下生效。
> 因为在 “严格模式”下， `arguments`、`caller`（返回调用当前函数的那个函数），会禁用这 2 个参数

```js
function f() {
  return g(3);
}
f();

// 等同于
g(3);
```

### 示例
将以下代码改成 **尾递归**。
```
要求：扁平化数组

输入：[a,[b,[c]]] 
[a,a,v]

输入：[[[[a]]], b, c]
输出：[a, b, c]
```
```js
// 普通递归：
function searchArr (arr) {
    let ans = [];
    
    const search = (list) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i].constructor !== Array) {
                ans.push(list[i]);
                continue;
            }
            search(list[i]);
        }
    }
    
    search(arr);

    console.log(ans);
    return ans;
}

searchArr(['a', ['b', ['c']]]);

// 尾递归：
function searchArr (arr, ans) {
    
    const search = (list, ans) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i].constructor !== Array) {
                ans.push(list[i]);
                continue;
            }
            return search(list[i], ans);
        }
        return ans;
    }
    
    return search(arr, ans);
}

searchArr(['a', ['b', ['c']]], []);
```
对于 “尾递归” 的例子，还可以看[二分查找](/skill/algorithm/search)

### 参考
 - [尾调用优化](https://www.ruanyifeng.com/blog/2015/04/tail-call.html)


## stopPropagation
```html
 <a id="entry-settle" class="creator-company" href="https://music.163.com/musician/company" target="_blank">
    <span id="mcnDetail" class="mcn-detail">
        查看详情
    </span>
</a>
```

```js
document.getElementById('mcnDetail').addEventListener("click", function(e) {
    // 通过 阻止冒泡 无法阻止 外层a标签 的跳转
    // 原因：a标签是通过href跳转，不是事件层面
    // 解决：针对 a标签也通过 监听click 进行跳转，才可以实现阻止冒泡泡
    e.stopPropagation();
    window.open('https://music.163.com/m/at/604721b6e9c3acc4f5eb4a9f')
});
```

## for vs forEach vs map
### 本质
- for：js刚提出时就有的循环方法
- forEach：ES5提出的、挂载在 **可迭代对象原型** 上的方法（如：Array、Set、Map、String）

### 功能性
- for：可以使用`break`、`continue`、`return`
- forEach：

### 性能
for > forEach > map
- 声明callback：forEach、map
- 生成新的数组：map

> 参考：https://juejin.cn/post/7018097650687803422#comment
