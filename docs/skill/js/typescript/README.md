# Typescript基本知识

## type和interface的区别
### 不同点
 - type可以声明类型别名、联合类型
```js
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
 - type可以通过`typeof`获取实例的类型。[查看](#typeof操作符)
 
 - interface可以声明合并
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

### 相同点
 - 都可以描述一个对象或函数的类型
```ts
interface User {
    name: string;
    age: number;
}
interface SetUser {
    (name: string, age: number): void;
}
```

```ts
type User = {
    name: string;
    age: number;
}
type SetUser = (name: string, age: number) => void;
```

 - 都可以 **互相继承**（继承的语法不同）
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
type User = Name & {
    age: number;
}
```



## typeof操作符
在TypeScript中，在type语句中，可以通过`typeof`**获取实例的类型**，并进行赋值。

```js
interface Person {
    name: string;
    age: number;
}

const heshiyu: Person = { name: 'heshiyu', age: 24 };

// 声明一个类型
// 等价于typeof Man = Person
type Man = typeof heshiyu;
```