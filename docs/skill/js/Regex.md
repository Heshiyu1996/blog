# JS正则表达式
> JS正则表达式

[[toc]]

## 创建正则表达式（两种方式）
  - 正则表达字面量
  ```js
  var reg = /ab+c/
  // 优点：可以让js解析器提高性能
  ```
  
  - 构造函数
  ```js
  var reg = new RegExp('ab+c')
  // 优点：在runtime时动态确定正则表达式，更灵活（即可引入变量）
  ```

## 修饰符
  - `i`：对大小写不敏感
  - `g`：执行全局匹配
  - `m`：执行多行匹配

## 常用的特殊字符
 ```js
 匹配任意字符：`.`（一般使用\s\S或者\w\W这两个组合的其中一个，这样才会一字不漏）
 匹配数量：`*`、`+`、`?`、`{n}`、`{n,}`、`{n,m}`
 匹配位置：`^`、`$`
 匹配条件：`|`
 匹配集合：`[]`
 匹配非集合：`[^]`

 `\d`：0-9之间的任意一个数字
 `\D`：除了\d

 `\w`：数字、字母、下划线（即0-9 a-z A-Z _）
 `\W`：除了`\w`

 `\s`：空白（包括空格、换行、tab缩进）
 `\S`：和`\s`相反
 ```

## js中和正则有关的所有方法
:::tip
`RegExp`
 - exec
 - test

`String`（注意，以下是字符串的方法）
 - match
 - replace
 - search
 - split
:::

### [RegExp]exec
 对string进行正则匹配，并返回匹配结果
 
 若正则表达式是 **全局匹配**：
 - 参数：string
 - 返回：[ '匹配结果' , '由括号括起来的小分组匹配值' , index , input]
 - （若需所有，执行white，结束标志为null）

```js
var regex = /h(s+)y/g; 
regex.exec('ahahsyhsssy')
// ["hsy", "s", index: 3, input: "ahahsyhsssy"] 

regex.exec('ahahsyhsssy')
// ["hsssy", "sss", index: 6, input: "ahahsyhsssy"] 

regex.exec('ahahsyhsssy')
// null 
```
 
 若正则表达式是 **非全局匹配**：
 - 参数：string
 - 返回：[ '匹配结果' , '由括号括起来的小分组匹配值' , index , input]
 - 无论如何，`永远只匹配到第一条`

```js
var regex = /h(s+)y/g; 
regex.exec('ahahsyhsssy')
// ["hsy", "s", index: 3, input: "ahahsyhsssy"] 

regex.exec('ahahsyhsssy')
// ["hsy", "s", index: 3, input: "ahahsyhsssy"] 

regex.exec('ahahsyhsssy')
// ["hsy", "s", index: 3, input: "ahahsyhsssy"] 
```

### [RegExp]test
测试string是否包含匹配结果，若包含返回true；否则返回false
 - 参数：string
 - 返回：true | false
```js
var regex = /he/
regex.test('heshiyu')
// true
```

### [String]match
根据pattern进行正则匹配，如果匹配到，返回匹配结果；否则返回null

若正则表达式是 **全局匹配**：
 - 参数：regex
 - 返回：[匹配到的内容1, 匹配到的内容2, ...]
```js
var str = 'hi, heshiyu'
var regex = /i/g
str.match(regex)
// ['i', 'i']
```
若正则表达式是 **非全局匹配**：（和`exec`有点点像，但不完全像）
 - 参数：regex
 - 返回：[匹配到的内容1, 匹配到的内容2, ...]
```js
var str = 'hi, heshiyu'
var regex = /i/

str.match(regex)
// ['i', groups: undefined, index: 1, input, heshiyu]

str.match(regex)
// ['i', groups: undefined, index: 1, input, heshiyu]

str.match(regex)
// ['i', groups: undefined, index: 1, input, heshiyu]
```

### [String]search
根据pattern进行正则匹配，如果匹配到一个结果，则返回他的索引；否则返回-1
 - 参数：regex | string
 - 返回：number
```js
var str = 'hi, heshiyu'
var regex = /i/
str.search(regex)

// 1
```

### [String]replace
根据pattern进行正则匹配，把匹配结果替换为replacement
 - 参数1：regex | string
 - 参数2：string
 - 返回：替换结果
 ```js
var str = "i love china!"
var pattern = /i/g
var ret = str.replace(pattern, "I")

console.log(ret)
//I love chIna!
 ```

### [String]split
根据pattern进行正则分割，返回一个分割数组
 - 参数1：regex | string
 - 返回：分割结果
```js
var  str = 'http://www.baidu.com/'
var  reg = /\W/
var  ret = str.split(reg)

console.log(ret)
//["http", "", "", "www", "baidu", "com", ""] 
```
## 常用正则
### 正则匹配邮箱
 `/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/`
