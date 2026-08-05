# JavaScript & TypeScript Classes — Complete Notes

## Table of Contents

**Part A — Class Fundamentals**

1. What is a Class?
2. Classes Before ES6 (Prototype Pattern)
3. ES6 Class Declaration, Constructor, Methods
4. Creating Objects
5. Core JavaScript Class Characteristics
6. Class Expressions
7. Computed Properties

**Part B — Controlling Access** 8. Access Modifiers (`public`, `private`, `protected`) — TypeScript 9. `readonly` Modifier — TypeScript 10. Getters and Setters 11. Private Fields & Private Methods (`#`) — JavaScript (ES2022+) & TypeScript

**Part C — Class Relationships & Shared Behavior** 12. Static Methods and Static Properties 13. Inheritance (`extends` & `super`) 14. Abstract Classes — TypeScript

**Part D — Master Comparison Table**

---

# PART A — Class Fundamentals

## 1. What is a Class?

A **class** is a blueprint used to create objects. It groups **data (properties)** and **functions (methods)** into a single unit for organization and reuse.

**JavaScript**

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}
```

**TypeScript**

```typescript
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
```

> **TS difference:** same syntax, plus type annotations on properties and methods.

---

## 2. Classes Before ES6 (Prototype Pattern)

Before ES6, "classes" were built with **constructor functions** and **prototypes**. Methods were attached to the prototype so they're shared across all instances instead of being recreated per object.

**JavaScript**

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

let person = new Person("John");
console.log(person.getName());
```

**TypeScript (same concept, typed)**

```typescript
function Person(name: string) {
  this.name = name;
}

Person.prototype.getName = function (): string {
  return this.name;
};

let person = new Person("John");
```

---

## 3. ES6 Class Declaration, Constructor, Methods

ES6's `class` keyword is a cleaner, more readable way to do the same thing — internally it's still prototype-based.

- **Constructor** — a special method that auto-runs when `new` creates an object; used to initialize properties.
- **Methods** — functions defined inside the class describing object behavior.

**JavaScript**

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

let person = new Person("John");
console.log(person.getName());
```

**TypeScript**

```typescript
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

let person = new Person("John");
console.log(person.getName());
```

> TypeScript additionally lets you specify a method's **return type**.

---

## 4. Creating Objects

Objects are created with the `new` keyword, which automatically invokes the constructor. Identical in both languages:

```javascript
let person = new Person("John");
```

---

## 5. Core JavaScript Class Characteristics

| #   | Rule                                                                     | JavaScript Example                                                       |
| --- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| 1   | **Classes are functions internally**                                     | `typeof Person` → `"function"`                                           |
| 2   | **`instanceof` checks the chain**                                        | `person instanceof Person` → `true`; `person instanceof Object` → `true` |
| 3   | **Not hoisted** — must declare before use                                | `new Person()` before `class Person {}` → **Error**                      |
| 4   | **Always run in strict mode** — no need for `"use strict"`               | applies automatically inside any class body                              |
| 5   | **Methods are non-enumerable** — won't show up in `for...in` / iteration | `class Person { getName() {} }`                                          |
| 6   | **Must be called with `new`**                                            | `Person()` without `new` → **Error** (`TypeError`)                       |

```javascript
class Person {}
let person = new Person();
console.log(typeof Person); // "function"
console.log(person instanceof Person); // true
console.log(person instanceof Object); // true

let x = Person(); // Error — Class constructor cannot be invoked without 'new'
```

**TypeScript** — identical behavior, with type annotations where relevant (e.g. `getName(): void {}`).

### Compile-Time Type Checking (TypeScript-only benefit)

```javascript
// JavaScript — allowed, no type checking
let person = new Person(123);
```

```typescript
// TypeScript — Compile-time Error, constructor expects a string
let person = new Person(123);
```

---

## 6. Class Expressions

A **class expression** is an alternative way to define a class — usually assigned to a variable, and can be **named or unnamed**. Like function expressions, class expressions are **not hoisted**.

**Basic declaration & object creation**

_JavaScript_

```javascript
let Person = class {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
};

let person = new Person("John");
console.log(person.getName());
console.log(typeof Person); // "function"
```

_TypeScript_

```typescript
let Person = class {
  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }
};

let person = new Person("John");
console.log(person.getName());
```

**Hoisting behavior**

```javascript
let person = new Person(); // Error — used before defined
let Person = class {};
```

**First-Class Citizens** — classes can be assigned to variables, passed as arguments, and returned from functions.

_JavaScript_

```javascript
function factory(aClass) {
  return new aClass();
}

let greeting = factory(
  class {
    sayHi() {
      console.log("Hi");
    }
  },
);

greeting.sayHi();
```

_TypeScript_

```typescript
function factory(aClass: any) {
  return new aClass();
}

let greeting = factory(
  class {
    sayHi(): void {
      console.log("Hi");
    }
  },
);

greeting.sayHi();
```

**Singleton pattern** — a class expression can be instantiated immediately, producing exactly one object.

_JavaScript_

```javascript
let app = new (class {
  constructor(name) {
    this.name = name;
  }

  start() {
    console.log(`Starting ${this.name}`);
  }
})("Awesome App");

app.start();
```

_TypeScript_

```typescript
let app = new (class {
  constructor(private name: string) {}

  start(): void {
    console.log(`Starting ${this.name}`);
  }
})("Awesome App");

app.start();
```

---

## 7. Computed Properties

Allow property names to be created **dynamically** using an expression inside `[]`. The expression is evaluated first; its result becomes the property name. Supported in object literals **and** classes (including getters/setters). TypeScript supports this natively since it's an ES6 feature — it just adds types.

**Basic usage**

_JavaScript_

```javascript
let propName = "c";

const rank = {
  a: 1,
  b: 2,
  [propName]: 3,
};

console.log(rank.c); // 3
```

_TypeScript_

```typescript
let propName: string = "c";

const rank = {
  a: 1,
  b: 2,
  [propName]: 3,
};

console.log(rank.c);
```

**Computed getter inside a class**

_JavaScript_

```javascript
const property = "fullName";

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get [property]() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person("John", "Doe");
console.log(person.fullName); // "John Doe"
```

_TypeScript_

```typescript
const property: string = "fullName";

class Person {
  constructor(
    private firstName: string,
    private lastName: string,
  ) {}

  get [property](): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

**Dynamic key/value object creation**

_JavaScript_

```javascript
const createObject = (key, value) => {
  return { [key]: value };
};

console.log(createObject("name", "John")); // { name: "John" }
```

_TypeScript_

```typescript
const createObject = (key: string, value: string) => {
  return { [key]: value };
};
```

_Without computed properties (manual equivalent):_

```javascript
const createObject = (key, value) => {
  let obj = {};
  obj[key] = value;
  return obj;
};
```

```typescript
const createObject = (key: string, value: string) => {
  let obj: Record<string, string> = {};
  obj[key] = value;
  return obj;
};
```

---

# PART B — Controlling Access

## 8. Access Modifiers — TypeScript Only

**JavaScript has no `public` / `private` / `protected` keywords** — every class member is publicly accessible by default. TypeScript adds these modifiers with **compile-time only** checking (no runtime enforcement).

| JavaScript               | TypeScript                                |
| ------------------------ | ----------------------------------------- |
| No access modifiers      | Supports `private`, `protected`, `public` |
| All members accessible   | Visibility can be controlled              |
| No compile-time checking | Compile-time access checking              |

### `private` — accessible only within the same class

_JavaScript_ (no equivalent — direct access always works)

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

let person = new Person("John");
console.log(person.name); // Accessible
```

_TypeScript_

```typescript
class Person {
  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }
}

let person = new Person("John");
console.log(person.name); // Compile Error
```

### `public` — accessible from anywhere (TS default when no modifier is given)

_JavaScript_

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

let person = new Person("John");
console.log(person.name);
```

_TypeScript_

```typescript
class Person {
  constructor(public name: string) {}
}

let person = new Person("John");
console.log(person.name);
```

### `protected` — accessible in the same class + child (derived) classes only

_JavaScript_

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

class Employee extends Person {}

let emp = new Employee("John");
console.log(emp.name); // Accessible (JS has no restriction)
```

_TypeScript_

```typescript
class Person {
  constructor(protected name: string) {}
}

class Employee extends Person {
  display() {
    return this.name; // OK — inside a subclass
  }
}

let emp = new Employee("John");
console.log(emp.name); // Compile Error — outside class hierarchy
```

### Constructor Shorthand

TypeScript lets you declare + initialize a property directly as a constructor parameter.

```typescript
// Normal
class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// Shorthand — equivalent, less code
class Person {
  constructor(private name: string) {}
}
```

### Quick Comparison

| Feature               | JavaScript                 | TypeScript           |
| --------------------- | -------------------------- | -------------------- |
| `private`             | ❌                         | ✅                   |
| `protected`           | ❌                         | ✅                   |
| `public`              | ❌ (all public by default) | ✅ (also default)    |
| Access checking       | ❌                         | ✅ compile time only |
| Constructor shorthand | ❌                         | ✅                   |

---

## 9. `readonly` Modifier — TypeScript Only

Makes a property **immutable after initialization**. JavaScript has no equivalent for class properties. Checked only at **compile time**.

| JavaScript                   | TypeScript            |
| ---------------------------- | --------------------- |
| No `readonly` modifier       | Supports `readonly`   |
| Properties always modifiable | Immutable after init  |
| No compile-time checking     | Compile-time checking |

**Declaring & reassigning**

_JavaScript_

```javascript
class Person {
  constructor(birthDate) {
    this.birthDate = birthDate;
  }
}

let person = new Person(new Date());
person.birthDate = new Date(); // Allowed
```

_TypeScript_

```typescript
class Person {
  constructor(readonly birthDate: Date) {}
}

let person = new Person(new Date());
person.birthDate = new Date();
// Compile Error: Cannot assign to 'birthDate' because it is a read-only property.
```

**Two valid initialization points**

```typescript
// 1. At declaration
class Person {
  readonly birthDate: Date = new Date(1990, 12, 25);
}

// 2. Inside constructor
class Person {
  readonly birthDate: Date;
  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}

// Shorthand version
class Person {
  constructor(readonly birthDate: Date) {}
}
```

### `readonly` vs `const`

| Feature           | `readonly`                          | `const`                   |
| ----------------- | ----------------------------------- | ------------------------- |
| Used for          | Class properties                    | Variables                 |
| Where initialized | Property declaration or constructor | Variable declaration only |
| Can be reassigned | ❌                                  | ❌                        |

```typescript
class Person {
  constructor(readonly birthDate: Date) {}
}

const age = 25;
// age = 30; ❌ Error
```

---

## 10. Getters and Setters

- **Getter** → returns a property's value (_Accessor_)
- **Setter** → updates a property's value, typically after validation (_Mutator_)

### Traditional method-based approach (pre-ES6 style, still valid)

_JavaScript_

```javascript
class Person {
  constructor(name) {
    this.setName(name);
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name.trim();
  }
}

let person = new Person("John");
console.log(person.getName());
person.setName("Jane");
```

_TypeScript_

```typescript
class Person {
  private name: string;

  constructor(name: string) {
    this.setName(name);
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name.trim();
  }
}
```

> Called explicitly with parentheses: `getName()`, `setName()`.

### ES6 `get` / `set` keywords (accessed like plain properties, no parentheses)

_JavaScript_

```javascript
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value.trim();
  }
}

let person = new Person("John");
console.log(person.name); // Getter
person.name = "Jane"; // Setter
```

_TypeScript_

```typescript
class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value.trim();
  }
}
```

> `_name` avoids a naming collision with the `name` getter/setter.

### Getter without a Setter → effectively read-only

_JavaScript_

```javascript
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

let person = new Person("John");
person.name = "Jane"; // silently has no effect
console.log(person.name); // "John"
```

_TypeScript_

```typescript
class Person {
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }
}

let person = new Person("John");
// person.name = "Jane"; // Compile Error
```

### Getters in plain object literals (JavaScript feature, not class-only)

_JavaScript_

```javascript
let meeting = {
  attendees: [],
  add(name) {
    this.attendees.push(name);
  },
  get latest() {
    return this.attendees[this.attendees.length - 1];
  },
};

meeting.add("John");
meeting.add("Jane");
console.log(meeting.latest);
```

_TypeScript_

```typescript
let meeting = {
  attendees: [] as string[],
  add(name: string) {
    this.attendees.push(name);
  },
  get latest(): string {
    return this.attendees[this.attendees.length - 1];
  },
};
```

### Validation with setters

_JavaScript_

```javascript
class Person {
  constructor(age) {
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value <= 0 || value >= 200) {
      throw "Invalid age";
    }
    this._age = value;
  }
}
```

_TypeScript_

```typescript
class Person {
  constructor(private _age: number) {}

  public get age(): number {
    return this._age;
  }

  public set age(value: number) {
    if (value <= 0 || value >= 200) {
      throw new Error("Invalid age");
    }
    this._age = value;
  }
}

let person = new Person(22);
person.age = 23;
console.log(person.age);
```

### Advanced: `fullName` split across two fields (TypeScript)

```typescript
class Person {
  constructor(
    private _firstName: string,
    private _lastName: string,
  ) {}

  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  set fullName(name: string) {
    const parts = name.split(" ");
    this._firstName = parts[0];
    this._lastName = parts[1];
  }
}

let person = new Person("John", "Doe");
person.fullName = "Jane Smith";
console.log(person.fullName); // "Jane Smith"
```

---

## 11. Private Fields & Private Methods (`#`) — JavaScript (ES2022+) & TypeScript

Unlike TS `private` (compile-time only), the **`#` prefix gives true runtime privacy** in both plain JavaScript and TypeScript.

### Declaring & using private fields

_JavaScript_

```javascript
class Circle {
  #radius;

  constructor(radius) {
    this.#radius = radius;
  }

  get area() {
    return Math.PI * this.#radius ** 2;
  }
}

let circle = new Circle(10);
console.log(circle.area);
```

_TypeScript_

```typescript
class Circle {
  #radius: number;

  constructor(radius: number) {
    this.#radius = radius;
  }

  get area(): number {
    return Math.PI * this.#radius ** 2;
  }
}
```

### Controlled access via getters/setters

_JavaScript_

```javascript
class Circle {
  #radius = 0;

  set radius(value) {
    if (value > 0) {
      this.#radius = value;
    }
  }

  get radius() {
    return this.#radius;
  }
}
```

_TypeScript_

```typescript
class Circle {
  #radius: number = 0;

  set radius(value: number) {
    if (value > 0) {
      this.#radius = value;
    }
  }

  get radius(): number {
    return this.#radius;
  }
}
```

### Private fields are NOT inherited

_JavaScript_

```javascript
class Circle {
  #radius = 10;
}

class Cylinder extends Circle {
  constructor() {
    super();
    // this.#radius — Error, not visible to subclass
  }
}
```

_(Same restriction applies identically in TypeScript.)_

### Checking existence with `in`

_JavaScript_

```javascript
class Circle {
  #radius = 0;

  static hasRadius(circle) {
    return #radius in circle;
  }
}

let circle = new Circle();
console.log(Circle.hasRadius(circle)); // true
```

_(TypeScript syntax is identical, just typed.)_

### Static private fields

_JavaScript_

```javascript
class Circle {
  static #count = 0;

  constructor() {
    Circle.#count++;
  }

  static getCount() {
    return Circle.#count;
  }
}

new Circle();
new Circle();
console.log(Circle.getCount()); // 2
```

_(TypeScript: identical, with `static #count: number = 0;`)_

### Private methods

_JavaScript_

```javascript
class Person {
  #firstName = "John";
  #lastName = "Doe";

  getFullName() {
    return this.#firstLast();
  }

  #firstLast() {
    return `${this.#firstName} ${this.#lastName}`;
  }
}

let person = new Person();
console.log(person.getFullName());
```

_TypeScript_

```typescript
class Person {
  #firstName: string = "John";
  #lastName: string = "Doe";

  getFullName(): string {
    return this.#firstLast();
  }

  #firstLast(): string {
    return `${this.#firstName} ${this.#lastName}`;
  }
}
```

### Private static methods

_JavaScript_

```javascript
class Person {
  constructor(name) {
    this.name = Person.#validate(name);
  }

  static #validate(name) {
    return name.trim();
  }
}
```

_TypeScript_

```typescript
class Person {
  constructor(public name: string) {
    this.name = Person.#validate(name);
  }

  static #validate(name: string): string {
    return name.trim();
  }
}
```

### `#private` (JS) vs `private` (TS keyword)

| Feature                       | JavaScript `#private` | TypeScript `private`      |
| ----------------------------- | --------------------- | ------------------------- |
| Syntax                        | `#field`              | `private field`           |
| Runtime privacy               | ✅ Yes                | ❌ No (compile-time only) |
| Accessible outside class      | ❌ No                 | ❌ Compile-time error     |
| Accessible in subclass        | ❌ No                 | ❌ No                     |
| Supported in plain JavaScript | ✅ Yes                | ❌ No                     |

---

# PART C — Class Relationships & Shared Behavior

## 12. Static Methods and Static Properties

**Static members** belong to the **class itself**, not to instances. Used for helper/utility methods and data shared across all objects.

### Static Methods

_JavaScript (before ES6, on a constructor function)_

```javascript
function Person(name) {
  this.name = name;
}

Person.createAnonymous = function (gender) {
  let name = gender === "male" ? "John Doe" : "Jane Doe";
  return new Person(name);
};
```

_JavaScript (ES6)_

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  static createAnonymous(gender) {
    let name = gender === "male" ? "John Doe" : "Jane Doe";
    return new Person(name);
  }
}
```

_TypeScript_

```typescript
class Person {
  constructor(private name: string) {}

  static createAnonymous(gender: string): Person {
    let name = gender === "male" ? "John Doe" : "Jane Doe";
    return new Person(name);
  }
}
```

### Calling Static Methods — via class name, NOT instance

```javascript
let person = Person.createAnonymous("male"); // ✅ Correct

let person2 = new Person("John");
person2.createAnonymous("male");
// ❌ TypeError: person.createAnonymous is not a function
```

_(Identical rules in TypeScript.)_

### Calling a static method from inside the class

```javascript
class Person {
  static display() {
    console.log("Hello");
  }

  constructor() {
    Person.display(); // or this.constructor.display()
  }
}
```

_(TypeScript: same, with `static display(): void {}`.)_

### Static Properties

```javascript
class Employee {
  static count = 0;
}
```

```typescript
class Employee {
  static count: number = 0;
}
```

Only **one copy** exists for the whole class (unlike instance properties).

**Accessing:**

```javascript
console.log(Employee.count);

class Employee {
  static count = 0;
  static getCount() {
    return Employee.count;
  }
}
```

**Updating on each new instance:**

_JavaScript_

```javascript
class Employee {
  static count = 0;
  constructor() {
    this.constructor.count++;
  }
}

new Employee();
new Employee();
console.log(Employee.count); // 2
```

_TypeScript_

```typescript
class Employee {
  static count: number = 0;
  constructor() {
    Employee.count++;
  }
}

new Employee();
new Employee();
console.log(Employee.count); // 2
```

### Comparison

| Feature                             | JavaScript | TypeScript |
| ----------------------------------- | ---------- | ---------- |
| Static Methods                      | ✅         | ✅         |
| Static Properties                   | ✅         | ✅         |
| Called using Class Name             | ✅         | ✅         |
| Accessible through Object instance  | ❌         | ❌         |
| Type Annotations                    | ❌         | ✅         |
| Access Modifiers (`private static`) | ❌         | ✅         |

---

## 13. Inheritance (`extends` & `super`)

**Inheritance** lets a child (derived) class reuse properties/methods of a parent (base) class — reducing duplication.

### Before ES6 — manual prototype chaining

```javascript
function Animal(legs) {
  this.legs = legs;
}
Animal.prototype.walk = function () {
  console.log("Walking");
};

function Bird(legs) {
  Animal.call(this, legs);
}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.fly = function () {
  console.log("Flying");
};
```

> TypeScript doesn't use this pattern — it uses ES6 `class` syntax directly.

### `extends` — inherit all parent properties/methods

_JavaScript_

```javascript
class Animal {
  constructor(legs) {
    this.legs = legs;
  }

  walk() {
    console.log("Walking");
  }
}

class Bird extends Animal {
  fly() {
    console.log("Flying");
  }
}
```

_TypeScript_

```typescript
class Animal {
  constructor(public legs: number) {}

  walk(): void {
    console.log("Walking");
  }
}

class Bird extends Animal {
  fly(): void {
    console.log("Flying");
  }
}
```

### `super()` — calls the parent constructor

```javascript
class Animal {
  constructor(legs) {
    this.legs = legs;
  }
}

class Bird extends Animal {
  constructor(legs) {
    super(legs);
  }
}
```

```typescript
class Animal {
  constructor(public legs: number) {}
}

class Bird extends Animal {
  constructor(legs: number) {
    super(legs);
  }
}
```

### Child class without its own constructor

If omitted, JS/TS automatically calls the parent constructor implicitly.

```javascript
class Bird extends Animal {
  fly() {
    console.log("Flying");
  }
}
```

### `super()` is mandatory before using `this`

```javascript
class Bird extends Animal {
  constructor(legs) {
    this.legs = legs; // ❌ Error: Must call super constructor before accessing 'this'
  }
}
```

**Correct:**

```javascript
constructor(legs) {
  super(legs);
  this.color = "White";
}
```

_(TypeScript enforces the same rule as a compile error.)_

### Method Overriding — `super.method()`

_JavaScript_

```javascript
class Animal {
  walk() {
    console.log("Walking");
  }
}

class Dog extends Animal {
  walk() {
    super.walk();
    console.log("Dog Walking");
  }
}
```

_TypeScript_

```typescript
class Animal {
  walk(): void {
    console.log("Walking");
  }
}

class Dog extends Animal {
  walk(): void {
    super.walk();
    console.log("Dog Walking");
  }
}
```

### Static Member Inheritance

```javascript
class Animal {
  static hello() {
    console.log("Hello");
  }
}

class Bird extends Animal {}
Bird.hello(); // inherited
```

_(TypeScript: identical with `static hello(): void {}`.)_

### Inheriting Built-in Types (Array, Map, Set, String, etc.)

_JavaScript_

```javascript
class Queue extends Array {
  enqueue(item) {
    this.push(item);
  }

  dequeue() {
    return this.shift();
  }
}
```

_TypeScript (with generics)_

```typescript
class Queue<T> extends Array<T> {
  enqueue(item: T): void {
    this.push(item);
  }

  dequeue(): T | undefined {
    return this.shift();
  }
}
```

---

## 14. Abstract Classes — TypeScript Only

> **JavaScript has no `abstract` keyword or abstract-class support.** This is a TypeScript-only feature; JS achieves similar effects only via conventions/runtime checks.

An **Abstract Class**:

- Cannot be instantiated directly
- Serves as a base class providing common structure
- Can mix **implemented methods** and **abstract methods** (declaration only, no body)

```typescript
abstract class Employee {}
```

### With constructor, properties, and a getter

```typescript
abstract class Employee {
  constructor(
    protected firstName: string,
    protected lastName: string,
  ) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

### Abstract methods — must be implemented by every subclass

```typescript
abstract class Employee {
  abstract getSalary(): number;

  get fullName(): string {
    return "Employee";
  }
}
```

### Cannot instantiate directly

```typescript
abstract class Employee {}
let emp = new Employee();
// ❌ Error: Cannot create an instance of an abstract class.
```

### Full implementation example

```typescript
abstract class Employee {
  constructor(
    protected firstName: string,
    protected lastName: string,
  ) {}

  abstract getSalary(): number;

  compensationStatement(): string {
    return `${this.firstName} earns ${this.getSalary()}`;
  }
}

class FullTimeEmployee extends Employee {
  constructor(
    firstName: string,
    lastName: string,
    private salary: number,
  ) {
    super(firstName, lastName);
  }

  getSalary(): number {
    return this.salary;
  }
}

let emp = new FullTimeEmployee("John", "Doe", 12000);
console.log(emp.compensationStatement()); // "John earns 12000"
```

```typescript
class Contractor extends Employee {
  constructor(
    firstName: string,
    lastName: string,
    private rate: number,
    private hours: number,
  ) {
    super(firstName, lastName);
  }

  getSalary(): number {
    return this.rate * this.hours;
  }
}
```

### Abstract Class vs Regular Class

| Feature                       | Regular Class | Abstract Class |
| ----------------------------- | ------------- | -------------- |
| Can create object             | ✅ Yes        | ❌ No          |
| Can have constructor          | ✅ Yes        | ✅ Yes         |
| Can have normal methods       | ✅ Yes        | ✅ Yes         |
| Can have abstract methods     | ❌ No         | ✅ Yes         |
| Must be extended to be useful | ❌ No         | ✅ Yes         |

---

# PART D — Master Comparison & Key Takeaways

| Topic                                       | JavaScript   | TypeScript              |
| ------------------------------------------- | ------------ | ----------------------- |
| `class` keyword                             | ✅ (ES6)     | ✅                      |
| Type annotations                            | ❌           | ✅                      |
| Compile-time type checking                  | ❌           | ✅                      |
| Class expressions                           | ✅           | ✅ (typed)              |
| Computed properties                         | ✅           | ✅ (typed)              |
| Getters/Setters                             | ✅           | ✅ (typed)              |
| `public`/`private`/`protected` keywords     | ❌           | ✅ (compile-time only)  |
| `readonly`                                  | ❌           | ✅                      |
| Constructor shorthand                       | ❌           | ✅                      |
| Static methods/properties                   | ✅           | ✅ (+ `private static`) |
| Inheritance (`extends`/`super`)             | ✅           | ✅                      |
| Abstract classes                            | ❌           | ✅                      |
| `#private` fields/methods (runtime privacy) | ✅ (ES2022+) | ✅                      |

### One-Line Summary Per Topic

- **Classes** are syntactic sugar over prototypes — not hoisted, always strict mode, methods non-enumerable, must be called with `new`.
- **Class expressions** behave like function expressions: assignable, passable, not hoisted, enable singletons.
- **Computed properties** let `[]` expressions dynamically name properties/getters/setters.
- **Access modifiers** (`public`/`private`/`protected`) exist only in TypeScript and are compile-time only.
- **`readonly`** (TS-only) locks a property after its first assignment — in the declaration or constructor.
- **Getters/setters** (`get`/`set`) let property-style syntax run logic — validation, computed values, controlled mutation.
- **`#private` fields/methods** give **true runtime privacy** in both JS (ES2022+) and TS — stronger than TS's `private` keyword.
- **Static members** belong to the class, not instances; called via the class name.
- **Inheritance** via `extends`/`super` reuses parent behavior; `super()` must run before `this` is used in a child constructor.
- **Abstract classes** (TS-only) define a contract — cannot be instantiated, force subclasses to implement specific methods.
