// PRACTICE - 1

// Using type inference.
const myName = "marco di summa";

// Using explicit type annotation
const firstName: string = "marco";
const lastName: string = "di summa";
const age: number = 46;
const booleans: boolean[] = [true, false, true];
const numbers: number[] = [1, 2, 3];
const strings: string[] = ["1", "2", "3"];

function add(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(add(1, 2));
