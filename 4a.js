// File: namespaceExample.ts
//4.a) Write a program using namespaces to organize code logically.
namespace MathOperations {
  export namespace Basic {
    export function add(a: number, b: number): number {
      return a + b;
    }

    export function subtract(a: number, b: number): number {
      return a - b;
    }
  }

  export namespace Advanced {
    export function multiply(a: number, b: number): number {
      return a * b;
    }

    export function divide(a: number, b: number): number {
      return b !== 0 ? a / b : NaN;
    }
  }
}

// Using the namespace
console.log("Addition:", MathOperations.Basic.add(5, 3));
console.log("Subtraction:", MathOperations.Basic.subtract(10, 4));
console.log("Multiplication:", MathOperations.Advanced.multiply(6, 2));
console.log("Division:", MathOperations.Advanced.divide(12, 4));
