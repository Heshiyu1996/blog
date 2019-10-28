const head = require('./head')
const nav = [
    { text: '主页', link: '/' },
    {
        text: '前端积累', link: '/skill/'
    },
    {
        text: '团队规范', items: [
            { text: '基本类', items: [
                    { text: 'CSS规范', link: '/standard/css/' },
                    { text: 'JS规范', link: '/standard/js/' }
                ]
            },
            { text: '工具类', items: [
                    { text: 'Prettier规范', link: '/standard/prettier/' },
                    { text: 'Git规范', link: '/standard/git/' },
                    { text: 'Stylelint规范', link: '/standard/stylelint/' }
                    // { text: 'ESLint规范', link: '/standard/eslint/' }
                ]
            },
        ]
    },
    {
        text: '前端算法', link: '/algorithm/'
    },
    // {
    //     text: 'sy-UI组件库', link: 'https://www.baidu.com'
    // }
]

const sidebar = {
    '/skill/': [
        '/skill/',
        {
            title: 'JS',
            collapsable: true,
            children: [
                'js/JSModule.md',
                'js/EventLoop.md',
                'js/Regex.md',
                'js/DOM.md',
                'js/JSAsync.md',
                'js/DesignPatterns.md',
                'js/Etc'
            ]
        },
        {
            title: 'React',
            collapsable: true,
            children: [
                'react/Notes',
                // 'react/Standard',
                'react/Optimize'
            ]
        },
        {
            title: 'CSS',
            collapsable: true,
            children: [
                'css/FlexBox',
                'css/BFC',
                'css/Etc'
            ]
        },
        {
            title: 'HTML',
            collapsable: true,
            children: [
                'html/WebWorker',
                'html/Etc'
            ]
        },
        {
            title: 'Web/浏览器',
            collapsable: true,
            children: [
                'web/HTTP',
                'web/CDN',
                'web/ClientServerRender',
                'web/CORS',
                'web/WebAttack',
                'web/WebSocket',
                'web/WebStorage',
                'web/Optimize',
                'web/Browser',
                'web/Etc'
            ]
        },
        {
            title: '项目笔记',
            collapsable: true,
            children: [
                'project/react-16.9-notice/',
                'project/mobile-adapter/',
                'project/webpack/',
                'project/Trick.md',
            ]
        },
        {
            title: '读书笔记',
            collapsable: true,
            children: [
                'note/webpack-experience/',
                'note/react-deep-learning/',
                'note/Links.md',
                'note/vue-composition-api-rfc.md'
            ]
        }
    ],
    '/standard/': [
        '/standard/',
        {
            title: '基本类',
            collapsable: false,
            children: [
                'css/',
                'js/'
            ]
        },
        {
            title: '工具类',
            collapsable: false,
            children: [
                'prettier/',
                'git/',
                'stylelint/',
            ]
        },
    ],
    
    '/algorithm/': [
        '/algorithm/',
        {
            title: '八大排序',
            collapsable: false,
            children: [
                'sort/Selection',
                'sort/Shell',
                'sort/Quick',
                'sort/Heap',
                'sort/Bubble',
                'sort/Insertion',
                'sort/Merge',
                'sort/Radix',
                'sort/Etc',
            ]
        },
        {
            title: '查找算法',
            collapsable: false,
            children: [
                'search/Binary',
            ]
        },
        {
            title: '算法基础',
            collapsable: false,
            children: [
                'Basic',
            ]
        }
    ]
}

module.exports = {
    title: 'heshiyu\'s blog',
    description: '思而不学则殆',
    head, // 注入到当前页面的 HTML <head> 中的标签

    serviceWorker: true, // 是否开启 PWA
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
