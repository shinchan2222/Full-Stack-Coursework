 // 1. var
var name = "Vimal";
console.log(name);

// 2. let
let age = 25;
console.log(age);

// 3. const
const country = "India";
console.log(country);

// Changing Values
let score = 100;
console.log(score);
score = 150;
console.log(score);

// Multiple Variables
let firstName = "Vimal";
let lastName = "K";
let marks = 85;
console.log(firstName);
console.log(lastName);
console.log(marks);

// Variable Naming Rules

// Valid
let studentName = "Rahul";
let student_age = 20;
let $price = 500;
let _count = 10;

// Invalid examples:
// let 1name = "John";
// let student-name = "John";
// let let = 10;


// Constants
const pi = 3.14159;
const company = "Geniius";

console.log(pi);
console.log(company);

// Variable with Different Data Types
let username = "Vimal";     // String
let userAge = 25;           // Number
let isStudent = true;       // Boolean
let address;                // Undefined
let value = null;           // Null
console.log(username);
console.log(userAge);
console.log(isStudent);
console.log(address);
console.log(value);

// Checking Variable Type
console.log(typeof username);
console.log(typeof userAge);
console.log(typeof isStudent);
console.log(typeof address);
console.log(typeof value);

// var vs let vs const
// var can be redeclared
var city = "Chennai";
var city = "Coimbatore";
console.log(city);

// let cannot be redeclared in the same scope
let course = "JavaScript";
// let course = "React"; // Error


// const cannot be reassigned
const year = 2026;
// year = 2027; // Error