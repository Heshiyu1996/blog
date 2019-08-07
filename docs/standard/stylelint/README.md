# Stylelint规范

## 安装Stylelint及插件
    yarn add --dev stylelint stylelint-order

> stylelint-order是强制按照某个熟悉编写css。

## 配置Stylelint规则
    yarn add --dev stylelint-config-standard stylelint-config-recess-order

> stylelint-config-standard是官方的代码风格
>
> stylelint-config-recess-order是社区上的stylelint-order规则配置

```js
// .stylelintrc
{
  "extends": ["stylelint-config-standard", "stylelint-config-recess-order"],
  "rules": {
    "at-rule-no-unknown": [true, {"ignoreAtRules" :[
        "mixin", "extend", "content"
    ]}]
  }
}
```

## 配置npm script
    "stylelint": "stylelint src/css/**/*.scss src/css/**/*.css"

## npm-run-all（并发执行npm脚本）
    yarn add npm-run-all -D

### 使用
```json
"lint": "run-p eslint stylelint",
"eslint": "eslint --fix --ext .js,.jsx src",
"stylelint": "stylelint src/**/*.less src/**/*.css --fix"
```
