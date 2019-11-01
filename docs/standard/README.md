# 团队规范
一个团队应该有良好的规范，可以事半功倍。

## 在项目中引入ESLint & Prettier的方法
### 1、安装ESLint、Prettier、
```
yarn add eslint -D

yarn add prettier -D

yarn add eslint-plugin-prettier -D
```

### 2、配置文件.eslintrc.js
#### 普通版：
```js
// .eslintrc.js
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jquery": true
    },
    extends: ['eslint:recommended'],
    parserOptions: {
        ecmaVersion: 6, // 指定要使用的ECMAScript6版本
        sourceType: 'module'
    },

    plugins: ['prettier'],

    rules: {
        'arrow-parens': ['error', 'as-needed'], // 箭头函数参数只有一个时，可以省略参数的括号，否则error提示

        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 生产环境中不允许使用debugger

        'no-console': 'off', // 允许使用console

        'prettier/prettier': 'warn', // 对于prettier报错进行warn提醒
    }
}

}

```

#### React版：
```js
module.exports = {
    extends: ['react-app', 'eslint:recommended'],
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 6, // 指定要使用的ECMAScript6版本
        sourceType: 'module',
        ecmaFeatures: { 'jsx': true } //启用JSX
    },

    plugins: ['prettier', 'react-hooks'],

    rules: {
        'arrow-parens': ['error', 'as-needed'], // 箭头函数参数只有一个时，可以省略参数的括号，否则error提示

        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 生产环境中不允许使用debugger

        'no-console': 'off', // 允许使用console

        'react/jsx-no-target-blank': 'off', // a链接允许直接使用_blank

        'prettier/prettier': 'warn', // 对于prettier报错进行warn提醒

        'jsx-a11y/anchor-has-content': 'off',

        "react-hooks/rules-of-hooks": "error",

        "react-hooks/exhaustive-deps": "warn",

        'jsx-a11y/anchor-is-valid': 'off'
    }
}

```
#### Vue版：
```js
module.exports = {
    root: true,

    env: {
        browser: true,
        node: true
    },

    extends: ['plugin:vue/essential', 'eslint:recommended'],

    plugins: ['prettier'],

    parserOptions: {
        parser: 'babel-eslint'
    },
    // plugins: ['vue'], // 要求对 *.vue 文件进行lint

    rules: {
        'arrow-parens': ['error', 'as-needed'], // 箭头函数参数只有一个时，可以省略参数的括号，否则error提示

        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 生产环境中不允许使用console

        'no-console': 'off', // 允许使用console

        'prettier/prettier': 'warn'
    }
}

```

### 3、配置.prettierrc.js：
```js
// .prettierrc.js
module.exports = {
    printWidth: 150, // 设置prettier单行输出（不折行）的（最大）长度

    tabWidth: 4, // 设置工具每一个水平缩进的空格数

    useTabs: false, // 使用tab（制表位）缩进而非空格

    semi: true, // 在语句末尾添加分号

    singleQuote: true, // 使用单引号而非双引号

    trailingComma: 'none', // 在任何可能的多行中输入尾逗号

    bracketSpacing: true, // 在对象字面量声明所使用的的花括号后（{）和前（}）输出空格

    arrowParens: 'avoid', // 为单行箭头函数的参数添加圆括号，参数个数为1时可以省略圆括号

    jsxBracketSameLine: true, // 在多行JSX元素最后一行的末尾添加 > 而使 > 单独一行（不适用于自闭和元素）

    rangeStart: 0, // 只格式化某个文件的一部分

    rangeEnd: Infinity, // 只格式化某个文件的一部分

    filepath: 'none', // 指定文件的输入路径，这将被用于解析器参照

    requirePragma: false, // (v1.7.0+) Prettier可以严格按照按照文件顶部的一些特殊的注释格式化代码，这些注释称为“require pragma”(必须杂注)

    insertPragma: false, //  (v1.8.0+) Prettier可以在文件的顶部插入一个 @format的特殊注释，以表明改文件已经被Prettier格式化过了。

    proseWrap: 'preserve', // (v1.8.2+)

    jsxBracketSameLine: false, // jsx闭合标签在同一行
}
```

### 4、配置VS Code保存时自动修复
```js
"eslint.autoFixOnSave": true
```

### 5、设定package.json脚本
```json
// package.json
"script": {
    "format": "prettier --write \"./src/**/*.{js,jsx,json}\"",
    "eslint": "eslint --fix --ext .js,.jsx src",
}
```