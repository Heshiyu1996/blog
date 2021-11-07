module.exports = [
    ['link', { rel: 'icon', href: '/favicon.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ['link', { rel: 'manifest', href: '/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.png' }],
    ['link', { rel: 'mask-icon', href: '/favicon.png', color: '#3eaf7c' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache' }],
    ['meta', { 'http-quiv': 'expires', cotent: '0' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache, must-revalidate' }],
    // 移动端禁止用户缩放
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width,width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      }
    ],
]
