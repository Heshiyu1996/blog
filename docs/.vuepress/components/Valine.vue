<template>
    <div class="u-valine">
      <!-- id 将作为查询条件 -->
      <span class="leancloud-visitors"
            data-flag-title="Your Article Title">
        <span class="post-meta-itspan-text">阅读量： </span>
        <span class="leancloud-visitors-count"></span>
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
/* .u-valine {
    margin-top: 0 !important;
} */
</style>
