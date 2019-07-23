# JS规范

## 变量
命名方式：小驼峰

命名规范：名词
```js
// bad
let setCount = 10

// good
let maxCount = 10
```

## 常量
命名方式：全部大写

命名规范：多个单次时使用分隔符`_`

```js
// bad
const serverErrorCode = {
    success: 200,
    repeat: 444
}

// good
const SERVER_ERROR_CODE = {
    SUCCESS: 200,
    REPEAT: 444
}
```

## 函数
命名方式：小驼峰

命名规范：动词前缀

```js
// bad
function userInfo() {

}

// good
function getUserInfo() {

}
```

## 类
命名方式：大驼峰

命名规范：名词
```js
// bad
class person {}

// good
class Person {}
```

## 注释
### 单行
```js
// 单行注释，带空格
let maxCount = 123
```

### 多行
```js
/**
 * 多行注释
 * /
```

### 减少嵌套
确定条件为false时，尽早返回。*经典使用场景：校验数据*
```js
// bad
if (condition1) {
    if (condition2) {

    }
}

// good
if (!condition1) return
if (!condition2) return
```

### 减少无义标记值
习惯使用常量进行自解释
```js
// bad
type: 1 // 1-新增 2-修改

// good
const MODIFY_TYPE = {
    ADD: 1,
    EDIT: 2
}

type: MODIFY_TYPE.ADD
```

### 简洁表达式
```js
// bad
if (name === '') {}
if (collection.length > 0) {}
if (notTrue === false) {}

// good
if (!name) {}
if (collection.length) {}
if (notTrue){}
```

### 分支较多处理
对于相同变量或表达式的多值条件，用`switch`代替`if`
```js
// bad
if (type === 'object') {
    // ...
} else if (type === 'number' || type === 'boolean') {
    // ...
}

// good
switch(typeof type) {
    case 'object':
        // ...
        break
    case 'number':
    case 'boolean':
        // ...
        break
}
```

### 使用变量名自解释
逻辑复杂时，建议使用变量名自解释，而不是晦涩难懂的简写。
```js
// bad
function (value) {
    return !helper.req(value) || this.entity.enVocabularyEntries.filter(item => item.vocabularyEntryName === value).length < 2
}

// good
function (value) {
    let entVocabularyList = this.entity.enVocabularyEntries
    let repeatCount = entVocabularyList.filter(item => item.vocabularyEntryName === value).length
    return !helper.req(value) || repeatCount < 2
}
```

### 使用函数名自解释
遵循单一职责的基础上，可以把逻辑隐藏在函数中，同时使用准确的函数名自解释。
```js
// bad
if (modifyType === MODIFY_TYPE.ADD) {
    batchVariableAPI(data).then(() => {
        this.closeModal()
        this.$toast.show('添加变量成功')
    })
} else {
  updateVariableAPI(data).then(() => {
        this.closeModal()
        this.$toast.show('修改变量成功')
    })
}

// good
modifyType === MODIFY_TYPE.ADD ? this._batchVariable() : this._updateVariable()

_batchVariable() {
    batchVariableAPI(data).then(() => {
        this.closeModal()
        this.$toast.show('添加变量成功')
    })
}

_updateVariable() {
  updateVariableAPI(data).then(() => {
        this.closeModal()
        this.$toast.show('修改变量成功')
    })
}
```


如果变量是null类型的话，在解构赋值不会使用默认值