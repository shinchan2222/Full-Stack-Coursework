// ==========================================
// JavaScript Array Methods
// ==========================================

// Array methods help us process, search,
// transform, and manipulate arrays.


// ==========================================
// 1. forEach()
// ==========================================

let fruits = ["Apple", "Mango", "Orange"];

fruits.forEach(function (fruit) {
    console.log(fruit);
});


// Arrow function version

fruits.forEach(fruit => {
    console.log(fruit);
});


// ==========================================
// 2. map()
// ==========================================

// map() creates a NEW array.

let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(function (number) {
    return number * 2;
});

console.log(doubled);


// Arrow function

let squared = numbers.map(number => number * number);

console.log(squared);


// ==========================================
// 3. filter()
// ==========================================

// filter() returns elements that
// satisfy a condition.

let ages = [12, 18, 25, 15, 30, 10];

let adults = ages.filter(age => age >= 18);

console.log(adults);


// ==========================================
// 4. reduce()
// ==========================================

// reduce() combines all values
// into a single result.

let values = [10, 20, 30, 40];

let total = values.reduce(function (sum, value) {
    return sum + value;
}, 0);

console.log(total);


// Short version

let total2 = values.reduce((sum, value) => sum + value, 0);

console.log(total2);


// ==========================================
// 5. find()
// ==========================================

// find() returns the FIRST matching element.

let numbers2 = [10, 20, 30, 40, 50];

let result = numbers2.find(number => number > 25);

console.log(result);


// ==========================================
// 6. findIndex()
// ==========================================

let index = numbers2.findIndex(number => number > 25);

console.log(index);


// ==========================================
// 7. some()
// ==========================================

// some() checks whether AT LEAST ONE
// element satisfies the condition.

let marks = [35, 45, 60, 80];

let hasHighMark = marks.some(mark => mark >= 80);

console.log(hasHighMark);


// ==========================================
// 8. every()
// ==========================================

// every() checks whether ALL elements
// satisfy the condition.

let marks2 = [60, 70, 80, 90];

let allPassed = marks2.every(mark => mark >= 40);

console.log(allPassed);


// ==========================================
// 9. includes()
// ==========================================

let languages = ["HTML", "CSS", "JavaScript"];

console.log(languages.includes("JavaScript"));
console.log(languages.includes("Python"));


// ==========================================
// 10. indexOf()
// ==========================================

console.log(languages.indexOf("CSS"));
console.log(languages.indexOf("Python"));


// ==========================================
// 11. lastIndexOf()
// ==========================================

let values2 = [10, 20, 30, 20, 40, 20];

console.log(values2.lastIndexOf(20));


// ==========================================
// 12. sort()
// ==========================================

let names = ["Vimal", "Arun", "Priya", "Rahul"];

names.sort();

console.log(names);


// ==========================================
// 13. Numeric sort
// ==========================================

// IMPORTANT:
// Default sort treats values as strings.

let numbers3 = [100, 5, 25, 10, 50];

numbers3.sort((a, b) => a - b);

console.log(numbers3);


// Descending

numbers3.sort((a, b) => b - a);

console.log(numbers3);


// ==========================================
// 14. reverse()
// ==========================================

let numbers4 = [1, 2, 3, 4, 5];

numbers4.reverse();

console.log(numbers4);


// ==========================================
// 15. join()
// ==========================================

let technologies = ["HTML", "CSS", "JavaScript"];

let resultString = technologies.join(" → ");

console.log(resultString);


// ==========================================
// 16. flat()
// ==========================================

let nestedArray = [1, 2, [3, 4], [5, 6]];

let flatArray = nestedArray.flat();

console.log(flatArray);


// ==========================================
// 17. flatMap()
// ==========================================

let numbers5 = [1, 2, 3];

let resultArray = numbers5.flatMap(number => [number, number * 2]);

console.log(resultArray);


// ==========================================
// 18. Chaining Methods
// ==========================================

let numbers6 = [1, 2, 3, 4, 5, 6];

let result2 = numbers6
    .filter(number => number % 2 === 0)
    .map(number => number * 10);

console.log(result2);


// ==========================================
// 19. map() with Objects
// ==========================================

let students = [
    { name: "Vimal", marks: 85 },
    { name: "Rahul", marks: 72 },
    { name: "Priya", marks: 92 }
];

let studentNames = students.map(student => student.name);

console.log(studentNames);


// ==========================================
// 20. filter() with Objects
// ==========================================

let passedStudents = students.filter(
    student => student.marks >= 80
);

console.log(passedStudents);


// ==========================================
// 21. find() with Objects
// ==========================================

let student = students.find(
    student => student.name === "Rahul"
);

console.log(student);


// ==========================================
// 22. reduce() with Objects
// ==========================================

let totalMarks = students.reduce(
    (total, student) => total + student.marks,
    0
);

console.log(totalMarks);


// ==========================================
// 23. Calculate Average
// ==========================================

let averageMarks = totalMarks / students.length;

console.log(averageMarks);


// ==========================================
// 24. Chaining with Objects
// ==========================================

let highScoringStudents = students
    .filter(student => student.marks >= 80)
    .map(student => student.name);

console.log(highScoringStudents);


// ==========================================
// 25. Practical Product Example
// ==========================================

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 },
    { name: "Monitor", price: 15000 }
];


// Get product names

let productNames = products.map(product => product.name);

console.log(productNames);


// Get products above ₹10,000

let expensiveProducts = products.filter(
    product => product.price > 10000
);

console.log(expensiveProducts);


// Find Laptop

let laptop = products.find(
    product => product.name === "Laptop"
);

console.log(laptop);


// Calculate total price

let totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
);

console.log("Total:", totalPrice);


// ==========================================
// 26. Practical Employee Example
// ==========================================

let employees = [
    { name: "Vimal", salary: 30000 },
    { name: "Arun", salary: 45000 },
    { name: "Priya", salary: 55000 },
    { name: "Rahul", salary: 35000 }
];


// Salaries above 40000

let highSalaryEmployees = employees.filter(
    employee => employee.salary > 40000
);

console.log(highSalaryEmployees);


// Employee names

let employeeNames = employees.map(
    employee => employee.name
);

console.log(employeeNames);


// Total salary

let totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);

console.log(totalSalary);