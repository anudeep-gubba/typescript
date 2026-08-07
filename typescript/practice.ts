// variable
let letVariable: string = "hello";
console.log(letVariable);

const constVariable: string = "world";
console.log(constVariable);

var varVariable: string = "I am a var variable";
console.log(varVariable);

// let

// 1. Block scoped

{
  let blockScopedVariable: string = "I am block scoped";
  console.log(blockScopedVariable);
}
// console.log(blockScopedVariable); // Error: blockScopedVariable is not defined

// Reassignment vs Redeclaration
//--------------------------------

// Reassignment — allowed
let age: number = 25;
age = 26;

// Redeclaration — not allowed
let agee: number = 25;
// let agee: number = 26; // Error: Cannot redeclare block-scoped variable 'agee'.

const car: string[] = ["a", "b", "c"];

const person: object = {
  username: "anudeep",
  id: 1,
};
