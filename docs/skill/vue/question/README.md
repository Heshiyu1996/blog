# [开发笔记] Vue使用问题集合

## 改变prop值的方法
> Vue一般防止子组件改变父组件的状态，所以不应该在子组件内部改变prop

### 不改变父组件
 - data（利用prop作为初始值，后续修改本地data）
 - computed（“听父从命”，当父通知prop值改变，子组件computed）

### 改变父组件（.sync）
 - .sync（当子组件改变了prop值，这个变化也同步到父组件中）
 
 ```js
 // parent.vue
 <child :inputValue.sync="name"></child>
```

```js
 // child.vue
 props: {
     inputValue: { type: 'String', default: '' }
 },
 data() {
     return {
         iValue: this.inputValue
     }
 },
 watch: {
     iValue(val) {
         this.$emit('update:inputValue', val) // 当子组件需要更新inputValue时，
     },
     inputValue(val) {
         this.iValue = val
     }
 }
 ```
 实际上，`.sync`代表的是

 ```js
 model: {
     prop: 'inputValue', // 子组件的prop值
     event: 'update' // 子组件的prop值绑定的事件
 }
 ```
 `v-model`代表的是
 ```js
 model: {
     prop: 'value',
     event: 'input'
 }
 ```


## Vue里面的继承
### extend（单继承）
 - Vue的全局方法
 ```js
 Vue.extend(...) // 传递Vue实例选项
 ```
 - Vue的实例选项
 ```js
 export default {
     extends: myExtend
 }
 ```
### mixin（多继承）
`混入` 可以接受 对象数组，所以类似多继承。

当使用“混入对象”时，所有“混入对象”的选项，都将适当地 **合并** 到该组件本身的选项
 - Vue的全局方法
 ```js
 Vue.mixin({
     created() {
         // ...
     }
 })
 ```
 - Vue的实例选项
 ```js
 export default {
    mixins: [ ... ]
 }
 ```

 ### 继承的合并规则
  - 对象（只覆盖掉冲突的属性，`不冲突的属性会保留下来，且合并`）
    - 优先级：组件内部 > 混入对象（数组最右最优） > Extend对象

  - 钩子函数（先调用 -> 后调用）
    - 调用顺序：Extend对象 > 混入对象（数组最右最优） > 组件内部

```js
var mixin = {
  data: function () {
    return {
      person: {
        age: 22
      }
    }
  }
}

new Vue({
  mixins: [mixin],
  data: function () {
    return {
      person: {
        name: 'heshiyu'
      }
    }
  },
  created: function () {
    console.log(this.person)
    // => { name: 'heshiyu', age: 22 }
  }
})
```




## 为什么在vue的组件中，data要function返回对象？
类比 **引用数据类型**。如果不用 function return，那 **这个组件的所有实例** 会共享同一个数据对象。

## render做了什么？
- `render`函数会返回一棵Virtual DOM Tree。
- 在挂载之前，`Vue` 会通过`createElem`、`createChildren`的相互调用，遍历整棵Virtual DOM Tree，来生成真实DOM节点。
 
## 为什么Vue不劫持数组上的元素
- 如果对数组进行数据劫持，可能会导致误触发getter、setter；
- 同时也需要对新增的元素手动observer。
    - （如对数组`[1, 2, 3]`进行数据劫持，调用`unshift(0)`，那只有下标为`0、1、2`的元素具有劫持效果）
- Vue采取的做法是：修改了Array原型上的方法，做了劫持修改，可以发出通知。

## $attrs 和 $listeners 的区别？
    - **$attrs** 是一个对象，存着由父组件传递给子组件、但不在 **子组件prop** 里的特性

    **$listeners** 也是一个对象，存着在`父作用域中的v-on事件监听器`
    - 通过`$listeners`，子组件可以向孙组件去传递那些可emit的事件。可实现由 “孙组件” 去触发 “爷组件” 的方法
        ```html
        <!-- u-search-type.vue -->
        <u-input @keypress.enter="goSearch"></u-input>

        <!-- u-input.vue -->
        <input v-on="$listeners" />
        ```
## key值的作用
[查看](/skill/vue/key/)