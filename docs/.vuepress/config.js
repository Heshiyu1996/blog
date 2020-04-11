const head = require('./head')
const nav = [
    { text: '总览', link: '/overview/' },
    {
        text: '前端积累', items: [
            {
                text: '基础', items: [
                    { text: 'HTML', link: '/skill/html/' },
                    { text: 'CSS', link: '/skill/css/' },
                    { text: 'JS', link: '/skill/js/' },
                    { text: 'Web/浏览器', link: '/skill/web/' },
                ]
            },
            {
                text: '框架', items: [
                    { text: 'React', link: '/skill/react/' },
                    { text: 'Vue', link: '/skill/vue/' }
                ],
            },
            {
                text: '笔记', items: [
                    { text: '项目笔记', link: '/skill/project/' },
                    { text: '读书/参会心得', link: '/skill/note/' }
                ]
            },
            {
                text: '前端周边', items: [
                    { text: '计算机', link: '/skill/computeracy/' },
                    { text: '算法', link: '/skill/algorithm/' }
                ]
            }
        ]
    },
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
                    { text: '单页项目（react16.9 + webpack4）', link: 'https://github.com/netease-frontend-institute/ehr-react-template/tree/single/js' },
                    { text: '单页项目（react16.9 + webpack4 + Typescript）', link: 'https://github.com/netease-frontend-institute/ehr-react-template/tree/single/ts' },
                    { text: '多页项目（react16.9 + webpack4）', link: 'https://github.com/netease-frontend-institute/ehr-react-template/tree/multiple/js' },
                ]
            },
            { text: '团队组件库', items: [
                { text: 'sy-ui', link: 'https://github.com/Heshiyu1996/sy-ui' }
            ] }
        ]
    },
    { text: '实用工具', link: '/tool/' },
]

const sidebar = {
    '/overview/': ['/overview/'],
    '/skill/html': [
        {
            title: '《HTML》',
            collapsable: false,
            children: [
                'html/web-worker/',
                'html/other/'
            ]
        }
    ],
    '/skill/css': [
        {
            title: '《CSS》',
            collapsable: false,
            children: [
                'css/bfc/',
                'css/flex-box/',
                'css/other/'
            ]
        }
    ],
    '/skill/js': [
        {
            title: '《JS》',
            collapsable: false,
            children: [
                'js/async-plan/',
                'js/design-patterns/',
                'js/dom/',
                'js/event-loop/',
                'js/modular/',
                'js/regex/',
                'js/class/',
                // 'js/amd-cmd/',
                'js/other/'
            ]
        }
    ],
    '/skill/web': [
        {
            title: 'Web/浏览器',
            collapsable: true,
            children: [
                'web/web-assembly/',
                'web/browser/',
                'web/browser-cache/',
                'web/cdn/',
                'web/cors/',
                'web/http/',
                'web/optimize/',
                'web/ssr/',
                'web/web-attack/',
                'web/web-storage/',
                'web/websocket/',
                'web/other/'
            ]
        },
    ],

    '/skill/react': [
        {
            title: '《React》',
            collapsable: false,
            children: [
                'react/fiber/',
                'react/hooks/',
                'react/notes/',
                'react/optimize/',
                'react/question/'
                'react/other/',
            ]
        }
    ],
    '/skill/vue': [
        {
            title: '《Vue》',
            collapsable: false,
            children: [
                'vue/vue-composition-api-rfc/',
                'vue/key/',
                'vue/keep-alive/',
                'vue/build/',
                'vue/data-driven/',
                'vue/component/'
            ]
        }
    ],
    '/skill/project': [
        {
            title: '《项目笔记》',
            collapsable: false,
            children: [
                'project/h5/',
                'project/rollup/',
                'project/node-mysql/',
                'project/nos/',
                'project/npm/',
                'project/chrome-extension/',
                'project/prettier-vue-cli/',
                'project/source-map/',
                'project/babel/',
                'project/notes/',
                'project/webpack/',
                'project/package/',
                'project/other/'
            ]
        }
    ],
    '/skill/note': [
        {
            title: '《读书/参会心得》',
            collapsable: false,
            children: [
                'note/vue-conf-2018/',
                'note/complete-intro-react/',
                'note/webpack-experience/',
                'note/react-deep-learning/',
                'note/links/'
            ]
        }
    ],
    '/skill/computeracy': [
        {
            title: '《计算机知识》',
            collapsable: false,
            children: [
                'computeracy/scheduling-strategy/',
            ]
        }
    ],
    '/skill/algorithm': [
        {
            title: '《算法》',
            collapsable: false,
            children: [
                'algorithm/sort/',
                'algorithm/search/',
                'algorithm/dp/',
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
    // theme: 'reco',
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
