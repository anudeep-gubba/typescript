# Section 9: Promises & Async/Await

### (JavaScript + TypeScript — Complete Notes)

> These notes cover every topic in your outline, with explanations and side-by-side JavaScript and TypeScript examples wherever the concept applies.

---

## Table of Contents

**JavaScript Promises**

1. Why JavaScript Needs Promises
2. Using Callbacks to Deal with an Asynchronous Operation
3. Understanding JavaScript Promises
4. Creating a Promise
5. Consuming a Promise: `then()`, `catch()`, `finally()`
6. A Practical JavaScript Promise Example

**Promise Chaining** 7. Introduction to Promise Chaining 8. Multiple Handlers for a Promise 9. Returning a Promise 10. Promise Chaining Syntax

**Promise.all()** 11. Introduction to `Promise.all()` 12. `Promise.all()` Examples

**Promise.race()** 13. Introduction to `Promise.race()` 14. `Promise.race()` Examples

**Promise.any()** 15. Introduction to `Promise.any()` 16. `Promise.any()` Examples 17. When to Use `Promise.any()`

**Promise.allSettled()** 18. Introduction to `Promise.allSettled()` 19. `Promise.allSettled()` Example

**Promise `finally()`** 20. Introduction to `finally()` 21. `finally()` Examples

**Promise Error Handling** 22. Normal Errors 23. Errors Inside Promises 24. Calling `reject()` 25. Missing `catch()`

**JavaScript `async`/`await`** 26. Introduction to `async`/`await` 27. The `async` Keyword 28. The `await` Keyword 29. Error Handling

**`Promise.withResolvers()`** 30. Introduction to `Promise.withResolvers()` 31. Example

---

# JavaScript Promises

## 1. Why JavaScript Needs Promises

JavaScript is **single-threaded** — it runs one line at a time. But some operations (network requests, file reads, timers) take time. If JavaScript waited for each one to finish before moving on, the browser page would freeze until the operation completed.

**Synchronous execution** — one task fully completes before the next starts:

```javascript
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");
// Output: Step 1, Step 2, Step 3 — in strict order
```

**Asynchronous execution** — a slow task is _started_, and the rest of the program keeps running while it finishes in the background:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Downloaded");
}, 3000);

console.log("End");

// Output:
// Start
// End
// Downloaded   (after 3 seconds)
```

Think of a website like YouTube: the video, comments, ads, and recommendations all load _independently_. If they loaded one after another synchronously, you'd wait 20+ seconds staring at a blank page. Asynchronous programming is what makes modern web apps feel fast.

Promises exist to make asynchronous code **manageable, readable, and predictable** — before them, developers relied on callbacks, which had serious drawbacks (see below).

---

## 2. Using Callbacks to Deal with an Asynchronous Operation

A **callback** is a function passed into another function, to be run later — typically once an async operation finishes.

```javascript
function greet(name, callback) {
  console.log("Hello", name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("John", sayBye);
// Output:
// Hello John
// Goodbye!
```

**Asynchronous callback example:**

```javascript
function download(callback) {
  setTimeout(() => {
    callback("File Downloaded");
  }, 2000);
}

download((message) => {
  console.log(message); // "File Downloaded" after 2 seconds
});
```

**TypeScript version** — callback parameters and return types are explicitly typed:

```typescript
function download(callback: (message: string) => void): void {
  setTimeout(() => {
    callback("File Downloaded");
  }, 2000);
}

download((message: string) => {
  console.log(message);
});
```

### The Problem: Callback Hell

When multiple async steps depend on each other, callbacks nest inside callbacks — code drifts to the right, forming a "pyramid of doom":

```javascript
login(function () {
  getUser(function () {
    getOrders(function () {
      getPayment(function () {
        displayOrder();
      });
    });
  });
});
```

**Problems with callback hell:**

- ❌ Hard to read
- ❌ Hard to debug
- ❌ Hard to handle errors consistently
- ❌ Hard to maintain as the app grows

This is exactly the problem **Promises** were designed to solve.

---

## 3. Understanding JavaScript Promises

### Definition

A **Promise** is an object representing the **eventual result** of an asynchronous operation. It's a placeholder that says: _"I don't have your value yet, but I promise to deliver it (or tell you it failed) later."_

### Real-Life Analogy

You order a pizza. The restaurant doesn't hand it to you instantly — they give you a **promise**: either the pizza arrives, or they tell you the order failed.

```
Order Pizza → Wait → Delivered ✔  or  Cancelled ❌
```

### Promise States

Every Promise is in exactly **one** of three states at any time:

| State         | Meaning                          |
| ------------- | -------------------------------- |
| **Pending**   | Operation still in progress      |
| **Fulfilled** | Operation completed successfully |
| **Rejected**  | Operation failed                 |

```
           Pending
          /       \
         /         \
 Fulfilled      Rejected
```

**Important rule:** A Promise settles **only once** — either to Fulfilled or Rejected — and can **never** go back to Pending or switch states afterward.

### TypeScript's View of a Promise

In TypeScript, a Promise is generic — `Promise<T>` — where `T` is the type of value it will eventually resolve to:

```typescript
const promise: Promise<string> = Promise.resolve("Hello");
const age: Promise<number> = Promise.resolve(25);
const isAdmin: Promise<boolean> = Promise.resolve(true);
const names: Promise<string[]> = Promise.resolve(["John", "Alice"]);
```

TypeScript checks at **compile time** that whatever you resolve with matches the declared type — catching bugs before the code even runs.

---

## 4. Creating a Promise

### Syntax

```javascript
const promise = new Promise((resolve, reject) => {
  // async work goes here
});
```

JavaScript automatically supplies two functions to your executor callback:

- `resolve(value)` → marks the Promise as **fulfilled**, with `value` as the result
- `reject(reason)` → marks the Promise as **rejected**, with `reason` as the error

### JavaScript Example

```javascript
const payment = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Payment Successful");
  } else {
    reject("Payment Failed");
  }
});
```

### TypeScript Example

In TypeScript, you specify what type `resolve` will pass along using the generic:

```typescript
const payment: Promise<string> = new Promise((resolve, reject) => {
  const success: boolean = true;

  if (success) {
    resolve("Payment Successful");
  } else {
    reject("Payment Failed");
  }
});
```

### Internal Flow

```
Create Promise → Pending → success === true?
   Yes → resolve() → Fulfilled
   No  → reject()  → Rejected
```

---

## 5. Consuming a Promise: `then()`, `catch()`, `finally()`

Once a Promise exists, you consume its eventual result using three methods.

### 1) The `then()` Method

Runs when the Promise **succeeds** (fulfills). It receives the resolved value.

```javascript
payment.then((message) => {
  console.log(message); // "Payment Successful"
});
```

```typescript
payment.then((message: string) => {
  console.log(message);
});
```

### 2) The `catch()` Method

Runs when the Promise **fails** (rejects). It receives the rejection reason.

```javascript
payment.catch((error) => {
  console.log(error); // "Payment Failed"
});
```

```typescript
payment.catch((error: string) => {
  console.log(error);
});
```

### 3) The `finally()` Method

Runs regardless of whether the Promise succeeded or failed — useful for cleanup (hiding spinners, closing connections, releasing resources).

```javascript
payment.finally(() => {
  console.log("Transaction Finished");
});
```

### Putting It All Together

```javascript
const payment = new Promise((resolve, reject) => {
  const success = true;
  if (success) resolve("Payment Successful");
  else reject("Payment Failed");
});

payment
  .then((message) => console.log(message))
  .catch((error) => console.log(error))
  .finally(() => console.log("Transaction Completed"));

// Output:
// Payment Successful
// Transaction Completed
```

```typescript
const payment: Promise<string> = new Promise((resolve, reject) => {
  const success: boolean = true;
  if (success) resolve("Payment Successful");
  else reject("Payment Failed");
});

payment
  .then((message: string) => console.log(message))
  .catch((error: string) => console.log(error))
  .finally(() => console.log("Transaction Completed"));
```

---

## 6. A Practical JavaScript Promise Example

Simulating a 2-second user-fetch operation:

```javascript
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("John");
    }, 2000);
  });
}

getUser().then((user) => {
  console.log(user); // "John" after 2 seconds
});
```

**TypeScript version** — the return type documents exactly what the caller will receive:

```typescript
function getUser(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("John");
    }, 2000);
  });
}

getUser().then((user: string) => {
  console.log(user);
});
```

### Execution Flow

```
Call getUser() → Create Promise → Pending → Wait 2s
  → resolve("John") → .then() fires → Print "John"
```

---

# Promise Chaining

## 7. Introduction to Promise Chaining

**The problem:** Even with Promises, nesting `.then()` inside `.then()` recreates the same pyramid-of-doom problem callbacks had:

```javascript
login().then(() => {
  getUser().then(() => {
    getOrders().then(() => {
      getPayment().then(() => {
        console.log("Display Order");
      });
    });
  });
});
```

**The solution — Promise Chaining:** instead of nesting, you return a value or a Promise from `.then()`, and simply chain the next `.then()` onto it:

```javascript
login().then(getUser).then(getOrders).then(getPayment).then(displayOrder);
```

This is flat, linear, and easy to read — each step happens after the previous one completes.

---

## 8. Multiple Handlers for a Promise

A single Promise isn't limited to one `.then()` — you can attach several independent handlers, and each runs with the same resolved value:

```javascript
const promise = Promise.resolve("Hello");

promise.then(console.log); // Hello
promise.then(console.log); // Hello
promise.then(console.log); // Hello
```

```typescript
const promise: Promise<string> = Promise.resolve("Hello");

promise.then((val: string) => console.log(val));
promise.then((val: string) => console.log(val));
```

Think of it like multiple subscribers listening to the same notification.

---

## 9. Returning a Promise

If a chained step depends on another async operation, **return** that Promise from inside `.then()`. JavaScript will then wait for it before moving to the next `.then()`.

```javascript
function login() {
  return Promise.resolve("Login Successful");
}

function getProfile() {
  return Promise.resolve("Profile Loaded");
}

login()
  .then((result) => {
    console.log(result);
    return getProfile(); // returning a Promise
  })
  .then((result) => {
    console.log(result);
  });

// Output:
// Login Successful
// Profile Loaded
```

### Why the `return` Matters

If you **forget** to return, the next `.then()` doesn't wait for the inner async call:

```javascript
// ❌ Wrong — doesn't wait for getProfile()
login()
  .then(() => {
    getProfile(); // no return!
  })
  .then(() => {
    console.log("Done"); // runs before getProfile() finishes
  });

// ✅ Correct — waits for getProfile()
login()
  .then(() => {
    return getProfile();
  })
  .then(() => {
    console.log("Done"); // runs only after getProfile() resolves
  });
```

**Rule to remember:** whatever you `return` inside `.then()` — a plain value or a Promise — JavaScript automatically wraps it as `Promise.resolve(value)` if it isn't already a Promise, which is what makes chaining work seamlessly.

---

## 10. Promise Chaining Syntax

A minimal example that shows the mechanics step by step:

```javascript
Promise.resolve(10)
  .then((number) => {
    return number + 5; // returns 15 (auto-wrapped as Promise.resolve(15))
  })
  .then((result) => {
    console.log(result); // 15
  });
```

```typescript
Promise.resolve(10)
  .then((number: number) => {
    return number + 5;
  })
  .then((result: number) => {
    console.log(result);
  });
```

**General chaining syntax:**

```javascript
doStep1()
  .then((result1) => doStep2(result1))
  .then((result2) => doStep3(result2))
  .then((result3) => console.log(result3))
  .catch((error) => console.log("Something failed:", error));
```

---

# JavaScript `Promise.all()`

## 11. Introduction to `Promise.all()`

`Promise.all()` runs multiple **independent** Promises **in parallel** and waits for _all_ of them to finish. This is much faster than awaiting them one by one.

**Sequential (slow):**

```
User (2s) → Orders (3s) → Notifications (2s)  =  Total 7s
```

**Parallel with `Promise.all()` (fast):**

```
User (2s) ┐
Orders (3s) ├─ run together  =  Total 3s (the slowest one)
Notifications (2s) ┘
```

### Syntax

```javascript
Promise.all([promise1, promise2, promise3]);
```

```typescript
Promise.all<[string, string, string]>([promise1, promise2, promise3]);
// or let TypeScript infer the tuple type automatically
```

---

## 12. `Promise.all()` Examples

### 1) Resolved Promises Example

```javascript
Promise.all([
  Promise.resolve("User"),
  Promise.resolve("Orders"),
  Promise.resolve("Payment"),
]).then(console.log);

// Output: ["User", "Orders", "Payment"]
```

Results come back in the **same order as the input array**, regardless of which Promise actually finished first.

```typescript
const results: Promise<[string, string, string]> = Promise.all([
  Promise.resolve("User"),
  Promise.resolve("Orders"),
  Promise.resolve("Payment"),
]);

results.then((data) => console.log(data));
```

### 2) Rejected Promises Example

```javascript
Promise.all([
  Promise.resolve("User"),
  Promise.reject("Database Error"),
  Promise.resolve("Orders"),
]).catch(console.log);

// Output: "Database Error"
```

**Rule:** if **any one** Promise rejects, the _entire_ `Promise.all()` immediately rejects with that reason — the other results are discarded.

**When to use `Promise.all()`:** when every task must succeed and you need all results together — e.g., loading several dashboard widgets, fetching multiple related APIs, downloading multiple files.

---

# JavaScript `Promise.race()`

## 13. Introduction to `Promise.race()`

`Promise.race()` returns as soon as the **first** Promise in the array **settles** — whether it fulfills or rejects. Think of it as several delivery services racing to deliver first; whichever finishes first (success or failure) determines the result.

### Syntax

```javascript
Promise.race([promise1, promise2, promise3]);
```

```typescript
Promise.race<string>([promise1, promise2, promise3]);
```

---

## 14. `Promise.race()` Examples

### 1) Simple Example

```javascript
Promise.race([
  new Promise((resolve) => setTimeout(() => resolve("Server A"), 3000)),
  new Promise((resolve) => setTimeout(() => resolve("Server B"), 1000)),
]).then(console.log);

// Output: "Server B"  (it settled first, after 1 second)
```

**Important:** "settle" means fulfilled _or_ rejected — whichever happens first wins, even a rejection:

```javascript
Promise.race([Promise.reject("Failed"), Promise.resolve("Success")]).catch(
  console.log,
);

// Output: "Failed" — the rejection happened first in the microtask queue
```

### 2) Practical Example — Timeout Pattern

A very common real-world use: race a network request against a timeout.

```javascript
Promise.race([
  fetch("/users"),
  new Promise((_, reject) => setTimeout(() => reject("Timeout"), 5000)),
]);
```

```typescript
function fetchWithTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  const timeout = new Promise<T>((_, reject) =>
    setTimeout(() => reject(new Error("Timeout")), ms),
  );
  return Promise.race([promise, timeout]);
}
```

If the request takes longer than 5 seconds, the timeout Promise rejects first and wins the race.

---

# JavaScript `Promise.any()`

## 15. Introduction to `Promise.any()`

`Promise.any()` waits for the **first successful (fulfilled)** Promise and **ignores rejections** — unlike `race()`, which reacts to the first settled Promise even if it's a failure.

### Syntax

```javascript
Promise.any([promise1, promise2, promise3]);
```

---

## 16. `Promise.any()` Examples

### 1) All Promises Fulfilled Example

```javascript
Promise.any([
  Promise.resolve("Server A"),
  Promise.resolve("Server B"),
  Promise.resolve("Server C"),
]).then(console.log);

// Output: "Server A" (the first one to fulfill, in resolution order)
```

### 2) One Promise Rejected Example

```javascript
Promise.any([
  Promise.reject("Server A Failed"),
  Promise.resolve("Server B"),
]).then(console.log);

// Output: "Server B" — the rejected one is simply ignored
```

### 3) All Promises Rejected Example

```javascript
Promise.any([Promise.reject("Error A"), Promise.reject("Error B")]).catch(
  console.log,
);

// Output: AggregateError: All promises were rejected
```

When **every** Promise fails, JavaScript bundles all the individual errors into a single `AggregateError` object (instead of just one error message).

```typescript
Promise.any<string>([
  Promise.reject("Error A"),
  Promise.reject("Error B"),
]).catch((err: AggregateError) => {
  console.log(err.errors); // array of individual errors
});
```

---

## 17. When to Use `Promise.any()`

Use it when you're querying **multiple redundant sources** (e.g., mirrored servers, CDNs, backup APIs) and you only care about the **first one that succeeds** — you don't care which one, and a few failures along the way are acceptable as long as at least one works.

---

# JavaScript `Promise.allSettled()`

## 18. Introduction to `Promise.allSettled()`

Unlike `Promise.all()`, which fails entirely if _any_ Promise rejects, `Promise.allSettled()` **always waits for every Promise** and gives you the outcome of **each one** — success or failure — without discarding anything.

### Syntax

```javascript
Promise.allSettled([promise1, promise2, promise3]);
```

---

## 19. `Promise.allSettled()` Example

```javascript
Promise.allSettled([
  Promise.resolve("Profile"),
  Promise.reject("Notification Failed"),
  Promise.resolve("Orders"),
]).then(console.log);
```

Output:

```javascript
[
  { status: "fulfilled", value: "Profile" },
  { status: "rejected", reason: "Notification Failed" },
  { status: "fulfilled", value: "Orders" },
];
```

**TypeScript** — the result type is `PromiseSettledResult<T>[]`, a union of fulfilled/rejected shapes:

```typescript
Promise.allSettled<string>([
  Promise.resolve("Profile"),
  Promise.reject("Notification Failed"),
  Promise.resolve("Orders"),
]).then((results: PromiseSettledResult<string>[]) => {
  results.forEach((r) => {
    if (r.status === "fulfilled") {
      console.log("Success:", r.value);
    } else {
      console.log("Failed:", r.reason);
    }
  });
});
```

**When to use it:** dashboards, reports, analytics, or batch processing — anywhere a single failure shouldn't cancel the whole operation.

---

# JavaScript Promise `finally()`

## 20. Introduction to the `finally()` Method

`finally()` runs a block of code **no matter what** — whether the Promise fulfilled or rejected. It's meant purely for **cleanup**, not business logic (don't put result-dependent code here).

---

## 21. `finally()` Examples

### 1) Using `finally()` to Clean Up Resources

```javascript
connect().then(doWork).catch(showError).finally(closeConnection);
```

Even if `doWork` throws an error, `closeConnection()` still runs — ensuring you never leave a database connection open.

### 2) Using `finally()` to Show a Loading Status

```javascript
showLoader();

fetchData()
  .then(displayData)
  .catch(showError)
  .finally(() => {
    hideLoader(); // always hide the spinner, success or failure
  });
```

```typescript
async function loadData(): Promise<void> {
  showLoader();
  try {
    const data = await fetchData();
    displayData(data);
  } catch (error) {
    showError(error);
  } finally {
    hideLoader();
  }
}
```

---

# Promise Error Handling

## 22. Normal Errors

Regular JavaScript errors are created with `throw` and caught with `try...catch`.

```javascript
try {
  throw new Error("Invalid Login");
} catch (error) {
  console.log(error.message); // "Invalid Login"
}
```

`Error` is a built-in object holding a `message`, `name`, and `stack` trace.

```typescript
try {
  throw new Error("Invalid Login");
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}
```

_(TypeScript types caught errors as `unknown` by default, so a runtime check like `instanceof Error` is good practice.)_

---

## 23. Errors Inside Promises

If code inside a `.then()` throws, JavaScript automatically converts that into a **rejected Promise**, which flows down to the nearest `.catch()`:

```javascript
Promise.resolve()
  .then(() => {
    throw new Error("Database Error");
  })
  .catch(console.log);

// Output: Error: Database Error
```

### Flow

```
Promise Resolved → .then() executes → throw new Error(...)
   → JavaScript rejects the Promise → .catch() receives it
```

---

## 24. Calling `reject()`

`reject()` explicitly marks a Promise as failed — the counterpart to `resolve()`.

```javascript
const login = new Promise((resolve, reject) => {
  const passwordCorrect = false;

  if (passwordCorrect) {
    resolve("Welcome");
  } else {
    reject("Invalid Password");
  }
});

login.catch(console.log); // "Invalid Password"
```

```typescript
const login: Promise<string> = new Promise((resolve, reject) => {
  const passwordCorrect: boolean = false;

  if (passwordCorrect) {
    resolve("Welcome");
  } else {
    reject("Invalid Password");
  }
});
```

---

## 25. Missing `catch()`

If a Promise rejects and there's **no** `.catch()` (or `try...catch` with `await`) anywhere to handle it, JavaScript reports an **Unhandled Promise Rejection**:

```javascript
Promise.reject("Server Error"); // no .catch() attached
// Console: Unhandled Promise Rejection: Server Error
```

**Always attach error handling:**

```javascript
// ✅ Good
fetchData().then(handleData).catch(handleError);

// ❌ Bad — no error handling at all
fetchData().then(handleData);
```

---

# JavaScript `async`/`await`

## 26. Introduction to `async`/`await`

Even with chaining, long sequences of `.then()` calls can get verbose:

```javascript
login()
  .then(() => getUser())
  .then(() => getOrders())
  .then(() => {});
```

`async`/`await` is **syntactic sugar built on top of Promises** — it lets you write asynchronous code that _reads_ like ordinary synchronous code, while still being non-blocking under the hood.

---

## 27. The `async` Keyword

**Rule:** An `async` function **always returns a Promise**, even if you `return` a plain value — JavaScript automatically wraps it.

```javascript
async function hello() {
  return "Hello";
}

console.log(hello()); // Promise { "Hello" }, not just "Hello"
```

```javascript
async function test() {
  return 100;
}

console.log(test()); // Promise {100}
```

**TypeScript** — declare the resolved type explicitly:

```typescript
async function login(): Promise<string> {
  return "Success";
}

async function age(): Promise<number> {
  return 25;
}
```

---

## 28. The `await` Keyword

`await` pauses execution **inside an async function** until the given Promise settles, then unwraps its resolved value.

```javascript
function fetchUser() {
  return Promise.resolve("John");
}

async function display() {
  const user = await fetchUser();
  console.log(user); // "John"
}
```

```typescript
function fetchUser(): Promise<string> {
  return Promise.resolve("John");
}

async function display(): Promise<void> {
  const user: string = await fetchUser();
  console.log(user);
}
```

### `await` Does NOT Freeze the Whole Program

A common misconception: `await` only pauses the _current async function_ — the rest of the program keeps running.

```javascript
async function example() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}

console.log("Start");
example();
console.log("End");

// Output:
// Start
// A
// End
// B
```

### Sequential vs Parallel with `await`

**Sequential (slower — each waits for the previous to finish):**

```javascript
const user = await getUser(); // 2s
const orders = await getOrders(); // 2s
const payment = await getPayment(); // 2s
// Total: 6s
```

**Parallel (faster — run together, then await all):**

```javascript
const [user, orders, payment] = await Promise.all([
  getUser(),
  getOrders(),
  getPayment(),
]);
// Total: 2s (the slowest of the three)
```

```typescript
const [user, orders, payment]: [User, Order[], Payment] = await Promise.all([
  getUser(),
  getOrders(),
  getPayment(),
]);
```

**Rule of thumb:** use `Promise.all()` whenever the tasks are independent of each other — don't await them one-by-one unnecessarily.

---

## 29. Error Handling with `async`/`await`

Wrap `await` calls in `try...catch` to handle rejections gracefully:

```javascript
async function login() {
  try {
    const user = await getUser();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
```

```typescript
async function login(): Promise<void> {
  try {
    const user: string = await getUser();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
```

Without `try...catch`, if the awaited Promise rejects, the `async` function itself rejects (silently, unless something else catches it) — always handle possible failures explicitly.

### Flow

```
Start → try → Success?
   Yes → continue normally
   No  → catch() → handle error
```

---

# JavaScript `Promise.withResolvers()`

## 30. Introduction to `Promise.withResolvers()`

Before this modern addition, developers had to "smuggle" `resolve`/`reject` out of the Promise constructor manually:

```javascript
let resolveFunction;

const promise = new Promise((resolve) => {
  resolveFunction = resolve;
});

resolveFunction("Done");
```

Not very clean. `Promise.withResolvers()` gives you the Promise **and** its `resolve`/`reject` functions directly, without the awkward workaround:

```javascript
const { promise, resolve, reject } = Promise.withResolvers();
```

---

## 31. `Promise.withResolvers()` Example

```javascript
const { promise, resolve } = Promise.withResolvers();

promise.then(console.log);

resolve("Completed");
// Output: "Completed"
```

**TypeScript** — the generic enforces the resolved value's type:

```typescript
const { promise, resolve, reject } = Promise.withResolvers<string>();

promise.then((value: string) => console.log(value));

resolve("Success"); // resolve() only accepts a string
```

**When to use it:** event-driven code, custom libraries/frameworks, or any situation needing manual, external control over when a Promise settles. For typical application code, `new Promise(...)` is still the more common pattern.

---

# Quick Reference: Promise Method Comparison

| Method                 | Waits For       | Stops on Error?         | Returns                 |
| ---------------------- | --------------- | ----------------------- | ----------------------- |
| `Promise.all()`        | All Promises    | ✅ Yes (fails fast)     | Array of values         |
| `Promise.race()`       | First settled   | ❌ No                   | First result or error   |
| `Promise.any()`        | First fulfilled | ❌ No (unless all fail) | First successful value  |
| `Promise.allSettled()` | All Promises    | ❌ Never                | Status of every Promise |

---

# Final Summary Table

| Concept                            | Purpose                                                       |
| ---------------------------------- | ------------------------------------------------------------- |
| Callback                           | Function passed to run later — old way of handling async work |
| Callback Hell                      | Deeply nested callbacks; hard to read/maintain                |
| Promise                            | Represents the future result of an async operation            |
| Pending / Fulfilled / Rejected     | The three possible Promise states                             |
| `resolve()` / `reject()`           | Mark a Promise as successful / failed                         |
| `then()` / `catch()` / `finally()` | Handle success / failure / cleanup                            |
| Promise Chaining                   | Run async steps sequentially without nesting                  |
| `Promise.all()`                    | Run all in parallel; fails if any one fails                   |
| `Promise.race()`                   | First to settle (success or failure) wins                     |
| `Promise.any()`                    | First to succeed wins; ignores failures                       |
| `Promise.allSettled()`             | Waits for all, returns every outcome                          |
| `async`                            | Declares a function that always returns a Promise             |
| `await`                            | Pauses an async function until a Promise settles              |
| `try...catch`                      | Handles errors from `await`ed Promises                        |
| `Promise.withResolvers()`          | Externally exposes `resolve`/`reject` for manual control      |
| `Promise<T>` (TypeScript)          | Declares the type a Promise will eventually resolve to        |

---

## Key Takeaways

- JavaScript is single-threaded but achieves concurrency through the async model — Promises don't create new threads, they manage _when_ callback code runs.
- Promises replaced callbacks specifically to solve nesting ("callback hell") and inconsistent error handling.
- A Promise settles exactly once — fulfilled or rejected — never both, never more than once.
- Always `return` a Promise from inside `.then()` if the next step depends on it.
- Use `Promise.all()` for "all must succeed," `Promise.any()` for "first success wins," `Promise.race()` for "first to finish either way," and `Promise.allSettled()` for "give me every outcome."
- `async`/`await` is syntax sugar over Promises — it doesn't replace them, it makes them easier to read.
- `await` only pauses the enclosing `async` function, never the whole program.
- Always handle rejections — either with `.catch()` or `try...catch` — to avoid unhandled promise rejections.
- In TypeScript, typing your Promises (`Promise<T>`) gives you compile-time safety and better autocomplete, catching mismatches before runtime.
