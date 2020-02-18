# 2020-01-21

## 效率优化
### CDN的使用 & 维护
维护地址：`src/assets/cdn`
```
src
└───assets
│   │   css
│   │   img
│   │   cdn
│   │    └───paths // 存放各入口
│   │    │     │    job-list.js
│   │    │     │    life.js
│   │    │     │    login.js
│   │    │
│   │    └───index.js // 中转各入口
│   │   ...
```

```js
// 各入口维护
// login.js
import { cdnURL } from '@/axios/config';

const PREFIX = cdnURL + '/login';

// 公用
const COMMON = {};
// PC资源
const PC = {
    Bg: PREFIX + '/pc/bg.jpg'
};
// 移动端资源
const MOBILE = {
    Bg: PREFIX + '/mobile/bg.jpg'
};

export default {
    COMMON,
    PC,
    MOBILE
};
```

```jsx
// 业务层使用时
import React from 'react';
import CdnURL from '@/assets/cdn';
import './index.less';

function MLoginIndex(props) {
    return (
        <div style={{ backgroundImage: `url(${CdnURL.Login.MOBILE.Bg})` }}>
            切换登录方式
        </div>
    );
}

export default MLoginIndex;
```

### class组
路径：`src/assets/css/function.less`
```js
// 全局引入的三个less文件
{
    loader: 'style-resources-loader',
    options: {
        patterns: [
            path.resolve(paths.appCss, 'variables.less'),
            path.resolve(paths.appCss, 'antd-reset.less'),
            path.resolve(paths.appCss, 'function.less')
        ],
        injector: 'append'
    }
}
```

```less
@font-family-medium: "PingFangSC-Medium", "Microsoft YaHei", Helvetica, Tahoma, Arial,
    "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif;
@font-family-regular: "PingFangSC-Regular", "Microsoft YaHei", Helvetica, Tahoma, Arial,
    "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif;

.font-class(@fontFamily, @fontSize, @fontColor) {
    font-family: @fontFamily;
    font-size: @fontSize;
    color: @fontColor;
    letter-spacing: 0;
}

// 以下可直接使用
.font-normal(@size: 14px, @color: @dark, @isBold: false) {
    .font-class(@font-family-medium, @size, @color);
    & when (@isBold) {
        font-weight: bold;
    };
}

.font-large(@size: 14px, @color: @dark, @isBold: false) {
    .font-class(@font-family-regular, @size, @color);
    & when (@isBold) {
        font-weight: bold;
    };
}

.center() {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

```less
.u-talent-perception {
    .item-wrapper {
        .item {
            .abbr-wrapper {
                position: relative;
                height: 100px;
                text-align: center;
                .font-normal(52px, @dark, true); // .font-normal()

                &:hover {
                    .full-name {
                        .center(); // center()
                        display: inline-block;
                        text-align: center;
                    }
                }
            }
        }
    }
}
```

### data-wrapper
```jsx
/**
 * DataWrapper组件
 * 数据的“空态与非空态”之间灵活切换的展示型HOC容器
 * @param {String} className 自定义className
 * @param {ReactElement} children 非空态下的数据展示
 * @param {Boolean} isLoading 是否加载中（默认false）
 * @param {String} showEmpty 展示空态的条件（默认为true）
 * @param {String} icon 空态图片（默认不展示，值为icon-type后面的type）
 * @param {String} tip 空态提示（默认为“暂无数据”）
 * @param {ReactElement} extra 额外内容（如：添加按钮）
 *
 * @author heshiyu 2020-01-03
 */

import React from 'react';
import { Spin } from 'antd';
import Empty from '@/components/common/empty/index.jsx';
import { IS_MOBILE } from '@/constants/common';
import './index.less';

function DataWrapper(props) {
    const { className, children, isLoading = false, showEmpty = true, icon, tip, extra } = props;

    return (
        <Spin spinning={isLoading}>
            <span className={`u-data-wrapper ${className}`} mode={IS_MOBILE ? 'mobile' : 'pc'}>
                {!showEmpty ? children : <Empty icon={icon} tip={tip} extra={extra} />}
            </span>
        </Spin>
    );
}

export default DataWrapper;
```

```jsx
import React from 'react';
import noData from '@/assets/img/common/no-data.png';

function ApplicationIndex(props) {
    const { current: param } = useRef({ currentPage: 1, pageSize: 10 });
    const { isLoading, data: { list, total = 0 } = {}, dispatch } = useFetch(getApplicationList, param);

    return (

        <div className="m-application">
            <Spin spinning={loading}>
                {/* 职位列表 */}
                <div className="card-wrapper">
                    {(list || [])
                        .filter(item => item.name !== null)
                        .map(item => (
                            <ApplyCard key={item.applyId} item={item} lang={lang} intl={intl} defaultExpand={list.length === 1} />
                        ))}
                </div>
                {total && <Pagination className="u-pagination" />}
            </Spin>
        </div>
    );
}
```

```jsx
import React from 'react';

function ApplicationIndex(props) {
    const { current: param } = useRef({ currentPage: 1, pageSize: 10 });
    const { isLoading, data: { list, total = 0 } = {}, dispatch } = useFetch(getApplicationList, param);

    return (
        <div className="m-application">
            <DataWrapper 
                isLoading={isLoading} 
                showEmpty={!total} 
                icon="zanwujilu"
                tip="暂无记录"
            >
                <div className="card-wrapper">
                    {(list || [])
                        .filter(item => item.name !== null)
                        .map(item => (
                            <ApplyCard key={item.applyId} item={item} lang={lang} intl={intl} defaultExpand={list.length === 1} />
                        ))}
                </div>
                {total && <Pagination className="u-pagination" />}
            </DataWrapper>
        </div>
    );
}
```
<!-- 
```jsx
import React from 'react';
import noData from '@/assets/img/common/no-data.png';

export default function PosiList(props) {
    return (
        <div className="position-list">
            <Spin spinning={loading}>
                {/* 职位列表 */}
                <div className="card-list">
                    <div className="card-wrapper">
                        {(list || []).map(item => (
                            <PosiCard
                                key={item.id}
                                detailInfo={item}
                                checked={checkList.includes(item.id)}
                                onCheck={onCheck}
                                onApply={dispatchApply}
                            />
                        ))}
                    </div>
                </div>

                {!(list || []).length && (
                    <div className="no-position">
                        <img src={noData} style={{ width: '120px' }} alt="" />
                        <p>{intl.get('noData')}</p>
                    </div>
                )}

                {total > 0 && (
                    <Pagination
                        showSizeChanger
                        onChange={onChangePage}
                        onShowSizeChange={onChangeSize}
                        current={pages && search.currentPage > pages ? pages : search.currentPage}
                        pageSize={search.pageSize || 10}
                        total={parseInt(total)}
                    />
                )}
            </Spin>
            <CodeShare {...share} setShare={setShare} />
        </div>
    );
}
``` -->


## 代码优化