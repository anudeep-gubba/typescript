# Javascript & Typescript - Short Notes


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
