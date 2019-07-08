
const nav = [
    { text: '主页', link: '/' },
    {
        text: '规范', items: [
            { text: '基本类', items: [
                    { text: 'CSS', link: '/standard/css/' }
                ]
            },
            { text: '工具类', items: [
                    { text: 'Prettier', link: '/standard/prettier/' }
                ]
            },
        ]
    },
    {
        text: '效率工具', items: [
            { text: '基本类', items: [
                    { text: 'CSS', link: '/standard/css/' }
                ]
            },
            { text: '工具类', items: [
                    { text: 'Prettier', link: '/standard/prettier/' }
                ]
            },
        ]
    }
]

    const sidebar = [
        {
          title: 'Group 1',
          collapsable: true,
          children: [
            '/standard/css/',
            // '/standard/prettier/',
          ]
        },
        {
          title: 'Group 2',
          collapsable: true,
          children: [
            // '/standard/css/',
            '/standard/prettier/',
          ]
        }
    ]

let head = require('./head')

module.exports = {
    title: 'heshiyu\'s blog',
    description: '思而不学则殆',
    head, // 注入到当前页面的 HTML <head> 中的标签

    serviceWorker: true, // 是否开启 PWA
    base: '/test/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav,
        sidebar,
        sidebarDepth: 2, // 侧边栏显示2级

        lastUpdated: '上次更新', // string | boolean

        repo: 'https://github.com/Heshiyu1996/Heshiyu1996.github.io/test',

        editLinks: true,
        editLinkText: '帮助我们改善此页面！',
        displayAllHeaders: false // 展开所有页面的标题
    }
};

function getSidebar(barName) {
    const sidebar = {
        blog: [
            '/blog/'
        ],
        standard: [
            '/standard/css/',
            '/standard/prettier/',
        ]
    }
    return sidebar[barName]
}
