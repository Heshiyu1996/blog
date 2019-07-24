const head = require('./head')
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
        title: '团队规范',
        collapsable: true,
        children: [
            '/standard/css/',
            '/standard/prettier/',
            '/standard/git/',
            '/standard/js/'
        ]
    },
    {
        title: '前端基础',
        collapsable: true,
        children: [
            '/basic/html/',
            '/basic/css/',
            '/basic/js/'
        ]
    },
    {
        title: '前端周边',
        collapsable: true,
        children: [
            '/advance/web/',
            '/advance/browser/',
            '/advance/other/'
        ]
    },
    {
        title: '项目经验',
        collapsable: true,
        children: [
            '/project/mobile-adapter/',
            '/project/performance-optimize/',
            '/project/webpack/',
            '/project/client-server-render/',
        ]
    }
]

module.exports = {
    title: 'heshiyu\'s blog',
    description: '思而不学则殆',
    head, // 注入到当前页面的 HTML <head> 中的标签

    // serviceWorker: true, // 是否开启 PWA
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true, // 代码块显示行号
        toc: { includeLevel: [2, 2] } // 自动生成的目录只显示到2级标题（包括）
    },
    themeConfig: {
        nav,
        sidebar,
        sidebarDepth: 1, // 侧边栏显示2级

        lastUpdated: '上次更新', // string | boolean

        repo: 'https://github.com/Heshiyu1996/blog',

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
