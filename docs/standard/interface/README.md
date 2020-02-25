---
title: 接口规范
date: 2020-02-24
description: 1
tags:
 - 工程规范
---
> 规范约定先行，尽量避免在联调过程中产生不必要的问题。

大致流程：
![alt](./img/interface-0.png)

[[toc]]

## ① 基本要求
### 时间上
在后端完成 **开发方案** 之后。
> 需明确时间点：x月x号 上/下午

![alt](./img/interface-1.png)

### 内容上
每个接口只需定义3个部分：**基本属性、请求/响应信息、接口状态**。（**后端主导，前端填写**）

 - 基本属性
![alt](./img/interface-2.png)

 - 请求/响应信息
![alt](./img/interface-3.png)

 - 接口状态
![alt](./img/interface-4.png))

> 养成好习惯，及时更新接口状态


### 注意事项
#### 导入GoTest
提测前，**前端**需将接口一键导入到GoTest，供**QA**进行接口测试。

![alt](./img/interface-5.png))

#### 接口更新
提测前，如果后端接口发生变更，应该：
 - 通知相应的开发人员
 - 修改NEI上对应接口
 - 若已提测，需将该接口重新导入GoTest

一句话概括：**所有操作都在NEI进行，GoTest仅供接口定稿、接口测试**

## ② RESTful API规范 <Badge type="error" text="New"/>
（待完善）

## ③ 状态码
### 常用状态码
```js
// 状态码枚举
export const ServerCode = {
    SUCCESS: 200,
    CONTINUE: 400,
    WRONG_PARAM: 401,
    WRONG_REQUEST: 402,
    FORBIDDEN: 403,
    WRONG_URL: 404,
    NO_LOGIN: 406,
    TIME_OUT: 408,
    WRONG_SERVER: 500,
    WRONG_REALIZE: 501,
    WRONG_GATEWAY: 502,
    BAD_SERVER: 503,
    GATEWAY_TIME_OUT: 504,
    WRONG_VERSION: 505
};

// 状态码描述枚举
export const ServerCodeMap = {
    [ServerCode.SUCCESS]: '成功',
    [ServerCode.CONTINUE]: '继续', // 传递指定“继续参数”即可成功
    [ServerCode.WRONG_PARAM]: '参数格式出错',
    [ServerCode.WRONG_REQUEST]: '请求出错',
    [ServerCode.FORBIDDEN]: '拒绝访问',
    [ServerCode.WRONG_URL]: '请求地址出错',
    [ServerCode.NO_LOGIN]: '未登录',
    [ServerCode.TIME_OUT]: '请求超时',
    [ServerCode.WRONG_SERVER]: '服务器内部错误',
    [ServerCode.WRONG_REALIZE]: '服务未实现',
    [ServerCode.WRONG_GATEWAY]: '网关错误',
    [ServerCode.BAD_SERVER]: '服务不可用',
    [ServerCode.GATEWAY_TIME_OUT]: '网关超时',
    [ServerCode.WRONG_VERSION]: 'HTTP版本不受支持'
};

// 重定向状态码
export const RedirectMap = {
    [ServerCode.FORBIDDEN]: '#/403',
    [ServerCode.NO_LOGIN]: '#/login'
};
```
### 注意事项
目前前端有2种提示形式：
 - `400`，可扩展至`400101`、`400102`等来表示业务上更多种可能的情况
 - `402`，一般需后端提供`msg`字段
![alt](./img/interface-6.png)

## ④ [前端] 接口Mock <Badge type="error" text="New"/>
<!-- 建议：NEI作为**接口编辑平台**（开发用），GoTest作为**接口提测平台**（QA用）。 -->

> NEI：[https://nei.netease.com/project?pid=51981](https://nei.netease.com/project?pid=51981)
> 
> GoTest：[https://gotest.hz.netease.com/web/#/home/project/api?projectId=175](https://gotest.hz.netease.com/web/#/home/project/api?projectId=175)



### NEI中Mock使用说明
```
# 1、构建Mock工程目录（仅初次需要）
# （请将“key”替换成项目的key，可在"EHR项目组/设置/工程标识"中查看）
nei build -k <key>

# 2、启动Mock工程
nei server

# 3、接口更新时
nei update -w
```

## ⑤ [后端] 接口自测 <Badge type="error" text="New"/>
三条准则：
 - `Controller层面`无明显错误
    - 例如请求方式正确，参数类型正确，返回字段齐全以及类型正确

 - `Servic层面`跑通基本功能（例如：增删改查）
    - 增删改查内部遇到复杂逻辑按实际情况自测;

 - `数据库`
    - 校对默认值和字数限制微增大;

## ⑥ 接口联调
### 联调方式
| 联调方式 | 前端 | 后端 | 部署 |
| ----- |:---:|:---:|:---:|
| 1、部署联调 | 服务器 | 服务器 | 至少每天一次 |
| 2、本地联调 | 本地 | 服务器 | / |

不推荐采用`2、本地联调`，原因：
 - 联调应当在 **前、后端确保各自的开发质量后** 进行
 - 本地环境的不稳定性
 - 部分特殊情景无法模拟

## ⑦ 接口测试（待完善）

### 测试策略
接口测试策略共分为3大方面：**测试分析、测试分类、测试工具**。

![alt](./img/interface-7.png)

