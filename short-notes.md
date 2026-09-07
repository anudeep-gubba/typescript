# Javascript & Typescript - Short Notes

## Content
- [Data Types](data-types)
- [Type Aliases & Interfaces](type-aliases--interfaces)
- 

# Data Types
A data type is a classification that specifies what kind of value a variable can store.

Data types are broadly classified into **two categories**:

1. **Primitive Data Types**
2. **Non-Primitive (Reference) Data Types**

```
Data Types
│
├── Primitive
│   ├── Number
│   ├── String
│   ├── Boolean
│   ├── Null
│   ├── Undefined
│   ├── Symbol
│   └── BigInt
│
└── Non-Primitive
    ├── Object
    ├── Array
    ├── Function
    ├── Tuple (TypeScript)
    ├── Enum (TypeScript)
    ├── Any (TypeScript)
    ├── Unknown (TypeScript)
    ├── Never (TypeScript)
    └── Object Literals (TypeScript)
```

### **Primitive data types:** Primitive types store a single value and are immutable.

1. **Number** — Represents integers and floating-point numbers.
2. **String** — Represents text.
3. **Boolean** — Represents logical values.
4. **Null** — Represents the intentional absence of a value.
5. **Undefined** — Represents a variable that has been declared but not assigned a value.
6. **Symbol** — Represents a unique and immutable identifier.
7. **BigInt** — Used for integers larger than JavaScript's safe integer limit.

```ts
// 1. Number
let age: number = 10;
let price: number = 10.99;

// 2. String
let firstName: string = 'Anudeep';
let lastName: string = 'G';
console.log(`Full Name ${firstName} ${lastName}`);

// 3. Boolean
let isLoggedIn: boolean = true;

// 4. Null
let user: null = null;
// More commonly
let username: string | null = null;
console.log(username);

// 5. Undefined
let city: undefined = undefined;
// Or
let cityName: string | undefined;
console.log(city);
console.log(cityName);

// 6. Symbol
const id: symbol = Symbol('user');
console.log(id);

// 7. BigInt
const bigNumber: bigint = 12345678901234567890n;
console.log(bigNumber);

```

### Non-Primitive / Reference Data Types

**Non-primitive (reference) types** can represent complex data structures and may contain multiple values. Unlike primitive values, objects, arrays, and functions are generally **mutable** and are handled through references.

> **Important:** `Tuple`, `Enum`, `Any`, `Unknown`, and `Never` are **TypeScript type-system features**, not JavaScript reference data types. They are included here because they are commonly learned alongside TypeScript data types.

---
1. **Object:** An **object** is a collection of key-value pairs. Keys are usually strings or symbols, and values can have different types.

2. **Array:** An **array** is an ordered collection of values. The elements can be of the same type or, depending on the type definition, multiple types.

3. **Tuple — TypeScript Only:** A **tuple** is an array with fixed length, fixed order, fixed types at each position. JavaScript does not have a native tuple type. TypeScript enforces tuples at compile time.

4. **Function:** Functions are **first-class values** in JavaScript and TypeScript. They can be assigned to variables, passed as arguments, returned from other functions, stored in objects or arrays. TypeScript allows you to specify parameter types and return types.

5. **Enum — TypeScript:** An **enum** defines a group of named constants. Enums can be numeric or string-based.

6. **Any — TypeScript:** The `any` type allows a variable to hold **any type of value**. It effectively disables TypeScript's type checking for that value, so it should generally be avoided unless necessary.

7. **Unknown — TypeScript:** The `unknown` type can hold a value of any type, but it is **safer than `any`**. You must perform type checking before using the value.

8. **Never — TypeScript:** The `never` type represents a value that **never occurs**. It is commonly used for functions that always throw an error, never finish execution, or represent unreachable code paths.

9. **Object Literals:** An **object literal** is an object created directly using `{}`. TypeScript allows you to define its structure using inline object types, `type` aliases, or `interface`. For larger applications, `interface` or `type` aliases are generally preferred because they make types reusable.

```ts
// ==========================================
// NON-PRIMITIVE / REFERENCE DATA TYPES
// ==========================================

// 1. Object
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "Alice",
  age: 30,
};

console.log(person.name);
console.log(person.age);


// ==========================================
// 2. Array
// ==========================================

// Using type[]
const numbers: number[] = [1, 2, 3, 4, 5];

console.log(numbers[0]);       // First element
console.log(numbers.length);   // Length of array


// Using generic Array<T>
const strings: Array<string> = ["Hello", "World"];

console.log(strings[1]);       // World


// Array with multiple types
const mixed: (string | number)[] = ["Alice", 30, "Bob", 25];

console.log(mixed);


// ==========================================
// 3. Tuple
// TypeScript Only
// ==========================================

// Fixed length, fixed order and fixed types
const tuple: [string, number, boolean] = ["Alice", 30, true];

console.log(tuple[0]); // string
console.log(tuple[1]); // number
console.log(tuple[2]); // boolean


// ==========================================
// 4. Function
// ==========================================

// Function declaration
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const multiply = (a: number, b: number): number => {
  return a * b;
};

console.log(add(2, 3));       // 5
console.log(multiply(4, 5));  // 20


// Function stored in a variable
const greet = (name: string): string => {
  return `Hello ${name}`;
};

console.log(greet("Alice"));


// ==========================================
// 5. Enum
// TypeScript Only
// ==========================================

enum Color {
  Red,
  Green,
  Blue,
}

const favoriteColor: Color = Color.Green;

console.log(favoriteColor); // 1


// String enum
enum Status {
  Success = "SUCCESS",
  Failed = "FAILED",
  Pending = "PENDING",
}

const currentStatus: Status = Status.Success;

console.log(currentStatus); // SUCCESS


// ==========================================
// 6. Any
// TypeScript Only
// ==========================================

// any disables type checking
let randomValue: any = 10;

console.log(randomValue); // 10

randomValue = "Hello";
console.log(randomValue); // Hello

randomValue = true;
console.log(randomValue); // true

// TypeScript allows this with any,
// even though it may cause a runtime error.
// randomValue.toUpperCase();


// ==========================================
// 7. Unknown
// TypeScript Only
// ==========================================

let unknownValue: unknown = 10;

console.log(unknownValue); // 10

unknownValue = "Hello";

console.log(unknownValue); // Hello

unknownValue = true;

console.log(unknownValue); // true


// Must check the type before performing
// type-specific operations
if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase());
} else {
  console.log("unknownValue is not a string");
}


// ==========================================
// 8. Never
// TypeScript Only
// ==========================================

// Function that always throws an error
function throwError(message: string): never {
  throw new Error(message);
}

// Function that never finishes
function infiniteLoop(): never {
  while (true) {
    // Infinite loop
  }
}


// ==========================================
// 9. Object Literal
// ==========================================

// Inline object type
const car: {
  make: string;
  model: string;
  year: number;
} = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};

console.log(car.make);
console.log(car.model);
console.log(car.year);


// ==========================================
// Object Literal using type alias
// ==========================================

type User = {
  name: string;
  age: number;
};

const user1: User = {
  name: "Alice",
  age: 30,
};

console.log(user1);


// ==========================================
// Object Literal using interface
// ==========================================

interface Employee {
  name: string;
  age: number;
}

const employee: Employee = {
  name: "Alice",
  age: 30,
};

console.log(employee);
```
# Type Aliases & Interfaces

TypeScript allows you to create **reusable custom types** so you don't have to repeat the same type definitions throughout your code.

The two main ways to create reusable types are:

- **Type Aliases (`type`)**
- **Interfaces (`interface`)**

Both improve **code readability**, **maintainability**, and **reusability**.
**Type Aliases (`type`)**: A **Type Alias** creates a custom name (alias) for an existing type.
It can represent: Primitive types, Object types, Arrays, Functions, Union types,Intersection types

**Syntax**: ``` type AliasName = Type;```


# Type Casting (only in Typescript)
-----
Type Casting is the process of telling TypeScript to treat a variable as a different type.
Casting does not change the actual value. It only changes how TypeScript interprets the type.

## Casting with `as` (Recommended)
```ts
let value:unknown = 'hello';
console.log((value as string).length); // 5
```

## Casting with `<>`
```ts
let value: unknown = "hello";
console.log((<string>value).length); // 5
```
## Force Casting
- Used when TypeScript prevents an unsafe cast.
- Force casting bypasses TypeScript's safety checks. Use it only when necessary.

```ts
let value = "Hello";

console.log(value as unknown as number);
```
# TypeScript – Generics

## What are Generics?
Generics allow you to write **reusable code** that works with **different data types** while maintaining **type safety**.
Instead of writing separate functions or classes for `string`, `number`, etc., you write **one generic version**.

**Without Generics**

```ts
function printString(value: string): string {
  return value;
}

function printNumber(value: number): number {
  return value;
}
```
❌ Duplicate code.

**With Generics**

```ts
function functionName<T>(value: T): T {
  return value;
}
```
✅ One function works for every type.

## Generic Syntax

```ts
function functionName<T>(value: T): T {
  return value;
}

function createPair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}
```

`<T>` is called a **Type Parameter**.

You can use any name:

- `T` → Type (most common)
- `K` → Key
- `V` → Value
- `U` → Another Type

## 1. Generic Functions
Create reusable functions for multiple data types.
```ts
function printValue<T>(value: T): T {
  return value;
}

console.log(printValue<string>("Hello")); // Hello
console.log(printValue<number>(100));   // 100
console.log(printValue<boolean>(true)); // true
```
TypeScript usually detects the type automatically.You can simply write `console.log(printValue("Hello"));`

## Multiple Generic Types
Use multiple type parameters when working with different types.

```ts
function createPair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const pair = createPair("John", 25); // ["John",25]
```
## 2. Generic Classes

Generics allow one class to work with different data types.
```ts
class Box<T> {
  constructor(private value: T) {}

  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box<number>(100);
const stringBox = new Box<string>("Hello");
```
## 3. Generic Type Alias
Reusable custom types.

```ts
type ApiResponse<T> = {
  data: T;
};

const user: ApiResponse<string> = {
  data: "John",
};

const age: ApiResponse<number> = {
  data: 25,
};
```
## 4. Generic Interface

Interfaces also support generics.

```ts
interface Response<T> {
  data: T;
  status: number;
}

// Usage with string
const userResponse: Response<string> = {
  data: "John",
  status: 200,
};
```
## 5. Default Generic Type

Provide a default type if none is specified.

```ts
class Box<T = string> {
  constructor(private value: T) {}
}

const box = new Box("Hello");
```
Since no type is specified. T = string

## 6. Generic Constraints (`extends`)

Sometimes you want to **restrict** which types can be used. Use **`extends`**.

### Example

```ts
function printLength<T extends { length: number }>(value: T) {
  console.log(value.length);
}

printLength("Hello"); // Works
printLength([1, 2, 3]); // Works
printLength(100); // Doesn't work Because number has no length property
```

```ts
function createPair<T extends string | number, U extends string | number>(
  a: T,
  b: U,
) {
  return [a, b];
}

createPair("John", 25); // allowed
createPair(10, 20); // allowed
createPair(true, false); // Not allowed Because boolean isn't allowed
```

---
# TypeScript Utility Types

> **Note:** Utility Types are **built-in TypeScript types** that help you **modify existing types** without rewriting them. They are commonly used in real-world applications such as APIs, forms, database models, and state management.

---

## What are Utility Types?

Instead of creating new interfaces for every scenario, Utility Types let you **reuse and transform existing types**.

Without Utility Types:

```ts
interface User {
  id: number;
  name: string;
  email: string;
}
```

Need another interface for updates?

```ts
interface UpdateUser {
  id?: number;
  name?: string;
  email?: string;
}
```

❌ Duplicate code.

With Utility Types:

```ts
type UpdateUser = Partial<User>;
```

✅ One line, reusable, and maintainable.

## 1. `Partial<T>`

Makes **all properties optional**.

### Syntax

```ts
Partial<Type>;
```

### Example

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

const user: Partial<User> = {
  name: "John",
};
```
- Only `name` is provided.
- `id` and `email` become optional.
---
## 2. `Required<T>`

Makes **every property mandatory**, even optional ones.

### Syntax

```ts
Required<Type>;
```

### Example

```ts
interface Car {
  brand: string;
  model: string;
  mileage?: number;
}

const car: Required<Car> = {
  brand: "BMW",
  model: "X5",
  mileage: 20000,
};
```
Even though `mileage` was optional, it is now required.

---
## 3. `Readonly<T>`
Prevents properties from being modified.

### Syntax

```ts
Readonly<Type>;
```

### Example

```ts
interface User {
  name: string;
  age: number;
}

const user: Readonly<User> = {
  name: "John",
  age: 25,
};

// user.age = 30; ❌ Error
```
Once assigned, values cannot be changed.

---
## 4. `Record<K, V>`
Creates an object with a **specific key type** and **value type**.

### Syntax

```ts
Record<KeyType, ValueType>;
```

### Example

```ts
const marks: Record<string, number> = {
  John: 95,
  Alice: 90,
  Bob: 88,
};
```

Meaning

```ts
{
    [key:string]:number;
}
```
Every key is a string.
Every value is a number.

---
## 5. `Pick<T, Keys>`
Select **only specific properties**.

### Syntax

```ts
Pick<Type, "key1" | "key2">;
```

### Example

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type UserName = Pick<User, "name">;

const user: UserName = {
  name: "John",
};
```
Only `name` exists.

---
## 6. `Omit<T, Keys>`
Remove unwanted properties.

### Syntax

```ts
Omit<Type, "key">;
```

### Example

```ts
interface User {
  id: number;
  password: string;
  name: string;
}

type PublicUser = Omit<User, "password">;
```

Now

```ts
{
  (id, name);
}
```
Password is removed.

---
## 7. `Exclude<T, U>`

Removes types from a **Union Type**.

### Syntax

```ts
Exclude<Union, RemoveType>;
```

### Example

```ts
type Status = "Pending" | "Success" | "Failed";

type NewStatus = Exclude<Status, "Failed">;
```

Now

```ts
Pending | Success;
```

---
## 8. `ReturnType<T>`
Gets the return type of a function.

### Example

```ts
function getUser() {
  return {
    id: 1,
    name: "John",
  };
}

type User = ReturnType<typeof getUser>;
```

User becomes

```ts
{
  id: number;
  name: string;
}
```

---
## 9. `Parameters<T>`
Gets the parameter types of a function.

### Example

```ts
function login(username: string, password: string) {}

type LoginParams = Parameters<typeof login>;
```

Result

```ts
[string, string];
```

Access first parameter

```ts
type Username = Parameters<typeof login>[0];
```

Result

```ts
string;
```

---
# 🟨 Utility Types Comparison

| Utility Type    | Purpose                          | Real-world Example              |
| --------------- | -------------------------------- | ------------------------------- |
| `Partial<T>`    | Make all properties optional     | Update APIs (PATCH), forms      |
| `Required<T>`   | Make all properties required     | Database save, validation       |
| `Readonly<T>`   | Prevent modifications            | Config objects, immutable state |
| `Record<K,V>`   | Create key-value objects         | Maps, dictionaries, caches      |
| `Pick<T,K>`     | Keep selected properties         | User profile, login response    |
| `Omit<T,K>`     | Remove selected properties       | Hide passwords, internal fields |
| `Exclude<T,U>`  | Remove types from a union        | Filter enum/union values        |
| `ReturnType<T>` | Get a function's return type     | API/service responses           |
| `Parameters<T>` | Get a function's parameter types | Wrappers, middleware            |
