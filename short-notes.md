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
