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
                    { text: 'NodeJS', link: '/skill/nodejs/' },
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
                    // { text: '接口规范', link: '/output/standard/interface/' }
                ]
            },
            { 
                text: '项目沉淀',
                items: [
                    { text:'React工程模板', link: '/output/fruit/template/' },
                    { text:'基于Antd的业务组件库', link: '/output/fruit/component-lib/' },
                    // { text: '【组件库】sy-ui', link: 'https://github.com/Heshiyu1996/sy-ui' }
                ] 
            },
            { 
                text: '前端工程模板',
                items: [
                    { text: '单页项目（react16.9 + webpack4）', link: 'https://github.com/netease-frontend-institute/ehr-react-template/tree/single/js' },
                    { text: '单页项目（react16.9 + webpack4 + Typescript）', link: 'https://github.com/netease-frontend-institute/ehr-react-template/tree/single/ts' },
                    { text: '多页项目（react16.9 + webpack4）', link: 'https://github.com/netease-frontend-institute/ehr-react-template/tree/multiple/js' },
                ]
            }
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
                'css/layout/',
                'css/bfc/',
                'css/flex-box/',
                'css/sass-less/',
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
                'js/typescript/',
                // 'js/amd-cmd/',
                'js/other/'
            ]
        }
    ],
    '/skill/nodejs': [
        {
            title: '《NodeJS》',
            collapsable: false,
            children: [
                'nodejs/multi-process/',
                'nodejs/koa/',
                'nodejs/node-mysql/',
                'nodejs/other/',
            ]
        }
    ],
    '/skill/web': [
        {
            title: '《Web/浏览器》',
            collapsable: false
        },
        {
            title: 'Web',
            collapsable: false,
            children: [
                'web/diff/',
                'web/cdn/',
                'web/cors/',
                'web/http/',
                'web/optimize/',
                'web/ssr/',
                'web/web-attack/',
                'web/web-storage/',
                'web/websocket/',
            ]
        },
        {
            title: '浏览器',
            collapsable: false,
            children: [
                'web/browser/',
                'web/browser-cache/',
                'web/other/'
            ]
        },
    ],

    '/skill/react': [
        {
            title: '《React》',
            collapsable: false,
            children: [
                'react/basic/',
                'react/feature-v16/',
                'react/fiber/',
                'react/life-cycle/',
                'react/set-state/',
                'react/react-composition/',
                'react/hooks/',
                'react/redux/',
                'react/error-usage/'
            ]
        }
    ],
    '/skill/vue': [
        {
            title: '《Vue》',
            collapsable: false
        },
        {
            title: '基础部分',
            collapsable: false,
            children: [
                'vue/basic/',
                'vue/life-cycle/',
                'vue/feature-v3/',
                'vue/question/',
                'vue/keep-alive/',
                'vue/component-lib/',
            ]
        },
        {
            title: '源码部分',
            collapsable: false,
            children: [
                'vue/build/',
                'vue/data-driven/',
                'vue/component/',
                'vue/vue-router/',
            ]
        }
    ],
    '/skill/project': [
        {
            title: '《项目笔记》',
            collapsable: false
        },
        {
            title: '工具实践',
            collapsable: false,
            children: [
                'project/webpack/',
                'project/babel/',
                'project/package/',
                'project/npm/',
                'project/mp/',
                'project/chrome-extension/',
                'project/rollup/',
            ]
        },
        {
            title: '项目踩坑',
            collapsable: false,
            children: [
                'project/react-project-note/',
                'project/prettier-vue-cli/',
                'project/compatibility/pc/',
                'project/compatibility/h5/',
                'project/other/'
            ]
        }
    ],
    '/skill/note': [
        {
            title: '《读书/参会心得》',
            collapsable: false,
        },
        {
            title: '读书心得',
            collapsable: false,
            children: [
                'note/webpack5/',
                'note/hooks-vs-class/',
                'note/vue-composition-api-rfc/',
                'note/complete-intro-react/',
                'note/webpack-experience/',
                'note/react-deep-learning/',
                'note/links/'
            ]
        },
        {
            title: '参会心得',
            collapsable: false,
            children: [
                'note/d2-2019/',
                'note/vue-conf-2018/',
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
                'algorithm/basic/',
                'algorithm/sort/',
                'algorithm/search/',
                'algorithm/dp/',
                'algorithm/leetcode/',
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
                // 'standard/interface/'
            ]
        },
        {
            title: '项目沉淀',
            collapsable: false,
            children: [
                'fruit/template/',
                'fruit/component-lib/',
                // ['https://github.com/Heshiyu1996/sy-ui','个人组件库']
            ]
        }
    ],

    '/tool/': [
        {
            title: '《实用工具》',
            collapsable: false
        },
        {
            title: '技术',
            collapsable: false,
            children: [
                'charles/',
                // 'vuepress-stat/',
                // 'shell-script/',
                // 'paste/',
            ]
        },
        {
            title: '非技术',
            collapsable: false,
            children: [
                'vuepress-stat/',
                'shell-script/',
                'paste/',
                'airpods/',
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
    
    // 注释原因：直接从“docs/.vuepress/theme/index.js”载入自定义主题
    // theme: 'default-prefers-color-scheme',

    themeConfig: {
        author: 'Heshiyu',
        nav,
        sidebar,
        sidebarDepth: 1, // 侧边栏显示2级

        lastUpdated: '更新时间',
        repo: 'https://github.com/Heshiyu1996',

        editLinks: false,
        editLinkText: ' ',
        displayAllHeaders: false // 展开所有页面的标题
    },

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
        ]
    ],
    // 当指定了显示主题的颜色时，需要增加如下的 postcss 插件
    postcss: {
      plugins: [
        require('css-prefers-color-scheme/postcss'),
        require('autoprefixer')
      ]
    }
};
