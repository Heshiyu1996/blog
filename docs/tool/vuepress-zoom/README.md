# Vuepress-图片缩放
> 在你的 VuePress 站点中使用 medium-zoom。

[[toc]]

## 步骤
```
npm install -D vuepress-plugin-medium-zoom
```

```js
// .vuepress/config.js
plugins: [
    [
        '@vuepress/last-updated',
        {
            transformer: (timestamp, lang) => {
                const moment = require('moment')
                moment.locale(lang)
                moment(timestamp).format('YYYY-MM-DD HH:mm')
                const aMonth = 2678400000;
                const moreAMonth = Date.now() - timestamp > aMonth;
                // return moment(timestamp).fromNow() // xx days ago
                return moreAMonth ? moment(timestamp).format('YYYY-MM-DD HH:mm') : moment(timestamp).fromNow();
            }
        }
    ],
    [
        'vuepress-plugin-medium-zoom',
        {
            delay: 1000,
            options: {
            margin: 24,
                background: '#25272A',
                scrollOffset: 0,
            },
        },
    ],
]
```

## 参考链接
 - [vuepress-plugin-medium-zoom]https://vuepress.github.io/zh/plugins/medium-zoom/