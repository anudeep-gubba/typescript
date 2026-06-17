# **TypeScript Overview**

## ✅ **What is TypeScript?**

TypeScript is an **object-oriented, open-source programming language** developed and maintained by Microsoft. It is a **superset of JavaScript**, meaning all JavaScript code is valid TypeScript code. TypeScript adds features like **static typing, interfaces, and modern ES features**, making development more robust and scalable.

---

## 🔁 **TypeScript vs JavaScript: Key Differences**

| **JavaScript**                   | **TypeScript**                                   |
| -------------------------------- | ------------------------------------------------ |
| Scripting language for web pages | Object-oriented language and superset of JS      |
| No compilation required          | Needs to be compiled                             |
| No static typing                 | Supports static typing (e.g., `let num: number`) |
| No interfaces                    | Supports interfaces                              |
| No optional parameters           | Supports optional parameters                     |
| No rest parameters               | Supports rest parameters                         |
| No generics                      | Supports generics                                |
| No module support                | Modules supported                                |
| `number`, `string` are objects   | `Number`, `String` are interfaces                |

---

## 🎯 **Why Use TypeScript?**

- **JavaScript is dynamic** and lacks a type system, which can make large-scale development challenging.
- TypeScript offers a **type system** that:
  - Enhances **code quality** and **readability**
  - Makes code **easier to refactor**
  - **Identifies errors during compile time**, not at runtime

- Helps developers **scale complex applications**
- Allows reusing and integrating **existing JavaScript code and libraries**
- Supports frameworks like **Angular**, **React**, and **Node.js**

---

## 🚀 **Advantages of TypeScript**

- 🟢 **Open-source** and actively maintained by Microsoft
- 🌐 **Runs on any browser or JS engine** (after compilation)
- 🔁 **Compatible with JavaScript syntax & semantics**
- 🔧 **Eases front-end and back-end development**
- 🔄 **Interoperable** with existing JavaScript libraries/frameworks
- 🆕 **Access to latest ECMAScript features early**

---

## ⚙️ **Features of TypeScript**

- **Cross-Platform**: Available on Windows, macOS, Linux
- **Object-Oriented**: Supports Classes, Interfaces, Modules
- **Static Type Checking**: Errors can be caught at compile time
- **Optional Static Typing**: Can mix dynamic and static typing
- **DOM Manipulation**: Works like JavaScript with the DOM
- **ES6+ Support**: Includes features like arrow functions, classes, interfaces, etc.

---

## 📄 **How to Use TypeScript**

1. **Write Code**: Save files with a `.ts` extension
2. **Compile**: Use the TypeScript compiler (`tsc`) to compile `.ts` files into `.js`

   ```bash
   tsc Sample.ts
   ```

   This produces a `Sample.js` file.

3. **Run in Browser**: Use the resulting JavaScript file in your HTML like normal.

---

## 🧠 **Example: TypeScript in Action**

**Problem in JavaScript:**

```javascript
function add(x, y) {
  return x + y;
}
add(input1.value, input2.value); // Might return "1020"
```

**Solution in TypeScript:**

```typescript
function add(x: number, y: number) {
  return x + y;
}
```

## TypeScript catches type errors before code runs.

# **TypeScript Setup**

## 🧰 **Required Tools**

To start developing with TypeScript, you need the following:

1. **Node.js**
   - Required to run the TypeScript compiler.
   - You don’t need to learn Node.js itself to use it.

2. **TypeScript Compiler (`tsc`)**
   - A Node.js module that compiles `.ts` files into `.js`.

3. **Visual Studio Code (VS Code)**
   - Recommended code editor with excellent TypeScript support.

4. **Live Server Extension (optional)**
   - Provides a local dev server with hot-reloading in VS Code.

---

## ⚙️ **Installation Steps**

### 1. **Install Node.js**

- Visit the [Node.js download page](https://nodejs.org).
- Download and install the version for your operating system.
- Verify installation using:

  ```bash
  node -v
  ```

### 2. **Install TypeScript Compiler**

- Use the following command:

  ```bash
  npm install -g typescript
  ```

- Verify installation with:

  ```bash
  tsc --v
  ```

- If Windows shows the error `'tsc' is not recognized`, add this to your system `PATH`:

  ```
  C:\Users\<user>\AppData\Roaming\npm
  ```

### 3. **Install tsx (Optional)**

- To run TypeScript code **without compiling**, install:

  ```bash
  npm install -g tsx
  ```

---

## 🖥️ **Install Visual Studio Code**

1. Download from the [VS Code website](https://code.visualstudio.com/).
2. Install and open the editor.
3. To install **Live Server**:
   - Open the Extensions tab.
   - Search for "Live Server".
   - Click **Install**.

---

# TypeScript “Hello, World!” Tutorial

This guide walks you through creating a simple **Hello, World!** program in TypeScript using both **Node.js** and **web browsers**.

---

## 👨‍💻 Hello World in Node.js

### 🔧 Steps to Run

1. **Create Project Folder**
   Create a directory named `helloworld`.

2. **Open in VS Code**
   Open the folder using VS Code.

3. **Create File**
   Create a file named `app.ts`.

4. **Write Code**

   ```typescript
   let message: string = "Hello, World!";
   console.log(message);
   ```

5. **Open Terminal**
   Shortcut: \`Ctrl + \`\` or go to Terminal > New Terminal.

6. **Compile TypeScript**

   ```bash
   tsc app.ts
   ```

7. **Run JavaScript**

   ```bash
   node app.js
   ```

8. **(Optional)**: Run TypeScript directly using `tsx`

   ```bash
   tsx app.ts
   ```

---

## 🌐 **Hello World in a Web Browser**

### 🧱 **Steps to Create Web Page**

1. **Create `index.html`**

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <title>TypeScript: Hello, World!</title>
     </head>
     <body>
       <script src="app.js"></script>
     </body>
   </html>
   ```

2. **Update `app.ts`**

   ```typescript
   let message: string = "Hello, World!";
   let heading = document.createElement("h1");
   heading.textContent = message;
   document.body.appendChild(heading);
   ```

3. **Compile**

   ```bash
   tsc app.ts
   ```

4. **Run with Live Server**
   - Right-click `index.html` > **Open with Live Server**

5. **Make Changes (Example)**

   ```typescript
   let message: string = "Hello, TypeScript!";
   ```

   - Recompile:

     ```bash
     tsc app.ts
     ```

   - Live Server reloads automatically.

### ⚠️ **Note**

- Never manually edit `app.js`. It is the **compiled output** of `app.ts` and will be overwritten.

---

## ✅ **Conclusion**

- You learned how to create and run a simple **TypeScript** program in both **Node.js** and **web browsers**.
- The setup demonstrated how TypeScript files are compiled into JavaScript and executed or rendered.
- Tools like **Live Server** improve development speed with hot reloading.

### Configuring the TypeScript Compiler

When you run the TypeScript compiler (`tsc`) in a project without a configuration file, it displays a help message by default.

To configure the compiler, create a **`tsconfig.json`** file. TypeScript can generate one with recommended settings using:

```bash
npx tsc --init
```

This creates a `tsconfig.json` file similar to:

```json
{
  // Visit https://aka.ms/tsconfig to read more about this file
  "compilerOptions": {
    // File Layout
    // "rootDir": "./src",
    // "outDir": "./dist",

    // Environment Settings
    // See also https://aka.ms/tsconfig/module
    "module": "nodenext",
    "target": "esnext",
    "types": [],
    // For nodejs:
    // "lib": ["esnext"],
    // "types": ["node"],
    // and npm install -D @types/node

    // Other Outputs
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    // Stricter Typechecking Options
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    // Style Options
    // "noImplicitReturns": true,
    // "noImplicitOverride": true,
    // "noUnusedLocals": true,
    // "noUnusedParameters": true,
    // "noFallthroughCasesInSwitch": true,
    // "noPropertyAccessFromIndexSignature": true,

    // Recommended Options
    "strict": true,
    "jsx": "react-jsx",
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true
  }
}
```

### Customizing tsconfig.json

You can modify the configuration file to suit your project needs. For example:

```json
{
  "include": ["src/**/*.ts"], // Look for TypeScript files here
  "exclude": ["build", "node_modules"], // Ignore generated files and dependencies

  // Configuration options that control how TypeScript compiles code
  "compilerOptions": {
    "rootDir": "./src", // Folder containing TypeScript source code
    "outDir": "./build" // Save compiled files to build
  }
}
```

### What This Configuration Does

- **`include: ["src"]`** – Tells TypeScript to compile files only from the `src` directory.
- **`outDir: "./build"`** – Specifies that the generated JavaScript files should be placed in the `build` directory.

---
# Type Annotations in TypeScript

## What is a Type Annotation?

* Used to **explicitly define a data type**.
* Syntax: `identifier: type`

```ts
let count: number;
let name: string;
```

---

## Variables & Constants

```ts
let counter: number = 1;
const PI: number = 3.14;
```

❌ Invalid:

```ts
let counter: number;
counter = "Hello"; // Error
```

---

## Primitive Types

```ts
let name: string = "John";
let age: number = 25;
let active: boolean = true;
```

| Type    | Example  |
| ------- | -------- |
| string  | `"John"` |
| number  | `25`     |
| boolean | `true`   |

---

## Arrays

Syntax:

```ts
let arrayName: type[];
```

Example:

```ts
let names: string[] = ["John", "Jane", "Peter"];
```

---

## Objects

```ts
let person: {
  name: string;
  age: number;
};

person = {
  name: "John",
  age: 25
};
```

✔ Must contain the defined properties and types.

---

## Functions

### Function Type

```ts
let greeting: (name: string) => string;
```

### Valid

```ts
greeting = function(name: string) {
  return `Hi ${name}`;
};
```

### Invalid

```ts
greeting = function() {
  console.log("Hello");
};
```

❌ Error: Return type `void` doesn't match `string`.

---

## Key Points

* `:` is used to add a type annotation.
* Prevents assigning incorrect data types.
* Can be used with:

  * Variables
  * Constants
  * Arrays
  * Objects
  * Function parameters
  * Function return values

### Quick Syntax Reference

```ts
let name: string;
let age: number;
let active: boolean;

let names: string[];

let person: {
  name: string;
  age: number;
};

let greet: (name: string) => string;
```

**Summary:** Type annotations (`: type`) help TypeScript catch type errors at compile time and make code safer and easier to understand.

# TypeScript Type Inference 

## What is Type Inference?

TypeScript automatically **guesses the type** of a variable, parameter, or function return value when you don't explicitly define it.

```ts
let counter = 0;
```

TypeScript infers:

```ts
let counter: number = 0;
```

---

# Type Inference vs Type Annotation

| Type Inference              | Type Annotation                      |
| --------------------------- | ------------------------------------ |
| TypeScript guesses the type | You explicitly define the type       |
| Less code                   | More readable & strict               |
| Good for simple variables   | Best for functions & complex objects |

### Inference

```ts
let name = "John";      // string
let age = 25;          // number
let active = true;     // boolean
```

### Annotation

```ts
let name: string = "John";
let age: number = 25;
let active: boolean = true;
```

---

# Variable Type Inference

```ts
let score = 100;
```

TypeScript infers:

```ts
let score: number = 100;
```

❌ Error

```ts
score = "High";
```

Because `score` is already inferred as `number`.

---

# Function Parameter Inference

Default values help TypeScript infer types.

```ts
function setCounter(max = 100) {
}
```

TypeScript infers:

```ts
function setCounter(max: number) {
}
```

---

# Function Return Type Inference

```ts
function increment(counter: number) {
    return counter++;
}
```

TypeScript infers:

```ts
function increment(counter: number): number
```

### Best Practice

Explicitly define return types for important functions.

```ts
function increment(counter: number): number {
    return counter++;
}
```

---

# Best Common Type Algorithm

When multiple values exist, TypeScript finds a common compatible type.

### Example 1

```ts
let items = [1, 2, 3, null];
```

Inferred type:

```ts
(number | null)[]
```

### Example 2

```ts
let items = [1, 2, 3, "Cheese"];
```

Inferred type:

```ts
(number | string)[]
```

### Union Type

`|` means **OR**

```ts
number | string
```

Value can be either a number or a string.

---

# Contextual Typing

TypeScript uses surrounding code to determine a type.

### Click Event

```ts
document.addEventListener("click", (event) => {
    console.log(event.button);
});
```

TypeScript knows:

```ts
event: MouseEvent
```

### Scroll Event

```ts
document.addEventListener("scroll", (event) => {
    console.log(event.button);
});
```

❌ Error

Because:

```ts
event: Event
```

`Event` doesn't contain the `button` property.

---

# Object Type Inference

```ts
const user = {
    name: "Alice",
    age: 30,
    isAdmin: true
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

Valid:

```ts
console.log(user.name);
```

❌ Invalid:

```ts
console.log(user.email);
```

---

# Explicit Types (Recommended)

## Function Parameters

```ts
function greet(name: string): string {
    return `Hello ${name}`;
}
```

## Arrays

```ts
let scores: number[] = [100, 95, 98];
```

## Objects

```ts
const user: {
    name: string;
    age: number;
} = {
    name: "Alice",
    age: 30
};
```

---

# Type Safety Examples

### Explicit Type Error

```ts
let username: string = "alice";
username = 42;
```

❌ Error

```
Type 'number' is not assignable to type 'string'
```

---

### Inferred Type Error

```ts
let score = 100;
score = "high";
```

❌ Error

```
Type 'string' is not assignable to type 'number'
```

---

# JavaScript vs TypeScript

### JavaScript

```js
function add(a, b) {
    return a + b;
}

add("5", 3); // "53"
```

May cause bugs.

### TypeScript

```ts
function add(a: number, b: number): number {
    return a + b;
}

add("5", 3);
```

❌ Compile-time error.

---

# When TypeScript Cannot Infer Types

## JSON.parse()

```ts
const data = JSON.parse(jsonString);
```

Type:

```ts
any
```

Because TypeScript doesn't know the structure.

---

## Uninitialized Variables

```ts
let value;
```

Type:

```ts
any
```

```ts
value = "Hello";
value = 100;
```

No errors because `any` disables type checking.

---

# Avoid `any`

❌ Avoid

```ts
let data: any;
```

✅ Prefer

```ts
let data: string;
```

or

```ts
interface User {
    name: string;
    age: number;
}
```

Also enable:

```json
{
  "compilerOptions": {
    "noImplicitAny": true
  }
}
```

---

# When to Use Type Inference

✅ Simple variables

```ts
let name = "John";
let age = 25;
```

✅ Obvious types

```ts
const isAdmin = true;
```

---

# When to Use Explicit Types

✅ Function parameters

```ts
function greet(name: string)
```

✅ Function return types

```ts
function greet(): string
```

✅ Complex objects

```ts
const user: User
```

✅ Variables initialized later

```ts
let score: number;
```

---

# Interview Quick Recap

* **Type Inference** → TypeScript automatically determines the type.
* **Type Annotation** → You explicitly specify the type using `: type`.
* **Best Common Type** → Finds a compatible type for multiple values.
* **Contextual Typing** → Infers types from surrounding code.
* **Union Type (`|`)** → Allows multiple possible types.
* **`any`** → Disables type checking; avoid when possible.
* **Use Inference for simple variables.**
* **Use Explicit Types for functions, APIs, and complex objects.** 🚀

---

## 🧱 **Type Categories in TypeScript**

### 🔹 **1. Primitive Types**

| **Type**    | **Description**                              |
| ----------- | -------------------------------------------- |
| `string`    | Represents textual data                      |
| `number`    | Represents numeric values                    |
| `boolean`   | Represents logical values: `true` or `false` |
| `null`      | Has only one value: `null`                   |
| `undefined` | Default value for uninitialized variables    |
| `symbol`    | Represents a unique constant value           |

---

### 🔹 **2. Object Types**

Includes more complex structures like:

- **Functions**
- **Arrays**
- **Objects**
- **Classes**

You can also define **custom object types** using interfaces or type aliases (covered in advanced topics).

---

## 🎯 **Purpose of Types in TypeScript**

1. ✅ **Error Detection**
   Types help the **TypeScript compiler analyze your code** and catch errors before runtime.

2. ✅ **Code Understanding**
   Types help developers **understand the structure of data** and what operations are allowed.

---

## 💡 **Example: DOM Type Inference**

```typescript
const heading = document.querySelector("h1");
```

- TypeScript infers `heading` as `HTMLHeadingElement | null`.
- You can access methods like `.textContent`, `.appendChild()`.
- If you try to access a method that doesn't exist, the compiler gives an error.

---

## 📝 Final Recap

- TypeScript assigns a **type to every value**.
- A **type describes the shape, properties, and behaviors** of that value.
- Using types improves **code quality**, helps prevent **runtime errors**, and enhances **editor support**.
- TypeScript supports both **primitive** and **object** types.

---

## 1️⃣ What Are Variables in TypeScript?

A **variable** is a container to store data (number, text, list, etc.) that can be used later in the program.

In TypeScript, variables are **typed**, meaning you define or infer **what kind of value** (like number or string) a variable should hold.

### 🔤 Example:

```ts
let age: number = 25;
let name: string = "Anudeep";
const isActive: boolean = true;
```

Here:

- `age` must be a number
- `name` must be a string
- `isActive` must be a boolean

---

## 2️⃣ Declaring Variables with `let`, `const`, `var`

### 🔹 `let` – Use for values that **can change**

```ts
let score: number = 90;
score = 100; // ✅ Allowed
```

### 🔹 `const` – Use for values that **should not change**

```ts
const pi: number = 3.14;
// pi = 3.1415; ❌ Error: Cannot assign to 'pi'
```

### 🔹 `var` – ❌ Don’t use in TypeScript (explained later)

---

## 3️⃣ Type Annotations vs Type Inference

### ✅ Type Annotation (you specify type)

```ts
let name: string = "Anudeep";
let age: number = 25;
```

### ✅ Type Inference (TS guesses the type)

```ts
let country = "India"; // inferred as string
```

But if you don't assign a value, you **must annotate**:

```ts
let zipCode: number;
// zipCode = "abc"; ❌ Error
```

---

## 4️⃣ Variable Scope in TypeScript

| Keyword | Scope Type     | Explanation                              |
| ------- | -------------- | ---------------------------------------- |
| `let`   | Block Scope    | Works only inside `{ }` block            |
| `const` | Block Scope    | Same as let, but not reassignable        |
| `var`   | Function Scope | Accessible throughout the function (bad) |

### 🔍 Example:

```ts
if (true) {
  let x = 10;
  const y = 20;
  var z = 30;
}
console.log(z); // ✅ Allowed (function-scoped)
// console.log(x); ❌ Error (block-scoped)
// console.log(y); ❌ Error (block-scoped)
```

---

## 5️⃣ Hoisting in TypeScript

**Hoisting** = variables are moved to the top of their scope before code runs.

### ✅ All variables (`var`, `let`, `const`) are **hoisted**, but:

- `var` is initialized with `undefined`
- `let` and `const` are not initialized ➝ TDZ applies

### Example:

```ts
console.log(a); // undefined
var a = 5;

console.log(b); // ❌ Error: Cannot access 'b' before initialization
let b = 10;

console.log(c); // ❌ Error: Cannot access 'c' before initialization
const c = 20;
```

---

## 6️⃣ Temporal Dead Zone (TDZ)

The **TDZ** is the time between entering the block and the actual declaration of the variable.

> Accessing `let` or `const` inside this period causes an error.

### Example:

```ts
{
  // TDZ starts
  // console.log(value); ❌ ReferenceError
  let value: number = 42;
  // TDZ ends
}
```

---

## 7️⃣ Mutation in TypeScript

### ✅ Reassignment (Allowed with `let`)

```ts
let score: number = 100;
score = 200; // ✅
```

### ❌ Reassignment (Not allowed with `const`)

```ts
const pi: number = 3.14;
// pi = 3.14159; ❌ Error
```

### ✅ But `const` allows mutation of objects/arrays:

```ts
const person = { name: "Anudeep" };
person.name = "Deepu"; // ✅ Allowed (modifying contents)
// person = { name: "New" }; ❌ Error (reassigning reference)
```

---

## 8️⃣ Common Errors in TypeScript Variables

| Error Type      | Example                               | Explanation                     |
| --------------- | ------------------------------------- | ------------------------------- |
| Type Error      | `let age: number = "twenty";`         | ❌ Assigning wrong type         |
| Reassign Error  | `const x = 10; x = 20;`               | ❌ Cannot reassign `const`      |
| TDZ Error       | `console.log(a); let a = 5;`          | ❌ Accessing before declaration |
| Redeclare Error | `let a = 5; let a = 10;`              | ❌ Duplicate declaration        |
| Scope Error     | Accessing block variable outside `{}` | ❌ Out of scope                 |

---

## 9️⃣ Best Practices for TypeScript Variables

✅ Use `const` for values that don’t change
✅ Use `let` when the value will change
❌ Never use `var` (due to hoisting + scope bugs)
✅ Always give types or allow TS to infer them
✅ Keep variable scope as tight (small) as possible

---

## 🔚 Final Summary Table

| Keyword | Can Change Value? | Scope    | Hoisted? | TDZ Affected? | Type-safe?   |
| ------- | ----------------- | -------- | -------- | ------------- | ------------ |
| `let`   | ✅ Yes            | Block    | ✅ Yes   | ✅ Yes        | ✅ Yes       |
| `const` | ❌ No (reassign)  | Block    | ✅ Yes   | ✅ Yes        | ✅ Yes       |
| `var`   | ✅ Yes            | Function | ✅ Yes   | ❌ No         | ✅ But risky |

---

## ✅ Final Example

```ts
function showDetails() {
  const name: string = "Anudeep";
  let age: number = 25;

  if (true) {
    let city: string = "Hyderabad";
    console.log(city); // ✅ OK
  }

  // console.log(city); // ❌ Error: city not defined (block scope)
}
```

---

### What is a Data Type?

A **data type** in TypeScript defines the kind of value a variable can hold, specifying its behavior, operations, and memory usage. It ensures type safety and clarity in code by enabling compile-time type checking.

### Categories of Data Types in TypeScript

1. **Primitive Data Types**:
   - Basic, indivisible types provided by the language.
   - Examples: `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.

2. **Special TypeScript Types**:
   - Unique to TypeScript for enhanced type safety and control.
   - Examples: `any`, `unknown`, `void`, `never`.

3. **Composite Data Types**:
   - Complex types that combine or structure data.
   - Examples: `array`, `tuple`, `object`, `enum`, `union`, `intersection`.

4. **Advanced Types**:
   - Custom or derived types for specific use cases.
   - Examples: `type aliases`, `interfaces`, `literal types`, `nullable types`.

Below is a detailed explanation of data types in TypeScript, organized by the categories previously outlined: **Primitive Data Types**, **Special TypeScript Types**, **Composite Data Types**, and **Advanced Types**. I'll cover each category comprehensively, including definitions, characteristics, use cases, and examples, while ensuring clarity and conciseness.

---

### 1. Primitive Data Types

Primitive data types are the fundamental, indivisible types provided by TypeScript (inherited from JavaScript). They represent single values and are not composed of other types.

#### a. Number

- **Definition**: Represents both integer and floating-point numbers (no distinction between `int` and `float`).
- **Characteristics**:
  - Stored as 64-bit floating-point numbers.
  - Supports arithmetic operations like addition, subtraction, etc.
  - Includes special values: `NaN`, `Infinity`, `-Infinity`.
- **Use Case**: Numeric calculations, counters, measurements.
- **Example**:
  ```typescript
  let age: number = 25;
  let pi: number = 3.14;
  let invalid: number = NaN;
  console.log(age + pi); // Output: 28.14
  ```

#### b. String

- **Definition**: Represents textual data, enclosed in single quotes (`'`), double quotes (`"`), or backticks (`` ` ``) for template literals.
- **Characteristics**:
  - Immutable in JavaScript/TypeScript.
  - Supports string methods like `toUpperCase()`, `substring()`, etc.
  - Template literals allow embedded expressions.
- **Use Case**: Storing names, messages, or any text-based data.
- **Example**:
  ```typescript
  let name: string = "Alice";
  let greeting: string = `Hello, ${name}!`;
  console.log(greeting); // Output: Hello, Alice!
  ```

#### c. Boolean

- **Definition**: Represents logical values: `true` or `false`.
- **Characteristics**:
  - Used for conditional logic and control flow.
  - Typically occupies 1 bit (implementation-dependent).
- **Use Case**: Flags, conditions, or toggles.
- **Example**:
  ```typescript
  let isActive: boolean = true;
  if (isActive) {
    console.log("System is active"); // Output: System is active
  }
  ```

#### d. Null and Undefined

- **Definition**:
  - `null`: Represents an intentional absence of a value.
  - `undefined`: Indicates an uninitialized or missing value.
- **Characteristics**:
  - `null` is explicitly assigned; `undefined` is the default for unassigned variables.
  - With `strictNullChecks` enabled, they are distinct and not interchangeable.
- **Use Case**: Indicating missing or uninitialized data.
- **Example**:
  ```typescript
  let empty: null = null;
  let notSet: undefined = undefined;
  let value: string | null = null; // Requires strictNullChecks
  ```

#### e. Symbol

- **Definition**: Represents unique, immutable identifiers, often used as object keys.
- **Characteristics**:
  - Created using `Symbol()` function, ensuring uniqueness.
  - Not enumerable in object iterations by default.
- **Use Case**: Unique property keys to avoid naming conflicts.
- **Example**:
  ```typescript
  let id: symbol = Symbol("id");
  let obj: { [key: symbol]: string } = { [id]: "unique" };
  console.log(obj[id]); // Output: unique
  ```

#### f. BigInt

- **Definition**: Represents integers larger than the `number` type’s safe range (`2^53 - 1`).
- **Characteristics**:
  - Created by appending `n` to a number or using `BigInt()`.
  - Cannot be mixed with `number` without explicit conversion.
- **Use Case**: Large integer calculations, like cryptography or financial systems.
- **Example**:
  ```typescript
  let bigNum: bigint = 12345678901234567890n;
  console.log(bigNum * 2n); // Output: 24691357802469135780n
  ```

---

### 2. Special TypeScript Types

These are TypeScript-specific types that enhance type safety and expressiveness, not directly available in JavaScript.

#### a. Any

- **Definition**: Allows a variable to hold any value, bypassing type checking.
- **Characteristics**:
  - Disables TypeScript’s type safety for that variable.
  - Useful for migrating JavaScript code or working with untyped APIs.
- **Use Case**: Temporary or dynamic data where type is unknown.
- **Pitfalls**: Overuse reduces type safety; prefer `unknown` when possible.
- **Example**:
  ```typescript
  let anything: any = 42;
  anything = "now a string";
  anything = { key: "value" }; // No errors
  ```

#### b. Unknown

- **Definition**: A safer alternative to `any`, requiring type checks before operations.
- **Characteristics**:
  - Cannot be assigned to other types or used directly without narrowing.
  - Encourages type-safe coding.
- **Use Case**: Handling data from external sources (e.g., API responses).
- **Example**:
  ```typescript
  let unknownValue: unknown = 42;
  if (typeof unknownValue === "number") {
    console.log(unknownValue + 10); // Output: 52
  }
  ```

#### c. Void

- **Definition**: Indicates a function returns no value.
- **Characteristics**:
  - Often used for functions that perform side effects (e.g., logging).
  - Variables typed as `void` are rarely useful (can only be `undefined` or `null` with `strictNullChecks` off).
- **Use Case**: Functions with no return value.
- **Example**:
  ```typescript
  function logMessage(message: string): void {
    console.log(message);
  }
  logMessage("Hello"); // Output: Hello
  ```

#### d. Never

- **Definition**: Represents values that never occur, like functions that always throw or never return.
- **Characteristics**:
  - Subtype of all types; no value can be assigned to `never`.
  - Useful for exhaustive type checking.
- **Use Case**: Error-throwing functions or impossible code paths.
- **Example**:
  ```typescript
  function throwError(message: string): never {
    throw new Error(message);
  }
  function infiniteLoop(): never {
    while (true) {}
  }
  ```

---

### 3. Composite Data Types

Composite types combine or structure data, allowing complex data representations.

#### a. Arrays

- **Definition**: Ordered lists of elements of the same type.
- **Characteristics**:
  - Two syntaxes: `Type[]` or `Array<Type>`.
  - Dynamic length in TypeScript/JavaScript.
- **Use Case**: Storing lists of similar data (e.g., numbers, strings).
- **Example**:
  ```typescript
  let numbers: number[] = [1, 2, 3];
  let names: Array<string> = ["Alice", "Bob"];
  numbers.push(4); // Valid
  console.log(numbers); // Output: [1, 2, 3, 4]
  ```

#### b. Tuples

- **Definition**: Fixed-length arrays with specific types for each index.
- **Characteristics**:
  - Enforce type and length at compile-time.
  - Useful for ordered, heterogeneous data.
- **Use Case**: Representing fixed collections, like coordinates or key-value pairs.
- **Example**:
  ```typescript
  let pair: [string, number] = ["age", 25];
  console.log(pair[0]); // Output: age
  // pair[2] = "error"; // Error: Tuple length is fixed
  ```

#### c. Objects

- **Definition**: Key-value pairs with defined types for properties.
- **Characteristics**:
  - Can be defined inline or via interfaces/type aliases.
  - Supports optional properties (`?`) and readonly properties.
- **Use Case**: Modeling structured data, like user profiles.
- **Example**:
  ```typescript
  let person: { name: string; age?: number } = { name: "Alice" };
  person.age = 25; // Optional property
  console.log(person); // Output: { name: "Alice", age: 25 }
  ```

#### d. Enums

- **Definition**: Define a set of named constants, numeric or string-based.
- **Characteristics**:
  - Numeric enums auto-increment; string enums require explicit values.
  - `const enum` optimizes by inlining values at compile-time.
- **Use Case**: Fixed sets of values, like roles or statuses.
- **Example**:

  ```typescript
  enum Color {
    Red,
    Green,
    Blue,
  } // Implicitly Red=0, Green=1, Blue=2
  let c: Color = Color.Green;
  console.log(c); // Output: 1

  enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
  }
  let s: Status = Status.Active;
  console.log(s); // Output: ACTIVE
  ```

#### e. Union Types

- **Definition**: Allow a variable to hold one of multiple types.
- **Characteristics**:
  - Use the `|` operator.
  - Requires type narrowing for type-specific operations.
- **Use Case**: Variables with multiple possible types, like API responses.
- **Example**:
  ```typescript
  let value: string | number = 42;
  value = "hello";
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // Output: HELLO
  }
  ```

#### f. Intersection Types

- **Definition**: Combine multiple types into one, requiring all properties.
- **Characteristics**:
  - Use the `&` operator.
  - Common with interfaces or type aliases.
- **Use Case**: Merging object types, like combining user and employee data.
- **Example**:
  ```typescript
  type Named = { name: string };
  type Aged = { age: number };
  let person: Named & Aged = { name: "Alice", age: 25 };
  console.log(person); // Output: { name: "Alice", age: 25 }
  ```

---

### 4. Advanced Types

These types provide additional flexibility and precision in TypeScript.

#### a. Type Aliases

- **Definition**: Create reusable type definitions with the `type` keyword.
- **Characteristics**:
  - Can represent primitives, unions, intersections, or complex types.
  - Not extensible like interfaces.
- **Use Case**: Simplifying complex types or reusable unions.
- **Example**:
  ```typescript
  type Point = { x: number; y: number };
  let p: Point = { x: 1, y: 2 };
  type ID = string | number;
  let userId: ID = "user123";
  ```

#### b. Interfaces

- **Definition**: Define object shapes, extensible via declaration merging.
- **Characteristics**:
  - Preferred for object types; supports extending via `extends`.
  - Can be merged if redefined.
- **Use Case**: Defining contracts for objects, like API responses.
- **Example**:
  ```typescript
  interface User {
    name: string;
    age: number;
  }
  interface User {
    id: string; // Declaration merging
  }
  let user: User = { name: "Bob", age: 30, id: "123" };
  ```

#### c. Literal Types

- **Definition**: Restrict a variable to specific literal values (e.g., `"up"`, `42`).
- **Characteristics**:
  - Often used with unions for constrained values.
  - Improves type safety for specific cases.
- **Use Case**: Enforcing specific string or number values.
- **Example**:
  ```typescript
  let direction: "up" | "down" = "up";
  // direction = "left"; // Error: Type '"left"' is not assignable
  ```

#### d. Nullable Types

- **Definition**: Allow `null` or `undefined` alongside other types, controlled by `strictNullChecks`.
- **Characteristics**:
  - With `strictNullChecks`, `null`/`undefined` must be explicitly included in unions.
  - Enhances safety by forcing null checks.
- **Use Case**: Handling optional or missing values.
- **Example**:
  ```typescript
  let maybeString: string | null = null;
  if (maybeString) {
    console.log(maybeString.toUpperCase());
  }
  ```

---

### Additional Notes

- **Type Narrowing**: Essential for working with union types. Use `typeof`, `instanceof`, or custom type guards:
  ```typescript
  function print(value: string | number) {
    if (typeof value === "string") {
      console.log(value.toUpperCase());
    } else {
      console.log(value.toFixed(2));
    }
  }
  ```
- **Memory and Performance**: TypeScript types are erased at compile-time, so they don’t affect runtime memory. However, types like `BigInt` or large objects/arrays impact JavaScript runtime performance.
- **Best Practices**:
  - Avoid `any` to maintain type safety; use `unknown` or specific types.
  - Enable `strictNullChecks` for safer null handling.
  - Use interfaces for object types and type aliases for unions or primitives.
  - Leverage type inference to reduce boilerplate: `let x = 42; // Inferred as number`.
