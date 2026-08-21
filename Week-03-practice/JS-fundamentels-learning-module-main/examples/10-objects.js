// ==========================================
// JavaScript Objects
// ==========================================

// An object stores data in KEY : VALUE pairs.


// ==========================================
// 1. Creating an Object
// ==========================================

let student = {
    name: "Vimal",
    age: 25,
    course: "JavaScript",
    marks: 85
};

console.log(student);


// ==========================================
// 2. Accessing Object Properties
// ==========================================

// Dot notation

console.log(student.name);
console.log(student.age);
console.log(student.course);


// Bracket notation

console.log(student["name"]);
console.log(student["age"]);


// ==========================================
// 3. Adding New Properties
// ==========================================

student.city = "Coimbatore";
student.email = "vimal@example.com";

console.log(student);


// ==========================================
// 4. Updating Properties
// ==========================================

student.age = 26;
student.marks = 90;

console.log(student);


// ==========================================
// 5. Deleting Properties
// ==========================================

delete student.email;

console.log(student);


// ==========================================
// 6. Checking Property
// ==========================================

console.log("name" in student);
console.log("phone" in student);


// ==========================================
// 7. Object.keys()
// ==========================================

console.log(Object.keys(student));


// ==========================================
// 8. Object.values()
// ==========================================

console.log(Object.values(student));


// ==========================================
// 9. Object.entries()
// ==========================================

console.log(Object.entries(student));


// ==========================================
// 10. Loop Through Object
// ==========================================

for (let key in student) {
    console.log(key, student[key]);
}


// ==========================================
// 11. Object with Different Data Types
// ==========================================

let person = {
    name: "Vimal",
    age: 25,
    isStudent: true,
    skills: ["HTML", "CSS", "JavaScript"],
    address: null
};

console.log(person);


// ==========================================
// 12. Object Inside Object
// ==========================================

let user = {
    name: "Vimal",

    address: {
        city: "Coimbatore",
        state: "Tamil Nadu",
        country: "India"
    }
};

console.log(user.address.city);
console.log(user.address.state);


// ==========================================
// 13. Array Inside Object
// ==========================================

let developer = {
    name: "Vimal",
    skills: ["HTML", "CSS", "JavaScript", "React"]
};

console.log(developer.skills);
console.log(developer.skills[0]);
console.log(developer.skills[3]);


// ==========================================
// 14. Object Inside Array
// ==========================================

let students = [

    {
        name: "Vimal",
        age: 25
    },

    {
        name: "Rahul",
        age: 22
    },

    {
        name: "Priya",
        age: 23
    }

];

console.log(students);


// Access individual objects

console.log(students[0]);
console.log(students[0].name);
console.log(students[1].age);


// ==========================================
// 15. Loop Through Array of Objects
// ==========================================

for (let student of students) {

    console.log(student.name);
    console.log(student.age);

}


// ==========================================
// 16. Object Methods
// ==========================================

let user2 = {

    name: "Vimal",

    greet: function () {
        console.log("Hello " + this.name);
    }

};

user2.greet();


// ==========================================
// 17. this Keyword
// ==========================================

let person2 = {

    firstName: "Vimal",
    lastName: "K",

    fullName: function () {
        return this.firstName + " " + this.lastName;
    }

};

console.log(person2.fullName());


// ==========================================
// 18. Shorthand Property
// ==========================================

let name = "Vimal";
let age = 25;

let user3 = {
    name,
    age
};

console.log(user3);


// ==========================================
// 19. Computed Property
// ==========================================

let property = "email";

let user4 = {
    name: "Vimal",
    [property]: "vimal@example.com"
};

console.log(user4);


// ==========================================
// 20. Object Destructuring
// ==========================================

let employee = {
    name: "Arun",
    age: 28,
    role: "Developer"
};

let { name: employeeName, age: employeeAge, role } = employee;

console.log(employeeName);
console.log(employeeAge);
console.log(role);


// ==========================================
// 21. Destructuring with Same Names
// ==========================================

let product = {
    productName: "Laptop",
    price: 50000
};

let { productName, price } = product;

console.log(productName);
console.log(price);


// ==========================================
// 22. Spread Operator
// ==========================================

let userA = {
    name: "Vimal",
    age: 25
};

let userB = {
    city: "Coimbatore",
    country: "India"
};

let combinedUser = {
    ...userA,
    ...userB
};

console.log(combinedUser);


// ==========================================
// 23. Copy an Object
// ==========================================

let originalUser = {
    name: "Vimal",
    age: 25
};

let copiedUser = {
    ...originalUser
};

console.log(copiedUser);


// ==========================================
// 24. Nested Object
// ==========================================

let company = {

    name: "Geniius",

    location: {
        city: "Coimbatore",
        country: "India"
    },

    employees: 50

};

console.log(company.location.city);


// ==========================================
// 25. Object.keys() with Loop
// ==========================================

let car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2026
};

let keys = Object.keys(car);

for (let key of keys) {
    console.log(key, car[key]);
}


// ==========================================
// 26. Object.values() with Loop
// ==========================================

let values = Object.values(car);

for (let value of values) {
    console.log(value);
}


// ==========================================
// 27. Object.entries() with Loop
// ==========================================

let entries = Object.entries(car);

for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
}


// ==========================================
// 28. Practical Product Object
// ==========================================

let productDetails = {

    id: 101,
    name: "Laptop",
    price: 55000,
    category: "Electronics",
    inStock: true,

    displayInfo: function () {
        console.log(
            `${this.name} costs ₹${this.price}`
        );
    }

};

productDetails.displayInfo();


// ==========================================
// 29. Practical Student Object
// ==========================================

let studentDetails = {

    name: "Vimal",
    marks: 85,

    getResult: function () {

        if (this.marks >= 40) {
            return "Pass";
        }

        return "Fail";
    }

};

console.log(studentDetails.getResult());


// ==========================================
// 30. Object.freeze()
// ==========================================

let settings = {
    theme: "dark",
    language: "English"
};

Object.freeze(settings);

// This will not modify the object:
// settings.theme = "light";

console.log(settings);


// ==========================================
// 31. Object.hasOwn()
// ==========================================

let account = {
    username: "vimal",
    email: "vimal@example.com"
};

console.log(Object.hasOwn(account, "username"));
console.log(Object.hasOwn(account, "password"));