# TypeScript/JavaScript Notes

# Table of Content

- [what is Javascript](#what-is-javascript)
- [what is Typescript](#what-is-typescript)
- [JavaScript vs TypeScript](#javascript-vs-typescript)
- [Installation](#installation)
- [Comments](#comments)
- [Variables](#variables)
- [Identifiers](#identifiers)
- [What is Variable Declaration?](#what-is-variable-declaration)
- [What is let?](#what-is-let)
- [What is const?](#what-is-const)
- [What is a Data Type?](#what-is-a-data-type)
- [Primitive Data Types](#1-primitive-data-types)
- [Non-Primitive (Reference) Data Types](#2-non-primitive-reference-data-types)
- [What is the typeof Operator?](#what-is-the-typeof-operator)
- [What is an Array?](#what-is-an-array)
- [JavaScript & TypeScript Array Methods](#javascript--typescript-array-methods)
- [JavaScript & TypeScript Array Methods: map(), filter(), and reduce()](#javascript--typescript-array-methods-map-filter-and-reduce)

# What is JavaScript?

- JavaScript (JS) is a high-level, interpreted programming language used to build interactive web applications.
- It runs directly in browsers and can also run on servers using Node.js.
- JavaScript is dynamically typed, meaning variable types are determined at runtime.

# What is TypeScript?

- **TypeScript** is a **syntactic superset of JavaScript** that adds **static typing**.
- It extends JavaScript by adding **type annotations** and other features, making code easier to write, maintain, and debug.
- TypeScript code is **transpiled (compiled) into JavaScript** using the TypeScript compiler (`tsc`).
- Since browsers understand only JavaScript, TypeScript must be converted into JavaScript before execution.

---

# JavaScript vs TypeScript

| JavaScript               | TypeScript                       |
| ------------------------ | -------------------------------- |
| Dynamically typed        | Statically typed                 |
| Runs directly in browser | Compiles to JavaScript first     |
| Errors mostly at runtime | Errors caught during compilation |
| No type checking         | Supports type checking           |
| Easier to start          | Better for large applications    |

# Installation

Install TypeScript as a development dependency:

```bash
npm install typescript --save-dev
```

---

#### Configure the TypeScript Compiler

Create a default `tsconfig.json` file:

```bash
npx tsc --init
```

Example configuration:

```json
{
  "include": ["typescript/*.ts"],
  "compilerOptions": {
    "rootDir": "./typescript",
    "outDir": "./build"
  }
}
```

#### Explanation

- **include** – Specifies which files/folders TypeScript should compile.
- **compilerOptions** – Contains compiler settings.
- **outDir** – Specifies the folder where compiled JavaScript files will be generated.

---

### Compile a TypeScript File

Compile a specific file:

```bash
npx tsc filename.ts
```

This generates:

```text
filename.js
```

---

# Run the Compiled JavaScript

```bash
node filename.js
```

right now tsconfig.json is already you can run directly `npx tsc` to compile all files at once

# Run TypeScript Directly (Without Manual Compilation)

Instead of compiling first, you can use **tsx**.

Install (optional):

```bash
npm install tsx --save-dev
```

Run directly:

```bash
npx tsx filename.ts
```

# Comments

1. Single Comments

```
// single line comment
let x=6
```

2. Multi-line Comments

```
/*
This is
Multi-line
comments
*/
```

# Variables

variables are containers for storing data values

variables can be declared in 4 ways:

**Modern Javascript**

1. Using let
2. Using const

**Older Javascript**

1. Using var (Not Recommended)
2. Automatically( Not Recommended)

**Examples**

```
let x = 5;
const y = 6;
```

# Identifiers

Variables are identified with **names** called **identifiers**

The rules for constructing names (identifiers) are:

- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter, a $ sign or an underscore (\_).
- Names are case sensitive (X is different from x).
- Reserved words (JavaScript keywords) cannot be used as names.

---

# What is Variable Declaration?

**Variable declaration** means creating a variable to store data in memory.

Both **JavaScript** and **TypeScript** provide three keywords for declaring variables:

- `const` ✅ (Preferred)
- `let` ✅
- `var` ❌ (Legacy, avoid)

**JavaScript**

```javascript
let carName = "Volvo";
```

**TypeScript**

```typescript
let carName: string = "Volvo";
```

> The only difference is that TypeScript lets you specify the variable's type (`string`).

---

# 1. `let` – Mutable Variable

Use `let` when the variable's value **can change** later.

## JavaScript

### Declaration

```javascript
let carName;
```

Initially, the variable's value is **`undefined`**.

### Assigning Later

```javascript
let carName;
carName = "Volvo";
```

### Declaration + Initialization

```javascript
let carName = "Volvo";
```

---

## TypeScript

The syntax is the same, but you can specify the type.

```typescript
let carName: string;
```

Assigning later:

```typescript
let carName: string;
carName = "Volvo";
```

Declaration and initialization:

```typescript
let carName: string = "Volvo";
```

### Type Safety

```typescript
let age: number = 25;

// age = "Twenty Five"; ❌ Error
```

TypeScript prevents assigning the wrong data type.

---

# 2. `const` – Immutable Reference (Recommended)

Use `const` when the variable **should not be reassigned**.

## JavaScript

```javascript
const carName = "Volvo";
```

- Cannot be reassigned.
- Must be initialized during declaration.

Example:

```javascript
const price = 100;

// price = 200; ❌ Error
```

---

## TypeScript

```typescript
const carName: string = "Volvo";
```

Example:

```typescript
const price: number = 100;

// price = 200; ❌ Error
```

The behavior is the same as JavaScript, but TypeScript also validates the data type.

---

# 3. Using `const` and `let` Together

## JavaScript

```javascript
const price1 = 5;
const price2 = 6;

let total = price1 + price2;
```

## TypeScript

```typescript
const price1: number = 5;
const price2: number = 6;

let total: number = price1 + price2;
```

### Explanation

- `price1` and `price2` never change → `const`
- `total` may change later → `let`

---

# 4. Undeclared Variables (Not Recommended)

## JavaScript

```javascript
x = 5;
y = 6;
z = x + y;
```

❌ Avoid this because:

- Makes code harder to read.
- Creates accidental global variables.
- Leads to bugs.

Always declare variables explicitly.

---

## TypeScript

This is **not allowed**.

```typescript
x = 5;
```

❌ Error:

```
Cannot find name 'x'.
```

TypeScript forces you to declare variables before using them.

---

# 5. `var` (Legacy)

Before ES6 (2015), JavaScript used `var`.

## JavaScript

```javascript
var x = 5;
var y = 6;
var z = x + y;
```

---

## TypeScript

```typescript
var x: number = 5;
var y: number = 6;
var z: number = x + y;
```

Although `var` is supported in both JavaScript and TypeScript, it is **not recommended** because it uses **function scope** instead of **block scope**, which can lead to unexpected behavior.

---

# What is let?

The `let` keyword was introduced in **ES6 (ECMAScript 2015)** to overcome many limitations of `var`.

Variables declared with `let`:

- ✅ Have **Block Scope**
- ✅ Must be **declared before use**
- ✅ Cannot be **redeclared in the same scope**
- ✅ Can be **reassigned**

---

# 1. Block Scope

A variable declared with `let` is only accessible within the block (`{}`) where it is declared.

## JavaScript

```javascript
{
  let x = 2;
  console.log(x); // 2
}

// console.log(x); ❌ ReferenceError
```

---

## TypeScript

```typescript
{
  let x: number = 2;
  console.log(x);
}

// console.log(x); ❌ Error
```

### Explanation

- The variable exists **only inside the block**.
- Once execution leaves the block, the variable is destroyed.

---

# 2. Function Scope

Inside a function, variables declared with `var`, `let`, and `const` are accessible only within that function.

## JavaScript

```javascript
function myFunction() {
  var x = 1;
  let y = 2;
  const z = 3;

  console.log(x, y, z);
}

// x, y, z cannot be accessed here
```

---

## TypeScript

```typescript
function myFunction() {
  var x: number = 1;
  let y: number = 2;
  const z: number = 3;
}
```

### Explanation

Regardless of whether you use `var`, `let`, or `const`, variables declared inside a function cannot be accessed outside that function.

---

# 3. Global Scope (`var`)

Variables declared with `var` do **not** have block scope.

## JavaScript

```javascript
{
  var x = 2;
}

console.log(x); // 2
```

---

## TypeScript

```typescript
{
  var x: number = 2;
}

console.log(x); // 2
```

### Explanation

Although `x` is declared inside a block, it is still accessible outside because `var` uses **function scope**, not block scope.

---

# 4. Reassignment vs Redeclaration

## Reassignment

Changing the value of an existing variable.

### JavaScript

```javascript
let age = 25;

age = 26; // ✅ Allowed
```

### TypeScript

```typescript
let age: number = 25;

age = 26; // ✅ Allowed
```

---

## Redeclaration

Creating the same variable again in the same scope.

### JavaScript

```javascript
let age = 25;

let age = 30; // ❌ Error
```

### TypeScript

```typescript
let age: number = 25;

let age: number = 30; // ❌ Error
```

### Explanation

- `let` allows **reassignment**.
- `let` does **not allow redeclaration** within the same scope.

---

# 5. `var` Allows Redeclaration

## JavaScript

```javascript
var x = 10;
var x = 20; // ✅ Allowed

console.log(x); // 20
```

---

## TypeScript

```typescript
var x: number = 10;
var x: number = 20;

console.log(x);
```

Although allowed, this can easily introduce bugs and is one reason `var` is discouraged.

---

# 6. Redeclaration Inside Blocks

## Using `var`

```javascript
var x = 10;

{
  var x = 2;
}

console.log(x); // 2
```

### Explanation

The inner declaration overwrites the outer variable because `var` ignores block scope.

---

## Using `let`

```javascript
let x = 10;

{
  let x = 2;
}

console.log(x); // 10
```

---

## TypeScript

```typescript
let x: number = 10;

{
  let x: number = 2;
}

console.log(x); // 10
```

### Explanation

The `x` inside the block is a completely different variable.

---

# 7. Redeclaration in Different Blocks

Using `let`, the same variable name can be used in different blocks.

## JavaScript

```javascript
let x = 2;

{
  let x = 3;
}

{
  let x = 4;
}
```

---

## TypeScript

```typescript
let x: number = 2;

{
  let x: number = 3;
}

{
  let x: number = 4;
}
```

### Explanation

Each block has its own scope, so each `x` is a different variable.

---

# 8. Hoisting

## What is Hoisting?

**Hoisting** is JavaScript's behavior of moving variable and function declarations to the top of their scope before execution.

---

## `var` Hoisting

Variables declared with `var` are hoisted **and initialized with `undefined`**.

### JavaScript

```javascript
console.log(carName); // undefined

var carName = "Volvo";
```

Equivalent to:

```javascript
var carName;

console.log(carName);

carName = "Volvo";
```

---

## TypeScript

```typescript
console.log(carName);

var carName: string = "Volvo";
```

TypeScript compiles this to JavaScript, so the runtime behavior is the same.

---

# `let` Hoisting

Variables declared with `let` are **hoisted but not initialized**.

Accessing them before declaration results in a **ReferenceError** due to the **Temporal Dead Zone (TDZ)**.

## JavaScript

```javascript
console.log(carName);

let carName = "Volvo";
```

❌ ReferenceError

---

## TypeScript

```typescript
console.log(carName);

let carName: string = "Volvo";
```

❌ Compilation error (and would also fail at runtime if compiled)

### Explanation

The variable exists but cannot be accessed until its declaration line is executed.

---

# Difference Between `var`, `let`, and `const`

| Feature       | `var`                               | `let`                          | `const`                        |
| ------------- | ----------------------------------- | ------------------------------ | ------------------------------ |
| Scope         | Function / Global                   | Block `{}`                     | Block `{}`                     |
| Reassignment  | ✅ Yes                              | ✅ Yes                         | ❌ No                          |
| Redeclaration | ✅ Yes                              | ❌ No                          | ❌ No                          |
| Hoisting      | Hoisted & initialized (`undefined`) | Hoisted, not initialized (TDZ) | Hoisted, not initialized (TDZ) |
| Recommended   | ❌ No                               | ✅ Yes                         | ✅ Yes (Default choice)        |

---

# What is const?

The `const` keyword was introduced in **ES6 (ECMAScript 2015)**.

Variables declared with `const`:

- ✅ Cannot be **reassigned**
- ✅ Cannot be **redeclared** in the same scope
- ✅ Have **Block Scope**
- ✅ Must be **initialized during declaration**

> **Important:** `const` makes the **reference constant**, **not the value**.

---

# 1. Cannot Be Reassigned

Once a variable is declared using `const`, its reference cannot be changed.

## JavaScript

```javascript
const PI = 3.14159;

// PI = 3.14;      ❌ Error
// PI = PI + 10;   ❌ Error
```

---

## TypeScript

```typescript
const PI: number = 3.14159;

// PI = 3.14;      ❌ Error
// PI = PI + 10;   ❌ Error
```

### Explanation

After assigning a value to a `const` variable, you cannot assign a new value to it.

---

# 2. Must Be Initialized

A `const` variable **must be assigned a value at the time of declaration**.

## JavaScript

### ✅ Correct

```javascript
const PI = 3.14159;
```

### ❌ Incorrect

```javascript
const PI;
PI = 3.14159;
```

---

## TypeScript

### ✅ Correct

```typescript
const PI: number = 3.14159;
```

### ❌ Incorrect

```typescript
const PI: number;
PI = 3.14159;
```

### Explanation

Unlike `let`, a `const` variable cannot be declared first and assigned later.

---

# 3. When to Use `const`

Use `const` whenever the variable **should not be reassigned**.

Examples include:

- Primitive values (`string`, `number`, `boolean`)
- Arrays
- Objects
- Functions
- Regular expressions (RegExp)

Using `const` by default makes code safer and easier to maintain.

---

# 4. Constant Objects and Arrays

A common misconception is that `const` makes an object or array completely immutable.

**Reality:** `const` only prevents **reassigning the reference**.

You **can** modify the contents of an array or object.

You **cannot** replace the array or object with a new one.

---

# 5. Constant Arrays

## JavaScript

```javascript
const cars = ["Saab", "Volvo", "BMW"];

cars[0] = "Toyota";
cars.push("Audi");

console.log(cars);
```

✅ Allowed because the same array reference is being modified.

---

## TypeScript

```typescript
const cars: string[] = ["Saab", "Volvo", "BMW"];

cars[0] = "Toyota";
cars.push("Audi");
```

---

### ❌ Reassigning the Array

```javascript
const cars = ["Saab", "Volvo", "BMW"];

// cars = ["Toyota", "Audi"]; ❌ Error
```

```typescript
const cars: string[] = ["Saab", "Volvo", "BMW"];

// cars = ["Toyota", "Audi"]; ❌ Error
```

---

# 6. Constant Objects

## JavaScript

```javascript
const car = {
  type: "Fiat",
  model: "500",
  color: "White",
};

car.color = "Red";
car.owner = "John";
```

✅ Allowed because only object properties are changing.

---

## TypeScript

```typescript
const car = {
  type: "Fiat",
  model: "500",
  color: "White",
};

car.color = "Red";
car.owner = "John";
```

---

### ❌ Reassigning the Object

```javascript
const car = {
  type: "Fiat",
};

// car = { type: "Volvo" }; ❌ Error
```

```typescript
const car = {
  type: "Fiat",
};

// car = { type: "Volvo" }; ❌ Error
```

---

# 7. Block Scope

Like `let`, `const` has **Block Scope**.

## JavaScript

```javascript
const x = 10;

{
  const x = 2;
  console.log(x); // 2
}

console.log(x); // 10
```

---

## TypeScript

```typescript
const x: number = 10;

{
  const x: number = 2;
  console.log(x);
}

console.log(x);
```

### Explanation

The `x` inside the block is a completely different variable.

---

# 8. Redeclaration

A `const` variable **cannot be redeclared in the same scope**.

## JavaScript

```javascript
const x = 2;

// const x = 3; ❌ Error
```

---

## TypeScript

```typescript
const x: number = 2;

// const x: number = 3; ❌ Error
```

---

## Different Blocks

Redeclaring the same variable name in different blocks is allowed.

### JavaScript

```javascript
const x = 2;

{
  const x = 3;
}

{
  const x = 4;
}
```

---

### TypeScript

```typescript
const x: number = 2;

{
  const x: number = 3;
}

{
  const x: number = 4;
}
```

Each block has its own scope.

---

# 9. Reassignment

A `const` variable cannot be reassigned.

## JavaScript

```javascript
const x = 2;

// x = 5; ❌ Error
```

---

## TypeScript

```typescript
const x: number = 2;

// x = 5; ❌ Error
```

---

# 10. Hoisting

## What is Hoisting?

Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution.

---

## `const` Hoisting

Variables declared with `const` are **hoisted but not initialized**.

Accessing them before declaration results in a **ReferenceError** because they are in the **Temporal Dead Zone (TDZ)**.

### JavaScript

```javascript
console.log(carName);

const carName = "Volvo";
```

❌ ReferenceError

---

### TypeScript

```typescript
console.log(carName);

const carName: string = "Volvo";
```

❌ Compilation error (and would also fail at runtime if compiled)

---

# Difference Between `var`, `let`, and `const`

| Feature                            | `var`                               | `let`                          | `const`                        |
| ---------------------------------- | ----------------------------------- | ------------------------------ | ------------------------------ |
| Scope                              | Function / Global                   | Block `{}`                     | Block `{}`                     |
| Reassignment                       | ✅ Yes                              | ✅ Yes                         | ❌ No                          |
| Redeclaration                      | ✅ Yes                              | ❌ No                          | ❌ No                          |
| Must initialize during declaration | ❌ No                               | ❌ No                          | ✅ Yes                         |
| Hoisting                           | Hoisted & initialized (`undefined`) | Hoisted, not initialized (TDZ) | Hoisted, not initialized (TDZ) |
| Recommended                        | ❌ No                               | ✅ Yes                         | ⭐ Default choice              |

---

# What is a Data Type?

A **data type** is a classification that specifies **what kind of value a variable can store**.

It determines:

- The kind of data a variable can hold.
- The operations that can be performed on the data.
- How the data is stored in memory.
- How the compiler/interpreter validates the data.

### Example

**JavaScript**

```javascript
let age = 25;
age = "Twenty Five"; // ✅ Allowed
```

**TypeScript**

```typescript
let age: number = 25;

// age = "Twenty Five"; ❌ Error
```

TypeScript prevents assigning an incorrect type during compilation.

---

# Categories of Data Types

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

---

# 1. Primitive Data Types

Primitive types store **a single value** and are immutable.

Both JavaScript and TypeScript support the same primitive data types.

---

## Number

Represents **integers** and **floating-point numbers**.

### JavaScript

```javascript
let age = 25;
let price = 99.99;
```

### TypeScript

```typescript
let age: number = 25;
let price: number = 99.99;
```

Examples

```
10
-20
3.14
0.99
```

---

## String

Represents text.

Strings can use:

- Single quotes `' '`
- Double quotes `" "`
- Backticks `` ` ` `` (Template Literals)

### JavaScript

```javascript
let name = "Alice";
```

### TypeScript

```typescript
let name: string = "Alice";
```

Template Literal

```typescript
let name: string = "Alice";

console.log(`Hello ${name}`);
```

---

## Boolean

Represents logical values.

Possible values:

- `true`
- `false`

### JavaScript

```javascript
let isLoggedIn = true;
```

### TypeScript

```typescript
let isLoggedIn: boolean = true;
```

---

## Symbol

Represents a **unique and immutable identifier**.

Useful for creating unique object property keys.

### JavaScript

```javascript
const id = Symbol("user");
```

### TypeScript

```typescript
const id: symbol = Symbol("user");
```

---

## BigInt

Used for integers larger than JavaScript's safe integer limit.

### JavaScript

```javascript
const bigNumber = 12345678901234567890n;
```

### TypeScript

```typescript
const bigNumber: bigint = 12345678901234567890n;
```

---

## Null

Represents the **intentional absence of a value**.

### JavaScript

```javascript
let user = null;
```

### TypeScript

```typescript
let user: null = null;
```

More commonly:

```typescript
let user: string | null = null;
```

---

## Undefined

Represents a variable that has been declared but **not assigned a value**.

### JavaScript

```javascript
let city;

console.log(city); // undefined
```

### TypeScript

```typescript
let city: undefined = undefined;
```

or

```typescript
let city: string | undefined;
```

---

# 2. Non-Primitive (Reference) Data Types

Non-primitive types can store **multiple values** or represent **complex data structures**.

Unlike primitive types, they are stored and passed by **reference**.

---

## Object

Represents a collection of **key-value pairs**.

### JavaScript

```javascript
const person = {
  name: "Alice",
  age: 30,
};
```

### TypeScript

```typescript
const person: object = {
  name: "Alice",
  age: 30,
};
```

---

## Array

Stores multiple values, usually of the same type.

### JavaScript

```javascript
const numbers = [10, 20, 30];
```

### TypeScript

```typescript
const numbers: number[] = [10, 20, 30];
```

or

```typescript
const numbers: Array<number> = [10, 20, 30];
```

---

## Tuple (TypeScript Only)

A tuple is an array with:

- Fixed length
- Fixed order
- Fixed data types

JavaScript has **no tuple type**.

### TypeScript

```typescript
let employee: [string, number] = ["Alice", 30];
```

---

## Function

Functions are first-class citizens in both JavaScript and TypeScript.

### JavaScript

```javascript
function greet(name) {
  return `Hello ${name}`;
}
```

### TypeScript

```typescript
function greet(name: string): string {
  return `Hello ${name}`;
}
```

---

## Enum (TypeScript Only)

Enums define a group of named constants.

JavaScript has **no built-in enum**.

### TypeScript

```typescript
enum Color {
  Red,
  Green,
  Blue,
}

let color: Color = Color.Red;
```

---

## Any (TypeScript Only)

Represents **any type of value**.

```typescript
let value: any = 10;

value = "Hello";
value = true;
```

### Use Carefully

`any` disables TypeScript's type checking.

---

## Unknown (TypeScript Only)

A safer alternative to `any`.

```typescript
let value: unknown = "Hello";
```

Before using it, you must verify its type.

```typescript
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

---

## Never (TypeScript Only)

Represents values that **never occur**.

Usually used for functions that never return.

```typescript
function throwError(message: string): never {
  throw new Error(message);
}
```

---

## Object Literals (TypeScript)

TypeScript allows you to define the structure of custom objects.

Using a **type alias**

```typescript
type Person = {
  name: string;
  age: number;
};

const user: Person = {
  name: "Alice",
  age: 30,
};
```

Or using an **interface** (recommended for larger applications)

```typescript
interface Person {
  name: string;
  age: number;
}

const user: Person = {
  name: "Alice",
  age: 30,
};
```

---

# JavaScript vs TypeScript Data Types

| Data Type                       | JavaScript         | TypeScript        |
| ------------------------------- | ------------------ | ----------------- |
| Number                          | ✅                 | ✅                |
| String                          | ✅                 | ✅                |
| Boolean                         | ✅                 | ✅                |
| Null                            | ✅                 | ✅                |
| Undefined                       | ✅                 | ✅                |
| Symbol                          | ✅                 | ✅                |
| BigInt                          | ✅                 | ✅                |
| Object                          | ✅                 | ✅                |
| Array                           | ✅                 | ✅                |
| Function                        | ✅                 | ✅                |
| Tuple                           | ❌                 | ✅                |
| Enum                            | ❌                 | ✅                |
| Any                             | ❌                 | ✅                |
| Unknown                         | ❌                 | ✅                |
| Never                           | ❌                 | ✅                |
| Object Literals (Typed Objects) | Basic objects only | ✅ Strongly typed |

---

# Type Annotation vs Type Inference (TypeScript)

## Type Annotation

You explicitly specify the type.

```typescript
let age: number = 25;
```

---

## Type Inference

TypeScript automatically determines the type.

```typescript
let age = 25;
```

TypeScript infers that `age` is of type `number`.

---

# Best Practices

1. ✅ Use **type inference** when the type is obvious.
2. ✅ Use **type annotations** for function parameters, return types, and complex objects.
3. ❌ Avoid using `any` unless absolutely necessary.
4. ✅ Prefer `unknown` over `any` for safer code.
5. ✅ Use interfaces or type aliases to define object structures.
6. ✅ Use `const` whenever possible.
7. ✅ Use `enum` when working with a fixed set of named values.
8. ✅ Use `tuple` when the order and type of elements are fixed.

---

# Rule of Thumb

- **Primitive types** store a **single value** (e.g., `number`, `string`, `boolean`).
- **Non-primitive types** store **collections or structured data** (e.g., `object`, `array`, `function`).
- **JavaScript** supports dynamic typing, allowing variables to change types at runtime.
- **TypeScript** adds static typing, providing compile-time checks and additional types like `tuple`, `enum`, `any`, `unknown`, and `never` to build safer, more maintainable applications.

---

# What is the `typeof` Operator?

The `typeof` operator is used to determine the **data type of a variable, value, or expression**.

It returns the type as a **string**.

> - **JavaScript:** Used at **runtime** to determine the type of a value.
> - **TypeScript:** Used at **runtime** (same as JavaScript) and also at **compile time** to derive the type of another variable.

---

# JavaScript `typeof`

## Syntax

```javascript
typeof value;
```

or

```javascript
typeof value;
```

Both forms are valid.

---

## Examples

### String

```javascript
typeof "";
// "string"

typeof "John";
// "string"

typeof "John Doe";
// "string"
```

---

### Number

```javascript
typeof 25;
// "number"

typeof 3.14;
// "number"
```

---

### Boolean

```javascript
typeof true;
// "boolean"
```

---

### Undefined

```javascript
let city;

typeof city;
// "undefined"
```

---

### Null (Special Case)

```javascript
typeof null;
// "object"
```

> ⚠️ **Important:** This is a well-known JavaScript bug from the early days of the language. Although `null` is a primitive type, `typeof null` returns `"object"` for historical compatibility.

---

### Object

```javascript
const person = {
  name: "Alice",
};

typeof person;
// "object"
```

---

### Array

```javascript
const numbers = [10, 20, 30];

typeof numbers;
// "object"
```

> Arrays are objects in JavaScript, so `typeof` returns `"object"`.

To check whether a value is an array, use:

```javascript
Array.isArray(numbers);
// true
```

---

### Function

```javascript
function greet() {}

typeof greet;
// "function"
```

Functions are a special kind of object, but `typeof` returns `"function"`.

---

# Using `typeof` with Expressions

`typeof` can also be used with expressions.

```javascript
typeof (10 + 20);
// "number"
```

```javascript
typeof ("Hello" + "World");
// "string"
```

```javascript
typeof (10 > 5);
// "boolean"
```

---

# TypeScript `typeof`

At **runtime**, it behaves exactly like JavaScript.

```typescript
let age: number = 25;

console.log(typeof age);
// "number"
```

---

# `typeof` for Type Inference (TypeScript Only)

TypeScript has an additional compile-time use of `typeof`.

It can create a new type based on an existing variable.

Example

```typescript
const person = {
  name: "Alice",
  age: 30,
};

type PersonType = typeof person;
```

Here,

```typescript
PersonType;
```

becomes

```typescript
{
  name: string;
  age: number;
}
```

This avoids writing the object type twice.

---

# Another Example

```typescript
const PI = 3.14;

type PIType = typeof PI;
```

Equivalent to

```typescript
type PIType = number;
```

---

# JavaScript vs TypeScript

| Feature                     | JavaScript | TypeScript |
| --------------------------- | ---------- | ---------- |
| Runtime `typeof`            | ✅ Yes     | ✅ Yes     |
| Returns type as string      | ✅ Yes     | ✅ Yes     |
| Compile-time `typeof`       | ❌ No      | ✅ Yes     |
| Create types from variables | ❌ No      | ✅ Yes     |

---

# Common `typeof` Results

| Value          | Result        |
| -------------- | ------------- |
| `"Hello"`      | `"string"`    |
| `100`          | `"number"`    |
| `true`         | `"boolean"`   |
| `undefined`    | `"undefined"` |
| `null`         | `"object"` ⚠️ |
| `{}`           | `"object"`    |
| `[]`           | `"object"`    |
| `function(){}` | `"function"`  |
| `Symbol()`     | `"symbol"`    |
| `10n`          | `"bigint"`    |

---

# Best Practices

1. ✅ Use `typeof` to check primitive data types at runtime.
2. ✅ Use `Array.isArray()` instead of `typeof` for arrays.
3. ⚠️ Remember that `typeof null` returns `"object"` due to a historical JavaScript behavior.
4. ✅ In TypeScript, use `typeof` to derive types from existing variables and avoid duplicating type definitions.

---

# Rule of Thumb

- **JavaScript `typeof`** → Checks the type of a value **at runtime** and returns it as a string.
- **TypeScript `typeof`** → Works the same at runtime **and** can also be used at compile time to create types from existing variables, making code more maintainable and type-safe.

Based on the images, your notes cover **JavaScript Arrays** and the most commonly used **Array Methods**. Below are well-structured notes in the same style as your previous JavaScript & TypeScript notes.

---

# What is an Array?

An **array** is an ordered collection of values.

- Each value is called an **element**.
- Each element has an **index**.
- Indexing starts from **0**.

Example:

```text
Index :   0        1        2
Value : ["Audi", "Tata", "Volvo"]
```

---

# Creating Arrays

## JavaScript

### Using Array Literal (Recommended)

```javascript
const cars = ["Audi", "Tata", "Volvo"];
```

### Using Array Constructor

```javascript
const scores = new Array();
```

---

## TypeScript

```typescript
const cars: string[] = ["Audi", "Tata", "Volvo"];
```

or

```typescript
const cars: Array<string> = ["Audi", "Tata", "Volvo"];
```

---

# Creating an Empty Array

## JavaScript

```javascript
const bikes = [];

bikes[0] = "Activa";
bikes[1] = "Jupiter";
bikes[2] = "Yamaha";
```

---

## TypeScript

```typescript
const bikes: string[] = [];

bikes.push("Activa");
bikes.push("Jupiter");
```

---

# Accessing Elements

```javascript
const cars = ["Audi", "Tata", "Volvo"];

console.log(cars[0]);
```

Output

```text
Audi
```

---

# Updating Elements

```javascript
cars[0] = "Maruti";
```

Output

```text
["Maruti", "Tata", "Volvo"]
```

---

# Array Length

```javascript
console.log(cars.length);
```

Returns the total number of elements.

---

# JavaScript & TypeScript Array Methods

| Method              | Description                                                             | JavaScript Example                           | TypeScript Example                                    |
| ------------------- | ----------------------------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------- |
| **push()**          | Adds one or more elements to the end of an array.                       | `const arr = [1,2]; arr.push(3); // [1,2,3]` | `const arr:number[]=[1,2]; arr.push(3);`              |
| **pop()**           | Removes and returns the last element.                                   | `arr.pop(); // 3`                            | `const last:number \| undefined = arr.pop();`         |
| **unshift()**       | Adds elements to the beginning of the array.                            | `arr.unshift(0);`                            | `arr.unshift(0);`                                     |
| **shift()**         | Removes and returns the first element.                                  | `arr.shift();`                               | `const first:number \| undefined = arr.shift();`      |
| **concat()**        | Combines two or more arrays and returns a new array.                    | `[1,2].concat([3,4]);`                       | `const result:number[] = [1,2].concat([3,4]);`        |
| **join()**          | Converts an array into a string.                                        | `["a","b"].join(","); // "a,b"`              | `const text:string = arr.join(",");`                  |
| **slice()**         | Returns a shallow copy of part of an array.                             | `arr.slice(1,3);`                            | `const part:number[] = arr.slice(1,3);`               |
| **splice()**        | Adds, removes, or replaces elements in the original array.              | `arr.splice(1,2);`                           | `arr.splice(1,2);`                                    |
| **indexOf()**       | Returns the index of the first occurrence of a value.                   | `arr.indexOf(20);`                           | `arr.indexOf(20);`                                    |
| **lastIndexOf()**   | Returns the last matching index.                                        | `arr.lastIndexOf(20);`                       | `arr.lastIndexOf(20);`                                |
| **includes()**      | Checks whether an element exists.                                       | `arr.includes(5);`                           | `arr.includes(5);`                                    |
| **Array.isArray()** | Checks if a value is an array.                                          | `Array.isArray(arr);`                        | `Array.isArray(arr);`                                 |
| **forEach()**       | Executes a function for every element. Returns nothing.                 | `arr.forEach(x=>console.log(x));`            | `arr.forEach((x:number)=>console.log(x));`            |
| **map()**           | Transforms every element and returns a new array.                       | `arr.map(x=>x*2);`                           | `const result:number[] = arr.map(x=>x*2);`            |
| **filter()**        | Returns elements matching a condition.                                  | `arr.filter(x=>x>2);`                        | `const result:number[] = arr.filter(x=>x>2);`         |
| **reduce()**        | Reduces an array into a single value.                                   | `arr.reduce((a,b)=>a+b,0);`                  | `const sum:number = arr.reduce((a,b)=>a+b,0);`        |
| **find()**          | Returns the first matching element.                                     | `arr.find(x=>x>5);`                          | `const value:number \| undefined = arr.find(x=>x>5);` |
| **findIndex()**     | Returns the index of the first matching element.                        | `arr.findIndex(x=>x>5);`                     | `arr.findIndex(x=>x>5);`                              |
| **sort()**          | Sorts elements in place.                                                | `arr.sort((a,b)=>a-b);`                      | `arr.sort((a,b)=>a-b);`                               |
| **reverse()**       | Reverses the array in place.                                            | `arr.reverse();`                             | `arr.reverse();`                                      |
| **flat()**          | Flattens nested arrays.                                                 | `[[1],[2]].flat();`                          | `const result:number[] = [[1],[2]].flat();`           |
| **flatMap()**       | Maps then flattens one level.                                           | `arr.flatMap(x=>[x,x]);`                     | `const result:number[] = arr.flatMap(x=>[x,x]);`      |
| **every()**         | Returns `true` if all elements satisfy a condition.                     | `arr.every(x=>x>0);`                         | `arr.every(x=>x>0);`                                  |
| **some()**          | Returns `true` if at least one element satisfies a condition.           | `arr.some(x=>x>0);`                          | `arr.some(x=>x>0);`                                   |
| **fill()**          | Fills all or part of an array with a static value.                      | `arr.fill(0);`                               | `arr.fill(0);`                                        |
| **copyWithin()**    | Copies part of an array to another location in the same array.          | `arr.copyWithin(1,0);`                       | `arr.copyWithin(1,0);`                                |
| **at()**            | Returns the element at the specified index (supports negative indexes). | `arr.at(-1);`                                | `const last:number \| undefined = arr.at(-1);`        |
| **entries()**       | Returns an iterator of index-value pairs.                               | `arr.entries();`                             | `for(const [i,v] of arr.entries()){}`                 |
| **keys()**          | Returns an iterator of indexes.                                         | `arr.keys();`                                | `for(const i of arr.keys()){}`                        |
| **values()**        | Returns an iterator of values.                                          | `arr.values();`                              | `for(const v of arr.values()){}`                      |

---

# Array Method Categories

## 🔹 Add Elements

| Method      | Description            |
| ----------- | ---------------------- |
| `push()`    | Add to end             |
| `unshift()` | Add to beginning       |
| `splice()`  | Insert at any position |

---

## 🔹 Remove Elements

| Method     | Description              |
| ---------- | ------------------------ |
| `pop()`    | Remove last              |
| `shift()`  | Remove first             |
| `splice()` | Remove from any position |

---

## 🔹 Search Methods

| Method          | Returns              |
| --------------- | -------------------- |
| `indexOf()`     | First matching index |
| `lastIndexOf()` | Last matching index  |
| `includes()`    | Boolean              |
| `find()`        | First matching value |
| `findIndex()`   | First matching index |

---

## 🔹 Transform Arrays

| Method      | Returns                  |
| ----------- | ------------------------ |
| `map()`     | New transformed array    |
| `filter()`  | New filtered array       |
| `reduce()`  | Single value             |
| `flat()`    | Flattened array          |
| `flatMap()` | Mapped + Flattened array |

---

## 🔹 Iterate

| Method      | Purpose                            |
| ----------- | ---------------------------------- |
| `forEach()` | Execute function for every element |
| `map()`     | Transform every element            |
| `entries()` | Iterate index-value pairs          |
| `keys()`    | Iterate indexes                    |
| `values()`  | Iterate values                     |

---

## 🔹 Check Conditions

| Method    | Purpose                                  |
| --------- | ---------------------------------------- |
| `every()` | All elements satisfy condition           |
| `some()`  | At least one element satisfies condition |

---

## 🔹 Utility Methods

| Method            | Purpose                                      |
| ----------------- | -------------------------------------------- |
| `join()`          | Convert array to string                      |
| `concat()`        | Merge arrays                                 |
| `slice()`         | Copy part of array                           |
| `sort()`          | Sort elements                                |
| `reverse()`       | Reverse elements                             |
| `fill()`          | Fill with value                              |
| `copyWithin()`    | Copy elements within same array              |
| `Array.isArray()` | Check if value is an array                   |
| `at()`            | Access element by positive or negative index |

---

```javascript
// Basic Array Operations
//--------------------------------------------------

// 1. Add Element to the End: Use push()
let seas = ["Black Sea", "Caribbean Sea"];
seas.push("Red Sea");
console.log(seas); // ['Black Sea', 'Caribbean Sea', 'Red Sea']

// 2. Add Element to the Beginning: Use unshift()
seas.unshift("Baltic Sea");
console.log(seas); // ['Baltic Sea', 'Black Sea', 'Caribbean Sea', 'Red Sea']

// 3. Remove Element from the End: Use pop().
let lastElement = seas.pop();
console.log(lastElement); // 'Red Sea'
console.log(seas); // [ 'Baltic Sea', 'Black Sea', 'Caribbean Sea' ]

// 4. Remove Element from the Beginning: Use shift().
let firstElement = seas.shift();
console.log(firstElement); // 'Baltic Sea'
console.log(seas); // [ 'Black Sea', 'Caribbean Sea' ]

// 5. Find Index of an Element: Use indexOf().
let index = seas.indexOf("Caribbean Sea");
console.log(index); // 1

// 6. Check if a Value is an Array: Use Array.isArray().
console.log(Array.isArray(seas)); // true

// 7. merge arrays: use concat()
let fruits = ["apple", "banana", "cherry"];
let moreFruits = ["mango", "pineapple"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ["apple", "banana", "cherry", "mango", "pineapple"]

// 8. Combine array into a string: use join()
let joined = fruits.join(", ");
console.log(joined); // "apple, banana, cherry"

// 9. Copy a portion of array: use slice(start, end)
let sliced = fruits.slice(1, 3); // included 1 and excluded 3
console.log(sliced); // ["banana", "cherry"]

// 10. Get index of item: use indexOf()
console.log(fruits.indexOf("banana")); // 1

// 11. Check if value exists: use includes()
console.log(fruits.includes("cherry")); // true

// 12. Run function on each item: use forEach()
fruits.forEach((fruit) => {
  console.log(fruit);
});

// 13. Transform each item: use map()
let upperFruits = fruits.map((fruit) => {
  return fruit.toUpperCase();
});
console.log(upperFruits);

// 14. Filter items by condition: use filter()
let filtered = fruits.filter((f) => f.length > 5);
console.log(filtered);

// 15. Reduce to a single value: use reduce()
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

// 16. Find first match: use find()
let found = fruits.find((f) => f.startsWith("c"));
console.log(found); // "cherry"

// 17. Find index of first match: use findIndex()
let indexFirst = fruits.findIndex((f) => f.startsWith("c"));
console.log(indexFirst); // 2

// 18. Sort the array: use sort()
let nums = [4, 2, 9, 1];
nums.sort((a, b) => a - b);
console.log(nums); // [1, 2, 4, 9]

//19 Reverse the array: use reverse()
nums.reverse();
console.log(nums); // [9, 4, 2, 1]

//20. Flatten nested arrays: use flat()
let nested = [1, [2, [3]]];
console.log(nested.flat(1)); // [1, 2, [3]]
console.log(nested.flat(2)); // [1, 2, 3]

//21. Check if all items match condition: use every()
let allAboveZero = nums.every((n) => n > 0);
console.log(allAboveZero); // true

//22. Check if at least one item matches: use some()
let hasNegative = nums.some((n) => n < 0);
console.log(hasNegative); // false
```

Typescript

```javascript
// Basic Array Operations
//--------------------------------------------------

// 1. Add Element to the End: Use push()
let seas: string[] = ["Black Sea", "Caribbean Sea"];
seas.push("Red Sea");
console.log(seas); // ['Black Sea', 'Caribbean Sea', 'Red Sea']

// 2. Add Element to the Beginning: Use unshift()
seas.unshift("Baltic Sea");
console.log(seas); // ['Baltic Sea', 'Black Sea', 'Caribbean Sea', 'Red Sea']

// 3. Remove Element from the End: Use pop().
let lastElement: string | undefined = seas.pop();
console.log(lastElement); // 'Red Sea'
console.log(seas); // [ 'Baltic Sea', 'Black Sea', 'Caribbean Sea' ]

// 4. Remove Element from the Beginning: Use shift().
let firstElement: string | undefined = seas.shift();
console.log(firstElement); // 'Baltic Sea'
console.log(seas); // [ 'Black Sea', 'Caribbean Sea' ]

// 5. Find Index of an Element: Use indexOf().
let index: number = seas.indexOf("Caribbean Sea");
console.log(index); // 1

// 6. Check if a Value is an Array: Use Array.isArray().
console.log(Array.isArray(seas)); // true

// 7. merge arrays: use concat()
let fruits: string[] = ["apple", "banana", "cherry"];
let moreFruits: string[] = ["mango", "pineapple"];
let allFruits: string[] = fruits.concat(moreFruits);
console.log(allFruits); // ["apple", "banana", "cherry", "mango", "pineapple"]

// 8. Combine array into a string: use join()
let joined: string = fruits.join(", ");
console.log(joined); // "apple, banana, cherry"

// 9. Copy a portion of array: use slice(start, end)
let sliced: string[] = fruits.slice(1, 3); // included 1 and excluded 3
console.log(sliced); // ["banana", "cherry"]

// 10. Get index of item: use indexOf()
console.log(fruits.indexOf("banana")); // 1

// 11. Check if value exists: use includes()
console.log(fruits.includes("cherry")); // true

// 12. Run function on each item: use forEach()
fruits.forEach((fruit: string) => {
  console.log(fruit);
});

// 13. Transform each item: use map()
let upperFruits: string[] = fruits.map((fruit: string) => {
  return fruit.toUpperCase();
});
console.log(upperFruits);

// 14. Filter items by condition: use filter()
let filtered: string[] = fruits.filter((f: string) => f.length > 5);
console.log(filtered);

// 15. Reduce to a single value: use reduce()
let numbers: number[] = [1, 2, 3, 4];
let sum: number = numbers.reduce((acc: number, curr: number) => acc + curr, 0);
console.log(sum); // 10

// 16. Find first match: use find()
let found: string | undefined = fruits.find((f: string) => f.startsWith("c"));
console.log(found); // "cherry"

// 17. Find index of first match: use findIndex()
let indexFirst: number = fruits.findIndex((f: string) => f.startsWith("c"));
console.log(indexFirst); // 2

// 18. Sort the array: use sort()
let nums: number[] = [4, 2, 9, 1];
nums.sort((a: number, b: number) => a - b);
console.log(nums); // [1, 2, 4, 9]

//19 Reverse the array: use reverse()
nums.reverse();
console.log(nums); // [9, 4, 2, 1]

//20. Flatten nested arrays: use flat()
let nested: (number | number[])[] = [1, [2, [3]]];
console.log(nested.flat(1)); // [1, 2, [3]]
console.log(nested.flat(2)); // [1, 2, 3]

//21. Check if all items match condition: use every()
let allAboveZero: boolean = nums.every((n: number) => n > 0);
console.log(allAboveZero); // true

//22. Check if at least one item matches: use some()
let hasNegative: boolean = nums.some((n: number) => n < 0);
console.log(hasNegative); // false
```

---

# JavaScript & TypeScript Array Methods: `map()`, `filter()`, and `reduce()`

These three array methods are the foundation of **functional programming** in both **JavaScript** and **TypeScript**. They help process, transform, filter, and summarize data without modifying the original array.

> **TypeScript Note:**
> These methods work exactly the same as JavaScript. The only difference is that TypeScript adds **type annotations** and **compile-time type checking**.

---

# ✅ 1. `map()`

## 🔍 Purpose

Transforms **each element** of an array and returns a **new array** of the same length.

Original array remains unchanged.

---

## 📦 Syntax

### JavaScript

```javascript
array.map((element, index, array) => {
  // return new value
});
```

### TypeScript

```typescript
array.map((element: Type, index: number, array: Type[]) => {
  // return new value
});
```

---

## 🧩 Parameters

| Parameter            | Description              |
| -------------------- | ------------------------ |
| `element`            | Current element          |
| `index` _(optional)_ | Index of current element |
| `array` _(optional)_ | Original array           |

---

## 🧪 Example 1 – Double Numbers

### JavaScript

```javascript
const nums = [1, 2, 3];

const doubled = nums.map((num) => num * 2);

console.log(doubled);
// [2,4,6]
```

### TypeScript

```typescript
const nums: number[] = [1, 2, 3];

const doubled: number[] = nums.map((num: number) => num * 2);

console.log(doubled);
```

---

## 🧪 Example 2 – Using Index

### JavaScript

```javascript
const colors = ["red", "green", "blue"];

const colorInfo = colors.map((color, index, array) => {
  return `Color ${index + 1}/${array.length}: ${color}`;
});
```

### TypeScript

```typescript
const colors: string[] = ["red", "green", "blue"];

const colorInfo: string[] = colors.map(
  (color: string, index: number, array: string[]) => {
    return `Color ${index + 1}/${array.length}: ${color}`;
  },
);
```

---

## 🧪 Example 3 – Real World

### JavaScript

```javascript
const products = [
  { name: "Phone", price: 699 },
  { name: "Tablet", price: 899 },
];

const formatted = products.map((p, i) => ({
  label: `${p.name} - $${p.price}`,
  index: i,
}));
```

### TypeScript

```typescript
type Product = {
  name: string;
  price: number;
};

const products: Product[] = [
  { name: "Phone", price: 699 },
  { name: "Tablet", price: 899 },
];

const formatted = products.map((p: Product, i: number) => ({
  label: `${p.name} - $${p.price}`,
  index: i,
}));
```

---

# TypeScript Advantage

Without TypeScript

```javascript
num.toUpperCase();
```

Runtime Error

With TypeScript

```typescript
const nums: number[] = [1, 2, 3];

nums.map((num) => {
  return num.toUpperCase();
});
```

Compile Error

```
Property 'toUpperCase'
does not exist on type 'number'
```

TypeScript catches mistakes before execution.

---

# ✅ 2. `filter()`

## 🔍 Purpose

Returns a **new array** containing only elements that satisfy a condition.

Original array is not modified.

---

## 📦 Syntax

### JavaScript

```javascript
array.filter((element, index, array) => {
  return true;
});
```

### TypeScript

```typescript
array.filter((element: Type, index: number, array: Type[]) => {
  return true;
});
```

---

## 🧩 Parameters

| Parameter | Description    |
| --------- | -------------- |
| element   | Current item   |
| index     | Position       |
| array     | Original array |

---

## 🧪 Example 1 – Even Numbers

### JavaScript

```javascript
const nums = [1, 2, 3, 4, 5];

const evens = nums.filter((num) => num % 2 === 0);

console.log(evens);
```

### TypeScript

```typescript
const nums: number[] = [1, 2, 3, 4, 5];

const evens: number[] = nums.filter((num: number) => num % 2 === 0);

console.log(evens);
```

---

## 🧪 Example 2 – Every Second Item

### JavaScript

```javascript
const items = ["a", "b", "c", "d", "e"];

const everySecond = items.filter((item, index) => index % 2 === 0);
```

### TypeScript

```typescript
const items: string[] = ["a", "b", "c", "d", "e"];

const everySecond: string[] = items.filter(
  (item: string, index: number) => index % 2 === 0,
);
```

---

## 🧪 Example 3 – Filter Active Users

### JavaScript

```javascript
const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
];

const activeUsers = users.filter((user) => user.active);
```

### TypeScript

```typescript
type User = {
  name: string;
  active: boolean;
};

const users: User[] = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
];

const activeUsers = users.filter((user: User) => user.active);
```

---

## 🧪 Example 4 – Above Average

### JavaScript

```javascript
const scores = [60, 80, 90, 70];

const aboveAverage = scores.filter((score, _, arr) => {
  const avg = arr.reduce((sum, s) => sum + s, 0) / arr.length;

  return score > avg;
});
```

### TypeScript

```typescript
const scores: number[] = [60, 80, 90, 70];

const aboveAverage: number[] = scores.filter(
  (score: number, _, arr: number[]) => {
    const avg = arr.reduce((sum, s) => sum + s, 0) / arr.length;

    return score > avg;
  },
);
```

---

# TypeScript Advantage

JavaScript

```javascript
users.filter((user) => user.active);
```

TypeScript

```typescript
users.filter((user) => user.activee);
```

Compile Error

```
Property 'activee'
does not exist.
```

---

# ✅ 3. `reduce()`

## 🔍 Purpose

Reduces an array into **one single value**.

The return value can be:

- Number
- String
- Object
- Array
- Boolean

---

## 📦 Syntax

### JavaScript

```javascript
array.reduce((accumulator, currentValue, index, array) => {
  return accumulator;
}, initialValue);
```

### TypeScript

```typescript
array.reduce(
  (
    accumulator: ReturnType,
    currentValue: Type,
    index: number,
    array: Type[],
  ) => {
    return accumulator;
  },
  initialValue,
);
```

---

## 🧩 Parameters

| Parameter    | Description            |
| ------------ | ---------------------- |
| accumulator  | Stores previous result |
| currentValue | Current element        |
| index        | Current index          |
| array        | Original array         |
| initialValue | Starting value         |

---

## 🧪 Example 1 – Sum Numbers

### JavaScript

```javascript
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, num) => acc + num, 0);
```

### TypeScript

```typescript
const numbers: number[] = [1, 2, 3, 4];

const sum: number = numbers.reduce((acc: number, num: number) => acc + num, 0);
```

---

## 🧪 Example 2 – Count Words

### JavaScript

```javascript
const words = ["apple", "banana", "apple", "cherry"];

const count = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
```

### TypeScript

```typescript
const words: string[] = ["apple", "banana", "apple", "cherry"];

const count = words.reduce<Record<string, number>>((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
```

---

## 🧪 Example 3 – Flatten Array

### JavaScript

```javascript
const nested = [[1, 2], [3, 4], [5]];

const flat = nested.reduce((acc, val) => acc.concat(val), []);
```

### TypeScript

```typescript
const nested: number[][] = [[1, 2], [3, 4], [5]];

const flat: number[] = nested.reduce((acc, val) => acc.concat(val), []);
```

---

## 🧪 Example 4 – Group Books

### JavaScript

```javascript
const grouped = books.reduce((acc, book) => {
  if (!acc[book.genre]) {
    acc[book.genre] = [];
  }

  acc[book.genre].push(book.title);

  return acc;
}, {});
```

### TypeScript

```typescript
const grouped = books.reduce<Record<string, string[]>>((acc, book) => {
  if (!acc[book.genre]) {
    acc[book.genre] = [];
  }

  acc[book.genre].push(book.title);

  return acc;
}, {});
```

---

# 🔗 Chaining Example

## JavaScript

```javascript
const result = users
  .filter((user) => user.active)
  .map((user, index, arr) => `${index + 1}/${arr.length}: ${user.email}`)
  .reduce(
    (acc, email) => {
      acc.count++;
      acc.emails.push(email);

      return acc;
    },
    {
      count: 0,
      emails: [],
    },
  );
```

---

## TypeScript

```typescript
type User = {
  name: string;
  email: string;
  active: boolean;
};

const result = users
  .filter((user: User) => user.active)
  .map((user, index, arr) => `${index + 1}/${arr.length}: ${user.email}`)
  .reduce(
    (acc, email) => {
      acc.count++;
      acc.emails.push(email);

      return acc;
    },
    {
      count: 0,
      emails: [] as string[],
    },
  );
```

---

# 🧠 JavaScript vs TypeScript

| Feature          | JavaScript | TypeScript               |
| ---------------- | ---------- | ------------------------ |
| Array Methods    | ✅ Same    | ✅ Same                  |
| Syntax           | Simpler    | Same + Type Annotations  |
| Type Checking    | Runtime    | Compile Time             |
| IDE Autocomplete | Basic      | Excellent                |
| Error Detection  | Runtime    | Before Execution         |
| Performance      | Same       | Same (TS compiles to JS) |

---

# 📌 Key Takeaways

- `map()` → Transform each element and return a new array.
- `filter()` → Return elements that satisfy a condition.
- `reduce()` → Reduce an array into a single value (number, string, object, array, etc.).
- JavaScript and TypeScript use the **same array methods**.
- TypeScript adds **static typing**, **better IntelliSense**, and **compile-time error checking** without changing how these methods work.
