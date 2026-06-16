// Simple DOM example
let message: string = "Hello, TypeScript!";
let heading = document.createElement("h1");
heading.textContent = message;
document.body.appendChild(heading);

// --- More TypeScript examples ---

// Basic types
const count: number = 42;
const isDone: boolean = false;
const names: string[] = ["Alice", "Bob", "Charlie"];
const pair: [number, string] = [1, "one"];

// Enum
enum Color {
  Red,
  Green,
  Blue,
}
const c: Color = Color.Green;

// Interface and function
interface Person {
  name: string;
  age?: number;
}
function greet(person: Person) {
  const el = document.createElement("p");
  el.textContent = `Hello, ${person.name}${person.age ? " (" + person.age + ")" : ""}`;
  document.body.appendChild(el);
}
greet({ name: "Eve", age: 30 });

// Class with inheritance
class Animal {
  constructor(public name: string) {}
  speak(): string {
    return `${this.name} makes a noise.`;
  }
}
class Dog extends Animal {
  speak(): string {
    return `${this.name} barks.`;
  }
}
const dog = new Dog("Rex");
const dogEl = document.createElement("p");
dogEl.textContent = dog.speak();
document.body.appendChild(dogEl);

// Generic function
function identity<T>(arg: T): T {
  return arg;
}
const id = identity<number>(123);

// Union types and type guards
function format(input: string | string[]) {
  if (Array.isArray(input)) return input.join(", ");
  return input.toUpperCase();
}
const formatted = format(["a", "b", "c"]);
const fmtEl = document.createElement("p");
fmtEl.textContent = `Formatted: ${formatted}`;
document.body.appendChild(fmtEl);

// Optional chaining & nullish coalescing
const maybeNull: { a?: { b?: string } } | null = { a: { b: "value" } };
const val = maybeNull?.a?.b ?? "default";
const valEl = document.createElement("p");
valEl.textContent = `Optional chaining result: ${val}`;
document.body.appendChild(valEl);

// Async example (browser fetch)
async function fetchJson(url: string) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const pre = document.createElement("pre");
    pre.textContent = JSON.stringify(data, null, 2);
    document.body.appendChild(pre);
  } catch (e) {
    console.error(e);
  }
}
// Example call (uncomment and use a reachable URL when serving this file):
// fetchJson('https://api.github.com/repos/microsoft/TypeScript');
