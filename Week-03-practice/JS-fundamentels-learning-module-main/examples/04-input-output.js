// 1. console.log()
console.log("Hello JavaScript");
let name = "Vimal";
let age = 25;
console.log(name);
console.log(age);

// 2. Multiple Values
console.log("Name:", name, "Age:", age);

// 3. console.table()
let student = {
    name: "Vimal",
    age: 25,
    course: "JavaScript"
};
console.table(student);

// 4. console.error()
console.error("This is an error message");

// 5. console.warn()
console.warn("This is a warning");

// 6. Template Literals
let firstName = "Vimal";
let city = "Coimbatore";
console.log(`My name is ${firstName}`);
console.log(`I live in ${city}`);


// Multiple values
let marks = 85;
console.log(
    `My name is ${firstName}, I live in ${city}, and my marks are ${marks}.`
);

// ==========================================
// 7. User Input in Browser
// prompt() works in the browser.
// let username = prompt("Enter your name");
// console.log(username);


// ==========================================
// 8. Number Input
// ==========================================
// prompt() always returns a string.
// let number1 = prompt("Enter first number");
// let number2 = prompt("Enter second number");
// Convert string to number:
// number1 = Number(number1);
// number2 = Number(number2);
// console.log(number1 + number2);

// 9. Number()
let value1 = "100";
let numberValue = Number(value1);
console.log(numberValue);
console.log(typeof numberValue);

// 10. String()
let number = 500;
let stringValue = String(number);
console.log(stringValue);
console.log(typeof stringValue);

// 11. Boolean()
let value = 1;
let booleanValue = Boolean(value);
console.log(booleanValue);
console.log(typeof booleanValue);

// 12. Basic Type Conversion
let a = "10";
let b = "20";
console.log(a + b); // 1020
console.log(Number(a) + Number(b)); // 30

// 13. NaN
let result = Number("Hello");
console.log(result);
console.log(typeof result);

// 14. isNaN()
let userInput = "abc";
console.log(isNaN(userInput));

// 15. Infinity
let division = 10 / 0;
console.log(division);
console.log(typeof division);

// 16. Escape Characters
console.log("Hello\nWorld");
console.log("Hello\tJavaScript");
console.log("He said \"Hello\"");


// ==========================================
// 17. Browser Output
// ==========================================

// These are commonly used in browser JavaScript:

// alert("Welcome to JavaScript");

// let name = prompt("Enter your name");

// document.write("Hello " + name);