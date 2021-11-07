# 组件开发思路

[[toc]]

## u-table
### 用法
```html
<!-- list.vue -->
<u-table :list="list">
    <template slot-scope="{ row }">
        <u-table-column label="ID">{{ row.id }}</u-table-column>
        <u-table-column label="姓名">{{ row.name }}</u-table-column>
    </template>
</u-table>
```

### 大致代码
```html
<!-- u-table.vue -->
<template>
    <table class="u-table">
        <template v-if="isLoading">
            <u-icon name="loading" />
        </template>

        <template v-else>
            <template v-if="list.length !== 0">
                <thead>
                    <tr>
                        <th v-for="(column, index) in columns" :key="column.label">{{ column.label }}</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(row, index) in list" :key="index" @click="rowItemClick(row, index, $event)" class="u-table-row">
                        <slot :row="row" :rowIndex="index" />
                    </tr>
                </tbody>
            </template>
            <div v-else class="no-data">暂无数据</div>
        </template>
    </table>
</template>

<script>
export default {
    name: 'u-table',
    props: {
        list: Array,
        hasLoading: { type: Boolean, default: false }
    },
    data() {
        return {
            // 这个columns由<u-table-column />通过 this.$parent.column 进行生成
            columns: [],
            isLoading: this.hasLoading
        }
    },
    watch: {
        list() {
            this.isLoading = false
        }
    }
}
</script>
```

```html
<!-- u-table-column -->
<template>
    <td class="u-table-column"><slot></slot></td>
</template>

<script>
export default {
    name: 'u-table-column',
    props: {
        label: String,
        visible: { type: Boolean, default: true } /* 是否显示该列 */
    },
    created() {
        if (this.visible && !this.$parent.columns.find(item => item.label === this.label)) {
            this.$parent.columns.push(this)
        }
    }
}
</script>
```

### 思路
核心要点：
 - 父组件只需定义每个列的**数据展示方式**
 - **动态列的渲染**，在`<u-table-column>`组件内的`created`钩子，往`this.$parent.columns`动态添加列
 - 通过 **作用域插槽（slot-scope）**，使得插槽也能使用子组件的一些属性（比如：`row`）
 - `isLoading`在`<u-table>`内根据`list`值自动变化


## u-modal
### 用法
```html
<!-- i-guide-modal -->
<template>
    <u-modal :visible="modalVisible" title="使用帮助" @before-close="submit" @close="closeModal" okButton="" cancelButton="">
        <div class="navigation">
            <div v-for="(item, index) in navigas" :key="index" class="btn">
                <span class="num">{{ index + 1 }}</span> {{ item.title }}
            </div>
        </div>
        <u-icon :name="DOWNLOAD_URL.MARK_ENTITY_GIF"></u-icon>
    </u-modal>
</template>
```

### 大致代码
```html
<template>
    <div class="u-modal-wapper" v-if="currentVisible" @click="cancel()" @keydown.esc="cancel()">
        <div class="u-modal" v-bind="$attrs" v-on="$listeners">
            <div class="head">{{ title }}</div>

            <div class="body">
                <slot>{{ content }}</slot>
            </div>

            <div class="foot">
                <u-button @click="cancel">{{ cancelButton }}</u-button>
                <u-button @click="ok">{{ okButton }}</u-button>
            </div>

            <u-icon v-if="showClose" name="close" class="close" @click="cancel" />
        </div>
    </div>
</template>

<script>
import Vue from 'vue'

const ModalType = {
    ALERT: 'alert'
}

const Modal = {
    name: 'u-modal',
    props: {
        visible: { type: Boolean, default: false },
        title: { type: String, default: '' },
        content: String
    },
    data() {
        return {
            currentVisible: this.visible
        }
    },
    watch: {
        visible(visible) {
            this.currentVisible = visible
        }
    },
    mounted() {
        document.body.appendChild(this.$el)
    },
    methods: {
        ok() {
            this.$emit('ok')
            this.close(true)
        },
        cancel() {
            this.$emit('cancel')
            this.close(false)
        },

        close(ok) {
            // 设定一个变量cancel用来标志：外面是否阻止“内部的弹窗关闭行为”
            let cancel = false

            // 发射`before-close`事件，并传递出去ok值、preventDefault方法（此时处于同步执行）
            // 将“关闭弹窗的执行权”交给外面
            this.$emit('before-close', {
                ok,
                preventDefault: () => (cancel = true)
            })
            // 外面阻止了“内部的弹窗关闭行为”
            if (cancel) return

            // 外面没有阻止“内部的弹窗关闭行为”
            this.currentVisible = false
            // 通过事件触发形式，修改父组件传来的props值：visible、close
            this.$emit('update:visible', false)
            this.$emit('close', {
                ok
            })
        },

        // 提供给vue实例，主动打开弹窗的open方法
        open() {
            if (!this.$el) this.$mount(document.createElement('div'))

            this.currentVisible = true
            this.$emit('update:visible', true)
        }
    }
}

Modal.alert = (content, title, okButton, cancelButton = '') =>
    new Promise((resolve, reject) => {
        const Ctor = Vue.component('u-modal')
        if (!Ctor) return

        const instance = new Ctor({
            propsData: { content, title, okButton, cancelButton, type: ModalType.ALERT, showClose: false }
        })
        instance.$on('ok', () => resolve())
        instance.open()
    })

// 将带有“<u-modal>组件构造器”的Promise，挂载到Vue原型上，方便业务层调用
Vue.prototype.$alert = Modal.alert

export default Modal
</script>
```

### 思路
核心要点：
 - 一个蒙层
 - 接收props值`visible`，“内部visible”依赖它
 - “弹窗关闭行为”的控制权（`cancel`变量、`before-close`事件当中的`preventDefault（改变cancel）`）
 - 将带有`<u-modal>`组件构造器的Promise，挂载到Vue原型上