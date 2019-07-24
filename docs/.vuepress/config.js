const head = require('./head')
const nav = [
    { text: '主页', link: '/' },
    {
        text: '前端积累', link: '/skill/'
    },
    // {
    //     text: '团队规范', link: '/standard/'
    // },
    {
        text: '团队规范', items: [
            { text: '基本类', items: [
                    { text: 'CSS规范', link: '/standard/css/' },
                    { text: 'JS规范', link: '/standard/js/' }
                ]
            },
            { text: '工具类', items: [
                    { text: 'Prettier规范', link: '/standard/prettier/' },
                    { text: 'Git规范', link: '/standard/git/' }
                    // { text: 'ESLint规范', link: '/standard/eslint/' }
                ]
            },
        ]
    },
    {
        text: '前端算法', link: '/standard/css/'
    }
]

const sidebar = {
    '/standard/': [
        '/standard/',
        {
            title: '基本类',
            collapsable: false,
            children: [
                '/standard/css/',
                '/standard/js/'
            ]
        },
        {
            title: '工具类',
            collapsable: false,
            children: [
                '/standard/prettier/',
                '/standard/git/',
            ]
        },
    ],
    '/skill/': [
        '/skill/',
        {
            title: 'Web基础',
            collapsable: true,
            children: [
                'basic/html/',
                'basic/css/',
                'basic/js/'
            ]
        },
        {
            title: 'Web进阶',
            collapsable: true,
            children: [
                'advance/web/',
                'advance/browser/',
                'advance/nodejs/',
                'advance/algorithm/',
                'advance/other/',
            ]
        },
        {
            title: '项目经验记录',
            collapsable: true,
            children: [
                'project/mobile-adapter/',
                'project/performance-optimize/',
                'project/webpack/',
                'project/client-server-render/',
            ]
        }
    ]
    // '/algorithm/': [
        
    // ]
}

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

// function getSidebar(barName) {
//     const sidebar = {
//         blog: [
//             '/blog/'
//         ],
//         standard: [
//             '/standard/css/',
//             '/standard/prettier/',
//         ]
//     }
//     return sidebar[barName]
// }
