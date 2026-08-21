// 1. if Statement
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
}

// 2. if...else Statement
let number = 10;
if (number > 0) {
    console.log("Positive number");
} else {
    console.log("Not a positive number");
}

// 3. if...else if...else
let marks = 75;
if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else if (marks >= 50) {
    console.log("Grade D");
} else {
    console.log("Fail");
}

// 4. Multiple Conditions
let userAge = 25;
let hasID = true;
if (userAge >= 18 && hasID === true) {
    console.log("Entry allowed");
} else {
    console.log("Entry denied");
}

// 5. OR Condition
let day = "Sunday";
if (day === "Saturday" || day === "Sunday") {
    console.log("Weekend");
} else {
    console.log("Weekday");
}

// 6. NOT Operator
let isLoggedIn = false;
if (!isLoggedIn) {
    console.log("Please login");
}

// 7. Even or Odd
let num = 15;
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 8. Positive, Negative or Zero
let value = -10;
if (value > 0) {
    console.log("Positive");
} else if (value < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// 9. Voting Eligibility
let voterAge = 19;
if (voterAge >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

// 10. Nested if
let studentAge = 20;
let studentHasID = true;
if (studentAge >= 18) {
    if (studentHasID) {
        console.log("Student can enter.");
    } else {
        console.log("Student needs an ID.");
    }
} else {
    console.log("Student is under 18.");
}

// 11. Ternary Operator
let personAge = 21;
let eligibility = personAge >= 18? "Eligible": "Not Eligible";
console.log(eligibility);

// 12. Multiple Ternary Conditions
let score = 85;
let grade =
    score >= 90 ? "A+" :
    score >= 80 ? "A" :
    score >= 70 ? "B" :
    score >= 60 ? "C" :
    score >= 50 ? "D" :
    "Fail";
console.log(grade);

// 13. switch Statement
let fruit = "Apple";
switch (fruit) {
    case "Apple":
        console.log("Apple selected");
        break;
    case "Mango":
        console.log("Mango selected");
        break;
    case "Orange":
        console.log("Orange selected");
        break;
    default:
        console.log("Unknown fruit");
}

// 14. switch with Numbers
let option = 2;
switch (option) {
    case 1:
        console.log("Add");
        break;
    case 2:
        console.log("Edit");
        break;
    case 3:
        console.log("Delete");
        break;
    default:
        console.log("Invalid option");
}

// 15. switch with Days
let dayNumber = 3;
switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
                break;
    default:
        console.log("Invalid day");
}

// 16. Truthy and Falsy Values
let username = "";
if (username) {
    console.log("Username exists");
} else {
    console.log("Username is empty");
}

// Common falsy values:
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

// 17. Practical Example
// Login System
let enteredUsername = "admin";
let enteredPassword = "1234";
let correctUsername = "admin";
let correctPassword = "1234";
if (
    enteredUsername === correctUsername &&
    enteredPassword === correctPassword
) {
    console.log("Login successful");
} else {
    console.log("Invalid username or password");
}