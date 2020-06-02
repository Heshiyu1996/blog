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

    <!-- <div class="u-comment-wrapper">
        <h3>评论区：</h3>
        <div id="vcomments"></div>
    </div> -->
</template>

<script>
import Valine from 'valine';

export default {
    name: 'Valine',

    mounted: function () {
        if (typeof window !== 'undefined') {
            document.getElementsByClassName('leancloud-visitors')[0].id
            = window.location.pathname
            this.window = window
            window.AV = require('leancloud-storage')
        }

        new Valine({
            el: '#vcomments',
            appId: 'z5GwWINgAn1R9SLxhR0Frh1P-gzGzoHsz',// your appId
            appKey: 'COUxnph8NagaafTrSVhFM3dD', // your appKey
            notify: false,
            verify: false,
            path: window.location.pathname,
            visitor: true,
            avatar: 'mm',
            placeholder: 'write here'
        });
    },
}
</script>

<style scoped>
.icon {
    width: 14px;
    margin-right: 4px;
    vertical-align: middle;
}

.leancloud-visitors-count {
    vertical-align: middle;
}

.stat {
    font-size: 12px;
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
