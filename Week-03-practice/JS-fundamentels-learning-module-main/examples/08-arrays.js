// ==========================================
// JavaScript Arrays
// ==========================================

// An array is used to store multiple values
// inside a single variable.


// ==========================================
// 1. Creating an Array
// ==========================================

let fruits = ["Apple", "Mango", "Orange"];

console.log(fruits);


// ==========================================
// 2. Accessing Array Elements
// ==========================================

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


// JavaScript arrays use zero-based indexing.
//
// Index:
// 0 → Apple
// 1 → Mango
// 2 → Orange


// ==========================================
// 3. Array Length
// ==========================================

console.log(fruits.length);


// ==========================================
// 4. Changing an Array Element
// ==========================================

fruits[1] = "Banana";

console.log(fruits);


// ==========================================
// 5. Adding Element - push()
// ==========================================

fruits.push("Grapes");

console.log(fruits);


// ==========================================
// 6. Adding Element at Beginning - unshift()
// ==========================================

fruits.unshift("Pineapple");

console.log(fruits);


// ==========================================
// 7. Removing Last Element - pop()
// ==========================================

fruits.pop();

console.log(fruits);


// ==========================================
// 8. Removing First Element - shift()
// ==========================================

fruits.shift();

console.log(fruits);


// ==========================================
// 9. Find Element - includes()
// ==========================================

console.log(fruits.includes("Apple"));
console.log(fruits.includes("Watermelon"));


// ==========================================
// 10. Find Position - indexOf()
// ==========================================

console.log(fruits.indexOf("Apple"));
console.log(fruits.indexOf("Mango"));


// ==========================================
// 11. Join Array Elements
// ==========================================

let languages = ["HTML", "CSS", "JavaScript"];

console.log(languages.join(", "));
console.log(languages.join(" - "));


// ==========================================
// 12. Slice
// ==========================================

let numbers = [10, 20, 30, 40, 50];

let selected = numbers.slice(1, 4);

console.log(selected);
console.log(numbers);


// slice() does NOT change the original array.


// ==========================================
// 13. Splice
// ==========================================

let colors = ["Red", "Green", "Blue", "Yellow"];

colors.splice(1, 1);

console.log(colors);


// First value → starting index
// Second value → number of elements to remove


// ==========================================
// 14. Splice - Add Elements
// ==========================================

let animals = ["Dog", "Cat", "Rabbit"];

animals.splice(1, 0, "Lion");

console.log(animals);


// ==========================================
// 15. Splice - Replace Elements
// ==========================================

let students = ["Rahul", "Arun", "Priya"];

students.splice(1, 1, "Vimal");

console.log(students);


// ==========================================
// 16. Loop Through Array
// ==========================================

let names = ["Vimal", "Rahul", "Priya", "Arun"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


// ==========================================
// 17. for...of
// ==========================================

for (let name of names) {
    console.log(name);
}


// ==========================================
// 18. Reverse an Array
// ==========================================

let numbers2 = [1, 2, 3, 4, 5];

numbers2.reverse();

console.log(numbers2);


// ==========================================
// 19. Sort an Array
// ==========================================

let fruits2 = ["Orange", "Apple", "Mango", "Banana"];

fruits2.sort();

console.log(fruits2);


// ==========================================
// 20. Array of Numbers
// ==========================================

let marks = [85, 90, 75, 92, 68];

console.log(marks);


// ==========================================
// 21. Find Total of Array
// ==========================================

let values = [10, 20, 30, 40, 50];

let total = 0;

for (let value of values) {
    total += value;
}

console.log("Total:", total);


// ==========================================
// 22. Find Average
// ==========================================

let scores = [80, 90, 70, 60, 100];

let sum = 0;

for (let score of scores) {
    sum += score;
}

let average = sum / scores.length;

console.log("Average:", average);


// ==========================================
// 23. Find Largest Number
// ==========================================

let nums = [10, 45, 23, 78, 12];

let largest = nums[0];

for (let num of nums) {

    if (num > largest) {
        largest = num;
    }

}

console.log("Largest:", largest);


// ==========================================
// 24. Find Smallest Number
// ==========================================

let nums2 = [10, 45, 23, 78, 12];

let smallest = nums2[0];

for (let num of nums2) {

    if (num < smallest) {
        smallest = num;
    }

}

console.log("Smallest:", smallest);


// ==========================================
// 25. Count Even Numbers
// ==========================================

let numbers3 = [10, 15, 20, 25, 30, 35];

let evenCount = 0;

for (let number of numbers3) {

    if (number % 2 === 0) {
        evenCount++;
    }

}

console.log("Even numbers:", evenCount);


// ==========================================
// 26. Count Odd Numbers
// ==========================================

let oddCount = 0;

for (let number of numbers3) {

    if (number % 2 !== 0) {
        oddCount++;
    }

}

console.log("Odd numbers:", oddCount);


// ==========================================
// 27. Two-Dimensional Array
// ==========================================

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);


// Access values

console.log(matrix[0][0]);
console.log(matrix[1][2]);
console.log(matrix[2][1]);


// ==========================================
// 28. Nested Loop with 2D Array
// ==========================================

for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix[i].length; j++) {

        console.log(matrix[i][j]);

    }

}


// ==========================================
// 29. Array Destructuring
// ==========================================

let colors2 = ["Red", "Green", "Blue"];

let [first, second, third] = colors2;

console.log(first);
console.log(second);
console.log(third);


// ==========================================
// 30. Spread Operator
// ==========================================

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = [...arr1, ...arr2];

console.log(combined);


// ==========================================
// 31. Copy an Array
// ==========================================

let original = [10, 20, 30];

let copy = [...original];

console.log(copy);


// ==========================================
// 32. Array.isArray()
// ==========================================

console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray("Hello"));