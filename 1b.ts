// File: functionDemo.ts

// Function with parameter and return type
function addNumbers(a: number, b: number): number {
  return a + b;
}

// Function with optional parameter (denoted by '?')
function greetUser(name?: string): string {
  return name ? `Hello, ${name}!` : "Hello, Guest!";
}

// Function with default parameter
function multiply(a: number, b: number = 2): number {
  return a * b;
}

// Function with multiple parameter types
function displayInfo(name: string, age: number, isStudent: boolean): void {
  console.log(`Name: ${name}, Age: ${age}, Student: ${isStudent}`);
}

// Using the functions
console.log("Sum:", addNumbers(5, 10));
console.log(greetUser("Abhiram"));
console.log(greetUser());
console.log("Multiply:", multiply(5));
displayInfo("Abhiram", 20, true);
