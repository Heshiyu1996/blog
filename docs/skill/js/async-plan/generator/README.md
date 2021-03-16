# Generator
看一个`Generator函数`：
```js
function* asyncJob(x) {
    console.log('aaa')
    var y = yield x + 2
    console.log('bbb')
    console.log('y', y)
    var y2 = yield y + 6
    return y2
}

var g = asyncJob(1) // Generator函数会返回一个遍历器g
console.log(g.next())
// ① 先输出'aaa'
// ② 再输出{ value: 3, done: false }
// value表示：yield语句后面跟的表达式的值，此时y的赋值还未完成！
// done表示：Generator函数是否执行完毕
// -----此时Generator函数执行到此处，执行权交给外面（第一个yield前的、且其后的表达式并返回）-----
console.log('ccc')
// ③ 输出'ccc'
console.log(g.next(660))
// next函数把执行权交回里面，继续执行
// 因为往next()传参（只能带一个），上一次“yield后跟的表达式返回值 = 参数（即660）”，给了y
// 完成y的赋值，因为next传参660，所以y = 660
// ④ 先输出'bbb'
// ⑤ 再输出'y, 660'
// 遇到第二个yield，执行yield后跟表达式
// ⑥ 返回对象{ value: 666, done: false }，此时y2的赋值还未完成
// -----此时Generator函数执行到此处，执行权交给外面（第二个yield前的、且其后的表达式并返回）-----
console.log(g.next(3))
// next函数把执行权交回里面，继续执行
// 因为往next()传参（只能带一个），上一次“yield后跟的表达式返回值 = 参数（即3）”，给了y
// 完成y的赋值，因为next传参3，所以y2 = 3
// ⑦ 最后输出{ value: 3, done: true }
```
```
aaa
{ value: 3, done: false }
ccc
bbb
y, 660
{ value: 666, done: false }
{ value: 3, done: true }
```
### Generator函数能封装异步的原因？
根本原因：Generator函数可以**暂停执行**和**恢复执行**

两个特性：
 - 函数内外的数据交换
    - 内对外：在外面调用next后，得到返回里的value
    - 外对内：在外面调用next后，传入的参数（只能传一个）
 - 错误处理


### yield的特点
- 用来说明`next函数`返回的`value值`
- 每个`yield`调用后，后面的代码都会停止执行
- `yield`不能穿透函数（即`不能使用forEach`来遍历声明yield，`必须用for`！！）

迭代器对象可以任意具有.next方法的对象

### Generator函数的自动执行
Generator是一个异步操作的容器，它的自动执行需要一种机制（当异步操作有了结果，这种机制就要自动交回执行权），有两种方法：
 - 回调函数。
    - 将异步操作包装成Thunk函数，在回调函数里交回执行权
 - Promise对象。
    - 将异步操作包装成Promise对象，在then方法里交回执行权
