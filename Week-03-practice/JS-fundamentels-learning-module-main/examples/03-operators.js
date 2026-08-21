// 1. Arithmetic Operators
let a = 20;
let b = 10;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

// 2. Assignment Operators
let x = 10;
console.log("Initial:", x);
x += 5;
console.log("x += 5:", x);
x -= 3;
console.log("x -= 3:", x);
x *= 2;
console.log("x *= 2:", x);
x /= 4;
console.log("x /= 4:", x);
x %= 3;
console.log("x %= 3:", x);

// 3. Comparison Operators
let num1 = 10;
let num2 = 20;
console.log(num1 == num2);   // Equal
console.log(num1 != num2);   // Not equal
console.log(num1 > num2);    // Greater than
console.log(num1 < num2);    // Less than
console.log(num1 >= num2);   // Greater/equal
console.log(num1 <= num2);   // Less/equal

// 4. == vs ===
console.log(10 == "10");     // true
console.log(10 === "10");    // false

// == checks value after type conversion
// === checks value AND data type
// 5. Logical Operators
let age = 25;
let hasID = true;
console.log(age >= 18 && hasID === true);
console.log(age < 18 || hasID === true);
console.log(!hasID);
// AND
console.log(true && true);    // true
console.log(true && false);   // false
// OR
console.log(true || false);   // true
console.log(false || false);  // false
// NOT
console.log(!true);           // false
console.log(!false);          // true

// 6. Increment Operator
let count = 5;
count++;
console.log(count);
++count;
console.log(count);

// 7. Decrement Operator
let number = 10;
number--;
console.log(number);
--number;
console.log(number);

// 8. Ternary Operator
let studentAge = 20;
let result = studentAge >= 18? "Adult": "Minor";
console.log(result);
// Another example
let marks = 75;
let grade = marks >= 50? "Pass": "Fail";
console.log(grade);

// 9. String Operator
let firstName = "Vimal";
let lastName = "K";
let fullName = firstName + " " + lastName;
console.log(fullName);

// 10. Nullish Coalescing Operator
let username = null;
let displayName = username ?? "Guest";
console.log(displayName);

// 11. Exponentiation
let base = 2;
let power = 3;
console.log(base ** power); // 8

// 12. Operator Precedence

let calculation = 10 + 5 * 2;
console.log(calculation); // 20
// Multiplication happens before addition.

// Using parentheses
let calculation2 = (10 + 5) * 2;
console.log(calculation2); // 30