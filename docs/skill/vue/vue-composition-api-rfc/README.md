# [vue 3] Vue Composition API RFC
> 记录有关VueComposition API的一些RFC（Request For Comments）

[[toc]]

## Summary
将**与组件逻辑相关的选项**以**API函数**的形式重新设计。

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
 
 **1、模板中的数据来源不清晰。**（光看模板很难区分出一个属性是来自哪个mixin，HOC也有类似问题）
 
 **2、命名空间冲突。**（属性名、方法名可能会冲突，HOC也有类似问题）

 **3、性能损耗。** HOC和Renderless Components都需要额外的组件实例来嵌套逻辑。
:::
针对“逻辑组合与复用”这个问题，可以使用[Function-based API](#function-basedapi例子)。

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
可以把setup当成是2.x里的`data()`，因为它们**返回的对象里的属性**都会被暴露给模板的渲染上下文：
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

#### setup内部管理的值：value()
通过`value()`创建，返回的是一个包装对象：
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

#### 包装对象的原因
提供了一个**能够在函数之间，以引用的方式传递任意类型值**的容器。
 > 与React Hooks中的`useRef`的不同：Vue的包装对象同时也是响应式的数据源

有了包装对象，我们就可以在封装了逻辑的组合函数中，将状态以引用的方式传回给组件。

`组件负责展示（依赖跟踪），组合函数负责状态管理（触发更新）`

#### 包装对象的好处
对整个对象/数组的值进行替换，但**引用不变**：
```js
const numbers = value([1, 2, 3])

numbers.value = numbers.value.filter(n => n > 1)
```

```js
setup() {
    const valueA = useLogicA() // valueA可以被useLogicA()内部的代码修改，从而触发更新
    return {
        valueA
    }
}
```

#### 创建一个没有包装的响应式对象
可以使用`state()`：
```js
import { state } from 'vue'

const obj = state({ count: 0 })

object.count++
```

#### 包装对象的自动展开（Value Unwrapping）
在以下两种情况时，包装对象会自动展开：
 - 1、被暴露给模板的渲染上下文时
 ```js
 const MyComponent = {
     setup() {
         return {
             count: value(0)
         }
     },
     template: `<button @click="count++">{{ count }}</button>`
 }
 ```

 - 2、被嵌套在另一个响应式对象中
```js
const count = value(0)
const obj = state({
    count // 嵌套在了另一个响应式对象中
})

console.log(obj.count) // 0

obj.count++ // 当obj.count加1时
console.log(count.value) // 1，包装对象count的value为1，可以理解
console.log(obj.count) // 1。可见，两处值相同，是同一个count

count.value++ // 当包装对象count的value加1时
console.log(count.value) // 2
console.log(obj.count) // 2。值相同
```
包装对象的一个基本规则：**只有需要`以变量的形式`（即：在setup()里的函数中，而不是在模板中）去引用一个包装对象时，才会需要用到`.value`去取它内部的值**
> 在模板中，不需要知道`.value`的存在
```js
// 如，在setup()里需要改变包装对象中的值时：
import { value } from 'vue'

const MyComponent = () => {
    setup(props) {
        const msg = value('hello')
        const appendName = () => {
            msg.value = `heshiyu` // 需要以变量的形式去引用一个包装对象时
        }

        return {
            msg,
            appendName
        }
    },
    // 在模板中不需要知道.value的存在
    template: `<div @click="appendName">{{ msg }}</div>`
}
```
以上等同于
```js
// 手写Render函数的写法
import { value } from 'vue'

const MyComponent = () => {
    setup(props) {
        const msg = value('hello')
        const appendName = () => {
            msg.value = `heshiyu` // 需要以变量的形式去引用一个包装对象时
        }

        return (props, slots, attrs, vnode) => (
            h('div', {
                onClick: appendName
            }, msg.value)
        )
    },
}
```
#### 计算值：Computed Value
`value()`可以包装一个**可变的值**，那`computed()`就是可以包装一个**计算值**。
```js
import { value, computed } from 'vue'

const count = value(0)
const countPlusOne = computed(() => count.value + 1) // 依赖项为count.value【因为直接以（函数内）变量的形式引用count，所以需要声明.value】

console.log(countPlusOne.value) // 1。可见countPlusOne也是个包装对象

count.value++ // 当包装对象count的value加1
console.log(countPlusOne.value) // 2。可见countPlusOne的依赖是count.value，所以countPlusOne里的value会重新计算
```
`computed()`返回的是一个**只读**的包装对象，它：
 - 可以在`setup()`中被返回
 - 可以在模板的渲染上下文中**自动展开**，（和`.value()`返回的包装对象一样）

:::tip
在computed()中声明setter函数：
```js
const count = value(0)
const writableComputed = computed(
    // read
    () => count.value + 1,
    // write
    val => {
        count.value = val - 1
    }
)
```
:::

#### Watchers
提供了一个**基于观察状态的变化，从而来执行副作用**的能力。

> **watch(数据源, 回调函数 [, Watch选项])**
> 
> 返回值：一个停止观察的函数。const stop = watch(...)
> 
> watcher也会在当前组件被销毁时，自动停止

 - 第一个参数：数据源
    - 一个返回任意值的函数
    - 一个包装对象
    - 一个包含以上两种类型的数组

 - 第二个参数：回调函数
    - 与`2.x`的不同：默认自动`immediate: true`
    - 默认**在当前DOM更新后**才被调用
    - 参数分别为：(val, prevVal, onCleanup)
```js
// 第三个参数是清理函数
// 触发时机：1、在回调被下次调用前；2、在watcher被停止前
// 适用情况：当一个异步操作在完成之前，数据就已经发生了变化，需要撤销**正在等待的异步结果**
watch(valueA, (val, oldVal, onCleanup) => {
    const token = performAsyncOperation(val)

    onCleanup(() => {
        // 1、当val发生了变化，下次回调准备调用前
        // 2、或是在watcher被停止前
        // 可取消未完成的异步操作：
        token.cancel()
    })
})
```

 - 第三个参数：Watch选项
```ts
interface WatchOptions {
    lazy?: boolean
    deep?: boolean
    flush?: 'pre' | 'post' | 'sync'
    onTrack?: (e: DebuggerEvent) => void
    onTrigger?: (e: DebuggerEvent) => void
}

interface  DebuggerEvent {
    effect: ReactiveEffect
    target: any
    key: string | symbol | undefined
    type: 'set' | 'add' | 'delete' | 'clear' | 'get' | 'has' | 'iterate'
}
```
 - lazy：和`immediate`相反
 - deep：监听的深度
 - onTrack：在watcher跟踪到依赖，被调用赋值的函数
 - onTrigger：依赖发生变化时，被调用赋值的函数

:::tip
当要观察多个数据源时，可以：
```js
watch(
    // 对于valueA是个包装对象
    // 对于valueB是属于在setup()里的函数内直接使用，所以得声明`.value`
    [valueA, () => valueB.value], 

    // 回调函数里的参数，也是**按照依赖项的顺序**，各自放到(val, oldValue)的数组中
    // （回调函数最多只有两个参数）
    ([a, b], [prevA, prevB]) => {
        console.log(`a is: ${a}`)
        console.log(`b is: ${b}`)
    }
)
```
:::




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