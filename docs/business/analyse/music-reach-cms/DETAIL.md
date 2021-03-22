# 通用组件封装
[[toc]]

## useTable
功能：统一维护 “表格组件（Table）” 所需的状态逻辑，并暴露 “操作数据、方法”

 - 输入：`apiSearch`、`apiDelete`
 - 输出：`reload`、`tableProps`

hook内部 负责维护 “表格通用状态、逻辑”（如：`分页器`、`表格数据`），并向外暴露 “操作数据、方法”（如：`reload`、`tableProps`）。

```jsx
import { useState, useEffect, useMemo } from 'react';

const PAGE_SIZE = 20;

export default function useTable(props) {
    const { apiSearch, apiDelete } = props;
    
    // hook内维护： page（分页）、data（列表数据）
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [data, setData] = useState([]);

    const load = async (p) => {
        // p start from 1
        const newData = await apiSearch({
            pageSize: PAGE_SIZE,
            pageId: p
        });

        setData(newData.data);
        setTotalItems(newData.total);
    };

    // const reload = async (customPage = page) => load(customPage);
    const reload = async (isNew) => {
        // 从第一页开始
        if (isNew) {
            setPage(1);
            load(1);
        } else {
            load(page);
        }
    };
    useEffect(() => {
        reload();
    }, []);

    const tableProps = useMemo(() => ({
        pagination: {
            current: page,
            pageSize: PAGE_SIZE,
            hideOnSinglePage: false,
            total: totalItems,
            onChange: (p) => {
                setPage(p);
                load(p);
            },
            showSizeChanger: false,
        },
        dataSource:
                data.map(item => ({ ...item, key: item.id })),
        onRemoveItem: (id, valueField = 'id') => {
            const func = async (keyId) => {
                await apiDelete({ [valueField]: keyId });
                await load(page);
            };
            func(id);
        },
    }));

    // hook暴露：reload（重新请求）、tableProps（table所需属性）
    return [reload, tableProps];
}

```

业务层调用：
```jsx
// “频道”Table
const [reloadList, listTableProps] = useTable({
    apiSearch: getListTasks,
    apiDelete: stopTask,
    showDelete: true,
    showTotal: total => `共 ${total} 条结果`
});

const reload = (type) => {
    reloadList(true);
};

<Table {...listTableProps} />
```

## usePrevious
功能：内部通过 `ref` 维护 “本轮更新前的值”。
 - 输入：初始值（`value`）
 - 输出：该值在 “本轮更新前的值”。

```jsx
import { useEffect, useRef } from 'react';

export default function usePreviou(value) {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
}
```