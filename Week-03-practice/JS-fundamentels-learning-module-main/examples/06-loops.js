// ==========================================
// JavaScript Loops
// ==========================================

// Loops are used to execute a block of code
// repeatedly.

// Main loops:
// 1. for
// 2. while
// 3. do...while
// 4. for...of
// 5. for...in


// ==========================================
// 1. for Loop
// ==========================================

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// ==========================================
// 2. Print 1 to 10
// ==========================================

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// ==========================================
// 3. Print Even Numbers
// ==========================================

for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }

}


// ==========================================
// 4. Print Odd Numbers
// ==========================================

for (let i = 1; i <= 10; i++) {

    if (i % 2 !== 0) {
        console.log(i);
    }

}


// ==========================================
// 5. Reverse Loop
// ==========================================

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// ==========================================
// 6. Sum of Numbers
// ==========================================

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("Sum:", sum);


// ==========================================
// 7. Multiplication Table
// ==========================================

let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}


// ==========================================
// 8. while Loop
// ==========================================

let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}


// ==========================================
// 9. while Loop - Countdown
// ==========================================

let countdown = 5;

while (countdown >= 1) {
    console.log(countdown);
    countdown--;
}


// ==========================================
// 10. do...while Loop
// ==========================================

let value = 1;

do {
    console.log(value);
    value++;
} while (value <= 5);


// ==========================================
// 11. Difference: while vs do...while
// ==========================================

let x = 10;

while (x < 5) {
    console.log("while executed");
}


// do...while executes at least once

let y = 10;

do {
    console.log("do...while executed");
} while (y < 5);


// ==========================================
// 12. break
// ==========================================

for (let i = 1; i <= 10; i++) {

    if (i === 6) {
        break;
    }

    console.log(i);
}


// Output:
// 1
// 2
// 3
// 4
// 5


// ==========================================
// 13. continue
// ==========================================

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        continue;
    }

    console.log(i);
}


// ==========================================
// 14. Skip Even Numbers
// ==========================================

for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}


// ==========================================
// 15. Nested Loops
// ==========================================

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

        console.log(`i = ${i}, j = ${j}`);

    }

}


// ==========================================
// 16. Star Pattern
// ==========================================

for (let i = 1; i <= 5; i++) {

    let stars = "";

    for (let j = 1; j <= i; j++) {
        stars += "* ";
    }

    console.log(stars);
}


// ==========================================
// 17. Number Pattern
// ==========================================

for (let i = 1; i <= 5; i++) {

    let numbers = "";

    for (let j = 1; j <= i; j++) {
        numbers += j + " ";
    }

    console.log(numbers);
}


// ==========================================
// 18. for...of
// ==========================================

let fruits = ["Apple", "Mango", "Orange"];

for (let fruit of fruits) {
    console.log(fruit);
}


// ==========================================
// 19. for...of with Strings
// ==========================================

let language = "JavaScript";

for (let character of language) {
    console.log(character);
}


// ==========================================
// 20. for...in
// ==========================================

let student = {
    name: "Vimal",
    age: 25,
    course: "JavaScript"
};

for (let key in student) {

    console.log(key);
    console.log(student[key]);

}


// ==========================================
// 21. Find Factorial
// ==========================================

let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}

console.log("Factorial:", factorial);


// ==========================================
// 22. Find Largest Number
// ==========================================

let numbers = [10, 25, 7, 40, 15];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] > largest) {
        largest = numbers[i];
    }

}

console.log("Largest:", largest);


// ==========================================
// 23. Count Positive Numbers
// ==========================================

let values = [-2, 5, 10, -7, 8, -1];

let positiveCount = 0;

for (let value of values) {

    if (value > 0) {
        positiveCount++;
    }

}

console.log("Positive numbers:", positiveCount);