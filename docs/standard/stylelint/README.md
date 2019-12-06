# Stylelint规范

## 1、安装Stylelint及插件
    yarn add --dev stylelint

    yarn add --dev stylelint-config-standard stylelint-order stylelint-config-recess-order

> stylelint-config-standard：官方的代码风格
> 
> stylelint-order：强制按照某个顺序写css属性（类似：定位>display>宽高>边距>行高>文字>颜色）。
>
> stylelint-config-recess-order：stylelint-order规则配置

## 2、配置Stylelint规则

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

## 3、设定package.json脚本
```json
// package.json
"script": {
    "stylelint": "stylelint src/css/**/*.scss src/css/**/*.css"
}
```

## 4、npm-run-all（并发执行npm脚本）
    yarn add npm-run-all -D

### 5、使用
```json
// package.json
"script": {
    "lint": "run-p eslint stylelint",
    "eslint": "eslint --fix --ext .js,.jsx src",
    "stylelint": "stylelint src/**/*.less src/**/*.css --fix"
}
```
