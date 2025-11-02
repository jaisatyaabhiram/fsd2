//b) Write a TypeScript program to demonstrate generics with constraints for type-safe functions.
// File: genericsWithConstraints.ts

// Generic function with a constraint that T must have a 'length' property
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

// Generic function to compare two numeric values
function compareValues<T extends number | string>(a: T, b: T): boolean {
  return a === b;
}

// Using the generic functions
console.log("Length of array:", getLength([1, 2, 3, 4]));
console.log("Length of string:", getLength("Hello TypeScript"));

console.log("Compare numbers:", compareValues(10, 10));
console.log("Compare strings:", compareValues("Hi", "Hello"));
