# Class（类）

## public、private、protected
 - public。默认都为public

 - private。只能在**类声明**中访问

 - protected。只能在**类声明**、及**派生类声明**中访问

```ts
class Person {
    protected name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

class Employee extends Person {
    private department: string;
    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    getName() {
        return `Hello, ${this.name}`
    }
}

new Person('Cat').department // Error: 'department'是私有的
new Person('Cat').getName() // ok
```

## readonly修饰符
将**属性**设置为只读（只读属性只能在声明时、或构造函数里被初始化）

## 参数属性
可以把**声明**和**赋值**合并到一起。

```ts
// before
class Person {
    protected name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

// after
class Person {
    constructor(protected name: string) {}
}
```
注：要声明为`public`的参数属性声明不可省。

## 实例属性、静态属性
实例属性：仅当类被实例化时，才会被初始化的属性。

静态属性：存在于类本身而不是类的实例上。
```ts
class Person {
    static handCount = 2;
    constructor(protected name: string) {}
}

```
访问静态属性，需使用`Person.`为前缀。

## 抽象类、抽象方法
关键字`abstract`可用于**定义抽象类**、及其内部的**抽象方法**。

### 抽象类
抽象类一般不能直接被实例化，而是作为其它派生类的基类使用。

#### 注：如果一个实例的声明是个抽象类，那么该实例只能访问抽象类内的方法
```ts
abstract class Person {
    constructor(public name: string) {}

    protected abstract say(): void;
}

class Employee extends Person {
    constructor(name: string) {
        super(name);
    }

    say() {
        return `I am say`;
    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }
}

const he: Person = new Employee('heshiyu'); // 'he'声明的类型是个抽象类
console.log(he.printName()); // Error：printName方法在声明的的抽象类中不存在

```

### 抽象方法
 - 抽象方法不包含具体实现，但要求必须在派生类中实现。
 - 需拥有关键字`abstract`、访问修饰符（public、protected）
