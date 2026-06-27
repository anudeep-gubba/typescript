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

- Used to **explicitly define a data type**.
- Syntax: `identifier: type`

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
  age: 25,
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
greeting = function (name: string) {
  return `Hi ${name}`;
};
```

### Invalid

```ts
greeting = function () {
  console.log("Hello");
};
```

❌ Error: Return type `void` doesn't match `string`.

---

## Key Points

- `:` is used to add a type annotation.
- Prevents assigning incorrect data types.
- Can be used with:
  - Variables
  - Constants
  - Arrays
  - Objects
  - Function parameters
  - Function return values

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
let name = "John"; // string
let age = 25; // number
let active = true; // boolean
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
function setCounter(max = 100) {}
```

TypeScript infers:

```ts
function setCounter(max: number) {}
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
function increment(counter: number): number;
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
number | string;
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
event: MouseEvent;
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
event: Event;
```

`Event` doesn't contain the `button` property.

---

# Object Type Inference

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
  age: 30,
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
any;
```

Because TypeScript doesn't know the structure.

---

## Uninitialized Variables

```ts
let value;
```

Type:

```ts
any;
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
function greet(name: string);
```

✅ Function return types

```ts
function greet(): string;
```

✅ Complex objects

```ts
const user: User;
```

✅ Variables initialized later

```ts
let score: number;
```

---

# Interview Quick Recap

- **Type Inference** → TypeScript automatically determines the type.
- **Type Annotation** → You explicitly specify the type using `: type`.
- **Best Common Type** → Finds a compatible type for multiple values.
- **Contextual Typing** → Infers types from surrounding code.
- **Union Type (`|`)** → Allows multiple possible types.
- **`any`** → Disables type checking; avoid when possible.
- **Use Inference for simple variables.**
- **Use Explicit Types for functions, APIs, and complex objects.** 🚀

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

# 1. Primitive Data Types

Primitive data types are the fundamental, indivisible types provided by TypeScript (inherited from JavaScript). They represent single values and are not composed of other types.

# a. Number

- **Definition**: Represents both integer and floating-point numbers (no distinction between `int` and `float`).
- **Characteristics**:
  - Stored as 64-bit floating-point numbers.
  - Supports arithmetic operations like addition, subtraction, etc.
  - Includes special values: `NaN`, `Infinity`, `-Infinity`.
  - The binary number uses a leading zero followed by a lowercase or uppercase letter “B” e.g., 0b or 0B
  - An octal number uses a leading zero followed by the letter o (since ES2015) 0o. The digits after 0o are numbers in the range 0 through 7
  - Hexadecimal numbers use a leading zero followed by a lowercase or uppercase letter X (0x or 0X). The digits after the 0x must be in the range (0123456789ABCDEF).
  - **Note:** JavaScript has the `Number`type (with the letter N in uppercase) that refers to the non-primitive boxed object. You should not use this Number type as much as possible in TypeScript.
- **Example**:
  ```typescript
  let age: number = 25;
  let pi: number = 3.14;
  let invalid: number = NaN;
  console.log(age + pi); // Output: 28.14
  let bin = 0b100;
  let anotherBin: number = 0b010;
  let octal: number = 0o10;
  let hexadecimal: number = 0xa;
  ```

# b. String

- **Definition**: Represents textual data, enclosed in single quotes (`'`), double quotes (`"`), or backticks (`` ` ``) for template literals.
- **Characteristics**:
  - Immutable in JavaScript/TypeScript.
  - Supports string methods like `toUpperCase()`, `substring()`, etc.
  - TypeScript also supports template strings that use the backtick (`) to surround characters. The template strings allow you to create multi-line strings and provide string interpolation features.

- **Example**:

  ```typescript
  let name: string = "Alice";
  let description = `This TypeScript string can 
  span multiple 
  lines
  `;
  // String interpolations allow you to embed the variables into the string like this:
  let firstName: string = `John`;
  let title: string = `Web Developer`;
  let profile: string = `I'm ${firstName}. 
  I'm a ${title}`;

  console.log(profile);
  // output:
  // I'm John.
  // I'm a Web Developer.
  ```

# c. Boolean

- **Definition**: Represents logical values: `true` or `false`.
- **Characteristics**:
  - Used for conditional logic and control flow.
  - Typically occupies 1 bit (implementation-dependent).
  - **Note**: JavaScript has the `Boolean` type that refers to the non-primitive boxed object. The Boolean type has the letter `B` in uppercase, which is different from the boolean type.
  - It’s a good practice to avoid using the Boolean type.
- **Use Case**: Flags, conditions, or toggles.
- **Example**:

  ```typescript
  let isActive: boolean = true;
  if (isActive) {
    console.log("System is active"); // Output: System is active
  }

  // NOT operator
  const pending: boolean = true;
  const notPending = !pending; // false
  console.log(result); // false

  const hasError: boolean = false;
  const completed: boolean = true;

  // AND operator
  let result = completed && hasError;
  console.log(result); // false

  // OR operator
  let result = completed || hasError;
  console.log(result); // true
  ```

# d. Null and Undefined

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

# e. Symbol

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

# f. BigInt

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

# 2. Special TypeScript Types

These are TypeScript-specific types that enhance type safety and expressiveness, not directly available in JavaScript.

# a. Any

# What is the `any` Type?

The `any` type allows a variable to hold **any type of value**.

When a variable is declared as `any`, TypeScript disables type checking for that variable.

### Syntax

```javascript
let variableName: any;
```

### Example

```javascript
let result: any;

result = 1;
console.log(result);

result = "Hello";
console.log(result);

result = true;
console.log(result);
```

### Output

```javascript
1;
Hello;
true;
```

The same variable can store:

- Number
- String
- Boolean
- Array
- Object
- Function

---

# Why Do We Need `any`?

Sometimes we don't know the type of data at compile time.

Common scenarios:

- Third-party APIs
- User input
- Dynamic JSON data
- Migrating JavaScript to TypeScript

---

# Example: Different Data Types

```javascript
let result: any;

result = 1;
console.log(result);

result = "Hello";
console.log(result);

result = [1, 2, 3];

const total = result.reduce(
    (a, b) => a + b,
    0
);

console.log(total);
```

### Output

```javascript
1;
Hello;
6;
```

Notice that the same variable stores:

| Value   | Type   |
| ------- | ------ |
| 1       | Number |
| Hello   | String |
| [1,2,3] | Array  |

---

# Example: JSON Data

A common use case for `any` is parsing JSON.

```javascript
const json = '{"latitude":10.11,"longitude":12.12}';

const currentLocation = JSON.parse(json);

console.log(currentLocation);
```

### Output

```javascript
{
  latitude: 10.11,
  longitude: 12.12
}
```

TypeScript infers:

```javascript
currentLocation: any;
```

---

# Accessing Non-Existing Properties

```javascript
console.log(currentLocation.x);
```

### Output

```javascript
undefined;
```

Even though property `x` doesn't exist, TypeScript does not report an error.

This is because `currentLocation` is of type `any`.

---

# Why is `any` Dangerous?

Consider:

```javascript
let result: any;

result = 10.123;

result.toFixed();

result.willExist();
```

TypeScript shows **no compile-time error**.

But at runtime:

```javascript
TypeError:
result.willExist is not a function
```

### Problem

Since TypeScript skips type checking, errors can occur while running the application.

---

# What Happens Without `any`?

### Using `number`

```javascript
let result: number;

result = 10.123;

console.log(result.toFixed());
```

This is safe because TypeScript knows the type.

---

# `any` vs `object`

Many beginners confuse these two.

---

## Using `any`

```javascript
let result: any;

result = 10.123;

result.toFixed();

result.willExist();
```

### Compile Time

✅ No Error

### Runtime

❌ Error may occur

---

## Using `object`

```javascript
let result: object;

result = 10.123;

result.toFixed();
```

### Compile Time Errors

```javascript
Type 'number' is not assignable to type 'object'

Property 'toFixed' does not exist on type 'object'
```

---

## Comparison Table

| Feature             | any                 | object |
| ------------------- | ------------------- | ------ |
| Can store any value | ✅                  | ❌     |
| Type checking       | ❌ No               | ✅ Yes |
| Can call any method | ✅                  | ❌     |
| Compile-time safety | ❌                  | ✅     |
| Recommended         | Only when necessary | Yes    |

---

# Implicit `any`

When you don't specify a type, TypeScript may automatically assign `any`.

### Example

```javascript
let result;
```

TypeScript infers:

```javascript
let result: any;
```

This is called **Implicit Any**.

---

# Explicit `any`

When you manually specify the type.

```javascript
let result: any;
```

This is called **Explicit Any**.

---

# Implicit vs Explicit Any

| Type         | Example            |
| ------------ | ------------------ |
| Explicit Any | `let result: any;` |
| Implicit Any | `let result;`      |

---

# Preventing Implicit Any

In `tsconfig.json`:

```javascript
{
  "compilerOptions": {
    "noImplicitAny": true
  }
}
```

### Benefit

TypeScript reports errors when it cannot infer a type.

---

# Real-World Example: API Response

Suppose data comes from an API.

```javascript
let apiResponse: any;

apiResponse = {
    id: 1,
    name: "John"
};

console.log(apiResponse.name);
```

Since the structure is unknown, developers sometimes use `any`.

---

# Real-World Example: User Input

```javascript
let userInput: any;

userInput = "123";

userInput = 123;

userInput = true;
```

Different values can be stored without errors.

---

# Advantages of `any`

✅ Accepts any value

✅ Useful for dynamic data

✅ Easy JavaScript migration

✅ Useful when type is unknown

---

# Disadvantages of `any`

❌ No type safety

❌ No IntelliSense support

❌ Runtime errors possible

❌ Harder to maintain large projects

❌ Defeats the purpose of TypeScript

---

# When to Use `any`

Use `any` when:

- Type is genuinely unknown.
- Working with third-party libraries.
- Parsing unpredictable data.
- Migrating JavaScript code to TypeScript.

---

# When NOT to Use `any`

Avoid when:

- Type can be defined.
- Building production applications.
- Creating reusable components.
- Working with large teams.

Instead prefer:

```javascript
string;
number;
boolean;
object;
array;
interface;
type;
```

---

# Interview Questions

| Question                                | Answer                                             |
| --------------------------------------- | -------------------------------------------------- |
| What is `any` in TypeScript?            | A type that disables type checking.                |
| Can `any` store any value?              | Yes.                                               |
| Does TypeScript check methods on `any`? | No.                                                |
| What is implicit any?                   | When TypeScript automatically infers `any`.        |
| How to prevent implicit any?            | Set `noImplicitAny: true` in tsconfig.json.        |
| Is `any` type-safe?                     | No.                                                |
| Difference between `any` and `object`?  | `any` disables checks, `object` keeps type safety. |
| Should `any` be used everywhere?        | No, only when necessary.                           |

---

# Summary

- `any` allows a variable to store any type of value.
- TypeScript skips type checking for variables declared as `any`.
- `any` is useful when the type is unknown at compile time.
- It is commonly used with APIs, JSON parsing, and JavaScript migration.
- Implicit `any` occurs when no type is specified.
- Use `"noImplicitAny": true` to avoid accidental `any`.
- Avoid overusing `any` because it removes TypeScript's type safety benefits.
- Prefer specific types whenever possible.

# b. Unknown

# TypeScript `unknown` Type

**Summary:** In this tutorial, you'll learn about the TypeScript `unknown` type, how it differs from `any`, why it's safer, and when to use it.

---

# What is the `unknown` Type?

The `unknown` type can hold any value, but TypeScript requires you to **check the type before using it**.

Think of `unknown` as a **type-safe version of `any`**.

### Syntax

```javascript
let result: unknown;
```

---

# Assigning Values to `unknown`

Like `any`, you can store any type of value.

```javascript
let result: unknown;

result = 1;
result = "hello";
result = false;
result = Symbol();
result = { name: "John" };
result = [1, 2, 3];
```

### Valid Values

| Value         | Type    |
| ------------- | ------- |
| 1             | Number  |
| "hello"       | String  |
| false         | Boolean |
| Symbol()      | Symbol  |
| {name:"John"} | Object  |
| [1,2,3]       | Array   |

---

# Why is `unknown` Different from `any`?

With `any`, TypeScript allows any operation.

```javascript
let result: any;

result = [1, 2, 3];

const total = result.reduce((a, b) => a + b, 0);

console.log(total);
```

### Output

```javascript
6;
```

No compile-time checking occurs.

---

# `unknown` Prevents Unsafe Operations

```javascript
let result: unknown;

result = [1, 2, 3];

const total = result.reduce(
    (a, b) => a + b,
    0
);
```

### Compile-Time Error

```javascript
Object is of type 'unknown'
```

Reason:

TypeScript doesn't know whether `result` is:

- Array
- String
- Object
- Number

So it blocks the operation.

---

# Using Type Assertion

To use the value, tell TypeScript what the actual type is.

```javascript
let result: unknown;

result = [1, 2, 3];

const total =
(result as number[])
.reduce((a, b) => a + b, 0);

console.log(total);
```

### Output

```javascript
6;
```

### How it Works

```javascript
result as number[]
```

This tells TypeScript:

> "Trust me, this value is a number array."

Now array methods can be used safely.

---

# Type Assertion Example

### Before Assertion

```javascript
let result: unknown;

result = "Hello";

console.log(result.toUpperCase());
```

### Error

```javascript
Object is of type 'unknown'
```

---

### After Assertion

```javascript
let result: unknown;

result = "Hello";

console.log(
    (result as string).toUpperCase()
);
```

### Output

```javascript
HELLO;
```

---

# Type Narrowing Using `typeof`

A safer approach is checking the type first.

```javascript
let result: unknown;

result = "Hello";

if(typeof result === "string"){
    console.log(result.toUpperCase());
}
```

### Output

```javascript
HELLO;
```

This is called **Type Narrowing**.

---

# `unknown` vs `any`

| Feature                   | `any`     | `unknown` |
| ------------------------- | --------- | --------- |
| Can store any value       | ✅        | ✅        |
| Type checking             | ❌ No     | ✅ Yes    |
| Type safety               | ❌ Unsafe | ✅ Safe   |
| Can call methods directly | ✅        | ❌        |
| Requires validation       | ❌        | ✅        |
| Recommended               | Rarely    | Yes       |

---

# Example Comparison

### Using `any`

```javascript
let value: any;

value = "Hello";

console.log(value.toUpperCase());
```

### Output

```javascript
HELLO;
```

No checks are performed.

---

### Using `unknown`

```javascript
let value: unknown;

value = "Hello";

console.log(value.toUpperCase());
```

### Error

```javascript
Object is of type 'unknown'
```

Must validate first:

```javascript
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

---

# Real-World Example: API Response

When calling an API, you may not know the data structure.

### Fetch Function

```javascript
const fetchData =
async (url: string): Promise<unknown> => {

    const response = await fetch(url);

    return await response.json();
};
```

Notice:

```javascript
Promise<unknown>
```

The returned data type is unknown.

---

# Accessing API Data

```javascript
const posts = await fetchData(url);
```

Type of posts:

```javascript
unknown;
```

Before accessing properties:

```javascript
(posts as {
    userId: number;
    id: number;
    title: string;
    body: string;
}[])
.map(post => console.log(post.title));
```

Now TypeScript knows the structure.

---

# Real-World Example: Safe Formatting Function

```javascript
function format(value: unknown): void {

    switch(typeof value){

        case "string":
            console.log(
                value.toUpperCase()
            );
            break;

        case "number":
            console.log(
                value.toFixed(2)
            );
            break;

        default:
            console.log(value);
    }
}
```

### Usage

```javascript
format("hello");
format(10.456);
format(true);
```

### Output

```javascript
HELLO;
10.46;
true;
```

---

# Why `unknown` is Safer

Suppose API returns:

```javascript
"John";
```

But you assume:

```javascript
[1, 2, 3];
```

With `any`:

```javascript
let data: any = "John";

data.reduce();
```

No compile-time error.

Runtime crash occurs.

---

With `unknown`:

```javascript
let data: unknown = "John";

data.reduce();
```

Compile-time error.

TypeScript protects you before execution.

---

# When to Use `unknown`

Use `unknown` when:

✅ API responses

✅ Database responses

✅ External libraries

✅ User input

✅ Dynamic JSON data

✅ Values whose type is not known yet

---

# When NOT to Use `unknown`

Avoid when the type is already known.

Bad:

```javascript
let name: unknown = "John";
```

Better:

```javascript
let name: string = "John";
```

---

# `any` vs `unknown` Interview Question

### Which one is safer?

```javascript
any;
```

or

```javascript
unknown;
```

### Answer

```javascript
unknown;
```

Because TypeScript forces type validation before usage.

---

# Interview Questions

| Question                                     | Answer                                                             |
| -------------------------------------------- | ------------------------------------------------------------------ |
| What is `unknown`?                           | A type that can hold any value but requires validation before use. |
| Is `unknown` safer than `any`?               | Yes.                                                               |
| Can methods be called directly on `unknown`? | No.                                                                |
| How can you use an `unknown` value?          | By type assertion or type narrowing.                               |
| What is type narrowing?                      | Checking the type before using the value.                          |
| Can `unknown` store any value?               | Yes.                                                               |
| Common use case of `unknown`?                | API responses and external data.                                   |
| Difference between `any` and `unknown`?      | `any` disables checks, `unknown` enforces checks.                  |

---

# Summary

- `unknown` can store any type of value.
- Unlike `any`, TypeScript does not allow operations on `unknown` values without validation.
- Use type assertion (`as`) or type narrowing (`typeof`) before accessing methods or properties.
- `unknown` is a safer alternative to `any`.
- It is commonly used for API responses, database results, external libraries, and dynamic data.
- Prefer `unknown` over `any` whenever possible because it provides type safety.

# c. Void

# TypeScript `void` Type

**Summary:** In this tutorial, you'll learn what the TypeScript `void` type is, when to use it, why it is important, and how it differs from other types.

---

# What is the `void` Type?

The `void` type represents the **absence of a value**.

It is mainly used as the return type of functions that **do not return anything**.

### Syntax

```javascript
function functionName(): void {
    // code
}
```

---

# Why Do We Need `void`?

Sometimes a function performs an action but does not return a value.

Examples:

- Logging messages
- Saving data
- Sending emails
- Updating records
- Displaying notifications

In these cases, use `void`.

---

# Basic Example

```javascript
function log(message: string): void {
    console.log(message);
}
```

### Calling Function

```javascript
log("Hello TypeScript");
```

### Output

```javascript
Hello TypeScript
```

Notice:

```javascript
: void
```

indicates that the function returns nothing.

---

# Function Without `void`

```javascript
function log(message: string) {
    console.log(message);
}
```

This also works because TypeScript can infer the return type.

However, adding `void` improves readability.

---

# Benefits of Using `void`

## 1. Improves Code Clarity

Without reading the entire function body, developers immediately know:

```javascript
function log(message: string): void
```

This function does not return anything.

---

## 2. Provides Type Safety

Suppose someone tries to store the result.

```javascript
function log(message: string): void {
    console.log(message);
}

let result = log("Hello");
```

### Value of result

```javascript
undefined;
```

Since the function returns nothing, TypeScript treats it as `void`.

---

# Example: Display User Details

```javascript
function displayUser(name: string): void {
    console.log("User:", name);
}
```

### Call

```javascript
displayUser("John");
```

### Output

```javascript
User: John;
```

---

# Example: Save Data

```javascript
function saveData(): void {
    console.log("Data Saved");
}
```

### Call

```javascript
saveData();
```

### Output

```javascript
Data Saved
```

---

# Example: Send Notification

```javascript
function sendNotification(): void {
    console.log("Notification Sent");
}
```

### Output

```javascript
Notification Sent
```

---

# What Happens If We Return a Value?

### Incorrect

```javascript
function add(a: number, b: number): void {
    return a + b;
}
```

### Error

```javascript
Type 'number' is not assignable to type 'void'
```

Reason:

A `void` function should not return a value.

---

# Correct Version

```javascript
function add(a: number, b: number): number {
    return a + b;
}
```

### Output

```javascript
add(10, 20);
// 30
```

---

# `void` in Arrow Functions

### Example

```javascript
const greet = (): void => {
    console.log("Hello");
};
```

### Output

```javascript
Hello;
```

---

# `void` with Methods

```javascript
class User {

    login(): void {
        console.log("User Logged In");
    }
}
```

### Usage

```javascript
const user = new User();

user.login();
```

### Output

```javascript
User Logged In
```

---

# Using `void` as a Variable Type

Technically possible, but rarely useful.

```javascript
let useless: void = undefined;
```

### Valid

```javascript
let useless: void = undefined;
```

---

### Invalid

```javascript
let useless: void = 1;
```

### Error

```javascript
Type '1' is not assignable to type 'void'
```

---

# `strictNullChecks` and `void`

When `strictNullChecks` is disabled:

```javascript
let useless: void;

useless = null;
```

### Valid

```javascript
null;
```

When `strictNullChecks` is enabled:

```javascript
let useless: void;

useless = null;
```

### Error

```javascript
Type 'null' is not assignable to type 'void'
```

---

# `void` vs `undefined`

Many beginners confuse these.

## `undefined`

```javascript
let value: undefined;

value = undefined;
```

Represents a specific value.

---

## `void`

```javascript
function log(): void {
    console.log("Hello");
}
```

Represents no return value.

---

## Comparison

| Feature                            | void      | undefined    |
| ---------------------------------- | --------- | ------------ |
| Used in functions                  | ✅ Yes    | ❌ No        |
| Represents absence of return value | ✅ Yes    | ❌ No        |
| Represents actual value            | ❌ No     | ✅ Yes       |
| Commonly used as variable type     | ❌ Rarely | ✅ Sometimes |

---

# Real-World Examples

| Scenario             | Return Type |
| -------------------- | ----------- |
| Logging              | `void`      |
| Sending Email        | `void`      |
| Display Notification | `void`      |
| Save Record          | `void`      |
| Delete User          | `void`      |
| Print Report         | `void`      |

---

# When to Use `void`

Use `void` when a function:

✅ Performs an action

✅ Does not return any value

Examples:

```javascript
console.log();
sendEmail();
saveData();
deleteUser();
showNotification();
```

---

# When NOT to Use `void`

Do not use `void` if the function returns data.

### Wrong

```javascript
function getName(): void {
    return "John";
}
```

### Correct

```javascript
function getName(): string {
    return "John";
}
```

---

# Interview Questions

| Question                                   | Answer                                                        |
| ------------------------------------------ | ------------------------------------------------------------- |
| What is `void` in TypeScript?              | Represents absence of a return value.                         |
| Where is `void` commonly used?             | Function return types.                                        |
| Can a `void` function return a value?      | No.                                                           |
| Can a variable be declared as `void`?      | Yes, but it is rarely useful.                                 |
| What value can a `void` variable hold?     | `undefined`                                                   |
| Difference between `void` and `undefined`? | `void` means no return value, `undefined` is an actual value. |
| Why use `void` explicitly?                 | Improves readability and type safety.                         |

---

# Summary

- `void` represents the absence of a return value.
- It is commonly used as the return type of functions that do not return anything.
- Adding `void` improves code readability and type safety.
- A `void` function cannot return a value.
- A variable of type `void` can only hold `undefined`.
- Use `void` for actions like logging, saving data, sending notifications, and printing information.
- Avoid using `void` when a function needs to return data.

# d. Never

# TypeScript `never` Type

**Summary:** In this tutorial, you'll learn what the TypeScript `never` type is, why it exists, how it differs from `void`, and common real-world use cases.

---

# What is the `never` Type?

The `never` type represents a value that **never occurs**.

Think of it as an **empty set**.

| Type      | Possible Values  |
| --------- | ---------------- |
| `number`  | 1, 2, 3, 4...    |
| `string`  | "Hello", "Hi"... |
| `boolean` | true, false      |
| `null`    | null             |
| `never`   | No values        |

Since `never` contains no values, nothing can be assigned to it.

---

# Assigning Values to `never`

### Invalid Example

```javascript
let empty: never = "hello";
```

### Error

```javascript
Type 'string' is not assignable to type 'never'
```

---

### Invalid Example

```javascript
let empty: never = 100;
```

### Error

```javascript
Type 'number' is not assignable to type 'never'
```

---

### Invalid Example

```javascript
let empty: never = true;
```

### Error

```javascript
Type 'boolean' is not assignable to type 'never'
```

Nothing can be assigned to a variable of type `never`.

---

# Why Do We Need `never`?

Since `never` represents an impossible value, it is useful for:

- Functions that never return.
- Infinite loops.
- Exhaustive type checking.
- Impossible type combinations.

---

# `never` as an Impossible Type

Consider:

```javascript
type Alphanumeric = string & number;
```

### What is this?

This means:

```javascript
string AND number
```

Can a value be both?

```javascript
"Hello"; // string
100; // number
```

No.

A value cannot be both string and number at the same time.

Therefore TypeScript converts it to:

```javascript
type Alphanumeric = never;
```

---

# Function That Always Throws Error

A function that always throws an exception never returns control to the caller.

### Example

```javascript
function raiseError(message: string): never {
    throw new Error(message);
}
```

### Usage

```javascript
raiseError("Something went wrong");
```

### Output

```javascript
Error: Something went wrong
```

Execution stops immediately.

Therefore return type is:

```javascript
never;
```

---

# Infinite Loop Example

```javascript
function forever(): never {
    while(true){
    }
}
```

### What Happens?

```javascript
forever();
```

The loop never ends.

The function never returns.

Therefore:

```javascript
never;
```

is the correct return type.

---

# `void` vs `never`

This is a very common interview question.

---

## `void`

Function completes execution but returns no value.

```javascript
function log(message: string): void {
    console.log(message);
}
```

### Execution

```javascript
log("Hello");
```

Output:

```javascript
Hello;
```

Control returns to caller.

---

## `never`

Function never completes normally.

```javascript
function raiseError(): never {
    throw new Error();
}
```

or

```javascript
function forever(): never {
    while(true){}
}
```

Control never returns.

---

## Comparison

| Feature                   | void | never |
| ------------------------- | ---- | ----- |
| Returns value             | ❌   | ❌    |
| Returns control to caller | ✅   | ❌    |
| Used for logging          | ✅   | ❌    |
| Used for thrown errors    | ❌   | ✅    |
| Used for infinite loops   | ❌   | ✅    |
| Represents no value       | ❌   | ✅    |

---

# Exhaustive Type Checking

One of the most important uses of `never`.

---

## Step 1: Create Union Type

```javascript
type Role = "admin" | "user";
```

Possible values:

```javascript
admin;
user;
```

---

## Step 2: Handle Every Case

```javascript
const authorize = (
    role: Role
): string => {

    switch(role){

        case "admin":
            return "You can do anything";

        case "user":
            return "You can do something";

        default:

            const _unreachable: never = role;

            throw new Error(
                `Invalid role: ${_unreachable}`
            );
    }
};
```

---

### Usage

```javascript
console.log(authorize("admin"));
```

### Output

```javascript
You can do anything
```

---

# Why Use `_unreachable: never`?

At this point TypeScript knows:

```javascript
Role = "admin" | "user";
```

All possible cases are already handled.

So reaching:

```javascript
default:
```

is impossible.

Therefore:

```javascript
role;
```

should be:

```javascript
never;
```

---

# Detecting Missing Cases

Suppose later we add:

```javascript
type Role =
    | "admin"
    | "user"
    | "guest";
```

But forget:

```javascript
case "guest":
```

---

Now:

```javascript
default:
```

can receive:

```javascript
guest;
```

So:

```javascript
const _unreachable: never = role;
```

produces error.

### Error

```javascript
Type 'string' is not assignable to type 'never'
```

This immediately tells us:

> You forgot to handle the new role.

---

# Fixed Version

```javascript
const authorize = (
    role: Role
): string => {

    switch(role){

        case "admin":
            return "You can do anything";

        case "user":
            return "You can do something";

        case "guest":
            return "You can do nothing";

        default:
            const _unreachable: never = role;

            throw new Error(
                `Invalid role: ${_unreachable}`
            );
    }
};
```

Now all cases are covered.

---

# Cleaner Approach

Instead of repeating:

```javascript
const _unreachable: never = role;
```

Create helper function.

```javascript
const unknownRole = (
    role: never
): never => {

    throw new Error(
        `Invalid role: ${role}`
    );
};
```

---

### Usage

```javascript
const authorize = (
    role: Role
): string => {

    switch(role){

        case "admin":
            return "You can do anything";

        case "user":
            return "You can do something";

        case "guest":
            return "You can do nothing";

        default:
            return unknownRole(role);
    }
};
```

---

# Real-World Uses of `never`

| Scenario                     | Use     |
| ---------------------------- | ------- |
| Throwing errors              | `never` |
| Infinite loops               | `never` |
| Exhaustive switch statements | `never` |
| Impossible type combinations | `never` |
| Type safety checks           | `never` |

---

# `never` vs `any`

| Feature                     | any | never |
| --------------------------- | --- | ----- |
| Can store values            | ✅  | ❌    |
| Type safety                 | ❌  | ✅    |
| Represents unknown data     | ✅  | ❌    |
| Represents impossible value | ❌  | ✅    |

---

# `never` vs `unknown`

| Feature                     | unknown | never |
| --------------------------- | ------- | ----- |
| Can hold values             | ✅      | ❌    |
| Requires type checking      | ✅      | N/A   |
| Represents impossible state | ❌      | ✅    |
| Common for API data         | ✅      | ❌    |

---

# Interview Questions

| Question                               | Answer                                     |
| -------------------------------------- | ------------------------------------------ |
| What is `never`?                       | A type that contains no values.            |
| Can you assign a value to `never`?     | No.                                        |
| When is `never` used?                  | Errors, infinite loops, exhaustive checks. |
| Difference between `void` and `never`? | `void` returns control, `never` does not.  |
| What does `string & number` become?    | `never`                                    |
| Why use `never` in switch statements?  | To ensure all cases are handled.           |
| Can a function return `never`?         | Yes.                                       |
| Example of a `never` function?         | Function that always throws an error.      |

---

# Summary

- `never` is a type that contains **no values**.
- Nothing can be assigned to a variable of type `never`.
- It represents an impossible state in the type system.
- Functions that always throw errors should return `never`.
- Functions with infinite loops should return `never`.
- `never` is commonly used for exhaustive type checking in `switch` statements.
- `never` helps TypeScript detect missing cases when union types are extended.
- Unlike `void`, a `never` function never returns control to the caller.

---

# 3. Composite Data Types

Composite types combine or structure data, allowing complex data representations.

# a. Arrays

#### Introduction to TypeScript Array Type

A TypeScript array is an ordered list of data. To declare an array that holds values of a specific type, you use the following syntax:

```typescript
let arrayName: type[];
```

For example, the following declares an array of strings:

```typescript
let skills: string[] = [];
```

And you can add one or more strings to the array:

```typescript
skills[0] = "Problem Solving";
skills[1] = "Programming";
```

or use the `push()` method:

```typescript
skills.push("Software Design");
```

The following declares a variable and assigns an array of strings to it:

```typescript
let skills = ["Problem Sovling", "Software Design", "Programming"];
```

In this example, TypeScript infers the `skills` array as an array of strings. It is equivalent to the following:

```typescript
let skills: string[];
skills = ["Problem Sovling", "Software Design", "Programming"];
```

After you define an array of a specific type, TypeScript will prevent you from adding incompatible values. For example, the following will cause an error:

```typescript
skills.push(100);
```

because we're trying to add a number to the string array.

**Error:**

```shell
Argument of type 'number' is not assignable to parameter of type 'string'.
```

When you extract an element from the array, TypeScript infers the type of the array element. For example:

```typescript
let skill = skills[0];
console.log(typeof skill);
```

**Output:**

```text
string
```

In this example, we extract the first element of the `skills` array and assign it to the `skill` variable.

Since an element in a string array is a string, TypeScript infers the type of the `skill` variable to `string` as shown in the output.

---

## TypeScript Array Properties and Methods

TypeScript arrays have the same properties and methods as JavaScript arrays.

For example, the following uses the `length` property to get the number of elements in an array:

```typescript
let series = [1, 2, 3];
console.log(series.length); // 3
```

You can use all the useful array methods such as:

| Method      | Purpose                                   |
| ----------- | ----------------------------------------- |
| `forEach()` | Iterate through array elements            |
| `map()`     | Create a new transformed array            |
| `reduce()`  | Reduce array to a single value            |
| `filter()`  | Create a new array with matching elements |

For example:

```typescript
let series = [1, 2, 3];
let doubleIt = series.map((e) => e * 2);
console.log(doubleIt);
```

**Output:**

```text
[ 2, 4, 6 ]
```

---

## Storing Values of Mixed Types

The following illustrates how to define an array that holds both strings and numbers:

```typescript
let scores = ["Programming", 5, "Software Design", 4];
```

In this case, TypeScript infers the `scores` array as an array of `string | number`. It's equivalent to the following:

```typescript
let scores: (string | number)[];
scores = ["Programming", 5, "Software Design", 4];
```

---

## Summary

- In TypeScript, an array is an ordered list of values.
- Use the `let arr: type[]` syntax to declare an array of a specific type.
- Adding a value of a different type to the array will result in an error.
- An array can store values of mixed types.
- Use the `arr: (type1 | type2)[]` syntax to declare an array of values with mixed types (`type1` and `type2`).

  ```
  | S.No | Method            | Purpose                                                    | Example                                                                                                                                         |
  | ---- | ----------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
  | 1    | `push()`          | Adds element(s) to the end of an array                     | `let nums = [1, 2, 3]; nums.push(4); console.log(nums); // [1, 2, 3, 4]`                                                                        |
  | 2    | `pop()`           | Removes the last element                                   | `let nums = [1, 2, 3]; let removed = nums.pop(); console.log(removed); // 3 console.log(nums); // [1, 2]`                                       |
  | 3    | `shift()`         | Removes the first element                                  | `let nums = [1, 2, 3]; let removed = nums.shift(); console.log(removed); // 1 console.log(nums); // [2, 3]`                                     |
  | 4    | `unshift()`       | Adds element(s) to the beginning                           | `let nums = [2, 3]; nums.unshift(1); console.log(nums); // [1, 2, 3]`                                                                           |
  | 5    | `concat()`        | Combines two or more arrays                                | `let arr1 = [1, 2]; let arr2 = [3, 4]; let result = arr1.concat(arr2); console.log(result); // [1, 2, 3, 4]`                                    |
  | 6    | `join()`          | Converts array into a string                               | `let fruits = ["Apple", "Banana", "Mango"]; console.log(fruits.join(", ")); // Apple, Banana, Mango`                                            |
  | 7    | `slice()`         | Returns selected elements without modifying original array | `let nums = [10, 20, 30, 40, 50]; let result = nums.slice(1, 4); console.log(result); // [20, 30, 40] console.log(nums); // Original unchanged` |
  | 8    | `splice()`        | Adds, removes, or replaces elements                        | `let nums = [10, 20, 30, 40]; nums.splice(1, 2); console.log(nums); // [10, 40]`                                                                |
  | 9    | `includes()`      | Checks if an element exists                                | `let fruits = ["Apple", "Banana"]; console.log(fruits.includes("Banana")); // true console.log(fruits.includes("Mango")); // false`             |
  | 10   | `indexOf()`       | Finds the first occurrence index                           | `let nums = [10, 20, 30, 20]; console.log(nums.indexOf(20)); // 1`                                                                              |
  | 11   | `find()`          | Returns first matching element                             | `let nums = [5, 10, 15, 20]; let result = nums.find(num => num > 10); console.log(result); // 15`                                               |
  | 12   | `findIndex()`     | Returns index of first matching element                    | `let nums = [5, 10, 15, 20]; let result = nums.findIndex(num => num > 10); console.log(result); // 2`                                           |
  | 13   | `filter()`        | Returns elements matching a condition                      | `let nums = [5, 10, 15, 20]; let result = nums.filter(num => num > 10); console.log(result); // [15, 20]`                                       |
  | 14   | `map()`           | Creates a new array by transforming elements               | `let nums = [1, 2, 3]; let result = nums.map(num => num * 2); console.log(result); // [2, 4, 6]`                                                |
  | 15   | `forEach()`       | Executes a function for each element                       | `let nums = [1, 2, 3]; nums.forEach(num => console.log(num * 2)); // 2 // 4 // 6`                                                               |
  | 16   | `reduce()`        | Reduces array into a single value                          | `let nums = [1, 2, 3, 4]; let sum = nums.reduce((total, num) => total + num, 0); console.log(sum); // 10`                                       |
  | 17   | `some()`          | Checks if at least one element satisfies condition         | `let nums = [5, 10, 15]; console.log(nums.some(num => num > 10)); // true`                                                                      |
  | 18   | `every()`         | Checks if all elements satisfy condition                   | `let nums = [5, 10, 15]; console.log(nums.every(num => num > 0)); // true`                                                                      |
  | 19   | `sort()`          | Sorts array elements                                       | `let nums = [30, 10, 20]; nums.sort((a, b) => a - b); console.log(nums); // [10, 20, 30]`                                                       |
  | 20   | `reverse()`       | Reverses the array order                                   | `let nums = [1, 2, 3]; nums.reverse(); console.log(nums); // [3, 2, 1]`                                                                         |
  | 21   | `flat()`          | Flattens nested arrays                                     | `let nums = [1, [2, 3], [4, 5]]; console.log(nums.flat()); // [1, 2, 3, 4, 5]`                                                                  |
  | 22   | `flatMap()`       | Maps and flattens in one step                              | `let nums = [1, 2, 3]; let result = nums.flatMap(num => [num, num * 2]); console.log(result); // [1, 2, 2, 4, 3, 6]`                            |
  | 23   | `at()`            | Accesses element by index (supports negative index)        | `let fruits = ["Apple", "Banana", "Mango"]; console.log(fruits.at(0)); // Apple console.log(fruits.at(-1)); // Mango`                           |
  | 24   | `fill()`          | Fills array with a value                                   | `let nums = [1, 2, 3, 4]; nums.fill(0); console.log(nums); // [0, 0, 0, 0]`                                                                     |
  | 25   | `Array.isArray()` | Checks if value is an array                                | `console.log(Array.isArray([1, 2])); // true console.log(Array.isArray("Hello")); // false`                                                     |
  ```

## High-Priority Methods for Interviews

| Category            | Methods                                            |
| ------------------- | -------------------------------------------------- |
| Add/Remove Elements | `push()`, `pop()`, `shift()`, `unshift()`          |
| Search              | `find()`, `findIndex()`, `includes()`, `indexOf()` |
| Transformation      | `map()`, `flatMap()`                               |
| Filtering           | `filter()`                                         |
| Aggregation         | `reduce()`                                         |
| Validation          | `some()`, `every()`                                |
| Array Modification  | `slice()`, `splice()`, `sort()`, `reverse()`       |
| Iteration           | `forEach()`                                        |
| Nested Arrays       | `flat()`                                           |

**This format (Input → Operation → Output) is usually the best for TypeScript/JavaScript notes because you can understand the result immediately without reading long explanations.**

# b. Tuples

# Introduction to TypeScript Tuple

A **Tuple** is a special type of array that allows you to:

- Store a fixed number of elements.
- Store elements of different data types.
- Maintain a specific order of elements.

### Array vs Tuple

| Feature         | Array             | Tuple                   |
| --------------- | ----------------- | ----------------------- |
| Size            | Dynamic           | Fixed                   |
| Data Types      | Usually same type | Different types allowed |
| Order Important | No                | Yes                     |
| Type Safety     | Less strict       | More strict             |

---

## Tuple Syntax

```javascript
let tupleName: [type1, type2, type3];
```

### Example

```javascript
let skill: [string, number];
skill = ['Programming', 5];
```

### Output

```javascript
["Programming", 5];
```

Here:

| Position | Type   | Value       |
| -------- | ------ | ----------- |
| 0        | string | Programming |
| 1        | number | 5           |

---

# Order Matters in Tuple

The position of each value must match the declared type.

### Correct

```javascript
let skill: [string, number];
skill = ['Programming', 5];
```

### Incorrect

```javascript
let skill: [string, number];
skill = [5, 'Programming'];
```

### Error

```javascript
Type 'string' is not assignable to type 'number'
```

Explanation:

| Expected Position | Expected Type | Actual Value   |
| ----------------- | ------------- | -------------- |
| 0                 | string        | 5 ❌           |
| 1                 | number        | Programming ❌ |

---

# Accessing Tuple Elements

Tuple elements are accessed using indexes.

### Example

```javascript
let skill: [string, number];

skill = ['Programming', 5];

console.log(skill[0]);
console.log(skill[1]);
```

### Output

```javascript
Programming;
5;
```

---

# Tuple Example: Student Data

```javascript
let student: [number, string];

student = [101, 'John'];
```

### Meaning

| Index | Value | Description  |
| ----- | ----- | ------------ |
| 0     | 101   | Student ID   |
| 1     | John  | Student Name |

---

# Tuple Example: Product Information

```javascript
let product: [number, string, number];

product = [101, 'Laptop', 50000];
```

### Meaning

| Index | Value  | Description  |
| ----- | ------ | ------------ |
| 0     | 101    | Product ID   |
| 1     | Laptop | Product Name |
| 2     | 50000  | Price        |

---

# RGB Color Tuple

A common use case for tuples is storing RGB color values.

### RGB Format

```javascript
(red, green, blue);
```

### Example

```javascript
let color: [number, number, number];

color = [255, 0, 0];
```

### Meaning

| Index | Color Channel | Value |
| ----- | ------------- | ----- |
| 0     | Red           | 255   |
| 1     | Green         | 0     |
| 2     | Blue          | 0     |

### Output

```javascript
Red Color
```

---

# Optional Tuple Elements

Since TypeScript 3.0, tuple elements can be optional using `?`.

### Syntax

```javascript
let tupleName: [type1, type2?];
```

---

# RGBA Color Example

RGBA consists of:

- Red
- Green
- Blue
- Alpha (Opacity)

### Declaration

```javascript
let bgColor: [number, number, number, number?];
```

### With Alpha Value

```javascript
bgColor = [0, 255, 255, 0.5];
```

### Without Alpha Value

```javascript
bgColor = [0, 255, 255];
```

Both are valid.

---

# Optional Tuple Element Example

```javascript
let employee: [number, string, string?];

employee = [101, 'John', 'Developer'];

employee = [102, 'David'];
```

### Valid Values

| Tuple Value                  | Valid |
| ---------------------------- | ----- |
| `[101, 'John', 'Developer']` | ✅    |
| `[102, 'David']`             | ✅    |
| `[101]`                      | ❌    |

---

# Tuple Length

```javascript
let skill: [string, number];

skill = ['Programming', 5];

console.log(skill.length);
```

### Output

```javascript
2;
```

---

# Real-World Use Cases of Tuple

| Use Case         | Tuple Example                  |
| ---------------- | ------------------------------ |
| Student Record   | `[101, 'John']`                |
| Product Data     | `[101, 'Laptop', 50000]`       |
| Employee Details | `[1001, 'David', 'Developer']` |
| RGB Color        | `[255, 0, 0]`                  |
| RGBA Color       | `[255, 0, 0, 0.5]`             |
| Coordinates      | `[17.3850, 78.4867]`           |

---

# Tuple vs Array

| Array                | Tuple                        |
| -------------------- | ---------------------------- |
| `let nums: number[]` | `let data: [string, number]` |
| Flexible size        | Fixed size                   |
| Same type values     | Different types allowed      |
| Order less important | Order very important         |

### Array Example

```javascript
let numbers: number[];

numbers = [1, 2, 3, 4];
```

### Tuple Example

```javascript
let employee: [number, string];

employee = [101, 'John'];
```

---

# Interview Questions

| Question                              | Answer                                                            |
| ------------------------------------- | ----------------------------------------------------------------- |
| What is a Tuple?                      | A fixed-size array with known types and order.                    |
| Can Tuple store different data types? | Yes.                                                              |
| Is order important in Tuple?          | Yes.                                                              |
| Can Tuple have optional elements?     | Yes, using `?`.                                                   |
| Can Tuple have fixed length?          | Yes.                                                              |
| Difference between Array and Tuple?   | Array = same type values, Tuple = fixed order and multiple types. |

---

# Summary

- A **Tuple** is a fixed-size array with predefined types.
- The order of elements is important.
- Each position has its own type.
- Tuples can store multiple data types.
- Optional elements can be defined using `?`.
- Common use cases include RGB colors, coordinates, student records, and product data.
- Tuples provide better type safety than regular arrays.

  ```

  ```

# c. Objects

The TypeScript `object` type represents all values that are **not primitive types**.

##### Declaring an Object Type

```ts
let employee: object;

employee = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};

console.log(employee);
```

##### Output

```ts
{
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer'
}
```

---

##### Assigning a Primitive Value

If you reassign a primitive value to the `employee` object, you'll get an error:

```ts
employee = "Jane";
```

##### Error

```ts
error TS2322: Type '"Jane"' is not assignable to type 'object'.
```

---

##### Accessing a Non-Existing Property

If you attempt to access a property that doesn't exist on the `employee` object, you'll get an error:

```ts
console.log(employee.hireDate);
```

##### Error

```ts
error TS2339: Property 'hireDate' does not exist on type 'object'.
```

> Note: The above statement works perfectly fine in JavaScript and returns `undefined` instead.

---

###### Explicitly Specifying Object Properties

##### Step 1: Declare the Object Type

```ts
let employee: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};
```

##### Step 2: Assign Values

```ts
employee = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};
```

---

##### Combined Declaration and Assignment

```ts
let employee: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};
```

---

#### object vs. Object

TypeScript has another type called `Object` (uppercase **O**). It's important to understand the difference.

| object                              | Object                                           |
| ----------------------------------- | ------------------------------------------------ |
| Represents all non-primitive values | Describes functionality available on all objects |

For example, the `Object` type provides methods such as:

- `toString()`
- `valueOf()`

These methods are accessible by any object.

---

##### The Empty Type `{}`

TypeScript has another type called the **empty type** denoted by `{}`.

The empty type `{}` describes an object that has **no property of its own**.

##### Example

```ts
let vacant: {};
vacant.firstName = "John";
```

##### Error

```ts
error TS2339: Property 'firstName' does not exist on type '{}'.
```

---

##### Accessing Object Methods

You can access properties and methods declared on the `Object` type through the prototype chain:

```ts
let vacant: {} = {};
console.log(vacant.toString());
```

##### Output

```ts
[object Object]
```

---

###### Summary

- The TypeScript `object` type represents any value that is **not a primitive value**.
- The `Object` type describes functionality that is available on **all objects**.
- The empty type `{}` refers to an object that has **no property of its own**.

  ```

  ```

# d. Enums

---

# What is an Enum?

An **Enum (Enumerated Type)** is a collection of named constant values.

Instead of using magic numbers or strings throughout your code, you can define meaningful names.

### Syntax

```javascript
enum EnumName {
    Value1,
    Value2,
    Value3
}
```

---

# Why Use Enum?

Without Enum:

```javascript
let month = 5;

if (month === 5) {
  console.log("Summer");
}
```

Here, `5` is a magic number. It's difficult to understand.

With Enum:

```javascript
enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun
}

let month = Month.Jun;

if(month === Month.Jun){
    console.log("Summer");
}
```

Much more readable and maintainable.

---

# Enum Example: Months

```javascript
enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
}
```

### Generated Values

| Member | Value |
| ------ | ----- |
| Jan    | 0     |
| Feb    | 1     |
| Mar    | 2     |
| Apr    | 3     |
| May    | 4     |
| Jun    | 5     |
| Jul    | 6     |
| Aug    | 7     |
| Sep    | 8     |
| Oct    | 9     |
| Nov    | 10    |
| Dec    | 11    |

---

# Using Enum as a Type

```javascript
enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug
}

function isItSummer(month: Month) {

    switch(month){
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            return true;

        default:
            return false;
    }
}
```

### Calling Function

```javascript
console.log(isItSummer(Month.Jun));
```

### Output

```javascript
true;
```

---

# How Enum Works Internally

When TypeScript compiles an Enum, it creates a JavaScript object.

```javascript
enum Month {
    Jan,
    Feb,
    Mar
}
```

### Equivalent JavaScript Object

```javascript
{
  0: "Jan",
  1: "Feb",
  2: "Mar",

  Jan: 0,
  Feb: 1,
  Mar: 2
}
```

Notice:

- Name → Value mapping
- Value → Name mapping

This is called **Reverse Mapping**.

---

# Accessing Enum Values

### Name to Value

```javascript
enum Month {
    Jan,
    Feb,
    Mar
}

console.log(Month.Jan);
```

### Output

```javascript
0;
```

---

### Value to Name

```javascript
enum Month {
    Jan,
    Feb,
    Mar
}

console.log(Month[0]);
```

### Output

```javascript
Jan;
```

---

# Why Does This Work?

```javascript
console.log(isItSummer(6));
```

### Output

```javascript
true;
```

Because:

```javascript
Month.Jul === 6;
```

Enum members are stored as numbers internally.

| Enum Member | Numeric Value |
| ----------- | ------------- |
| Month.Jun   | 5             |
| Month.Jul   | 6             |
| Month.Aug   | 7             |

---

# Specifying Enum Values Manually

By default, TypeScript starts from `0`.

You can change it.

```javascript
enum Month {
    Jan = 1,
    Feb,
    Mar,
    Apr
}
```

### Generated Values

| Member | Value |
| ------ | ----- |
| Jan    | 1     |
| Feb    | 2     |
| Mar    | 3     |
| Apr    | 4     |

---

# Custom Values Example

```javascript
enum HttpStatus {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}
```

### Usage

```javascript
console.log(HttpStatus.Success);
```

### Output

```javascript
200;
```

---

# Real-World Example: Approval Status

```javascript
enum ApprovalStatus {
    Draft,
    Submitted,
    Approved,
    Rejected
}
```

### Using Enum

```javascript
const request = {
  id: 1,
  status: ApprovalStatus.Approved,
  description: "Please approve this request",
};
```

### Checking Status

```javascript
if (request.status === ApprovalStatus.Approved) {
  console.log("Send Email");
}
```

### Output

```javascript
Send Email
```

---

# Real-World Example: User Roles

```javascript
enum UserRole {
    Admin,
    Manager,
    Employee,
    Guest
}
```

### Usage

```javascript
let role = UserRole.Admin;

if (role === UserRole.Admin) {
  console.log("Full Access");
}
```

### Output

```javascript
Full Access
```

---

# Real-World Example: Order Status

```javascript
enum OrderStatus {
    Pending,
    Processing,
    Shipped,
    Delivered,
    Cancelled
}
```

### Usage

```javascript
let order = OrderStatus.Shipped;

console.log(order);
```

### Output

```javascript
2;
```

---

# Enum vs String Values

### Numeric Enum

```javascript
enum Status {
    Active,
    Inactive
}
```

Output:

```javascript
Status.Active = 0;
Status.Inactive = 1;
```

---

### String Enum

```javascript
enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
```

Output:

```javascript
ACTIVE;
INACTIVE;
```

---

# Numeric Enum vs String Enum

| Numeric Enum             | String Enum        |
| ------------------------ | ------------------ |
| Stores numbers           | Stores strings     |
| Supports reverse mapping | No reverse mapping |
| Less readable in logs    | More readable      |
| Smaller size             | Slightly larger    |

---

# When to Use Enum

Use Enum when:

✅ Values are fixed

✅ Values are known at compile time

✅ Values are closely related

### Good Examples

- Months
- Days
- User Roles
- Order Status
- Approval Status
- HTTP Status Codes

### Avoid Enum For

❌ Dynamic values from API

❌ User-entered values

❌ Frequently changing data

---

# Interview Questions

| Question                                     | Answer                                                   |
| -------------------------------------------- | -------------------------------------------------------- |
| What is an Enum?                             | A collection of named constants.                         |
| What does Enum stand for?                    | Enumerated Type.                                         |
| Default value of first enum member?          | 0                                                        |
| Can enum values be customized?               | Yes                                                      |
| Does TypeScript support reverse mapping?     | Yes, for numeric enums.                                  |
| Can enums be used as types?                  | Yes                                                      |
| When should enums be used?                   | For fixed, related values known at compile time.         |
| Difference between numeric and string enums? | Numeric enums store numbers; string enums store strings. |

---

# Summary

- Enum stands for **Enumerated Type**.
- An enum is a collection of named constant values.
- By default, enum values start from **0**.
- Enum members can be assigned custom numeric values.
- TypeScript converts enums into JavaScript objects.
- Numeric enums support reverse mapping.
- Enums improve code readability and eliminate magic numbers.
- Use enums for fixed values such as months, statuses, roles, and categories.

# e. Union Types

# What is a Union Type?

A **Union Type** allows a variable, parameter, or return value to hold **more than one type**.

It is represented using the pipe (`|`) symbol.

### Syntax

```javascript id="nq5jlwm"
let variable: type1 | type2;
```

### Example

```javascript id="mwjv23w"
let result: number | string;

result = 10;
result = "Hello";
```

Both are valid.

---

# Why Do We Need Union Types?

Consider this function:

```javascript id="vhygcb7"
function add(a: any, b: any) {

    if(typeof a === "number" &&
       typeof b === "number") {

        return a + b;
    }

    if(typeof a === "string" &&
       typeof b === "string") {

        return a.concat(b);
    }

    throw new Error(
        "Parameters must be numbers or strings"
    );
}
```

---

### Valid Calls

```javascript id="kw8ecm8"
add(10, 20);
```

Output:

```javascript id="4dz8znr"
30;
```

---

```javascript id="5rm9uhf"
add("Hello ", "World");
```

Output:

```javascript id="k1zn3e2"
Hello World
```

---

### Problem

Because parameters are declared as `any`:

```javascript id="v62owc7"
add(true, false);
```

TypeScript allows this.

But runtime error occurs.

---

# Solution: Use Union Types

Instead of:

```javascript id="zc63v3v"
any;
```

Use:

```javascript id="5ibzv75"
number | string;
```

---

# Example

```javascript id="v6myig8"
function add(
    a: number | string,
    b: number | string
) {

    if(typeof a === "number" &&
       typeof b === "number") {

        return a + b;
    }

    if(typeof a === "string" &&
       typeof b === "string") {

        return a.concat(b);
    }

    throw new Error(
        "Parameters must be numbers or strings"
    );
}
```

Now TypeScript knows:

```javascript id="2gnyj15"
a = number OR string
b = number OR string
```

---

# Specifying Return Type

We can explicitly specify the return type.

```javascript id="c8bl1rx"
function add(
    a: number | string,
    b: number | string
): number | string {

    if(typeof a === "number" &&
       typeof b === "number") {

        return a + b;
    }

    if(typeof a === "string" &&
       typeof b === "string") {

        return a.concat(b);
    }

    throw new Error(
        "Parameters must be numbers or strings"
    );
}
```

---

# Union Type Variable

### Example

```javascript id="nzb6m2x"
let result: number | string;
```

### Valid

```javascript id="w30nn27"
result = 100;
```

```javascript id="fddj3jp"
result = "Hello";
```

### Invalid

```javascript id="jlwm10w"
result = true;
```

### Error

```javascript id="c3jjnx0"
Type 'boolean'
is not assignable to
type 'string | number'
```

---

# Union of Three Types

A union is not limited to two types.

```javascript id="w26sz2x"
let value:
    number |
    string |
    boolean;
```

### Valid

```javascript id="fs3p4km"
value = 100;
value = "Hello";
value = true;
```

### Invalid

```javascript id="d2u65l0"
value = {};
```

---

# Type Narrowing

When using union types, TypeScript needs to know which type is currently being used.

This process is called **Type Narrowing**.

---

## Example

```javascript id="mr59mgu"
function print(
    value: number | string
) {

    if(typeof value === "string"){

        console.log(
            value.toUpperCase()
        );

    } else {

        console.log(
            value.toFixed(2)
        );
    }
}
```

---

### Call

```javascript id="8mjycfz"
print("hello");
```

Output:

```javascript id="rth0uvt"
HELLO;
```

---

### Call

```javascript id="hktvfdx"
print(10.567);
```

Output:

```javascript id="zbl5e2t"
10.57;
```

---

# Union Type with Arrays

### Example

```javascript id="oc6q07l"
let ids:
    number[] |
    string[];
```

### Valid

```javascript id="kqfyf3o"
ids = [1, 2, 3];
```

```javascript id="w6j94rv"
ids = ["A", "B", "C"];
```

### Invalid

```javascript id="cwg92xq"
ids = [1, "A"];
```

---

# Union Type with Function Parameters

### Example

```javascript id="6m1ckdb"
function displayId(
    id: number | string
) {

    console.log(id);
}
```

### Valid

```javascript id="f1lh5gd"
displayId(101);
displayId("EMP101");
```

---

# Real-World Example: User Status

```javascript id="qupjtlz"
let status:
    "active" |
    "inactive" |
    "blocked";
```

### Valid

```javascript id="bapwz09"
status = "active";
status = "blocked";
```

### Invalid

```javascript id="w8v8np5"
status = "deleted";
```

Error because `"deleted"` is not part of the union.

---

# Real-World Example: API Response

```javascript id="lh5jml4"
let response:
    string |
    number;
```

API may return:

```javascript id="g1sht2t"
200;
```

or

```javascript id="i0bp0ch"
"Success";
```

Both are allowed.

---

# Union Type vs Any

| Feature                 | Union Type | any                    |
| ----------------------- | ---------- | ---------------------- |
| Type Safety             | ✅ Yes     | ❌ No                  |
| Compile-Time Checking   | ✅ Yes     | ❌ No                  |
| IntelliSense Support    | ✅ Yes     | ❌ Limited             |
| Prevents Invalid Values | ✅ Yes     | ❌ No                  |
| Recommended             | ✅ Yes     | ❌ Avoid when possible |

---

# Example Comparison

### Using `any`

```javascript id="tbfydh2"
let value: any;

value = 100;
value = "Hello";
value = true;
```

Everything is allowed.

---

### Using Union

```javascript id="7v3kxqa"
let value:
    number | string;

value = 100;
value = "Hello";
value = true;
```

### Error

```javascript id="6h6ejs8"
Type 'boolean'
is not assignable to
type 'number | string'
```

Much safer.

---

# Common Use Cases

| Scenario      | Union Type               |
| ------------- | ------------------------ |
| User ID       | `number \| string`       |
| API Response  | `string \| number`       |
| Status        | `"active" \| "inactive"` |
| Input Value   | `string \| number`       |
| Form Field    | `string \| null`         |
| Optional Data | `object \| undefined`    |

---

# Interview Questions

| Question                                   | Answer                                        |
| ------------------------------------------ | --------------------------------------------- |
| What is a Union Type?                      | A type that can hold multiple possible types. |
| Which symbol is used for Union Types?      | `\|` (pipe operator)                          |
| Can a Union Type have more than two types? | Yes.                                          |
| What is Type Narrowing?                    | Determining the actual type before using it.  |
| Difference between `any` and Union Type?   | Union Type is type-safe, `any` is not.        |
| Example of Union Type?                     | `number \| string`                            |
| Can function parameters use Union Types?   | Yes.                                          |
| Can return types use Union Types?          | Yes.                                          |

---

# Summary

- A **Union Type** allows a value to be one of several types.
- Use the pipe (`|`) operator to create union types.
- Union types are safer than `any`.
- TypeScript requires type narrowing before accessing type-specific methods.
- Union types can be used for variables, function parameters, return types, arrays, and object properties.
- Common examples include `number | string`, `string | null`, and `"active" | "inactive"`.
- Prefer union types over `any` whenever possible because they provide compile-time type safety.

# f. Intersection Types

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

# 4. Advanced Types

These types provide additional flexibility and precision in TypeScript.

# a. Type Aliases

# TypeScript Type Aliases

**Summary:** In this tutorial, you'll learn what Type Aliases are, why they are useful, how to create them, and how to use them with primitive types, objects, unions, intersections, and functions.

---

# What is a Type Alias?

A **Type Alias** allows you to create a new name for an existing type.

Think of it as a shortcut or nickname for a type.

### Syntax

```javascript
type AliasName = ExistingType;
```

### Example

```javascript
type Name = string;
```

Here:

```javascript
Name;
```

is just another name for:

```javascript
string;
```

---

# Why Use Type Aliases?

Type aliases help:

✅ Make code more readable

✅ Simplify complex types

✅ Reuse types across the application

✅ Reduce code duplication

---

# Without Type Alias

```javascript
let firstName: string;
let lastName: string;
let middleName: string;
```

Repeated use of:

```javascript
string;
```

---

# With Type Alias

```javascript
type Name = string;

let firstName: Name;
let lastName: Name;
let middleName: Name;
```

Cleaner and easier to maintain.

---

# Type Alias for Primitive Types

### Example

```javascript
type Name = string;

let firstName: Name;
let lastName: Name;

firstName = "John";
lastName = "Doe";
```

### Output

```javascript
John;
Doe;
```

---

# Type Alias for Number

```javascript
type Age = number;

let userAge: Age;

userAge = 25;
```

---

# Type Alias for Boolean

```javascript
type Status = boolean;

let isActive: Status;

isActive = true;
```

---

# Type Alias for Object Types

One of the most common uses.

### Without Alias

```javascript
let person: {
    name: string;
    age: number;
};
```

---

### With Alias

```javascript
type Person = {
    name: string;
    age: number;
};
```

Usage:

```javascript
let person: Person = {
    name: "John",
    age: 25
};
```

---

# Object Type Breakdown

```javascript
type Person = {
    name: string;
    age: number;
};
```

| Property | Type   |
| -------- | ------ |
| name     | string |
| age      | number |

---

# Reusing Object Type Alias

```javascript
type Person = {
    name: string;
    age: number;
};

let person1: Person = {
    name: "John",
    age: 25
};

let person2: Person = {
    name: "David",
    age: 30
};
```

No need to repeat the object structure.

---

# Type Alias for Union Types

A Union Type allows multiple possible types.

### Example

```javascript
type Alphanumeric =
    string | number;
```

---

### Valid Values

```javascript
let input: Alphanumeric;

input = 100;

input = "Hello";
```

---

### Invalid Value

```javascript
input = false;
```

### Error

```javascript
Type 'boolean'
is not assignable to type
'string | number'
```

---

# Real-World Example: User ID

```javascript
type UserId =
    string | number;

let id: UserId;

id = 101;

id = "EMP101";
```

Both are valid.

---

# Type Alias for String Literal Unions

Very common in modern TypeScript.

### Example

```javascript
type UserRole =
    "admin"
    | "manager"
    | "employee";
```

---

### Valid

```javascript
let role: UserRole;

role = "admin";

role = "employee";
```

---

### Invalid

```javascript
role = "guest";
```

### Error

```javascript
Type '"guest"'
is not assignable to type UserRole
```

---

# Type Alias for Intersection Types

An Intersection Type combines multiple types into one.

### Personal Type

```javascript
type Personal = {
    name: string;
    age: number;
};
```

---

### Contact Type

```javascript
type Contact = {
    email: string;
    phone: string;
};
```

---

### Combine Using `&`

```javascript
type Candidate =
    Personal & Contact;
```

This means:

```javascript
Candidate = Personal + Contact;
```

---

# Example

```javascript
let candidate: Candidate = {

    name: "Joe",

    age: 25,

    email: "joe@example.com",

    phone: "(408)-123-4567"
};
```

---

# Candidate Structure

| Property | Type   |
| -------- | ------ |
| name     | string |
| age      | number |
| email    | string |
| phone    | string |

---

# Type Alias for Arrays

### Example

```javascript
type Numbers = number[];
```

Usage:

```javascript
let scores: Numbers;

scores = [10, 20, 30];
```

---

# Type Alias for Mixed Arrays

```javascript
type Data =
    (string | number)[];
```

Usage:

```javascript
let values: Data;

values = [
    "John",
    25,
    "David",
    30
];
```

---

# Type Alias for Functions

Type aliases can describe function signatures.

### Example

```javascript
type Add = (
    a: number,
    b: number
) => number;
```

---

### Usage

```javascript
const add: Add =
(a, b) => a + b;

console.log(add(10, 20));
```

### Output

```javascript
30;
```

---

# Real-World Example: API Response

```javascript
type ApiResponse = {
    success: boolean;
    message: string;
};
```

Usage:

```javascript
let response: ApiResponse = {

    success: true,

    message: "Data fetched successfully"
};
```

---

# Real-World Example: Product

```javascript
type Product = {

    id: number;

    name: string;

    price: number;
};
```

Usage:

```javascript
let laptop: Product = {

    id: 1,

    name: "Laptop",

    price: 50000
};
```

---

# Type Alias vs Interface

This is a common interview question.

### Type Alias

```javascript
type Person = {
    name: string;
    age: number;
};
```

### Interface

```javascript
interface Person {
    name: string;
    age: number;
}
```

---

## Comparison

| Feature            | Type Alias | Interface |
| ------------------ | ---------- | --------- |
| Object Types       | ✅         | ✅        |
| Primitive Types    | ✅         | ❌        |
| Union Types        | ✅         | ❌        |
| Intersection Types | ✅         | Limited   |
| Function Types     | ✅         | ✅        |
| Extendable         | Limited    | ✅ Better |

---

# When to Use Type Alias

Use Type Alias for:

✅ Primitive types

✅ Union types

✅ Intersection types

✅ Function types

✅ Complex reusable types

---

# Common Examples

| Alias                                    | Actual Type   |
| ---------------------------------------- | ------------- |
| `type Name = string`                     | string        |
| `type Age = number`                      | number        |
| `type UserId = string \| number`         | Union         |
| `type Role = "admin" \| "user"`          | Literal Union |
| `type Numbers = number[]`                | Array         |
| `type Add = (a:number,b:number)=>number` | Function      |

---

# Interview Questions

| Question                                     | Answer                                                      |
| -------------------------------------------- | ----------------------------------------------------------- |
| What is a Type Alias?                        | A new name for an existing type.                            |
| Which keyword is used?                       | `type`                                                      |
| Can Type Alias represent primitive types?    | Yes.                                                        |
| Can Type Alias represent object types?       | Yes.                                                        |
| Can Type Alias represent union types?        | Yes.                                                        |
| Can Type Alias represent intersection types? | Yes.                                                        |
| Can Type Alias represent function types?     | Yes.                                                        |
| Difference between Interface and Type Alias? | Type aliases support primitives, unions, and intersections. |

---

# Summary

- A **Type Alias** creates a new name for an existing type.
- Use the `type` keyword to define a type alias.
- Type aliases improve readability and reusability.
- They can represent:
  - Primitive types
  - Object types
  - Arrays
  - Union types
  - Intersection types
  - Function types

- Type aliases help avoid repeating complex type definitions.
- They are commonly used in modern TypeScript applications for cleaner and more maintainable code.

# b. Interfaces

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

# c. Literal Types

# TypeScript String Literal Types

**Summary:** In this tutorial, you'll learn what String Literal Types are, why they are useful, how to combine them with Union Types and Type Aliases, and real-world use cases.

---

# What is a String Literal Type?

A **String Literal Type** is a type that accepts **only one specific string value**.

### Syntax

```javascript
let variable: 'value';
```

### Example

```javascript
let click: 'click';
```

This means:

```javascript
click;
```

can only store:

```javascript
"click";
```

and nothing else.

---

# Valid Assignment

```javascript
let click: 'click';

click = 'click';
```

### Output

```javascript
click;
```

No error.

---

# Invalid Assignment

```javascript
let click: 'click';

click = 'dblclick';
```

### Error

```javascript
Type '"dblclick"' is not assignable to type '"click"'
```

Reason:

```javascript
click;
```

only accepts:

```javascript
"click";
```

---

# Why Use String Literal Types?

Without String Literal Types:

```javascript
let eventType: string;

eventType = "click";
eventType = "dblclick";
eventType = "anything";
```

Any string is allowed.

---

With String Literal Types:

```javascript
let eventType: 'click';

eventType = 'click';
eventType = 'dblclick';
```

### Error

```javascript
Type '"dblclick"' is not assignable to type '"click"'
```

This prevents invalid values.

---

# Combining String Literals with Union Types

A single literal type is rarely used alone.

Usually we combine multiple literal values using a union.

### Example

```javascript
let mouseEvent:
    'click'
    | 'dblclick'
    | 'mouseup'
    | 'mousedown';
```

---

# Valid Values

```javascript
mouseEvent = "click";

mouseEvent = "dblclick";

mouseEvent = "mouseup";

mouseEvent = "mousedown";
```

All valid.

---

# Invalid Value

```javascript
mouseEvent = "mouseover";
```

### Error

```javascript
Type '"mouseover"' is not assignable to type
'click' | 'dblclick' | 'mouseup' | 'mousedown'
```

Because:

```javascript
mouseover;
```

is not part of the allowed values.

---

# How It Works

Think of it as a whitelist.

```javascript
let mouseEvent:
    'click'
    | 'dblclick'
    | 'mouseup'
    | 'mousedown';
```

Allowed values:

| Value     | Allowed |
| --------- | ------- |
| click     | ✅      |
| dblclick  | ✅      |
| mouseup   | ✅      |
| mousedown | ✅      |
| mouseover | ❌      |
| drag      | ❌      |

---

# Using Type Aliases

Long unions become difficult to maintain.

Instead of:

```javascript
let mouseEvent:
    'click'
    | 'dblclick'
    | 'mouseup'
    | 'mousedown';
```

Create a type alias.

---

## Define Alias

```javascript
type MyMouseEvent =
    'click'
    | 'dblclick'
    | 'mouseup'
    | 'mousedown';
```

---

## Use Alias

```javascript
let mouseEvent: MyMouseEvent;

mouseEvent = 'click';

mouseEvent = 'dblclick';
```

Much cleaner.

---

# Reusing Type Aliases

```javascript
type MyMouseEvent =
    'click'
    | 'dblclick'
    | 'mouseup'
    | 'mousedown';

let mouseEvent: MyMouseEvent;

let anotherEvent: MyMouseEvent;
```

Now the same type can be reused everywhere.

---

# Real-World Example: User Role

```javascript
type UserRole =
    'admin'
    | 'manager'
    | 'employee';
```

### Valid

```javascript
let role: UserRole;

role = 'admin';

role = 'employee';
```

---

### Invalid

```javascript
role = "guest";
```

### Error

```javascript
Type '"guest"' is not assignable to type UserRole
```

---

# Real-World Example: Order Status

```javascript
type OrderStatus =
    'pending'
    | 'processing'
    | 'shipped'
    | 'delivered';
```

### Valid

```javascript
let status: OrderStatus;

status = 'pending';

status = 'shipped';
```

---

### Invalid

```javascript
status = "cancelled";
```

Error because it is not part of the allowed values.

---

# Real-World Example: Theme

```javascript
type Theme =
    'light'
    | 'dark';
```

### Valid

```javascript
let theme: Theme;

theme = 'light';

theme = 'dark';
```

---

### Invalid

```javascript
theme = "blue";
```

Error.

---

# Function Parameters with String Literals

### Example

```javascript
type Direction =
    'up'
    | 'down'
    | 'left'
    | 'right';

function move(
    direction: Direction
){
    console.log(direction);
}
```

---

### Valid Calls

```javascript
move("up");

move("left");
```

---

### Invalid Call

```javascript
move("forward");
```

### Error

```javascript
Argument of type '"forward"'
is not assignable to type Direction
```

---

# String Literal Type vs String

## Using String

```javascript
let role: string;

role = "admin";
role = "guest";
role = "anything";
```

Everything is allowed.

---

## Using String Literal Type

```javascript
type Role =
    'admin'
    | 'user';
```

```javascript
let role: Role;

role = 'admin';
role = 'user';
role = 'guest';
```

### Error

```javascript
Type '"guest"' is not assignable to type Role
```

Much safer.

---

# String Literal Type vs Enum

## String Literal Type

```javascript
type Role =
    'admin'
    | 'user';
```

Usage:

```javascript
let role: Role = 'admin';
```

---

## Enum

```javascript
enum Role {
    Admin,
    User
}
```

Usage:

```javascript
let role: Role = Role.Admin;
```

---

## Comparison

| Feature             | String Literal Type | Enum           |
| ------------------- | ------------------- | -------------- |
| Lightweight         | ✅                  | ❌             |
| Generates JS Code   | ❌                  | ✅             |
| Easy to Read        | ✅                  | ✅             |
| Runtime Object      | ❌                  | ✅             |
| Common in Modern TS | ✅                  | ⚠️ Less Common |

---

# Common Use Cases

| Scenario     | Example                  |
| ------------ | ------------------------ |
| Mouse Events | `'click' \| 'dblclick'`  |
| User Roles   | `'admin' \| 'user'`      |
| Order Status | `'pending' \| 'shipped'` |
| Theme        | `'light' \| 'dark'`      |
| Directions   | `'up' \| 'down'`         |
| API Status   | `'success' \| 'error'`   |

---

# Interview Questions

| Question                                    | Answer                                           |
| ------------------------------------------- | ------------------------------------------------ |
| What is a String Literal Type?              | A type that accepts specific string values only. |
| Can a String Literal Type hold any string?  | No.                                              |
| How do you combine multiple literal values? | Using Union Types (`\|`).                        |
| Why use Type Aliases?                       | To avoid repeating long unions.                  |
| Example of String Literal Type?             | `'click'`                                        |
| Example of Union Literal Type?              | `'click' \| 'dblclick'`                          |
| Benefit over `string`?                      | Better type safety and autocomplete.             |
| Common use cases?                           | Roles, statuses, themes, events.                 |

---

# Summary

- A **String Literal Type** accepts only specific string values.
- It helps prevent invalid string assignments.
- Multiple string literals can be combined using Union Types (`|`).
- Type Aliases make long unions reusable and easier to maintain.
- String Literal Types provide better type safety than plain `string`.
- Common use cases include roles, statuses, events, themes, and directions.
- Modern TypeScript applications often prefer String Literal Types over Enums for fixed string values.

# d. Nullable Types

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

# Additional Notes

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
