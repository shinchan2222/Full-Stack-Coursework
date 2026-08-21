// JavaScript has 2 main categories:
// 1. Primitive Data Types
// 2. Non-Primitive / Reference Data Types

// 1. STRING
let firstName = "Vimal";
let message = 'Welcome to JavaScript';
console.log(firstName);
console.log(message);
console.log(typeof firstName);

// 2. NUMBER
let age = 25;
let price = 499.99;
let negativeNumber = -100;
console.log(age);
console.log(price);
console.log(negativeNumber);
console.log(typeof age);

// 3. BIGINT
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);
console.log(typeof bigNumber);

// 4. BOOLEAN
let isStudent = true;
let isLoggedIn = false;
console.log(isStudent);
console.log(isLoggedIn);
console.log(typeof isStudent);

// 5. UNDEFINED
let username;
console.log(username);
console.log(typeof username);

// 6. NULL
let selectedProduct = null;
console.log(selectedProduct);
console.log(typeof selectedProduct);

// 7. SYMBOL
let id = Symbol("userId");
console.log(id);
console.log(typeof id);

// 8. OBJECT
let student = {
    name: "Vimal",
    age: 25,
    course: "JavaScript"
};

console.log(student);
console.log(student.name);
console.log(typeof student);

// 9. ARRAY
let fruits = ["Apple", "Mango", "Orange"];
console.log(fruits);
console.log(fruits[0]);
console.log(typeof fruits);

// Primitive Data Types
let name = "Vimal";       // String
let marks = 90;           // Number
let passed = true;        // Boolean
let result;               // Undefined
let data = null;          // Null
let largeValue = 100n;    // BigInt
let uniqueId = Symbol();  // Symbol
console.log(typeof name);
console.log(typeof marks);
console.log(typeof passed);
console.log(typeof result);
console.log(typeof data);
console.log(typeof largeValue);
console.log(typeof uniqueId);

// Reference Data Types
let person = {
    name: "Vimal",
    age: 25
};
let colors = ["Red", "Green", "Blue"];
console.log(person);
console.log(colors);

// Checking Data Types
console.log(typeof "Hello");      // string
console.log(typeof 100);          // number
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof null);         // object
console.log(typeof 100n);         // bigint
console.log(typeof Symbol());     // symbol
console.log(typeof {});           // object
console.log(typeof []);           // object