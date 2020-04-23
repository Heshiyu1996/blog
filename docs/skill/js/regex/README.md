# JS正则表达式
> JS正则表达式

[[toc]]

## 创建正则表达式（两种方式）
```js
// 正则表达字面量
var reg = /ab+c/

// 构造函数
var reg = new RegExp('ab+c') // 可传变量
```
## 修饰符
  - `i`（insensitive）：对大小写不敏感
  - `g`（global）：执行全局匹配，即搜完第一个还会不会继续搜。
  - `m`（multi）：执行多行匹配

## 常用的特殊字符
### 字符
 ```js
 `.`：除 换行符以外 的任何字符

 `\d`：0-9之间的任意一个数字
 `\D`：非数字

 `\w`：数字、字母、下划线（即0-9、a-z、A-Z、_）
 `\W`：除了`\w`

 `\s`：Space，空白（包括空格、换行、tab缩进）
 `\S`：和`\s`相反

 `\n`：新行
 ```

### 数量
`*`、`+`、`?`、`{n}`、`{n,}`、`{n,m}`

### 位置
`^`：以 xx 开头
> `^` 若在[^集合]内使用时，代表 **对集合的内容求反**

`$`：以 xx 结尾

### 括号
**( )**：
 
```js
var str = 'regex148'

// 在非全局匹配，`match`会返回 被匹配到的字符串、以及符合匹配条件的括号部分
str.match(/.*(ex)(.*)/) // ['regex148', 'ex', '148']

// 若全局匹配，`match`只会返回 被匹配到的字符串
str.match(/.*(ex)(.*)/g) // ['regex148']
```

**[ ]**：集合

**{ }**：表示数量
 - `{n}`、`{n,}`、`{n,m}`
 - `*`，相当于 `{0,}`
 - `+`，相当于 `{1,}`
 - `?`，相当于 `{0,1}`
    - 如果在 量词 后面，代表 **懒惰匹配**

### 多选
**|**：相当于“或”

### 需要转义的特殊字符
`^`、`$`、`\`、`.`、`*`、`+`、`?`、`(`、`)`、`[`、`]`、`{`、`}`、`|`


## js中和正则有关的所有方法
:::tip
`RegExp`
 - **test**
 - exec

`String`（注意，以下是字符串的方法）
 - **match**
 - replace
 - search
 - split
:::

### [RegExp]test
**主体是regex。**用来简单检测string是否匹配结果
 - 参数：string
 - 返回：**true | false**

```js
var regex = /he/
regex.test('heshiyu') // true
```

### [String]match
若 **非全局匹配**，永远只返回第一个结果；
 - 若有`( )`，则会在下标为1、2...之后列出**对应括号内匹配结果**
 ```js
    var str = `regex148`;
    str.match(/(e.{1})(e.{1})/);

    ["egex", "eg", "ex"]
 ```

若 **全局匹配**，返回所有匹配结果。

匹配不到，返回**null**

## 常用正则
### 正则匹配邮箱
 `/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/`


## 贪婪匹配、懒惰匹配
**贪婪匹配**：顾名思义很贪婪，要最大限度地占用字符串。

**懒惰匹配**：一匹配到满足条件的就停止了这次匹配，**不会干扰后面的继续匹配！！！**

### `?`在正则中有两种作用：
 - 放在一个 **普通的** 元字符后面：代表常出现`0-1次`
    - `/\d?/`表示数字可能出现，也可能不出现
```js
var regex = /\d+/g // 放在 普通的元字符 后面，表示最大限度地占用字符串
var str = 'abc2015def2016ghi'
var result = str.match(regex);
// ['2015', '2016']
```
 
 - 放在一个 **量词的** 元字符后面：代表`取消贪婪性`
```js
var regex = /\d+?/g // 放在 量词的元字符 后面，表示取消贪婪性
var str = 'abc2015def2016ghi'
var result = str.match(regex);
// ['2', '0', '1', '5', '2', '0', '1', '6']
```


## 先行断言（lookahead）和捕获












<!-- 
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

### [String]search
根据pattern进行正则匹配，如果匹配到一个结果，则返回他的索引；否则返回-1
 - 参数：regex | string
 - 返回：number
```js
var str = 'hi, heshiyu'
var regex = /i/
str.search(regex)

// 1
``` -->



<!-- ### [RegExp]exec
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
var regex = /h(s+)y/; 
regex.exec('ahahsyhsssy')
// ["hsy", "s", index: 3, input: "ahahsyhsssy"] 

regex.exec('ahahsyhsssy')
// ["hsy", "s", index: 3, input: "ahahsyhsssy"] 

regex.exec('ahahsyhsssy')
// ["hsy", "s", index: 3, input: "ahahsyhsssy"] 
``` -->
