# JavaScript & TypeScript Fundamentals — Combined Notes

---

# 1. What is JavaScript?

- **JavaScript (JS)** is a high-level, interpreted programming language used to build interactive web applications.
- It runs directly in browsers and can also run on servers using **Node.js**.
- JavaScript is **dynamically typed**, meaning variable types are determined at runtime.

Example:

```javascript
let age = 25;
age = "Twenty Five"; // ✅ Allowed in JavaScript
```

---

# 2. What is TypeScript?

- **TypeScript (TS)** is a **syntactic superset of JavaScript** that adds **static typing**.
- It extends JavaScript by allowing developers to specify data types.
- TypeScript code is **transpiled (compiled)** into JavaScript before execution.
- Browsers only understand JavaScript, so TypeScript must be converted to JavaScript.

Example:

```typescript
let age: number = 25;

// age = "Twenty Five"; ❌ Compilation Error
```

---

# JavaScript vs TypeScript

| JavaScript               | TypeScript                       |
| ------------------------ | -------------------------------- |
| Dynamically typed        | Statically typed                 |
| Runs directly in browser | Compiles to JavaScript first     |
| Errors mostly at runtime | Errors caught during compilation |
| No type checking         | Supports type checking           |
| Easier to start          | Better for large applications    |

---

# Installing TypeScript

Install TypeScript as a development dependency.

```bash
npm install --save-dev typescript
```

---

# Configure TypeScript

Create the default configuration file.

```bash
npx tsc --init
```

Example `tsconfig.json`

```json
{
  "include": ["typescript/*.ts"],
  "compilerOptions": {
    "rootDir": "./typescript",
    "outDir": "./build"
  }
}
```

### Important Compiler Options

| Option    | Purpose                               |
| --------- | ------------------------------------- |
| `include` | Files/folders to compile              |
| `rootDir` | Source folder                         |
| `outDir`  | Output folder for compiled JavaScript |

---

# Compile TypeScript

Compile the entire project.

```bash
npx tsc
```

Compile a specific file.

```bash
npx tsc filename.ts
```

---

# Run JavaScript

```bash
node filename.js
```

---

# Run TypeScript Directly

Using **tsx**:

Install

```bash
npm install --save-dev tsx
```

Run

```bash
npx tsx filename.ts
```

---

# JavaScript Variables

A **variable** is a named container used to store data.

JavaScript provides three ways to declare variables:

- `const` ✅ (Recommended)
- `let` ✅
- `var` ❌ (Legacy)

---

# 1. let

Use `let` when the value **can change**.

### Declaration

```javascript
let carName;
```

Initially

```javascript
carName === undefined;
```

Assign value later

```javascript
let carName;

carName = "Volvo";
```

Or

```javascript
let carName = "Volvo";
```

---

# 2. const

Use `const` when the variable **should not be reassigned**.

```javascript
const carName = "Volvo";
```

Cannot be reassigned.

```javascript
const price = 100;

// price = 200 ❌ Error
```

---

# 3. Using const and let Together

```javascript
const price1 = 5;
const price2 = 6;

let total = price1 + price2;
```

Explanation

- `price1` → never changes → `const`
- `price2` → never changes → `const`
- `total` → may change → `let`

---

# 4. Undeclared Variables (Avoid)

```javascript
x = 5;
y = 6;
z = x + y;
```

Problems

- Creates accidental global variables.
- Makes debugging difficult.
- Poor coding practice.

Always declare variables.

---

# 5. var (Legacy)

Before ES6 (2015), JavaScript used `var`.

```javascript
var x = 5;
var y = 6;
var z = x + y;
```

Although it still works, modern JavaScript recommends using `let` and `const`.

---

# Variable Declaration Comparison

| Keyword | Can Reassign? | Scope    | Recommended? |
| ------- | ------------- | -------- | ------------ |
| `const` | ❌ No         | Block    | ✅ Yes       |
| `let`   | ✅ Yes        | Block    | ✅ Yes       |
| `var`   | ✅ Yes        | Function | ❌ No        |

---

# Best Practices

1. ✅ Always declare variables.
2. ✅ Use `const` by default.
3. ✅ Use `const` for arrays and objects if the variable itself won't be reassigned.
4. ✅ Use `let` only when reassignment is required.
5. ❌ Avoid `var` in modern JavaScript.
6. ❌ Never create undeclared variables.

---

# JavaScript vs TypeScript Variables

### JavaScript

```javascript
let age = 25;

age = "Twenty Five"; // ✅ Allowed
```

### TypeScript

```typescript
let age: number = 25;

// age = "Twenty Five"; ❌ Type Error
```

TypeScript prevents assigning a different data type to a variable, helping catch errors before the code runs.

---

# Typical TypeScript Project Structure

```text
project/
│
├── package.json
├── tsconfig.json
│
├── typescript/
│   ├── app.ts
│   └── demo.ts
│
└── build/
    ├── app.js
    └── demo.js
```

---

# Development Workflow

```text
Write TypeScript (.ts)
          │
          ▼
Compile using tsc
          │
          ▼
Generated JavaScript (.js)
          │
          ▼
Execute using Node.js
```

Or simply:

```text
Write TypeScript (.ts)
          │
          ▼
Run using tsx
          │
          ▼
Compile + Execute Automatically
```

---

# Commands Cheat Sheet

| Task                    | Command                             |
| ----------------------- | ----------------------------------- |
| Install TypeScript      | `npm install --save-dev typescript` |
| Initialize config       | `npx tsc --init`                    |
| Compile project         | `npx tsc`                           |
| Compile one file        | `npx tsc filename.ts`               |
| Run JavaScript          | `node filename.js`                  |
| Install tsx             | `npm install --save-dev tsx`        |
| Run TypeScript directly | `npx tsx filename.ts`               |

---

# Key Takeaways

- **JavaScript** is dynamically typed and runs directly in browsers and Node.js.
- **TypeScript** is JavaScript with static typing and compiles to JavaScript.
- Use **`const`** by default, **`let`** when reassignment is needed, and avoid **`var`**.
- TypeScript catches many errors at compile time, improving code quality and maintainability.
- The typical TypeScript workflow is **Write → Compile → Run**, or use **`tsx`** to compile and run in one step.
