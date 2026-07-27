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
- [TypeScript – Explicit Types & Type Inference](#typescript--explicit-types--type-inference)
- [TypeScript – Special Types](#typescript--special-types)
- [TypeScript – Tuples, Object Types & Enums](#typescript--tuples-object-types--enums)
- [TypeScript – Type Aliases & Interfaces](#typescript--type-aliases--interfaces)
- [TypeScript – Union Types](#typescript--union-types)
- [JavaScript & TypeScript – Operators](#javascript--typescript--operators)
- [JavaScript & TypeScript – Arithmetic Operators](#javascript--typescript--arithmetic-operators)
- [JavaScript & TypeScript – Assignment Operators](#javascript--typescript--assignment-operators)
- [JavaScript & TypeScript – Comparison Operators](#javascript--typescript--comparison-operators)
- [JavaScript & TypeScript – if else and else if ](#javascript--typescript--if-else-and-else-if)
- [JavaScript & TypeScript – switch Statement](#javascript--typescript--switch-statement)
- [JavaScript & TypeScript – Logical Operators](#javascript--typescript--logical-operators)
- [JavaScript & TypeScript – Loops & Control Flow](#javascript--typescript--loops--control-flow)
- [JavaScript & TypeScript – Type Casting](#javascript--typescript--type-casting)
- [TypeScript – Generics](#typescript--generics)
- [TypeScript Utility Types](#typescript-utility-types)

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

# TypeScript – Explicit Types & Type Inference

## 📌 What is TypeScript Typing?

TypeScript provides **static typing**, which means it checks the type of data **before the code runs**.

There are **2 ways** to assign types:

1. **Explicit Typing** – You manually specify the type.
2. **Type Inference** – TypeScript automatically detects the type.

---

# 1. Explicit Typing (Type Annotations)

### Definition

You explicitly tell TypeScript what type a variable should store.

### Syntax

```ts
let variableName: type = value;
```

### Examples

#### String

```ts
let greeting: string = "Hello TypeScript";
```

#### Number

```ts
let age: number = 25;
```

#### Boolean

```ts
let isLoggedIn: boolean = true;
```

#### Array

```ts
let marks: number[] = [90, 85, 95];
```

---

## Function with Explicit Types

Always define **parameter types** and **return types**.

```ts
function greet(name: string): string {
  return `Hello ${name}`;
}

greet("Alice"); // ✅ Valid
greet(10); // ❌ Error
```

**Benefits**

- Better readability
- Self-documenting code
- Catches mistakes during compilation
- Easier maintenance

---

## When to Use Explicit Types

✅ Function parameters

✅ Function return types

✅ Object definitions

✅ Variables whose type may not be obvious

---

# 2. Type Inference

### Definition

TypeScript automatically determines the type from the assigned value.

### Syntax

```ts
let username = "John";
```

TypeScript automatically infers:

```ts
let username: string;
```

---

## Examples

### String

```ts
let name = "Alice";
```

**Inferred Type**

```ts
string;
```

---

### Number

```ts
let score = 100;
```

**Inferred Type**

```ts
number;
```

---

### Boolean Array

```ts
let flags = [true, false, true];
```

**Inferred Type**

```ts
boolean[]
```

---

### Function Return Type

```ts
function add(a: number, b: number) {
  return a + b;
}
```

Return type is automatically inferred as:

```ts
number;
```

---

## When to Use Type Inference

✅ Simple variable declarations

✅ Variables initialized immediately

✅ When the type is obvious

---

# Object Type Inference

TypeScript automatically understands the structure (shape) of an object.

```ts
const user = {
  name: "Alice",
  age: 30,
  isAdmin: true,
};
```

TypeScript infers:

```ts
{
  name: string;
  age: number;
  isAdmin: boolean;
}
```

### Valid

```ts
console.log(user.name);
```

### Invalid

```ts
console.log(user.email);
```

**Error**

```
Property 'email' does not exist.
```

---

# Type Safety

One of TypeScript's biggest advantages is **Type Safety**.

It catches errors **during development** instead of at runtime.

---

## Explicit Type Mismatch

```ts
let username: string = "Alice";

username = 10;
```

❌ Error

```
Type 'number' is not assignable to type 'string'
```

---

## Inferred Type Mismatch

```ts
let score = 100;

score = "High";
```

❌ Error

```
Type 'string' is not assignable to type 'number'
```

---

# JavaScript vs TypeScript

## JavaScript

```js
function add(a, b) {
  return a + b;
}

console.log(add("5", 3));
```

Output

```
53
```

JavaScript performs **string concatenation**, which can lead to bugs.

---

## TypeScript

```ts
function add(a: number, b: number): number {
  return a + b;
}

console.log(add("5", 3));
```

❌ Compile-time Error

```
Argument of type 'string'
is not assignable to parameter of type 'number'
```

TypeScript prevents the bug before execution.

---

# When TypeScript Can't Infer Types

Sometimes TypeScript doesn't have enough information and falls back to the **`any`** type.

---

## Case 1: `JSON.parse()`

```ts
const data = JSON.parse('{"name":"Alice","age":30}');
```

Type of `data`:

```ts
any;
```

Reason: TypeScript doesn't know the JSON structure at compile time.

---

## Case 2: Uninitialized Variable

```ts
let value;

value = "Hello";
value = 100;
```

Type:

```ts
any;
```

No error occurs because `any` disables type checking.

---

# Why Avoid `any`?

Using `any`:

- ❌ Disables type checking
- ❌ Removes IntelliSense support
- ❌ Makes debugging harder
- ❌ Increases chances of runtime errors

---

# Better Alternatives to `any`

✔ Use explicit type annotations

```ts
let age: number = 25;
```

✔ Use interfaces for objects

```ts
interface User {
  name: string;
  age: number;
}
```

✔ Use type guards

```ts
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

✔ Enable `noImplicitAny` in `tsconfig.json`

```json
{
  "compilerOptions": {
    "noImplicitAny": true
  }
}
```

This prevents accidental use of `any`.

---

# Best Practices

- Prefer **Type Inference** for simple variables.
- Use **Explicit Types** for functions, objects, and public APIs.
- Avoid using **`any`** whenever possible.
- Enable **`noImplicitAny`** for stronger type safety.
- Let TypeScript catch errors during development instead of at runtime.

---

# Quick Comparison

| Explicit Typing                   | Type Inference                 |
| --------------------------------- | ------------------------------ |
| Type is manually specified        | Type is automatically detected |
| More readable and maintainable    | Less code to write             |
| Best for functions, objects, APIs | Best for simple variables      |
| Example: `let age: number = 25;`  | Example: `let age = 25;`       |

---

# Key Takeaways

- **Explicit Typing** → You define the type yourself.
- **Type Inference** → TypeScript automatically detects the type.
- TypeScript provides **compile-time type checking**.
- It prevents common runtime bugs caused by incorrect data types.
- Use **explicit types** for functions and complex objects.
- Use **type inference** when the type is obvious.
- Avoid **`any`** to maintain strong type safety.
- Enable **`noImplicitAny`** for safer and more reliable TypeScript code.

# TypeScript – Special Types

TypeScript provides **special types** to handle situations where the type is unknown, impossible, or represents the absence of a value.

These special types improve **type safety**, make code more predictable, and help catch errors during development.

---

# Special Types Overview

| Type        | Purpose                            |
| ----------- | ---------------------------------- |
| `any`       | Disables type checking             |
| `unknown`   | Safer alternative to `any`         |
| `never`     | Represents values that never occur |
| `undefined` | Variable declared but not assigned |
| `null`      | Intentional absence of a value     |

---

# 1. `any`

## Definition

The **`any`** type tells TypeScript to **skip type checking**.

A variable of type `any` can store **any kind of value**.

### Syntax

```ts
let value: any;
```

---

## Example without `any`

```ts
let user = true;

user = "John"; // ❌ Error
Math.round(user); // ❌ Error
```

TypeScript prevents assigning the wrong type.

---

## Example with `any`

```ts
let user: any = true;

user = "John"; // ✅ Allowed
user = 100; // ✅ Allowed
user = false; // ✅ Allowed

Math.round(user); // ✅ No compile-time error
```

Since the variable is `any`, TypeScript performs **no type checking**.

---

## When to Use `any`

- Migrating JavaScript projects to TypeScript
- Working with dynamic data
- Temporary workaround during development

---

## Why Avoid `any`?

Using `any`:

- ❌ Disables type safety
- ❌ Removes IntelliSense support
- ❌ Makes debugging harder
- ❌ Allows runtime bugs

> **Best Practice:** Avoid `any` whenever possible.

---

# 2. `unknown`

## Definition

`unknown` is the **type-safe version of `any`**.

It can hold any value, **but you must check its type before using it**.

### Syntax

```ts
let value: unknown;
```

---

## Example

```ts
let data: unknown = "Hello";

data = 100;
data = true;
```

All assignments are allowed.

---

## Invalid Usage

```ts
let data: unknown = "Hello";

console.log(data.toUpperCase());
```

❌ Error

```
Object is of type 'unknown'
```

---

## Type Narrowing

Before using an `unknown` value, check its type.

```ts
let data: unknown = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

Now TypeScript knows `data` is a string.

---

## Another Example

```ts
function processValue(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (Array.isArray(value)) {
    console.log(value.length);
  }
}
```

TypeScript safely narrows the type.

---

## When to Use `unknown`

- API responses
- User input
- External libraries
- JSON data
- Dynamic content

---

## `any` vs `unknown`

| `any`                          | `unknown`              |
| ------------------------------ | ---------------------- |
| No type checking               | Requires type checking |
| Unsafe                         | Safe                   |
| Can access properties directly | Must narrow type first |
| Not recommended                | Recommended            |

---

# 3. `never`

## Definition

The **`never`** type represents values that **never happen**.

It is mainly used for:

- Functions that never return
- Impossible situations
- Exhaustive type checking

---

## Function that Never Returns

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

This function always throws an error.

It never reaches the end.

---

## Infinite Loop

```ts
function infiniteLoop(): never {
  while (true) {
    console.log("Running...");
  }
}
```

This function never finishes.

---

## Invalid Assignment

```ts
let value: never = true;
```

❌ Error

```
Type 'boolean'
is not assignable to type 'never'
```

---

## Exhaustive Checking

```ts
type Status = "success" | "error";

function handleStatus(status: Status) {
  switch (status) {
    case "success":
      return "Done";

    case "error":
      return "Failed";

    default:
      const exhaustiveCheck: never = status;
      return exhaustiveCheck;
  }
}
```

If a new status is added later, TypeScript reports an error until the switch handles it.

---

## When to Use `never`

- Functions that always throw errors
- Infinite loops
- Exhaustive `switch` statements
- Impossible code paths

---

# 4. `undefined`

## Definition

`undefined` means:

> A variable has been declared but has **not been assigned a value**.

---

## Example

```ts
let value: undefined = undefined;
```

---

## JavaScript Example

```ts
let age;

console.log(age);
```

Output

```
undefined
```

---

# 5. `null`

## Definition

`null` represents an **intentional absence of a value**.

It means:

> "There is no object/value here."

---

## Example

```ts
let user: null = null;
```

---

## Difference Between `null` and `undefined`

| `undefined`                           | `null`                           |
| ------------------------------------- | -------------------------------- |
| Variable declared but not initialized | Value intentionally set to empty |
| Automatically assigned                | Manually assigned                |
| Represents missing value              | Represents no value              |

---

# Optional Parameters

Optional parameters automatically become:

```ts
type | undefined;
```

Example

```ts
function greet(name?: string) {
  return `Hello ${name ?? "Guest"}`;
}
```

Equivalent to

```ts
function greet(name: string | undefined) {}
```

---

# Optional Properties

```ts
interface User {
  name: string;
  age?: number;
}
```

Equivalent to

```ts
age: number | undefined;
```

---

# Nullish Coalescing (`??`)

Provides a default value **only when the value is `null` or `undefined`**.

```ts
const username = input ?? "Guest";
```

If `input` is:

- `null` → `"Guest"`
- `undefined` → `"Guest"`

Otherwise, its original value is used.

---

# Optional Chaining (`?.`)

Safely accesses nested properties without throwing errors.

```ts
const street = user?.address?.street;
```

If `user` or `address` is `null`/`undefined`, the result is simply `undefined`.

---

# `strictNullChecks`

Enable strict handling of `null` and `undefined`.

```json
{
  "compilerOptions": {
    "strictNullChecks": true
  }
}
```

With this enabled:

```ts
let name: string = null;
```

❌ Error

```
Type 'null'
is not assignable to type 'string'
```

You must explicitly allow it:

```ts
let name: string | null = null;
```

---

# TypeScript – Tuples, Object Types & Enums

---

# 1. Tuples

## Definition

A **Tuple** is a special type of array where:

- The **number of elements is fixed**.
- Each element has a **predefined type**.
- The **order of elements matters**.

Unlike normal arrays, every index has its own specific type.

---

## Syntax

```ts
let tupleName: [type1, type2, type3];
```

---

## Example

```ts
let employee: [number, string, boolean];

employee = [101, "John", true];
```

Here,

- `101` → number
- `"John"` → string
- `true` → boolean

---

## Invalid Example

```ts
let employee: [number, string, boolean];

employee = [true, "John", 101];
```

❌ Error

The order must always be:

```
[number, string, boolean]
```

---

## Tuples vs Arrays

### Array

```ts
let numbers: number[] = [10, 20, 30];
```

Every element must be a number.

---

### Tuple

```ts
let person: [string, number];

person = ["Alice", 25];
```

Each position has its own type.

---

## Readonly Tuples

A tuple can be made **readonly** so that it cannot be modified.

### Syntax

```ts
const person: readonly [string, number] = ["Alice", 25];
```

---

### Example

```ts
const person: readonly [string, number] = ["Alice", 25];

person.push("Developer");
```

❌ Error

Readonly tuples cannot be modified.

---

## Why Use Readonly?

It prevents accidental changes and makes the tuple immutable.

---

## Named Tuples

Named tuples improve readability by giving names to each position.

```ts
const point: [x: number, y: number] = [50, 80];
```

Instead of remembering

```
point[0]
point[1]
```

You know they represent

- x
- y

---

## Tuple Destructuring

Tuples can be destructured like arrays.

```ts
const point: [number, number] = [100, 200];

const [x, y] = point;

console.log(x);
console.log(y);
```

Output

```
100
200
```

---

## React Example

React's `useState()` returns a tuple.

```ts
const [count, setCount] = useState(0);
```

Here,

- `count` → current value
- `setCount` → function to update value

---

## When to Use Tuples

Use tuples when:

- Order is important
- Number of values is fixed
- Each position has a different type

Examples:

- Coordinates `(x, y)`
- Database records
- API responses
- React Hooks

---

# 2. Object Types

## Definition

TypeScript allows you to define the type of every property inside an object.

---

## Syntax

```ts
const objectName: {
    property: type;
} = {
    ...
};
```

---

## Example

```ts
const car: {
  brand: string;
  model: string;
  year: number;
} = {
  brand: "Toyota",
  model: "Corolla",
  year: 2024,
};
```

---

## Type Safety

```ts
const car = {
  brand: "Toyota",
};

car.brand = "Ford"; // ✅

car.brand = 100;
```

❌ Error

```
Type 'number'
is not assignable to type 'string'
```

---

# Optional Properties

Sometimes a property is not required.

Use `?`.

---

## Example

```ts
const car: {
  brand: string;
  mileage?: number;
} = {
  brand: "Toyota",
};
```

Valid

```ts
car.mileage = 5000;
```

Without `?`

```ts
const car: {
  brand: string;
  mileage: number;
} = {
  brand: "Toyota",
};
```

❌ Error

Property `mileage` is missing.

---

# Index Signatures

Used when object property names are **dynamic**.

---

## Syntax

```ts
{
    [key: string]: number
}
```

---

## Example

```ts
const marks: { [student: string]: number } = {};

marks.John = 90;
marks.Alice = 95;
```

Valid

---

Invalid

```ts
marks.Bob = "Ninety";
```

❌ Error

Only numbers are allowed.

---

## Common Use Cases

- Dictionary
- Configuration object
- Dynamic API response
- Student marks
- Product prices

---

# 3. Enums

## Definition

An **Enum (Enumeration)** is a special TypeScript feature used to define a group of related constant values.

Instead of using strings or numbers repeatedly, you use meaningful names.

---

## Syntax

```ts
enum EnumName {}
```

---

# Numeric Enum (Default)

By default,

- First value = **0**
- Next values increment by **1**

```ts
enum Direction {
  North,
  East,
  South,
  West,
}
```

Values become

```
North = 0
East = 1
South = 2
West = 3
```

Example

```ts
console.log(Direction.North);
```

Output

```
0
```

---

# Numeric Enum (Initialized)

You can specify the first value.

```ts
enum Direction {
  North = 1,
  East,
  South,
  West,
}
```

Values become

```
North = 1
East = 2
South = 3
West = 4
```

---

# Fully Initialized Enum

Every value can be assigned manually.

```ts
enum StatusCode {
  Success = 200,
  Created = 201,
  BadRequest = 400,
  NotFound = 404,
}
```

Example

```ts
console.log(StatusCode.Success);
```

Output

```
200
```

---

# String Enum

Instead of numbers, enums can store strings.

```ts
enum Direction {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}
```

Example

```ts
console.log(Direction.North);
```

Output

```
North
```

---

## Why String Enums?

They are:

- More readable
- Easier to debug
- Common in real-world projects

---

## Invalid Assignment

```ts
enum Direction {
  North,
  East,
}

let dir = Direction.North;

dir = "North";
```

❌ Error

A string cannot be assigned to an enum variable.

---

## When to Use Enums

Use enums when values are fixed, such as:

- User Roles
- Order Status
- HTTP Status Codes
- Days of Week
- Months
- Payment Status
- Application Themes
- Directions

---

# TypeScript – Type Aliases & Interfaces

TypeScript allows you to create **reusable custom types** so you don't have to repeat the same type definitions throughout your code.

The two main ways to create reusable types are:

- **Type Aliases (`type`)**
- **Interfaces (`interface`)**

Both improve **code readability**, **maintainability**, and **reusability**.

---

# Type Aliases (`type`)

## Definition

A **Type Alias** creates a custom name (alias) for an existing type.

It can represent:

- Primitive types
- Object types
- Arrays
- Functions
- Union types
- Intersection types

---

## Syntax

```ts
type AliasName = Type;
```

---

## Primitive Type Alias

```ts
type UserName = string;
type Age = number;

let name: UserName = "John";
let age: Age = 25;
```

---

## Object Type Alias

```ts
type Car = {
  brand: string;
  model: string;
  year: number;
};

const car: Car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2024,
};
```

---

## Array Type Alias

```ts
type Numbers = number[];

const scores: Numbers = [90, 95, 100];
```

---

## Function Type Alias

```ts
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
```

---

# Union Types

A **Union Type (`|`)** allows a variable to store **one of multiple types**.

## Syntax

```ts
type Status = "success" | "error";
```

---

## Example

```ts
type Status = "success" | "error";

let response: Status = "success";

response = "error"; // ✅

response = "loading"; // ❌ Error
```

---

# Intersection Types

An **Intersection Type (`&`)** combines multiple types into one.

The resulting type contains **all properties** from each type.

## Example

```ts
type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: boolean;
};

const bear: Bear = {
  name: "Winnie",
  honey: true,
};
```

The `Bear` type contains:

- `name`
- `honey`

---

# When to Use Type Aliases

Use `type` for:

- Primitive types
- Arrays
- Function types
- Union types
- Intersection types
- Complex custom types

---

# Interfaces

## Definition

An **Interface** defines the structure (shape) of an object.

Unlike `type`, interfaces are intended specifically for **objects**.

---

## Syntax

```ts
interface InterfaceName {}
```

---

## Example

```ts
interface Rectangle {
  height: number;
  width: number;
}

const rectangle: Rectangle = {
  height: 20,
  width: 10,
};
```

---

## Type Safety

```ts
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "John",
  age: 25,
};
```

Missing required properties will produce a compile-time error.

---

# Extending Interfaces

Interfaces can inherit properties from another interface using `extends`.

## Example

```ts
interface Rectangle {
  height: number;
  width: number;
}

interface ColoredRectangle extends Rectangle {
  color: string;
}

const box: ColoredRectangle = {
  height: 100,
  width: 50,
  color: "Red",
};
```

`ColoredRectangle` contains:

- `height`
- `width`
- `color`

---

# Interface Merging

A unique feature of interfaces is **Declaration Merging**.

Multiple interfaces with the same name are automatically combined.

```ts
interface Animal {
  name: string;
}

interface Animal {
  age: number;
}

const dog: Animal = {
  name: "Rocky",
  age: 5,
};
```

TypeScript merges both interfaces into one.

---

# Type vs Interface

| Feature                  | `type` | `interface` |     |
| ------------------------ | ------ | ----------- | --- |
| Primitive Types          | ✅     | ❌          |     |
| Objects                  | ✅     | ✅          |     |
| Arrays                   | ✅     | ❌          |     |
| Functions                | ✅     | ❌          |     |
| Union Types (`    `)     | ✅     | ❌          |
| Intersection Types (`&`) | ✅     | ❌          |     |
| Interface Merging        | ❌     | ✅          |     |
| Extend Other Types       | ✅     | ✅          |     |
| Implemented by Classes   | ✅     | ✅          |     |

---

# Extending Type Aliases

Type aliases don't use `extends`, but can achieve similar behavior with **intersection types (`&`)**.

```ts
type Rectangle = {
  height: number;
  width: number;
};

type ColoredRectangle = Rectangle & {
  color: string;
};
```

This produces the same result as extending an interface.

---

# Interface vs Type Example

## Using Interface

```ts
interface Employee {
  id: number;
  name: string;
}

const emp: Employee = {
  id: 1,
  name: "John",
};
```

---

## Using Type

```ts
type Employee = {
  id: number;
  name: string;
};

const emp: Employee = {
  id: 1,
  name: "John",
};
```

Both work similarly for object definitions.

---

# When to Use `interface`

- Defining object shapes
- API request/response models
- Class contracts
- Large projects
- Declaration merging

---

# When to Use `type`

- Primitive aliases
- Arrays
- Functions
- Union types
- Intersection types
- Complex reusable types

---

# Best Practices

- ✅ Use **`interface`** for object definitions and public APIs.
- ✅ Use **`type`** for primitives, unions, intersections, arrays, and function types.
- ✅ Keep types small and reusable.
- ✅ Use meaningful names for custom types.
- ✅ Prefer composition (combining types) over deeply nested inheritance.

---

# Common Pitfalls

❌ Using `interface` for union types

```ts
interface Status = "success" | "error";
```

Invalid.

Use:

```ts
type Status = "success" | "error";
```

---

❌ Forgetting to update types when object properties change.

---

❌ Creating overly complex nested types that reduce readability.

---

# Real-World Examples

## API Response

```ts
interface User {
  id: number;
  name: string;
  email: string;
}
```

---

## User Role

```ts
type Role = "Admin" | "User" | "Guest";
```

---

## Payment Status

```ts
type PaymentStatus = "Pending" | "Success" | "Failed";
```

---

## Product

```ts
interface Product {
  id: number;
  name: string;
  price: number;
}
```

---

# JavaScript vs TypeScript

These concepts are **TypeScript-only**.

### JavaScript

JavaScript has **no** `type` or `interface`.

Objects are created without compile-time type checking.

```js
const user = {
  name: "John",
  age: 25,
};
```

---

### TypeScript

TypeScript validates the object's structure before execution.

```ts
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "John",
  age: 25,
};
```

---

# Quick Comparison

| Feature                      | Type Alias                    | Interface               |
| ---------------------------- | ----------------------------- | ----------------------- |
| Purpose                      | Create reusable types         | Define object structure |
| Supports Objects             | ✅                            | ✅                      |
| Supports Primitives          | ✅                            | ❌                      |
| Supports Arrays              | ✅                            | ❌                      |
| Supports Functions           | ✅                            | ❌                      |
| Supports Unions              | ✅                            | ❌                      |
| Supports Intersections       | ✅                            | ❌                      |
| Supports Declaration Merging | ❌                            | ✅                      |
| Best For                     | Primitives, unions, functions | Objects, APIs, classes  |

---

# Key Takeaways

- **Type Aliases (`type`)** create reusable names for any type, including primitives, objects, arrays, functions, unions, and intersections.
- **Interfaces (`interface`)** define the structure of objects and are ideal for APIs, models, and classes.
- Use **Union Types (`|`)** when a value can be one of several types.
- Use **Intersection Types (`&`)** to combine multiple types into one.
- Interfaces support **declaration merging**, while type aliases do not.
- Prefer **`interface`** for object shapes and **`type`** for everything else.

# TypeScript – Union Types

## Definition

A **Union Type** allows a variable, parameter, or property to store **more than one type**.

It uses the **pipe (`|`) operator**, which means **OR**.

> A value can be **this type OR that type**.

---

# Syntax

```ts
type Variable = Type1 | Type2;
```

or

```ts
let value: string | number;
```

Here, `value` can store either a **string** or a **number**.

---

# Basic Example

```ts
let id: string | number;

id = 101; // ✅
id = "EMP101"; // ✅
```

Invalid

```ts
id = true;
```

❌ Error

```text
Type 'boolean' is not assignable to type 'string | number'
```

---

# Union Types in Functions

Function parameters can accept multiple types.

```ts
function printStatusCode(code: string | number): void {
  console.log(`Status Code: ${code}`);
}

printStatusCode(404); // ✅
printStatusCode("404"); // ✅
```

Both calls are valid because the parameter accepts either type.

---

# Why Union Types?

Without union types, you would need separate functions.

Instead of:

```ts
function printNumber(code: number) {}

function printString(code: string) {}
```

You can simply write:

```ts
function printStatusCode(code: string | number) {}
```

This makes code cleaner and more reusable.

---

# Union Type Errors

When using union types, TypeScript only allows operations that are valid for **every possible type**.

### Example

```ts
function printStatusCode(code: string | number) {
  console.log(code.toUpperCase());
}
```

❌ Error

```text
Property 'toUpperCase'
does not exist on type 'string | number'
```

Why?

- `string` has `toUpperCase()`
- `number` does **not**

TypeScript cannot guarantee that `code` is a string.

---

# Type Narrowing

Before using type-specific methods, check the type.

```ts
function printStatusCode(code: string | number) {
  if (typeof code === "string") {
    console.log(code.toUpperCase());
  } else {
    console.log(code);
  }
}
```

Now TypeScript knows:

- Inside the `if` block → `code` is a **string**
- Inside the `else` block → `code` is a **number**

This is called **Type Narrowing**.

---

# Another Example

```ts
function printValue(value: string | boolean) {
  if (typeof value === "string") {
    console.log(value.length);
  } else {
    console.log(value);
  }
}
```

Here:

- String → `.length`
- Boolean → printed directly

---

# Union Type with Arrays

```ts
let values: (string | number)[] = ["John", 25, "Developer", 50000];
```

Each element can be either a string or a number.

---

# Union Type with Objects

```ts
type Employee = {
  id: string | number;
};

const emp1: Employee = {
  id: 101,
};

const emp2: Employee = {
  id: "EMP101",
};
```

Both objects are valid.

---

# Union of Literal Types

Union types are commonly used with **string literals**.

```ts
type Status = "Pending" | "Success" | "Failed";

let payment: Status = "Success";
```

Valid

```ts
payment = "Pending";
```

Invalid

```ts
payment = "Completed";
```

❌ Error

Only the three specified values are allowed.

---

# Union vs `any`

### Using `any`

```ts
let value: any;

value = "Hello";
value = 100;
value = true;
```

Anything is allowed.

---

### Using Union

```ts
let value: string | number;

value = "Hello";
value = 100;

value = true;
```

❌ Error

Union types provide **type safety**, whereas `any` disables it.

---

# Best Practices

- ✅ Use union types when a value can legitimately have multiple types.
- ✅ Use **type narrowing** (`typeof`, `instanceof`, etc.) before calling type-specific methods.
- ✅ Prefer unions over `any` to maintain type safety.
- ✅ Use literal unions to restrict values to a predefined set.

---

# Common Use Cases

- API responses
- Status values (`"Success" | "Error"`)
- User roles (`"Admin" | "User"`)
- IDs that can be either `string` or `number`
- Optional values (`string | null`)

---

# JavaScript vs TypeScript

This is a **TypeScript-only feature**.

### JavaScript

JavaScript variables can naturally hold different types, but there is **no compile-time checking**.

```js
let value = 10;

value = "Ten";
value = true;
```

JavaScript allows all of these.

---

### TypeScript

```ts
let value: string | number;

value = 10; // ✅
value = "Ten"; // ✅
value = true; // ❌ Error
```

TypeScript restricts the variable to only the specified types.

---

# Quick Comparison

| Feature            | Description                              |
| ------------------ | ---------------------------------------- |
| `\|` (Pipe)        | Represents **OR** between types          |
| `string \| number` | Value can be either a string or a number |
| Type Narrowing     | Checks the actual type before using it   |
| Literal Union      | Restricts values to specific literals    |

---

# Key Takeaways

- **Union Types (`|`)** allow a value to have **one of multiple types**.
- Use the **pipe (`|`) operator**, which means **OR**.
- TypeScript only allows operations that are valid for **all possible types** in the union.
- Use **type narrowing** (`typeof`, `instanceof`, etc.) before calling type-specific methods.
- Union types are safer than `any` because they preserve compile-time type checking.
- Literal unions are useful for restricting values to a fixed set of valid options.

---

# JavaScript & TypeScript – Operators

## What are Operators?

Operators are symbols used to perform operations on values and variables.

- ➕ Arithmetic (Math)
- 📝 Assignment
- 🔍 Comparison
- 🤔 Logical Operations

> **Note:** JavaScript and TypeScript use the **same operators**. TypeScript adds **compile-time type checking**.

---

# 1. Assignment Operators

Assign or update values.

### JavaScript

```js
let count = 10;
count += 5;

console.log(count); // 15
```

### TypeScript

```ts
let count: number = 10;

count += 5; // ✅
count = 20; // ✅

// count = "20"; // ❌ Error
```

| Operator | Meaning           |
| -------- | ----------------- |
| `=`      | Assign            |
| `+=`     | Add & Assign      |
| `-=`     | Subtract & Assign |
| `*=`     | Multiply & Assign |
| `/=`     | Divide & Assign   |
| `%=`     | Modulus & Assign  |

---

# 2. Arithmetic Operators

Perform mathematical calculations.

### JavaScript

```js
let a = 10;
let b = 3;

console.log(a + b);
console.log(a * b);
console.log(a % b);
```

### TypeScript

```ts
let a: number = 10;
let b: number = 3;

console.log(a + b);
console.log(a * b);

// a = "10"; // ❌ Error
```

| Operator | Description    |
| -------- | -------------- |
| `+`      | Addition       |
| `-`      | Subtraction    |
| `*`      | Multiplication |
| `/`      | Division       |
| `%`      | Modulus        |
| `**`     | Power          |
| `++`     | Increment      |
| `--`     | Decrement      |

---

# 3. String Concatenation (`+`)

### JavaScript

```js
let first = "John";
let last = "Doe";

console.log(first + " " + last);
```

### TypeScript

```ts
let first: string = "John";
let last: string = "Doe";

console.log(first + " " + last);

// first = 100; // ❌ Error
```

---

# 4. Numbers + Strings

### JavaScript

```js
console.log(5 + "5"); // "55"
```

### TypeScript

```ts
let num: number = 5;
let text: string = "5";

console.log(num + text); // "55"
```

> TypeScript still follows JavaScript's runtime behaviour, but it ensures variables have the correct declared types.

---

# 5. Comparison Operators

Compare two values.

### JavaScript

```js
console.log(5 == "5"); // true
console.log(5 === "5"); // false
```

### TypeScript

```ts
let age: number = 18;

console.log(age >= 18); // true

// age = "18"; // ❌ Error
```

| Operator | Meaning               |
| -------- | --------------------- |
| `==`     | Equal (value only)    |
| `===`    | Equal (value & type)  |
| `!=`     | Not Equal             |
| `!==`    | Strict Not Equal      |
| `>`      | Greater Than          |
| `<`      | Less Than             |
| `>=`     | Greater Than or Equal |
| `<=`     | Less Than or Equal    |

> ✅ Prefer **`===`** and **`!==`**.

---

# 6. Logical Operators

Combine multiple conditions.

### JavaScript

```js
let age = 20;

console.log(age > 18 && age < 30);
```

### TypeScript

```ts
let age: number = 20;
let isAdmin: boolean = false;

console.log(age > 18 && !isAdmin);
```

| Operator | Meaning |     |     |
| -------- | ------- | --- | --- |
| `&&`     | AND     |     |     |
| `\|\|`   | OR      |
| `!`      | NOT     |     |     |

---

# JavaScript vs TypeScript

| JavaScript              | TypeScript                    |
| ----------------------- | ----------------------------- |
| Same operators          | Same operators                |
| No type checking        | Compile-time type checking    |
| Errors found at runtime | Errors found before execution |

### Example

**JavaScript**

```js
let price = 100;
price = "100"; // Allowed
```

**TypeScript**

```ts
let price: number = 100;

// price = "100"; // ❌ Error
```

---

# Key Takeaways

- JavaScript and TypeScript use **the same operators**.
- TypeScript **does not introduce new operators**.
- The main difference is that **TypeScript validates operand types before execution**.
- Use **`===`** instead of `==` whenever possible.
- TypeScript helps prevent invalid assignments and operator misuse through static type checking.

# JavaScript & TypeScript – Arithmetic Operators

## What are Arithmetic Operators?

Arithmetic operators are used to perform **mathematical calculations** on numbers.

> **Note:** JavaScript and TypeScript use the **same arithmetic operators**. TypeScript only adds **type checking**.

---

# Arithmetic Operators

| Operator | Description            | Example  |
| -------- | ---------------------- | -------- |
| `+`      | Addition               | `a + b`  |
| `-`      | Subtraction            | `a - b`  |
| `*`      | Multiplication         | `a * b`  |
| `/`      | Division               | `a / b`  |
| `%`      | Modulus (Remainder)    | `a % b`  |
| `**`     | Exponentiation (Power) | `a ** b` |
| `++`     | Increment              | `a++`    |
| `--`     | Decrement              | `a--`    |

---

# Operands and Operators

An arithmetic expression contains:

- **Operands** → Values or variables
- **Operator** → Performs the calculation

```
100 + 50

100  → Operand
+    → Operator
50   → Operand
```

---

# Arithmetic Operations

Operations can be performed using:

### 1. Literals

```js
let result = 100 + 50;
```

### 2. Variables

```js
let a = 100;
let b = 50;

let result = a + b;
```

### 3. Expressions

```js
let result = (100 + 50) * 2;
```

---

# 1. Addition (`+`)

### JavaScript

```js
let a = 10;
let b = 5;

console.log(a + b);
```

**Output**

```
15
```

### TypeScript

```ts
let a: number = 10;
let b: number = 5;

console.log(a + b);

// a = "10"; ❌ Error
```

---

# 2. Subtraction (`-`)

### JavaScript

```js
let a = 10;
let b = 5;

console.log(a - b);
```

**Output**

```
5
```

### TypeScript

```ts
let a: number = 10;
let b: number = 5;

console.log(a - b);
```

---

# 3. Multiplication (`*`)

### JavaScript

```js
let a = 10;
let b = 5;

console.log(a * b);
```

**Output**

```
50
```

### TypeScript

```ts
let a: number = 10;
let b: number = 5;

console.log(a * b);
```

---

# 4. Division (`/`)

### JavaScript

```js
let a = 10;
let b = 2;

console.log(a / b);
```

**Output**

```
5
```

### TypeScript

```ts
let a: number = 10;
let b: number = 2;

console.log(a / b);
```

---

# 5. Modulus (`%`)

Returns the **remainder** after division.

### JavaScript

```js
console.log(10 % 3);
```

**Output**

```
1
```

### TypeScript

```ts
let a: number = 10;
let b: number = 3;

console.log(a % b);
```

---

# 6. Increment (`++`)

Increases a value by **1**.

### JavaScript

```js
let count = 5;

count++;

console.log(count);
```

**Output**

```
6
```

### TypeScript

```ts
let count: number = 5;

count++;
```

---

# 7. Decrement (`--`)

Decreases a value by **1**.

### JavaScript

```js
let count = 5;

count--;

console.log(count);
```

**Output**

```
4
```

### TypeScript

```ts
let count: number = 5;

count--;
```

---

# 8. Exponentiation (`**`)

Raises a number to the power of another number.

### JavaScript

```js
console.log(5 ** 2);
```

**Output**

```
25
```

Equivalent to:

```js
console.log(Math.pow(5, 2));
```

### TypeScript

```ts
let num: number = 5;

console.log(num ** 2);
```

---

# Operator Precedence

JavaScript follows **BODMAS/PEMDAS**.

Operations are evaluated in this order:

1. `()` Parentheses
2. `**` Exponentiation
3. `*`, `/`, `%`
4. `+`, `-`

---

## Example 1

```js
let result = 100 + 50 * 3;

console.log(result);
```

**Output**

```
250
```

Multiplication happens first.

---

## Example 2

```js
let result = (100 + 50) * 3;

console.log(result);
```

**Output**

```
450
```

Parentheses execute first.

---

## Left-to-Right Evaluation

Operators with the same precedence execute from **left to right**.

```js
console.log(100 + 50 - 20);
```

**Output**

```
130
```

```js
console.log((100 / 50) * 3);
```

**Output**

```
6
```

---

# JavaScript vs TypeScript

| JavaScript                  | TypeScript                   |
| --------------------------- | ---------------------------- |
| Same arithmetic operators   | Same arithmetic operators    |
| No type checking            | Compile-time type checking   |
| Invalid assignments allowed | Prevents invalid assignments |

### JavaScript

```js
let value = 10;

value = "10"; // Allowed
```

### TypeScript

```ts
let value: number = 10;

// value = "10"; // ❌ Error

console.log(value * 2);
```

---

# Best Practices

- ✅ Use parentheses `()` to make expressions easier to read.
- ✅ Use meaningful variable names.
- ✅ Prefer `**` over `Math.pow()` for readability.
- ✅ In TypeScript, use the `number` type for arithmetic operations.

---

# Key Takeaways

- Arithmetic operators perform mathematical calculations.
- Operands are the values being operated on, and operators perform the operation.
- `+`, `-`, `*`, `/`, `%`, `**`, `++`, and `--` are the most commonly used arithmetic operators.
- `%` returns the remainder after division.
- `**` performs exponentiation (power).
- JavaScript follows **operator precedence (BODMAS/PEMDAS)**.
- JavaScript and TypeScript use the **same arithmetic operators**, but TypeScript adds **compile-time type safety**.

# JavaScript & TypeScript – Assignment Operators

> **Note:** JavaScript and TypeScript use the **same assignment operators**. TypeScript adds **type checking**.

| Operator | Purpose           | JavaScript Example | TypeScript Example             |
| -------- | ----------------- | ------------------ | ------------------------------ |
| `=`      | Assign value      | `let x = 10;`      | `let x: number = 10;`          |
| `+=`     | Add & Assign      | `x += 5; // 15`    | `let x: number = 10; x += 5;`  |
| `-=`     | Subtract & Assign | `x -= 5; // 5`     | `let x: number = 10; x -= 5;`  |
| `*=`     | Multiply & Assign | `x *= 5; // 50`    | `let x: number = 10; x *= 5;`  |
| `/=`     | Divide & Assign   | `x /= 5; // 2`     | `let x: number = 10; x /= 5;`  |
| `%=`     | Modulus & Assign  | `x %= 3; // 1`     | `let x: number = 10; x %= 3;`  |
| `**=`    | Power & Assign    | `x **= 2; // 100`  | `let x: number = 10; x **= 2;` |

---

# 🟨 String Assignment

| Operator | JavaScript            | TypeScript                                      |
| -------- | --------------------- | ----------------------------------------------- |
| `=`      | `let text = "Hello";` | `let text: string = "Hello";`                   |
| `+=`     | `text += " World";`   | `let text: string = "Hello"; text += " World";` |

---

# 🟨 Logical Assignment Operators (ES2020)

| Operator | Meaning                      | JavaScript Example                 | TypeScript Example                           |
| -------- | ---------------------------- | ---------------------------------- | -------------------------------------------- |
| `&&=`    | Assign if **truthy**         | `let x = true; x &&= 10; // 10`    | `let x: boolean \| number = true; x &&= 10;` |
| `\|\|=`  | Assign if **falsy**          | `let x = false; x \|\|= 10; // 10` | `let x: number = 0; x \|\|= 10; // 10`       |
| `??=`    | Assign if **null/undefined** | `let x = null; x ??= 10; // 10`    | `let x: number \| null = null; x ??= 10;`    |

---

# 🟨 Logical Assignment Quick Reference

| Operator    | Condition                              | Example            |
| ----------- | -------------------------------------- | ------------------ |
| `x &&= y`   | Assign if `x` is **truthy**            | `true &&= 10 → 10` |
| `x \|\|= y` | Assign if `x` is **falsy**             | `0 \|\|= 10 → 10`  |
| `x ??= y`   | Assign if `x` is **null or undefined** | `null ??= 10 → 10` |

---

# 🟨 Falsy Values

These values evaluate to **false** in JavaScript.

| Value            | Example        |
| ---------------- | -------------- |
| `false`          | `if(false)`    |
| `0`              | `if(0)`        |
| `-0`             | `if(-0)`       |
| `0n`             | `if(0n)`       |
| `""`, `''`, ```` | Empty String   |
| `null`           | No value       |
| `undefined`      | Not assigned   |
| `NaN`            | Invalid Number |

---

# 🟨 Truthy Values (Common Confusion)

These look "false-like" but are actually **truthy**.

| Value     | Result    |
| --------- | --------- |
| `"0"`     | ✅ Truthy |
| `"false"` | ✅ Truthy |
| `[]`      | ✅ Truthy |
| `{}`      | ✅ Truthy |

---

# 🟨 Spread Operator (`...`)

The **Spread Operator** expands an iterable into individual elements.

| JavaScript                                            | TypeScript                                                      |
| ----------------------------------------------------- | --------------------------------------------------------------- |
| `const nums = [10,20,30];`<br>`console.log(...nums);` | `const nums: number[] = [10,20,30];`<br>`console.log(...nums);` |

### Example

**JavaScript**

```js
const numbers = [10, 20, 30];

console.log(...numbers); // 10 20 30
```

**TypeScript**

```ts
const numbers: number[] = [10, 20, 30];

console.log(...numbers);
```

---

# 🟨 JavaScript vs TypeScript

| JavaScript                     | TypeScript                   |
| ------------------------------ | ---------------------------- |
| Same assignment operators      | Same assignment operators    |
| No type checking               | Compile-time type checking   |
| Allows changing variable types | Prevents invalid assignments |

### Example

**JavaScript**

```js
let age = 25;
age = "25"; // ✅ Allowed
```

**TypeScript**

```ts
let age: number = 25;

// age = "25"; ❌ Error
```

---

## 📌 Key Points

| Topic                                  | Summary                                                                      |            |                                                                                 |
| -------------------------------------- | ---------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------- |
| Assignment (`=`)                       | Assigns a value to a variable.                                               |            |                                                                                 |
| Compound Assignment (`+=`, `-=`, etc.) | Performs an operation and assigns the result.                                |            |                                                                                 |
| Logical Assignment (`&&=`, `           |                                                                              | =`, `??=`) | Conditionally assigns values based on truthiness, falsiness, or nullish values. |
| Spread (`...`)                         | Expands arrays, strings, or objects into individual elements.                |            |                                                                                 |
| TypeScript Advantage                   | Uses the same operators as JavaScript but provides compile-time type safety. |            |                                                                                 |

# JavaScript & TypeScript – Comparison Operators

> **Note:** JavaScript and TypeScript use the **same comparison operators**. TypeScript adds **compile-time type checking**.

---

# 🟨 Comparison Operators

| Operator | Purpose                     | JavaScript Example    | TypeScript Example            |
| -------- | --------------------------- | --------------------- | ----------------------------- |
| `==`     | Equal (value only)          | `5 == "5"` → `true`   | `let x: number = 5; x == 5;`  |
| `===`    | Strict Equal (value & type) | `5 === "5"` → `false` | `let x: number = 5; x === 5;` |
| `!=`     | Not Equal                   | `5 != 8` → `true`     | `let x: number = 5; x != 8;`  |
| `!==`    | Strict Not Equal            | `5 !== "5"` → `true`  | `let x: number = 5; x !== 8;` |
| `>`      | Greater Than                | `5 > 3` → `true`      | `let x: number = 5; x > 3;`   |
| `<`      | Less Than                   | `5 < 10` → `true`     | `let x: number = 5; x < 10;`  |
| `>=`     | Greater Than or Equal       | `5 >= 5` → `true`     | `let x: number = 5; x >= 5;`  |
| `<=`     | Less Than or Equal          | `5 <= 10` → `true`    | `let x: number = 5; x <= 10;` |

---

# 🟨 `==` vs `===`

| Operator | JavaScript Example | Result  | Recommendation             |
| -------- | ------------------ | ------- | -------------------------- |
| `==`     | `5 == "5"`         | `true`  | ❌ Avoid (type conversion) |
| `===`    | `5 === "5"`        | `false` | ✅ Preferred               |

### JavaScript

```js
console.log(5 == "5"); // true
console.log(5 === "5"); // false
```

### TypeScript

```ts
let x: number = 5;

console.log(x === 5); // true

// x = "5"; // ❌ Error
```

---

# 🟨 String Comparison

Strings are compared **alphabetically (lexicographically)**.

| JavaScript           | TypeScript                                                      |
| -------------------- | --------------------------------------------------------------- |
| `"A" < "B"` → `true` | `let a: string = "A"; let b: string = "B"; console.log(a < b);` |

### Example

```js
console.log("A" < "B"); // true
console.log("Cat" > "Apple"); // true
```

---

# 🟨 Comparing Different Data Types

JavaScript automatically converts types, which can produce unexpected results.

| Expression   | Result  | Reason              |
| ------------ | ------- | ------------------- |
| `2 < "12"`   | `true`  | `"12"` → `12`       |
| `2 == "2"`   | `true`  | Type conversion     |
| `2 === "2"`  | `false` | Different types     |
| `"2" > "12"` | `true`  | Compared as strings |
| `2 < "John"` | `false` | `"John"` → `NaN`    |

---

# 🟨 Conditional Statements

Comparison operators are commonly used in `if` statements.

### JavaScript

```js
let age = 16;

if (age < 18) {
  console.log("Too young");
}
```

### TypeScript

```ts
let age: number = 16;

if (age < 18) {
  console.log("Too young");
}
```

---

# 🟨 Type Conversion Before Comparison

Convert values before comparing to avoid unexpected results.

### JavaScript

```js
let age = "18";

console.log(Number(age) >= 18);
```

### TypeScript

```ts
let age: string = "18";

console.log(Number(age) >= 18);
```

---

# 🟨 JavaScript vs TypeScript

| JavaScript                      | TypeScript                   |
| ------------------------------- | ---------------------------- |
| Same comparison operators       | Same comparison operators    |
| Automatic type coercion         | Compile-time type checking   |
| May allow incorrect comparisons | Prevents invalid assignments |

### JavaScript

```js
let value = 5;

value = "5"; // ✅ Allowed
console.log(value == 5); // true
```

### TypeScript

```ts
let value: number = 5;

// value = "5"; // ❌ Error

console.log(value === 5); // true
```

---

# 📌 Best Practices

| Recommendation                   | Reason                           |
| -------------------------------- | -------------------------------- |
| Use `===` and `!==`              | Avoids automatic type conversion |
| Avoid `==`                       | Can produce unexpected results   |
| Convert values before comparison | Prevents incorrect comparisons   |
| Use TypeScript types             | Catches errors at compile time   |

---

# 📌 Key Points

| Topic                 | Summary                                                                                |
| --------------------- | -------------------------------------------------------------------------------------- |
| `==`                  | Compares only values (allows type coercion).                                           |
| `===`                 | Compares both value and type (recommended).                                            |
| `!=` / `!==`          | Not equal operators (`!==` is preferred).                                              |
| String Comparison     | Strings are compared alphabetically.                                                   |
| Mixed-Type Comparison | JavaScript performs automatic type conversion.                                         |
| TypeScript Advantage  | Uses the same comparison operators but catches type-related errors during compilation. |

# JavaScript & TypeScript – `if`, `else`, and `else if`

> **Note:** JavaScript and TypeScript use the **same conditional statements**. TypeScript adds **type checking**.

---

# 🟨 `if` Statement

Executes a block of code **only if the condition is true**.

### Syntax

```ts
if (condition) {
  // code to execute
}
```

| JavaScript                                               | TypeScript                                                       |
| -------------------------------------------------------- | ---------------------------------------------------------------- |
| `let age = 18; if (age >= 18) console.log("Can Drive");` | `let age: number = 18; if (age >= 18) console.log("Can Drive");` |

---

# 🟨 `else` Statement

Executes a block of code when the `if` condition is **false**.

### Syntax

```ts
if (condition) {
  // true block
} else {
  // false block
}
```

| JavaScript                                                              | TypeScript                                                                                    |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `if(age >= 18){ console.log("Adult"); } else { console.log("Minor"); }` | `let age: number = 16; if(age >= 18){ console.log("Adult"); } else { console.log("Minor"); }` |

---

# 🟨 `else if` Statement

Checks another condition if the previous condition is **false**.

### Syntax

```ts
if (condition1) {
  // block
} else if (condition2) {
  // block
} else {
  // block
}
```

| JavaScript                                                                                                        | TypeScript                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `let score = 85; if(score >= 90) console.log("A"); else if(score >= 75) console.log("B"); else console.log("C");` | `let score: number = 85; if(score >= 90) console.log("A"); else if(score >= 75) console.log("B"); else console.log("C");` |

---

# 🟨 Nested `if`

An `if` statement inside another `if`.

| JavaScript                                                      | TypeScript                                                                                                      |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `if(country=="USA"){ if(age>=16){ console.log("Can Drive"); }}` | `let country: string="USA"; let age: number=16; if(country==="USA"){ if(age>=16){ console.log("Can Drive"); }}` |

> ⚠️ Avoid deep nesting when possible.

---

# 🟨 Using Logical AND (`&&`)

Instead of nested `if`, combine conditions using `&&`.

| JavaScript                                                   | TypeScript                                                                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `if(country=="USA" && age>=16){ console.log("Can Drive"); }` | `let country: string="USA"; let age: number=16; if(country==="USA" && age>=16){ console.log("Can Drive"); }` |

> ✅ Preferred over nested `if` because it is cleaner and easier to read.

---

# 🟨 Flow of `if...else if...else`

| Condition                          | Executed Block  |
| ---------------------------------- | --------------- |
| First condition is `true`          | `if` block      |
| First is `false`, second is `true` | `else if` block |
| All conditions are `false`         | `else` block    |

---

# 🟨 Real-World Example

| JavaScript                                                                                                                       | TypeScript                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `let hour = 14; if(hour < 12) console.log("Morning"); else if(hour < 18) console.log("Afternoon"); else console.log("Evening");` | `let hour: number = 14; if(hour < 12) console.log("Morning"); else if(hour < 18) console.log("Afternoon"); else console.log("Evening");` |

---

# JavaScript & TypeScript – `switch` Statement

> **Note:** JavaScript and TypeScript use the **same `switch` statement**. TypeScript adds **type checking**.

---

# 🟨 `switch` Statement

Used to execute **one block of code** from multiple possible options.

### Syntax

```ts
switch (expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
  // code
}
```

---

# 🟨 Basic `switch`

| JavaScript                                                                                                                           | TypeScript                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `let day = 2; switch(day){ case 1: console.log("Mon"); break; case 2: console.log("Tue"); break; default: console.log("Invalid"); }` | `let day: number = 2; switch(day){ case 1: console.log("Mon"); break; case 2: console.log("Tue"); break; default: console.log("Invalid"); }` |

---

# 🟨 `break` Statement

Stops execution after the matched case.

| With `break`                    | Without `break`                                             |
| ------------------------------- | ----------------------------------------------------------- |
| Executes only the matched case. | Continues executing the following cases (**fall-through**). |

### Example

**JavaScript**

```js
let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
}
```

**Output**

```
Monday
```

---

# 🟨 Without `break` (Fall-through)

```js
let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
  case 2:
    console.log("Tuesday");
}
```

**Output**

```
Monday
Tuesday
```

> ⚠️ Without `break`, execution continues to the next case.

---

# 🟨 `default` Case

Executed when **no case matches**.

| JavaScript                                                                           | TypeScript                                                                                                 |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| `switch(day){ case 1: console.log("Mon"); break; default: console.log("Invalid"); }` | `let day: number = 10; switch(day){ case 1: console.log("Mon"); break; default: console.log("Invalid"); }` |

---

# 🟨 Multiple Cases (Shared Code)

Multiple cases can execute the **same code block**.

| JavaScript                                                                                       | TypeScript                                                                                                            |
| ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| `switch(day){ case 6: case 0: console.log("Weekend"); break; default: console.log("Weekday"); }` | `let day: number = 6; switch(day){ case 6: case 0: console.log("Weekend"); break; default: console.log("Weekday"); }` |

---

# 🟨 `switch` Uses Strict Comparison (`===`)

`switch` compares values using **strict equality (`===`)**.

| Expression  | Result      |
| ----------- | ----------- |
| `5 === 5`   | ✅ Match    |
| `"5" === 5` | ❌ No Match |

### Example

**JavaScript**

```js
let x = "0";

switch (x) {
  case 0:
    console.log("Off");
    break;
  default:
    console.log("No Match");
}
```

**Output**

```
No Match
```

---

# 🟨 `switch` vs `if...else`

| `switch`                                                 | `if...else`                                |     |               |
| -------------------------------------------------------- | ------------------------------------------ | --- | ------------- |
| Best for comparing **one variable** against many values. | Best for **ranges** or complex conditions. |     |               |
| Cleaner for fixed options.                               | Better for logical expressions (`&&`, `    |     | `, `>`, `<`). |

### Example

**Use `switch`**

```ts
switch (role) {
  case "Admin":
  case "User":
}
```

**Use `if`**

```ts
if (age >= 18 && country === "USA") {
  console.log("Eligible");
}
```

---

# 🟨 JavaScript vs TypeScript

| JavaScript                     | TypeScript                 |
| ------------------------------ | -------------------------- |
| Same `switch` syntax           | Same syntax                |
| No type checking               | Compile-time type checking |
| Allows changing variable types | Enforces declared types    |

### JavaScript

```js
let day = 1;
day = "1"; // ✅ Allowed
```

### TypeScript

```ts
let day: number = 1;

// day = "1"; // ❌ Error
```

---

# JavaScript & TypeScript – Logical Operators

> **Note:** JavaScript and TypeScript use the **same logical operators**. TypeScript adds **type checking**.

---

# 🟨 Logical Operators

| Operator | Purpose                             | JavaScript Example          | TypeScript Example                                  |
| -------- | ----------------------------------- | --------------------------- | --------------------------------------------------- |
| `&&`     | AND (Both conditions must be true)  | `5 > 2 && 10 > 5 // true`   | `let age: number = 20; age > 18 && age < 60;`       |
| `\|\|`   | OR (At least one condition is true) | `5 < 2 \|\| 10 > 5 // true` | `let age: number = 20; age < 18 \|\| age > 60;`     |
| `!`      | NOT (Reverses the result)           | `!(5 > 2) // false`         | `let isAdmin: boolean = false; !isAdmin;`           |
| `??`     | Nullish Coalescing                  | `name ?? "Guest"`           | `let name: string \| null = null; name ?? "Guest";` |

---

# 🟨 Logical AND (`&&`)

Returns **true** only if **both conditions** are true.

| JavaScript                                         | TypeScript                                                 |
| -------------------------------------------------- | ---------------------------------------------------------- |
| `let age = 25; console.log(age > 18 && age < 60);` | `let age: number = 25; console.log(age > 18 && age < 60);` |

**Result:** `true`

---

# 🟨 Logical OR (`||`)

Returns **true** if **at least one condition** is true.

| JavaScript                                           | TypeScript                                                   |
| ---------------------------------------------------- | ------------------------------------------------------------ |
| `let age = 16; console.log(age < 18 \|\| age > 60);` | `let age: number = 16; console.log(age < 18 \|\| age > 60);` |

**Result:** `true`

---

# 🟨 Logical NOT (`!`)

Reverses a boolean value.

| JavaScript                        | TypeScript                                                     |
| --------------------------------- | -------------------------------------------------------------- |
| `console.log(!(5 > 2)); // false` | `let isAdmin: boolean = false; console.log(!isAdmin); // true` |

---

# 🟨 Nullish Coalescing (`??`)

Returns the **right value only if the left value is `null` or `undefined`**.

| JavaScript                                       | TypeScript                                                       |
| ------------------------------------------------ | ---------------------------------------------------------------- |
| `let name = null; console.log(name ?? "Guest");` | `let name: string \| null = null; console.log(name ?? "Guest");` |

**Result:** `"Guest"`

---

# 🟨 `||` vs `??`

| Operator | When it uses the default value   | Example      | Result |
| -------- | -------------------------------- | ------------ | ------ |
| `\|\|`   | Left value is **falsy**          | `0 \|\| 100` | `100`  |
| `??`     | Left value is **null/undefined** | `0 ?? 100`   | `0`    |

### Example

```js
console.log(0 || 100); // 100
console.log(0 ?? 100); // 0

console.log("" || "Guest"); // Guest
console.log("" ?? "Guest"); // ""
```

> ✅ Use `??` when `0`, `false`, or `""` are valid values.

---

# JavaScript & TypeScript – Loops & Control Flow

> **Note:** JavaScript and TypeScript use the **same loops and control flow statements**. TypeScript adds **type checking**.

---

# 🟨 Loop Types

| Loop         | Purpose                                 | JavaScript Example                     | TypeScript Example                                   |
| ------------ | --------------------------------------- | -------------------------------------- | ---------------------------------------------------- |
| `for`        | Execute code a fixed number of times    | `for(let i=0;i<5;i++) console.log(i);` | `for(let i:number=0;i<5;i++) console.log(i);`        |
| `while`      | Execute while condition is true         | `let i=0; while(i<5){i++;}`            | `let i:number=0; while(i<5){i++;}`                   |
| `do...while` | Executes **at least once**              | `let i=0; do{i++;}while(i<5);`         | `let i:number=0; do{i++;}while(i<5);`                |
| `for...of`   | Iterate over array values               | `for(const car of cars){}`             | `const cars:string[]=[]; for(const car of cars){}`   |
| `for...in`   | Iterate over object keys                | `for(const key in user){}`             | `const user={name:"John"}; for(const key in user){}` |
| `forEach()`  | Execute callback for each array element | `cars.forEach(car=>console.log(car));` | `cars.forEach((car:string)=>console.log(car));`      |

---

# 🟨 `for` Loop

Best when **number of iterations is known**.

| JavaScript                             | TypeScript                                    |
| -------------------------------------- | --------------------------------------------- |
| `for(let i=0;i<5;i++) console.log(i);` | `for(let i:number=0;i<5;i++) console.log(i);` |

### Syntax

```ts
for (initialization; condition; increment) {
  // code
}
```

---

# 🟨 `while` Loop

Runs **while the condition is true**.

| JavaScript                                    | TypeScript                                           |
| --------------------------------------------- | ---------------------------------------------------- |
| `let i=0; while(i<5){ console.log(i); i++; }` | `let i:number=0; while(i<5){ console.log(i); i++; }` |

> ⚠️ Always update the loop variable to avoid an **infinite loop**.

---

# 🟨 `do...while` Loop

Executes **at least once**, even if the condition is false.

| JavaScript                                  | TypeScript                                         |
| ------------------------------------------- | -------------------------------------------------- |
| `let i=5; do{ console.log(i); }while(i<5);` | `let i:number=5; do{ console.log(i); }while(i<5);` |

---

# 🟨 `for...of`

Used to iterate **array values**.

| JavaScript                                    | TypeScript                                                                        |
| --------------------------------------------- | --------------------------------------------------------------------------------- |
| `for(const car of cars){ console.log(car); }` | `const cars:string[]=["BMW","Audi"]; for(const car of cars){ console.log(car); }` |

✅ Preferred for arrays.

---

# 🟨 `for...in`

Used to iterate **object keys**.

| JavaScript                                    | TypeScript                                                              |
| --------------------------------------------- | ----------------------------------------------------------------------- |
| `for(const key in user){ console.log(key); }` | `const user={name:"John"}; for(const key in user){ console.log(key); }` |

✅ Best for objects.

---

# 🟨 `forEach()`

Executes a callback for every array element.

| JavaScript                               | TypeScript                                      |
| ---------------------------------------- | ----------------------------------------------- |
| `cars.forEach(car => console.log(car));` | `cars.forEach((car:string)=>console.log(car));` |

### When to use `forEach()`

- ✅ Iterating arrays
- ✅ Cleaner syntax
- ❌ Cannot use `break` or `continue`
- ❌ Does not return a new array (use `map()` for that)

---

# 🟨 `for` vs `forEach()`

| `for` Loop                   | `forEach()`                         |
| ---------------------------- | ----------------------------------- |
| Can use `break` & `continue` | ❌ Cannot use `break` or `continue` |
| Faster for complex loops     | Cleaner for array iteration         |
| Works with arrays & counters | Only works with arrays              |

---

# 🟨 `break`

Immediately exits a loop or `switch`.

| JavaScript                                 | TypeScript                                        |
| ------------------------------------------ | ------------------------------------------------- |
| `for(let i=0;i<5;i++){ if(i===3) break; }` | `for(let i:number=0;i<5;i++){ if(i===3) break; }` |

---

# 🟨 `continue`

Skips the current iteration and moves to the next.

| JavaScript                                                    | TypeScript                                                           |
| ------------------------------------------------------------- | -------------------------------------------------------------------- |
| `for(let i=0;i<5;i++){ if(i===2) continue; console.log(i); }` | `for(let i:number=0;i<5;i++){ if(i===2) continue; console.log(i); }` |

---

# 🟨 Loop Scope (`var` vs `let`)

| `var`                   | `let`                      |
| ----------------------- | -------------------------- |
| Function scoped         | Block scoped               |
| Accessible outside loop | Available only inside loop |
| Avoid in modern JS      | ✅ Recommended             |

---

# 🟨 Labels (Rarely Used)

Used with nested loops.

| Statement         | Purpose                        |
| ----------------- | ------------------------------ |
| `break label;`    | Exit a specific outer loop     |
| `continue label;` | Continue a specific outer loop |

> ⚠️ Rarely used in real-world projects.

---

# 🟨 Control Flow

Control flow determines the order of execution.

| Type        | Examples                                |
| ----------- | --------------------------------------- |
| Sequential  | Normal execution (top → bottom)         |
| Conditional | `if`, `else`, `switch`, ternary         |
| Looping     | `for`, `while`, `do...while`, `forEach` |
| Jump        | `break`, `continue`, `return`, `throw`  |

---

# 🟨 JavaScript is Single-Threaded

- Executes **one task at a time**
- Tasks run sequentially
- Long-running tasks can block execution
- Asynchronous APIs (`Promise`, `async/await`) help avoid blocking

---

# 🟨 JavaScript vs TypeScript

| JavaScript        | TypeScript                 |
| ----------------- | -------------------------- |
| Same loops        | Same loops                 |
| No type checking  | Compile-time type checking |
| Dynamic variables | Typed variables            |

### JavaScript

```js
let numbers = [1, 2, 3];

numbers.forEach((n) => console.log(n));
```

### TypeScript

```ts
let numbers: number[] = [1, 2, 3];

numbers.forEach((n: number) => console.log(n));
```

---

# 📌 Best Practices

| Recommendation                             | Reason                     |
| ------------------------------------------ | -------------------------- |
| Use `for` when index is needed             | Better control             |
| Use `for...of` for arrays                  | Cleaner than indexed loops |
| Use `forEach()` for simple array iteration | Readable and concise       |
| Use `for...in` only for objects            | Avoid with arrays          |
| Avoid `var`                                | Use `let` or `const`       |
| Always update loop variables               | Prevent infinite loops     |

---

# 📌 Key Points

| Topic                | Summary                                                                        |
| -------------------- | ------------------------------------------------------------------------------ |
| `for`                | Best when iteration count is known.                                            |
| `while`              | Runs while a condition is true.                                                |
| `do...while`         | Executes at least once.                                                        |
| `for...of`           | Iterates array values.                                                         |
| `for...in`           | Iterates object keys.                                                          |
| `forEach()`          | Executes a callback for every array element; cannot use `break` or `continue`. |
| `break`              | Exits a loop or `switch`.                                                      |
| `continue`           | Skips the current iteration.                                                   |
| `var` vs `let`       | Prefer `let` because it is block-scoped.                                       |
| Control Flow         | Controls execution using conditions, loops, and jump statements.               |
| TypeScript Advantage | Same loop syntax as JavaScript with compile-time type safety.                  |

# JavaScript & TypeScript – Type Casting

> **Note:** **Type Casting is a TypeScript feature.** JavaScript does **not** support type casting—it uses **type conversion** instead.

---

# 🟨 What is Type Casting?

Type Casting is the process of **telling TypeScript to treat a variable as a different type**.

> ⚠️ Casting **does not change the actual value**. It only changes how TypeScript interprets the type.

---

# 🟨 Casting with `as` (Recommended)

| JavaScript       | TypeScript                                                             |
| ---------------- | ---------------------------------------------------------------------- |
| ❌ Not Supported | `let value: unknown = "Hello"; console.log((value as string).length);` |

### Example

```ts
let value: unknown = "Hello";

console.log((value as string).length); // 5
```

---

# 🟨 Casting with `<>`

Alternative syntax for casting.

| JavaScript       | TypeScript                                                           |
| ---------------- | -------------------------------------------------------------------- |
| ❌ Not Supported | `let value: unknown = "Hello"; console.log((<string>value).length);` |

> ⚠️ Avoid `<>` in **React (.tsx)** files because it conflicts with JSX syntax.

---

# 🟨 Force Casting

Used when TypeScript prevents an unsafe cast.

| JavaScript       | TypeScript                                             |
| ---------------- | ------------------------------------------------------ |
| ❌ Not Supported | `let value = "Hello"; ((value as unknown) as number);` |

### Example

```ts
let value = "Hello";

console.log(value as unknown as number);
```

> ⚠️ Force casting bypasses TypeScript's safety checks. Use it only when necessary.

---

# 🟨 Type Casting vs Type Conversion

| Type Casting (TypeScript)             | Type Conversion (JavaScript)     |
| ------------------------------------- | -------------------------------- |
| Changes only the **type information** | Changes the **actual value**     |
| Compile-time feature                  | Runtime feature                  |
| `value as string`                     | `Number(value)`, `String(value)` |

### JavaScript (Type Conversion)

```js
let value = "123";

console.log(Number(value)); // 123
```

### TypeScript (Type Casting)

```ts
let value: unknown = "Hello";

console.log((value as string).length);
```

---

# 🟨 JavaScript vs TypeScript

| JavaScript                 | TypeScript                               |
| -------------------------- | ---------------------------------------- |
| No type casting            | Supports type casting                    |
| Uses type conversion       | Uses `as` or `<>`                        |
| Converts values at runtime | Changes type information at compile time |

---

# 📌 Best Practices

| Recommendation                              | Reason                              |
| ------------------------------------------- | ----------------------------------- |
| Use `as` for casting                        | Official and recommended syntax     |
| Avoid `<>` in React (`.tsx`)                | Conflicts with JSX                  |
| Prefer type conversion when changing values | Actually changes the data           |
| Avoid force casting                         | Can bypass TypeScript safety checks |

---

# 📌 Key Points

| Topic                | Summary                                                                   |
| -------------------- | ------------------------------------------------------------------------- |
| Type Casting         | Tells TypeScript to treat a variable as another type.                     |
| `as`                 | Recommended syntax for type casting.                                      |
| `<>`                 | Alternative syntax (not for React/TSX).                                   |
| Force Casting        | Cast via `unknown` to bypass compiler checks.                             |
| Type Conversion      | JavaScript converts the actual value (e.g., `Number()`, `String()`).      |
| TypeScript Advantage | Provides compile-time type safety while allowing controlled type casting. |

# TypeScript – Generics

> **Note:** **Generics are a TypeScript feature.** JavaScript does **not** support generics because it has no compile-time type system.

---

# 🟨 What are Generics?

Generics allow you to write **reusable code** that works with **different data types** while maintaining **type safety**.

Instead of writing separate functions or classes for `string`, `number`, etc., you write **one generic version**.

**Without Generics**

```ts
function printString(value: string) {
  return value;
}

function printNumber(value: number) {
  return value;
}
```

❌ Duplicate code.

**With Generics**

```ts
function print<T>(value: T): T {
  return value;
}
```

✅ One function works for every type.

---

# 🟨 Generic Syntax

```ts
function functionName<T>(value: T): T {
  return value;
}
```

`<T>` is called a **Type Parameter**.

You can use any name:

- `T` → Type (most common)
- `K` → Key
- `V` → Value
- `U` → Another Type

---

# 🟨 1. Generic Functions

Create reusable functions for multiple data types.

| JavaScript                                                            | TypeScript                                       |
| --------------------------------------------------------------------- | ------------------------------------------------ |
| No generics. Same function works dynamically but without type safety. | `function print<T>(value:T):T { return value; }` |

### Example

```ts
function print<T>(value: T): T {
  return value;
}

print<string>("Hello");
print<number>(100);
print<boolean>(true);
```

**Output**

```
Hello
100
true
```

---

# 🟨 Type Inference

TypeScript usually detects the type automatically.

Instead of

```ts
print<string>("Hello");
```

You can simply write

```ts
print("Hello");
```

TypeScript automatically infers:

```
T = string
```

✅ Recommended approach.

---

# 🟨 Multiple Generic Types

Use multiple type parameters when working with different types.

```ts
function createPair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const pair = createPair("John", 25);
```

Output

```
["John",25]
```

Here

```
T → string
U → number
```

---

# 🟨 2. Generic Classes

Generics allow one class to work with different data types.

### Example

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

| Object      | Type          |
| ----------- | ------------- |
| `numberBox` | `Box<number>` |
| `stringBox` | `Box<string>` |

---

# 🟨 3. Generic Type Alias

Reusable custom types.

```ts
type ApiResponse<T> = {
  data: T;
};
```

Usage

```ts
const user: ApiResponse<string> = {
  data: "John",
};
```

Another example

```ts
const age: ApiResponse<number> = {
  data: 25,
};
```

---

# 🟨 4. Generic Interface

Interfaces also support generics.

```ts
interface Response<T> {
  data: T;
}

const user: Response<string> = {
  data: "John",
};
```

---

# 🟨 5. Default Generic Type

Provide a default type if none is specified.

```ts
class Box<T = string> {
  constructor(private value: T) {}
}
```

Usage

```ts
const box = new Box("Hello");
```

Since no type is specified,

```
T = string
```

Another example

```ts
const box = new Box<number>(100);
```

Now

```
T = number
```

---

# 🟨 6. Generic Constraints (`extends`)

Sometimes you want to **restrict** which types can be used.

Use **`extends`**.

### Example

```ts
function printLength<T extends { length: number }>(value: T) {
  console.log(value.length);
}
```

Works

```ts
printLength("Hello");
printLength([1, 2, 3]);
```

❌ Doesn't work

```ts
printLength(100);
```

Because

```
number has no length property
```

---

### Another Example

```ts
function createPair<T extends string | number, U extends string | number>(
  a: T,
  b: U,
) {
  return [a, b];
}
```

Allowed

```ts
createPair("John", 25);
createPair(10, 20);
```

Not allowed

```ts
createPair(true, false);
```

Because

```
boolean isn't allowed
```

---

# 🟨 JavaScript vs TypeScript

| JavaScript               | TypeScript                      |
| ------------------------ | ------------------------------- |
| No Generics              | Supports Generics               |
| Dynamic typing           | Compile-time type safety        |
| Less reusable typed code | Highly reusable typed code      |
| Errors found at runtime  | Errors found during compilation |

---

# 🟨 When to Use Generics

| Use Case           | Example          |
| ------------------ | ---------------- |
| Reusable Functions | `print<T>()`     |
| API Responses      | `ApiResponse<T>` |
| Collections        | `Array<T>`       |
| Classes            | `Box<T>`         |
| Interfaces         | `Response<T>`    |

---

# 🟨 Real-World Examples

| Generic               | Used In           |
| --------------------- | ----------------- |
| `Array<string>`       | String Arrays     |
| `Promise<User>`       | API Calls         |
| `Map<string, number>` | Key-Value Storage |
| `Set<number>`         | Unique Numbers    |

---

# 📌 Best Practices

| Recommendation                                         | Reason               |
| ------------------------------------------------------ | -------------------- |
| Use meaningful type names (`T`, `K`, `V`)              | Standard convention  |
| Let TypeScript infer types when possible               | Cleaner code         |
| Add `extends` when a generic needs specific properties | Improves type safety |
| Use default generic types for flexibility              | Reduces boilerplate  |

---

# 📌 Key Points

| Topic                | Summary                                                              |
| -------------------- | -------------------------------------------------------------------- |
| Generic (`<T>`)      | A placeholder for a type.                                            |
| Generic Function     | One function works with multiple data types.                         |
| Generic Class        | One class can store different types safely.                          |
| Generic Type Alias   | Creates reusable generic types.                                      |
| Generic Interface    | Interfaces can also use generics.                                    |
| Default Generic      | Provides a fallback type if none is specified.                       |
| `extends` Constraint | Restricts the allowed types for a generic.                           |
| Type Inference       | TypeScript can automatically determine the generic type.             |
| TypeScript Advantage | Generics provide reusable, type-safe code without duplicating logic. |

---

## 🎯 Easy Way to Remember

| Generic                    | Think of it as...                 |
| -------------------------- | --------------------------------- |
| `<T>`                      | "Any type" placeholder            |
| `function<T>()`            | One function for all data types   |
| `class<T>`                 | One class for all data types      |
| `type<T>` / `interface<T>` | Reusable typed structures         |
| `T = string`               | Default type if none is provided  |
| `T extends X`              | Only allow types that satisfy `X` |

**Simple rule:** Use **Generics** whenever you find yourself writing the **same logic for different data types**. They help you write code once, keep it type-safe, and reuse it everywhere.

# TypeScript Utility Types

> **Note:** Utility Types are **built-in TypeScript types** that help you **modify existing types** without rewriting them. They are commonly used in real-world applications such as APIs, forms, database models, and state management.

---

# 🟨 What are Utility Types?

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

---

# 🟨 1. `Partial<T>`

### Purpose

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

Only `name` is provided.

`id` and `email` become optional.

---

### Before vs After

```ts
interface User {
  id: number;
  name: string;
}
```

Without Partial

```ts
const user: User = {
  id: 1,
  name: "John",
};
```

Both fields required.

With Partial

```ts
const user: Partial<User> = {
  name: "John",
};
```

Only one field is enough.

---

### Real-world Use

- Update API (`PATCH`)
- Edit Profile Form
- Optional form fields

---

# 🟨 2. `Required<T>`

### Purpose

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

### Real-world Use

- Before saving to database
- Final object validation
- API response validation

---

# 🟨 3. `Readonly<T>`

### Purpose

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

### Real-world Use

- Configuration objects
- Constants
- Immutable Redux state

---

# 🟨 4. `Record<K, V>`

### Purpose

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

### Real-world Use

- User ID → User
- Country Code → Country
- Product ID → Product

Example

```ts
const users: Record<number, string> = {
  1: "John",
  2: "Alice",
};
```

---

# 🟨 5. `Pick<T, Keys>`

### Purpose

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

### Real-world Use

- User summary
- Login response
- Public profile

---

# 🟨 6. `Omit<T, Keys>`

### Purpose

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

### Real-world Use

- Hide passwords
- Remove internal IDs
- Public API responses

---

# 🟨 Pick vs Omit

| Pick                      | Omit                        |
| ------------------------- | --------------------------- |
| Keeps selected properties | Removes selected properties |
| `Pick<User,"name">`       | `Omit<User,"password">`     |

Easy rule:

- **Pick → Keep**
- **Omit → Remove**

---

# 🟨 7. `Exclude<T, U>`

### Purpose

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

### Real-world Use

- Remove invalid states
- Remove deprecated values

---

# 🟨 8. `ReturnType<T>`

### Purpose

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

### Real-world Use

- API response types
- Service methods
- Utility functions

---

# 🟨 9. `Parameters<T>`

### Purpose

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

### Real-world Use

- Wrapper functions
- Middleware
- Function reuse

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

---

# 🟨 JavaScript vs TypeScript

| JavaScript                   | TypeScript                    |
| ---------------------------- | ----------------------------- |
| No Utility Types             | Built-in Utility Types        |
| Duplicate object definitions | Reuse existing types          |
| No compile-time validation   | Compile-time type safety      |
| More manual work             | Less code, easier maintenance |

---

# 🟨 When to Use Each Utility Type

| Situation                      | Utility Type |
| ------------------------------ | ------------ |
| Update only a few fields       | `Partial`    |
| Ensure all fields are present  | `Required`   |
| Prevent object modification    | `Readonly`   |
| Create key-value mappings      | `Record`     |
| Keep only required fields      | `Pick`       |
| Remove unwanted fields         | `Omit`       |
| Remove values from a union     | `Exclude`    |
| Reuse a function's return type | `ReturnType` |
| Reuse a function's parameters  | `Parameters` |

---

# 📌 Best Practices

| Recommendation                                          | Why?                                                |
| ------------------------------------------------------- | --------------------------------------------------- |
| Use `Partial` for update operations                     | Avoids creating separate update interfaces          |
| Use `Readonly` for configuration and constants          | Prevents accidental mutations                       |
| Use `Pick` and `Omit` instead of duplicating interfaces | Keeps types DRY (Don't Repeat Yourself)             |
| Use `ReturnType` and `Parameters` to derive types       | Reduces maintenance when function signatures change |
| Prefer Utility Types over creating similar interfaces   | Cleaner, reusable, and easier to maintain           |

---

# 📌 Key Points

| Topic                    | Summary                                                                                 |
| ------------------------ | --------------------------------------------------------------------------------------- |
| **Utility Types**        | Built-in helpers that transform existing types.                                         |
| **Partial**              | Makes all properties optional.                                                          |
| **Required**             | Makes all properties mandatory.                                                         |
| **Readonly**             | Makes all properties immutable after assignment.                                        |
| **Record**               | Creates strongly typed key-value objects.                                               |
| **Pick**                 | Keeps only specified properties.                                                        |
| **Omit**                 | Removes specified properties.                                                           |
| **Exclude**              | Removes members from a union type.                                                      |
| **ReturnType**           | Extracts the return type of a function.                                                 |
| **Parameters**           | Extracts a function's parameter types as a tuple.                                       |
| **TypeScript Advantage** | Utility Types reduce duplication, improve type safety, and make code more maintainable. |

---

## 🎯 Easy Way to Remember

| Utility Type | Memory Trick                          |
| ------------ | ------------------------------------- |
| `Partial`    | **Make everything optional**          |
| `Required`   | **Make everything mandatory**         |
| `Readonly`   | **Read only, can't modify**           |
| `Record`     | **Key → Value mapping**               |
| `Pick`       | **Pick what you want**                |
| `Omit`       | **Omit (remove) what you don't want** |
| `Exclude`    | **Exclude from a union**              |
| `ReturnType` | **Get what a function returns**       |
| `Parameters` | **Get what a function accepts**       |

**Simple rule:** Use Utility Types to **reuse and transform existing types** instead of creating new interfaces for every variation. They make your TypeScript code cleaner, safer, and easier to maintain.
