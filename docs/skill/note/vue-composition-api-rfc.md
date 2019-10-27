# Vue Composition API RFC
> 记录有关VueComposition API的一些RFC（Request For Comments）

[[toc]]

## Summary
将与组件逻辑相关的选项以API函数的形式重新设计。

## 基本例子
```js
import { value, computed, watch, onMounted } from 'vue'

const App = {
    template: `
        <div>
            <span>count is {{ count }}</span>
            <span>plusOne is {{ plusOne }}</span>
            <button @click="increment">count++</button>
        </div>
    `,
    setup() {
        const count = value(0)

        const plusOne = computed(() => count.value + 1)

        const increment = () => { count.value++ }

        watch(() => count.value * 2, val => {
            console.log(`count * 2 is ${val}`)
        })

        onMounted(() => console.log(`mounted`))

        return {
            count,
            plusOne,
            increment
        }
    }
}
```

## 设计动机
### 逻辑组合与复用
在多个组件之间抽取、复用逻辑时更灵活清晰
:::tip
 - Mixins
 - HOC
 - Renderless Components（基于scoped slots封装逻辑的组件）

 以上逻辑复用模式存在的缺点：
 
 1、模板中的数据来源不清晰。（光看模板很难区分出一个属性是来自哪个mixin，HOC也有类似问题）
 
 2、命名空间冲突。（属性名、方法名可能会冲突，HOC也有类似问题）

 3、性能损耗。HOC和Renderless Components都需要额外的组件实例来嵌套逻辑。
:::
针对“逻辑组合与复用”这个问题，可以使用[`Function-based API`](#function-basedapi例子)。

### 类型推导
 - 想在3.0增强对TS的支持，但Class API不是很好的方案
 - 基于函数的API对类型推导很友好（TS对函数的参数、返回值和泛型的支持非常完备）

### 打包尺寸
 - 每个函数都可以作为 named ES export 被单独引入，对tree-shaking友好`（最终打包时会移除那些未使用的代码）`
 - 所有函数名、setup函数内部的变量名可以被压缩，class的属性/方法名不行





## 设计细节
### setup()
调用时机：**在组件实例被创建、且初始化props之后**

一个可以接收props参数、新的组件选项。
```js
const MyComponent = {
    props: {
        name: String
    },
    setup(props) {
        // 注意：这个props也是响应式的，可以当作数据源去观测
        console.log(props.name)
    }
}
```
可以把setup当成是2.x里的`data()`，因为它们返回的对象里面的属性都会被暴露给模板的渲染上下文：
```js
const MyComponent = {
    props: {
        name: String
    },
    setup(props) {
        return {
            msg: `My name is ${props.name}`
        }
    },
    template: `<div>{{ msg }}</div>`
}
```

#### setup内部管理的值
通过`value()`创建：
```js
import { value } from 'vue';

const MyComponent = {
    setup() {
        // 1、通过value()创建一个setup内部管理的值，返回的是一个包装对象msg
        // 2、这个包装对象只有一个属性（value），这个value属性指向的是内部被包装的那个值（也就是字符串'hello'）
        const msg = value('hello')

        // 3、声明了一个方法，可以通过它对包装对象msg进行修改
        const changeMsg = newMsg => {
            msg.value = newMsg
        }
        return {
            msg,
            changeMsg
        }
    },
    template: `<div @click="() => changeMsg('heshiyu')">{{ msg }}</div>`
}
```





## Function-basedAPI例子
针对“逻辑组合与复用”这个问题，可以使用`基于函数的API`（Function-based API），把相关代码抽取到一个`composition function（组合函数，use开头）`里，并将**需要暴露给组件的状态**，**以响应式数据源的方式**return出来。
```js
// 1、将逻辑抽取到一个composition function里
// 作用：封装鼠标位置侦听逻辑
function useMouse() {
    const x = value(0)
    const y = value(0)
    const update = e => {
        x.value = e.pageX
        y.value = e.pageY
    }

    onMounted(() => {
        window.addEventListener('mousemove', update)
    })

    onUnmounted(() => {
        window.removeEventListener('mousemove', update)
    })

    // 2、将需要暴露给组件的状态，以响应式数据源的方式返回出来
    return { x, y }
}

// 3、在组件中使用composition function：useMouse、useOtherLogic
const Component = {
    setup() {
        const { x, y } = useMouse()

        const { z } = useOtherLogic()

        return { x, y }
    }
}
```
好处：
 - 暴露给模板的属性来源清晰（因为是从函数返回值里取的）
 - 没有命名冲突（因为可以通过解构赋值来重命名）
 - 没有额外性能损耗（因为没有创建额外的组件）

## 链接
[Vue Composition API RFC（英文）](https://vue-composition-api-rfc.netlify.com)


[Vue Composition API RFC（中文）](https://zhuanlan.zhihu.com/p/68477600)