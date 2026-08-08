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
