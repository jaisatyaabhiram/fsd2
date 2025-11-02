// File: typesDemo.ts

// Simple Types
let userName: string = "Abhiram";
let userAge: number = 20;
let isStudent: boolean = true;

// 'any' type — can hold any value (not type-safe)
let randomValue: any = "Hello";
randomValue = 123;
randomValue = true;

// 'unknown' type — similar to 'any', but type checking is required before use
let uncertainValue: unknown = "Hello TypeScript";
if (typeof uncertainValue === "string") {
  console.log("String length:", uncertainValue.length);
}

// 'never' type — used for functions that never return
function throwError(message: string): never {
  throw new Error(message);
}

// Uncomment to test (it will stop execution)
// throwError("Something went wrong!");

// 'null' and 'undefined' types
let emptyValue: null = null;
let notAssigned: undefined = undefined;

// Output
console.log("Name:", userName);
console.log("Age:", userAge);
console.log("Is Student:", isStudent);
console.log("Random Value:", randomValue);
console.log("Empty:", emptyValue);
console.log("Not Assigned:", notAssigned);
