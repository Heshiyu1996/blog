<template>
  <main class="page">
    <slot name="top" />

    <!-- 阅读量统计模块 -->
    <Valine v-show="visibleValine" class="u-valine-wrap" />

    <Content class="theme-default-content" />

    <!-- 博文共同编辑模块 -->
    <!-- <PageEdit /> -->

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import { HIDE_VALINE_PATHS } from './../config.js'

export default {
    components: { PageEdit, PageNav },
    props: ['sidebarItems'],

    data() {
        return {
            visibleValine: true
        }
    },

    watch: {
        $route: {
            handler (to, from) {
                let isHide = HIDE_VALINE_PATHS.includes(to.path)
                this.visibleValine = !isHide
            },
            immediate: true
        }
    }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

.u-valine-wrap {
    position: relative;
    top: 142px;
    left: 48px;
    max-width: 840px;
    height: 20px;
    margin: 0 auto;
}

</style>
