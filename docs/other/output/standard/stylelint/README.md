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
```
    yarn add npm-run-all -D
```

## 5、使用
```json
// package.json
"script": {
    "lint": "run-p eslint stylelint",
    "eslint": "eslint --fix --ext .js,.jsx src",
    "stylelint": "stylelint src/**/*.less src/**/*.css --fix"
}
```
## 6、常见配置
```json
{
    "extends": ["stylelint-config-standard", "stylelint-config-recess-order"],
    "ignoreFiles": ["src/**/*.jsx"],
    "rules": {
        "indentation": 4,

        "number-leading-zero": "never",

        "string-quotes": "double",

        "declaration-block-trailing-semicolon": "always",

        "length-zero-no-unit": true,

        "declaration-empty-line-before": [
            "never",
            { ignore: [ "after-declaration" ] }
        ],
        "rule-empty-line-before": [
            "always",
            { except: [ "after-single-line-comment", "first-nested" ] }
        ],
        "block-closing-brace-empty-line-before": [ "never" ],
        "at-rule-empty-line-before": [
            "always",
            { ignore: [ "inside-block", "blockless-after-same-name-blockless" ] }
        ],
        "max-empty-lines": 1,
        "no-eol-whitespace": true,
        "no-missing-end-of-source-newline": true,

        "unit-case": "lower",
        "color-hex-case": "upper",
        "value-keyword-case": "lower",
        "function-name-case": "lower",
        "property-case": "lower",
        "at-rule-name-case": "lower",
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-element-case": "lower",
        "selector-type-case": "lower",
        "media-feature-name-case": "lower",

        "block-opening-brace-space-before": "always",
        "comment-whitespace-inside": "always",
        "declaration-colon-space-after": "always",
        "declaration-colon-space-before": "never",
        "declaration-block-semicolon-space-before": "never",
        "function-comma-space-after": "always",
        "selector-combinator-space-before": "always",
        "selector-combinator-space-after": "always",
        "selector-list-comma-space-before": "never",
        "selector-descendant-combinator-no-non-space": true,
        "value-list-comma-space-after": "always",
        "value-list-comma-space-before": "never",
        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "no-descending-specificity": null
    }
}

```
