const head = require('./head')
const nav = [
    { text: '总览', link: '/overview/' },
    {
        text: '基础', items: [
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
                    { text: 'Vue', link: '/skill/vue/' },
                    { text: 'NodeJS', link: '/skill/nodejs/' }
                ],
            },
            {
                text: '其它', items: [
                    { text: '计算机', link: '/skill/computeracy/' },
                    // { text: '算法', link: '/skill/algorithm/' }
                ]
            },
        ]
    },
    {
        text: '实践', items: [
            {
                text: '平台', items: [
                    { text: 'H5', link: '/business/practice/h5/' },
                    { text: 'PC', link: '/business/practice/pc/' },
                    { text: 'RN', link: '/business/practice/rn/' },
                    { text: '其它', link: '/business/practice/other/' },
                ]
            },
            {
                text: '工具', items: [
                    { text: '工程工具', link: '/business/tool/' },
                ]
            },
        ]
    },
    {
        text: '周边', items: [
            { 
                text: '产出',
                items: [
                    { text:'前端规范', link: '/other/output/standard/' },
                    { text:'前端工程模板（React）', link: '/other/output/fruit/template/' },
                    // { text:'基于Antd的业务组件库', link: '/other/fruit/component-lib/' },
                ] 
            },
            {
                text: '心得', items: [
                    { text: '读书/参会心得', link: '/other/feeling/' }
                ]
            },
        ]
    },
    { text: '工具', link: '/tool/' },
]

const sidebar = {
    // 总览
    '/overview/': ['/overview/'],

    // 基础-HTML
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
    
    // 基础-CSS
    '/skill/css': [
        {
            title: '《CSS》',
            collapsable: false,
            children: [
                'css/layout/',
                'css/bfc/',
                'css/flex-box/',
                'css/sass-less/',
                'css/media/',
                'css/px/',
                'css/other/'
            ]
        }
    ],

    // 基础-JS
    '/skill/js': [
        {
            title: '《JS》',
            collapsable: false,
            children: [
                'js/async-plan/',
                'js/design-patterns/',
                'js/sort/',
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

    // 基础-NodeJS
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

    // 基础-Web
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
                'web/web-vitals/',
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

    // 基础-React
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
                'react/react-ssr/',
                'react/react-composition/',
                'react/hooks/',
                'react/redux/',
                'react/error-usage/'
            ]
        }
    ],

    // 基础-Vue
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

    // 基础-计算机
    '/skill/computeracy': [
        {
            title: '《计算机知识》',
            collapsable: false,
            children: [
                'computeracy/scheduling-strategy/',
            ]
        }
    ],

    // // 基础-算法
    // '/skill/algorithm': [
    //     {
    //         title: '《算法》',
    //         collapsable: false,
    //         children: [
    //             'algorithm/basic/',
    //             'algorithm/sort/',
    //             'algorithm/search/',
    //             'algorithm/dp/',
    //             'algorithm/leetcode/',
    //             'algorithm/time-complexity/',
    //         ]
    //     }
    // ],

    // '/skill/personal': [
    //     {
    //         title: '《个人笔记》',
    //         collapsable: false,
    //         children: [
    //             'personal/2020-q3/',
    //         ]
    //     }
    // ],

    // 实践-H5开发
    '/business/practice/h5': [
        {
            title: 'H5',
            collapsable: false,
            children: [
                'h5/responsive/',
                'h5/1px/',
                'h5/hybrid/',
                'h5/',
            ]
        },
    ],

    // 实践-PC开发
    '/business/practice/pc': [
        {
            title: 'PC',
            collapsable: false,
            children: [
                'pc/',
            ]
        },
    ],

    // 实践-RN
    '/business/practice/rn': [
        {
            title: 'RN',
            collapsable: false,
            children: [
                'rn/',
            ]
        },
    ],

    // 实践-其它
    '/business/practice/other/': ['/business/practice/other/'],


    // 实践-工程工具
    '/business/tool': [
        {
            title: '工程工具',
            collapsable: false,
            children: [
                'tool/webpack/',
                'tool/babel/',
                'tool/npm/',
                'tool/mp/',
                'tool/lerna/',
                'tool/git/',
                'tool/chrome-extension/',
                'tool/rollup/',
            ]
        },
    ],

    // 实践-复盘
    '/business/analyse': [
        {
            title: '复盘',
            collapsable: false,
            children: [
                'analyse/broadcast-radio/',
                'analyse/music-reach-cms/',
                'analyse/music-mobile-h5/',
                'analyse/rpc-audio/',
            ]
        },
    ],

    // 周边-产出
    '/other/output': [
        {
            title: '《前端规范》',
            collapsable: false,
            children: [
                'output/standard/css/',
                'output/standard/js/',
                'output/standard/eslint/',
                'output/standard/stylelint/',
                'output/standard/git/',
                'output/standard/interface/'
            ]
        },
        {
            title: '《前端工程模板》',
            collapsable: false,
            children: [
                'output/fruit/template/',
            ]
        },
    ],

    // 周边-心得
    '/other/feeling': [
        {
            title: '《读书/参会心得》',
            collapsable: false,
        },
        {
            title: '读书心得',
            collapsable: false,
            children: [
                'feeling/webpack5/',
                'feeling/hooks-vs-class/',
                'feeling/vue-composition-api-rfc/',
                'feeling/complete-intro-react/',
                'feeling/webpack-experience/',
                'feeling/react-deep-learning/',
                'feeling/links/'
            ]
        },
        {
            title: '参会心得',
            collapsable: false,
            children: [
                'feeling/d2-2019/',
                'feeling/vue-conf-2018/',
            ]
        }
    ],

    // 实用工具
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
                'http-server/',
            ]
        },
        {
            title: '非技术',
            collapsable: false,
            children: [
                'cmd/',
                'vuepress-stat/',
                'vuepress-zoom/',
                'shell-script/',
                'paste/',
                'airpods/',
            ]
        }
    ]
}

module.exports = {
    title: ' ',
    description: ' ',
    head, // 注入到当前页面的 HTML <head> 中的标签

    serviceWorker: true, // 是否开启 PWA
    base: '/blog/', // 这是部署到github相关的配置
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
        // repo: 'https://github.com/Heshiyu1996',

        editLinks: false,
        editLinkText: ' ',
        displayAllHeaders: false // 展开所有页面的标题
    },

    plugins: [
        // [
        //     '@vuepress/last-updated',
        //     {
        //         transformer: (timestamp, lang) => {
        //             const moment = require('moment')
        //             moment.locale(lang)
        //             moment(timestamp).format('YYYY-MM-DD HH:mm')
        //             const aMonth = 2678400000;
        //             const moreAMonth = Date.now() - timestamp > aMonth;
        //             // return moment(timestamp).fromNow() // xx days ago
        //             return moreAMonth ? moment(timestamp).format('YYYY-MM-DD HH:mm') : moment(timestamp).fromNow();
        //         }
        //     }
        // ],
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
    ],
    // 当指定了显示主题的颜色时，需要增加如下的 postcss 插件
    postcss: {
      plugins: [
        require('css-prefers-color-scheme/postcss'),
        // require('autoprefixer')
      ]
    }
};
