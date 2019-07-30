# Object.defineProperty
> 详细定义对象

[[toc]]

## 通过Object.defineProperty给对象添加属性
 对象里的属性并不只有`属性名`和`属性值`那么简单。

`Object.defineProperty(obj, prop, descriptor)`

其中，第三个参数`descriptor`（描述符）可以分为：
  - 数据描述符
  - 访问器描述符

 | | configurable | enumerable | value | writable | get | set |
 | - | - | - | - | - | - | - |
 | 数据描述符 | √ | √ | √ | √ | × | × |
 | 存取描述符 | √ | √ | × | × | √ | √ |

  - 如果一个描述符不具有`value、writable、get、set`任何一个关键字，那就默认是`数据描述符`。
  - 当描述符省略了字段，若为布尔值（默认false）；value、get、set（默认为undefined）
  - 使用`直接赋值`的方式创建对象的属性，enumerable为true

### writable
writable属性若为fasle，则不能修改对象的这个属性。（不会报错，但值也不会变）
```js
var o = {} // Creates a new object

Object.defineProperty(o, 'a', {
  value: 37,
  writable: false
})

o.a = 25 // 不会报错，但值也不会变
```

### enumerable
enumerable属性若为false,则不能再`for...in`或`Object.keys()`中被枚举。
```js
var o = {}
Object.defineProperty(o, "a", { value : 1, enumerable:true })
Object.defineProperty(o, "b", { value : 2, enumerable:false })
Object.defineProperty(o, "c", { value : 3 }) // 省略了指enumerable，默认false
o.d = 4 // 如果使用直接赋值的方式创建对象的属性，则这个属性的enumerable为true

for (var i in o) {
    console.log(i)
}
// 'a' 'b'
```

### configurable
configurable属性若为false，则表示：1、该对象的这个属性不能被删除；2、除了`value`、`wratable`以外的其他特性能否被修改。
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

 `数据描述符`具有4个描述其行为的特征：

 [configurable、enumerable和writable](http://www.softwhy.com/article-9359-1.html)
