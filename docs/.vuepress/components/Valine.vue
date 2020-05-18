<template>
  <section style="border-top: 2px solid #eaecef;padding-top:1rem;margin-top:2rem;">
    <div>
      <!-- id 将作为查询条件 -->
      <span class="leancloud-visitors"
            data-flag-title="Your Article Title">
        <em class="post-meta-item-text">阅读量： </em>
        <i class="leancloud-visitors-count"></i>
      </span>
    </div>

    <div class="u-comment-wrapper">
        <h3>评论区：</h3>
        <div id="vcomments"></div>
    </div>
  </section>
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
