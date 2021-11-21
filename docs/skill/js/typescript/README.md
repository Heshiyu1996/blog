# Typescript

[[toc]]

## 如何理解TypeScript
 1. TypeScript 是 JavaScript 的超集，主要提供了 **类型系统、对ES6的支持**；
 2. 通过 TypeScript 的静态类型检查，可以在 **开发时尽早发现 语法错误 或 传参错误**；
 3. 增强代码的阅读性、可维护性

## type与interface
#### 相同点
 - 都可以描述 **一个 对象 或 函数 的类型**
 - 都可以实现 **类型继承**

#### 不同点
 - `type`一般用来 **声明类型别名、联合类型**；
 - 对于 `type` 声明，可以通过 `typeof` 获取实例的类型，并完成赋值
 - `interface`可以 **将同一类型的声明进行合并**

#### 具体示例
**【相同点】** 都可以描述**一个 对象 或 函数 的类型**
```ts
// 描述一个 User对象 的类型
type User = {
    name: string;
    age: number;
}

// 描述一个 SetUser函数 的类型
type SetUser = (name: string, age: number) => void;
```

```ts
// 描述一个 User对象 的类型
interface User {
    name: string;
    age: number;
}

// 描述一个 SetUser函数 的类型
interface SetUser {
    (name: string, age: number): void;
}
```

**【相同点】** 都可以实现 **继承**
 - `type`: 通过 `&`
 - `interface`: 通过 `extends`

它们可以各自继承，也可以互相继承。

```ts
// User对象类型 继承 Name对象类型
type Name = {
    name: string;
}
type User = Name & { age: number };
```

```ts
// User对象类型 继承 Name对象类型
interface Name {
    name: string;
}
interface User extends Name {
    age: number;
}
```


```ts
type Name = {
    name: string;
}
interface User extends Name {
    age: number;
}
```

```ts
interface Name {
    name: string;
}
type User = Name & { age: number };
```

**【不同点】** `type`一般用来声明 **类型别名、联合类型**：
```ts
// 声明 类型别名（某种类型的同义词，更易于理解）
type Name = string;

// 联合类型
interface Dog {
    wong();
}
interface Cat {
    miao();
}

// 声明 联合类型（多类型中的一种）
type Pet = Dog | Cat;
```

**【不同点】** 对于 `type` 声明，可以通过 `typeof` 获取 “实例的类型” ，并完成赋值
```ts
interface Person {
    name: string;
    age: number;
}

const heshiyu: Person = { name: 'heshiyu', age: 24 };

// 声明一个类型
// 等价于typeof Man = Person
type Man = typeof heshiyu;
```
 
 - `interface` 默认可以 **合并同一类型的声明**
```js
interface User {
    name: string;
}
interface User {
    age: number;
}

/*
 * 最后，User类型 会自动合并为：
 * interface User {
 *     name: string;
 *     age: number;
 * }
 */
```

:::tip
官方推荐能用 `interface` 实现尽量用 `interface`（interface更加贴合JS对象的工作模式）；无法实现时，可考虑 `type`。

> Because an interface more closely maps how JavaScript objects work by being open to extension, we recommend using an interface over a type alias when possible.

:::

## 泛型
```ts
// 通过 <T> 传递类型参数，下面示例约束 参数和返回值类型一致
function identity<T>(arg: T): T {
    return arg;
}

// 与 JS 中的函数类似，使用时需传入类型
let foo = identity<string>('TS');
// 由于 TS 会自动推断类型，可省略类型传参
let bar = identity('TS');
```

## propTypes和TS的区别
- 都是可以用来**进行类型检查**
- 对于propTypes，通过`defaultProps` 来定义默认值

`propTypes` 通过 `defaultProps` 定义默认值。
```js
import PropTypes from 'prop-types';

// 将属性声明为 JS 原生类型
MyComponent.propTypes = {
  name: PropTypes.string,
  visible: PropTypes.bool,
  // ...
}

// 指定 props 的默认值：
MyComponent.defaultProps = {
  name: 'Heshiyu',
  visible: true,
};
```