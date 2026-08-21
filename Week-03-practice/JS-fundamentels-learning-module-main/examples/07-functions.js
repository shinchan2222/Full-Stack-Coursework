// ==========================================
// JavaScript Functions
// ==========================================

// A function is a reusable block of code
// designed to perform a specific task.


// ==========================================
// 1. Basic Function
// ==========================================

function greet() {
    console.log("Hello, Welcome to JavaScript!");
}

greet();


// ==========================================
// 2. Calling a Function Multiple Times
// ==========================================

function sayHello() {
    console.log("Hello!");
}

sayHello();
sayHello();
sayHello();


// ==========================================
// 3. Function with Parameters
// ==========================================

function greetUser(name) {
    console.log(`Hello ${name}`);
}

greetUser("Vimal");
greetUser("Rahul");
greetUser("Priya");


// ==========================================
// 4. Multiple Parameters
// ==========================================

function addNumbers(a, b) {
    console.log(a + b);
}

addNumbers(10, 20);
addNumbers(50, 30);


// ==========================================
// 5. Return Statement
// ==========================================

function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);


// ==========================================
// 6. Return Multiple Calculations
// ==========================================

function calculate(a, b) {

    let sum = a + b;
    let difference = a - b;
    let product = a * b;

    return [sum, difference, product];
}

let calculations = calculate(20, 10);

console.log(calculations);


// ==========================================
// 7. Function with Default Parameter
// ==========================================

function welcome(name = "Guest") {
    console.log(`Welcome ${name}`);
}

welcome("Vimal");
welcome();


// ==========================================
// 8. Function Expression
// ==========================================

const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(5, 4));


// ==========================================
// 9. Arrow Function
// ==========================================

const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(20, 5));


// ==========================================
// 10. Short Arrow Function
// ==========================================

const square = number => number * number;

console.log(square(5));


// ==========================================
// 11. Arrow Function with Multiple Parameters
// ==========================================

const divide = (a, b) => a / b;

console.log(divide(20, 4));


// ==========================================
// 12. Function with Condition
// ==========================================

function checkAge(age) {

    if (age >= 18) {
        return "Eligible";
    } else {
        return "Not Eligible";
    }

}

console.log(checkAge(20));
console.log(checkAge(15));


// ==========================================
// 13. Function to Check Even/Odd
// ==========================================

function checkEvenOdd(number) {

    if (number % 2 === 0) {
        return "Even";
    }

    return "Odd";
}

console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));


// ==========================================
// 14. Function to Find Largest Number
// ==========================================

function findLargest(a, b) {

    if (a > b) {
        return a;
    }

    return b;
}

console.log(findLargest(20, 50));


// ==========================================
// 15. Function with Multiple Conditions
// ==========================================

function getGrade(marks) {

    if (marks >= 90) {
        return "A+";
    } else if (marks >= 80) {
        return "A";
    } else if (marks >= 70) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else if (marks >= 50) {
        return "D";
    } else {
        return "Fail";
    }

}

console.log(getGrade(95));
console.log(getGrade(76));
console.log(getGrade(40));


// ==========================================
// 16. Function with Array
// ==========================================

function printArray(items) {

    for (let item of items) {
        console.log(item);
    }

}

let fruits = ["Apple", "Mango", "Orange"];

printArray(fruits);


// ==========================================
// 17. Function to Calculate Array Sum
// ==========================================

function arraySum(numbers) {

    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(arraySum([10, 20, 30, 40]));


// ==========================================
// 18. Function to Find Largest in Array
// ==========================================

function largestInArray(numbers) {

    let largest = numbers[0];

    for (let number of numbers) {

        if (number > largest) {
            largest = number;
        }

    }

    return largest;
}

console.log(largestInArray([10, 50, 20, 90, 30]));


// ==========================================
// 19. Rest Parameters
// ==========================================

function sumAll(...numbers) {

    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(sumAll(10, 20));
console.log(sumAll(10, 20, 30));
console.log(sumAll(1, 2, 3, 4, 5));


// ==========================================
// 20. Function Calling Another Function
// ==========================================

function double(number) {
    return number * 2;
}

function displayResult(number) {

    let result = double(number);

    console.log(`Result: ${result}`);
}

displayResult(10);


// ==========================================
// 21. Callback Function
// ==========================================

function processNumber(number, callback) {

    let result = callback(number);

    console.log(result);
}

function doubleNumber(number) {
    return number * 2;
}

processNumber(10, doubleNumber);


// ==========================================
// 22. Anonymous Function
// ==========================================

const message = function () {
    console.log("This is an anonymous function");
};

message();


// ==========================================
// 23. Immediately Invoked Function Expression
// IIFE
// ==========================================

(function () {
    console.log("IIFE executed immediately");
})();


// ==========================================
// 24. Recursive Function
// ==========================================

function countdown(number) {

    if (number <= 0) {
        return;
    }

    console.log(number);

    countdown(number - 1);
}

countdown(5);


// ==========================================
// 25. Factorial Using Function
// ==========================================

function factorial(number) {

    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));