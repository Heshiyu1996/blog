const head = require('./head')
const nav = [
    {
        text: '前端积累', link: '/skill/'
    },
    { text: '实用工具', link: '/tool/' },
    {
        text: '工程产出', items: [
            { text: '前端规范', items: [
                    { text: 'CSS规范', link: '/output/standard/css/' },
                    { text: 'JS规范', link: '/output/standard/js/' },
                    { text: 'ESLint & Prettier规范', link: '/output/standard/eslint/' },
                    { text: 'Stylelint规范', link: '/output/standard/stylelint/' },
                    { text: 'Git规范', link: '/output/standard/git/' },
                    { text: '接口规范', link: '/output/standard/interface/' }
                ]
            },
            { text: '前端工程模板', items: [
                    { text: '单页项目（react16.9 + webpack4）', link: 'https://github.com/Heshiyu1996/react-template-singlepage' },
                    // { text: '单页项目（react16.9 + webpack4 + Typescript）', link: 'https://github.com/Heshiyu1996/react-template-multipages' },
                    { text: '多页项目（react16.9 + webpack4）', link: 'https://github.com/Heshiyu1996/react-template-multipages' },
                ]
            },
            { text: '团队组件库', items: [
                { text: 'sy-ui', link: 'https://github.com/Heshiyu1996/sy-ui' }
            ] }
        ]
    },

    // { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
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
                'react/fiber/',
                'react/hooks/',
                'react/notes/',
                'react/optimize/',
                'react/question/'
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
                'project/babel/',
                'project/notes/',
                'project/mobile-adapter/',
                'project/webpack/',
                'project/Trick.md',
                'project/package',
            ]
        },
        {
            title: '读书笔记',
            collapsable: true,
            children: [
                'note/webpack-experience/',
                'note/react-deep-learning/',
                'note/vue-composition-api-rfc.md',
                'note/Links.md'
            ]
        },
        {
            title: '计算机知识',
            collapsable: true,
            children: [
                'computeracy/scheduling-strategy/',
            ]
        },
        {
            title: '算法',
            collapsable: true,
            children: [
                'algorithm/sort/',
                'algorithm/search/',
                'algorithm/time-complexity/',
            ]
        }
    ],
    '/output/': [
        {
            title: '前端规范',
            collapsable: false,
            children: [
                'standard/css/',
                'standard/js/',
                'standard/eslint/',
                'standard/stylelint/',
                'standard/git/',
                'standard/interface/'
            ]
        }
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
    title: 'Heshiyu\'s Blog',
    description: ' ',
    head, // 注入到当前页面的 HTML <head> 中的标签

    serviceWorker: true, // 是否开启 PWA
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true, // 代码块显示行号
        toc: { includeLevel: [1, 2] } // 自动生成的目录只显示到2级标题（包括）
    },
    theme: 'reco',
    themeConfig: {
        author: 'Heshiyu',
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
