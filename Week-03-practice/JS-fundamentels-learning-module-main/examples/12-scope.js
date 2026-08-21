// ==========================================
// JavaScript Scope
// ==========================================

// Scope determines where a variable can be
// accessed in your JavaScript program.


// ==========================================
// 1. Global Scope
// ==========================================

let globalName = "Vimal";

function showName() {
    console.log(globalName);
}

showName();

console.log(globalName);


// ==========================================
// 2. Function Scope
// ==========================================

function testFunction() {

    let message = "Hello JavaScript";

    console.log(message);
}

testFunction();

// This will cause an error because
// message exists only inside the function.

// console.log(message);


// ==========================================
// 3. Block Scope
// ==========================================

if (true) {

    let blockMessage = "Inside block";

    console.log(blockMessage);
}

// Cannot access outside the block.

// console.log(blockMessage);


// ==========================================
// 4. var and Block Scope
// ==========================================

if (true) {

    var varMessage = "var inside block";

}

console.log(varMessage);

// var is NOT block-scoped.


// ==========================================
// 5. let is Block Scoped
// ==========================================

if (true) {

    let letMessage = "let inside block";

    console.log(letMessage);

}

// console.log(letMessage);
// Error


// ==========================================
// 6. const is Block Scoped
// ==========================================

if (true) {

    const constMessage = "const inside block";

    console.log(constMessage);

}

// console.log(constMessage);
// Error


// ==========================================
// 7. Function Scope with var
// ==========================================

function example() {

    var username = "Vimal";

    console.log(username);
}

example();

// console.log(username);
// Error


// ==========================================
// 8. Nested Scope
// ==========================================

let outer = "Outer";

function parent() {

    let middle = "Middle";

    function child() {

        let inner = "Inner";

        console.log(outer);
        console.log(middle);
        console.log(inner);

    }

    child();
}

parent();


// ==========================================
// 9. Lexical Scope
// ==========================================

let language = "JavaScript";

function outerFunction() {

    let framework = "React";

    function innerFunction() {

        console.log(language);
        console.log(framework);

    }

    innerFunction();
}

outerFunction();


// ==========================================
// 10. Scope Chain
// ==========================================

let country = "India";

function firstFunction() {

    let state = "Tamil Nadu";

    function secondFunction() {

        let city = "Coimbatore";

        console.log(country);
        console.log(state);
        console.log(city);

    }

    secondFunction();
}

firstFunction();


// Scope chain:
// inner scope
//      ↓
// parent scope
//      ↓
// global scope


// ==========================================
// 11. var Hoisting
// ==========================================

console.log(varValue);

var varValue = 100;


// Output:
// undefined


// ==========================================
// 12. let Hoisting
// ==========================================

// let variables are hoisted but cannot be
// accessed before initialization.

// console.log(letValue);

// let letValue = 100;

// This causes:
// ReferenceError


// ==========================================
// 13. const Hoisting
// ==========================================

// Same behavior as let.

// console.log(constValue);

// const constValue = 100;


// ==========================================
// 14. Temporal Dead Zone
// ==========================================

// The period between entering a scope
// and initializing a let/const variable
// is called the Temporal Dead Zone (TDZ).

function tdzExample() {

    // console.log(name);
    // ReferenceError

    let name = "Vimal";

    console.log(name);
}

tdzExample();


// ==========================================
// 15. var Redeclaration
// ==========================================

var age = 20;

var age = 25;

console.log(age);


// ==========================================
// 16. let Redeclaration
// ==========================================

// let age2 = 20;
// let age2 = 25;

// Error:
// Identifier 'age2' has already been declared


// ==========================================
// 17. const Redeclaration
// ==========================================

// const age3 = 20;
// const age3 = 25;

// Error


// ==========================================
// 18. let Reassignment
// ==========================================

let score = 50;

score = 80;

console.log(score);


// ==========================================
// 19. const Reassignment
// ==========================================

// const pi = 3.14;
// pi = 3.14159;

// Error


// ==========================================
// 20. Scope Inside Loop
// ==========================================

for (let i = 1; i <= 3; i++) {

    console.log(i);

}

// console.log(i);
// Error because i is block scoped.


// ==========================================
// 21. var Inside Loop
// ==========================================

for (var j = 1; j <= 3; j++) {

    console.log(j);

}

console.log(j);


// var remains accessible outside the loop.


// ==========================================
// 22. Practical Example
// ==========================================

let userName = "Vimal";

function login() {

    let loginStatus = true;

    if (loginStatus) {

        let message = `${userName} logged in successfully`;

        console.log(message);

    }

}

login();


// ==========================================
// 23. Closure Introduction
// ==========================================

function createCounter() {

    let count = 0;

    return function () {

        count++;

        return count;

    };

}

let counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());


// The inner function remembers the
// count variable from its outer scope.