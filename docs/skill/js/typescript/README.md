# Typescript基本知识

[[toc]]

## 如何理解TypeScript
TypeScript是JavaScript的超集，主要提供了**类型系统、对ES6的支持**。通过TypeScript静态类型检查，可以在**开发时尽早发现语法错误或传参错误，也增强代码的阅读性、可维护性**

## type与interface
相同点：
 - 都可以描述**一个对象或函数的类型**
 - 都可以 **互相继承**（继承的语法不同）

不同点：
 - `type`一般用来 **声明类型别名、联合类型**：
 - 在 `type` 语句中，可以通过`typeof`**获取实例的类型**，并赋值
 - `interface`可以 **将同一类型的声明进行合并**

### 示例
**【相同点】** 都可以描述**一个对象或函数的类型**
```ts
type User = {
    name: string;
    age: number;
}
type SetUser = (name: string, age: number) => void;
```

```ts
interface User {
    name: string;
    age: number;
}
interface SetUser {
    (name: string, age: number): void;
}
```

**【相同点】** 都可以 **互相继承**（继承的语法不同）
```ts
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
type User = Name & { age: number };
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

**【不同点】** `type`一般用来 **声明类型别名、联合类型**：
```ts
// 声明类型别名
type Name = string;

// 联合类型
interface Dog {
    wong();
}
interface Cat {
    miao();
}
type Pet = Dog | Cat;
```

**【不同点】** 在 `type` 语句中，可以通过`typeof`**获取实例的类型**，并赋值：
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
 
 - `interface`可以 **将同一类型的声明进行合并**
```js
interface User {
    name: string;
}
interface User {
    age: number;
}

/*
 * 最后，User接口会变为：
 * interface User {
 *     name: string;
 *     age: number;
 * }
 */
```
