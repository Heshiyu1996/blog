<template>
    <div class="u-valine">
      <span class="leancloud-visitors"
            data-flag-title="Your Article Title">
        <span class="stat update-time">
            <img class="icon" src="/update-time.png" />{{$page.lastUpdated}}
        </span>

        <span class="stat read-count">
            <img class="icon" src="/read-count.png" />
            <span class="leancloud-visitors-count"></span>
        </span>
      </span>
    </div>
</template>

<script>
export default {
    name: 'Valine',

    mounted() {
        // valine库里面存在window变量；HTML会通过NodeJS进行服务端渲染来产生
        // 通过动态导入来解决“NodeJS环境下对window变量未定义”的问题
        import('valine').then(module => {
            const Valine = module.default

            if (typeof window !== 'undefined') {
                document.getElementsByClassName('leancloud-visitors')[0].id = window.location.pathname
                this.window = window
                window.AV = require('leancloud-storage')

                this.valine = new Valine()
                this.initValine()
            }
        })
    },

    methods: {
        initValine () {
            let { pathname: path, hostname } = window.location;
            document.getElementsByClassName('leancloud-visitors')[0].id = path

            const isDev = hostname.includes('localhost');
            if (isDev) return; // 不统计本地开发时的阅读量

            this.valine.init({
                el: '#vcomments',
                appId: 'z5GwWINgAn1R9SLxhR0Frh1P-gzGzoHsz',// your appId
                appKey: 'COUxnph8NagaafTrSVhFM3dD',// your appKey
                notify: false,
                verify: false,
                path,
                visitor: true,
                avatar: 'mm',
                placeholder: 'write here'
            })
        }
    },

    watch: {
        $route (to, from) {
            if (from.path !== to.path) {
                this.initValine()
            }
        }
    }
}
</script>

<style scoped>
.icon {
    width: 14px;
    margin-right: 4px;
    vertical-align: middle;
    opacity: 1;
}

.leancloud-visitors-count {
    vertical-align: middle;
}

.stat {
    font-size: 12px;
    opacity: .6;
}

.stat::after {
    content: "|";
    opacity: .4;
    margin: 0 6px;
}

.stat:last-child::after {
    content: " ";
}
</style>
