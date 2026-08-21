// ==========================================
// JavaScript Error Handling
// ==========================================

// Error handling allows us to handle
// unexpected problems without crashing
// the entire application.


// ==========================================
// 1. Common JavaScript Errors
// ==========================================

// SyntaxError
// Occurs when JavaScript syntax is invalid.

// Example:
// let name = "Vimal


// ReferenceError
// Occurs when accessing a variable
// that does not exist.

// console.log(username);


// TypeError
// Occurs when performing an invalid
// operation on a value.

// let value = null;
// console.log(value.name);


// ==========================================
// 2. try...catch
// ==========================================

try {

    let result = 10 / 0;

    console.log(result);

} catch (error) {

    console.log("An error occurred.");

}


// ==========================================
// 3. Handling an Actual Error
// ==========================================

try {

    let user = null;

    console.log(user.name);

} catch (error) {

    console.log("Error:", error.message);

}


// ==========================================
// 4. error.name
// ==========================================

try {

    let user = null;

    console.log(user.name);

} catch (error) {

    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);

}


// ==========================================
// 5. error.stack
// ==========================================

try {

    let user = null;

    console.log(user.name);

} catch (error) {

    console.log(error.stack);

}


// ==========================================
// 6. finally
// ==========================================

try {

    console.log("Trying to execute code");

} catch (error) {

    console.log("Error occurred");

} finally {

    console.log("This always executes");

}


// ==========================================
// 7. try + catch + finally
// ==========================================

try {

    let number = 10;

    console.log(number);

} catch (error) {

    console.log("Something went wrong.");

} finally {

    console.log("Execution completed.");

}


// ==========================================
// 8. throw
// ==========================================

// We can manually create an error
// using throw.

function checkAge(age) {

    if (age < 18) {
        throw new Error("Age must be 18 or above.");
    }

    return "Eligible";
}

try {

    console.log(checkAge(15));

} catch (error) {

    console.log(error.message);

}


// ==========================================
// 9. throw with Validation
// ==========================================

function registerUser(username, password) {

    if (!username) {
        throw new Error("Username is required.");
    }

    if (!password) {
        throw new Error("Password is required.");
    }

    return "Registration successful";
}

try {

    console.log(
        registerUser("Vimal", "")
    );

} catch (error) {

    console.log(error.message);

}


// ==========================================
// 10. Multiple Validation Errors
// ==========================================

function validateMarks(marks) {

    if (typeof marks !== "number") {
        throw new TypeError("Marks must be a number.");
    }

    if (marks < 0 || marks > 100) {
        throw new RangeError(
            "Marks must be between 0 and 100."
        );
    }

    return "Valid marks";
}

try {

    console.log(validateMarks(85));

} catch (error) {

    console.log(error.name);
    console.log(error.message);

}


// ==========================================
// 11. Built-in Error Types
// ==========================================

// Error
// TypeError
// ReferenceError
// SyntaxError
// RangeError
// URIError
// EvalError


// ==========================================
// 12. TypeError Example
// ==========================================

try {

    let number = 100;

    number.toUpperCase();

} catch (error) {

    console.log("TypeError:", error.message);

}


// ==========================================
// 13. ReferenceError Example
// ==========================================

try {

    console.log(undefinedVariable);

} catch (error) {

    console.log("ReferenceError:", error.message);

}


// ==========================================
// 14. RangeError Example
// ==========================================

try {

    let number = 10;

    if (number < 1 || number > 5) {
        throw new RangeError(
            "Number must be between 1 and 5."
        );
    }

} catch (error) {

    console.log("RangeError:", error.message);

}


// ==========================================
// 15. Custom Error
// ==========================================

class LoginError extends Error {

    constructor(message) {

        super(message);

        this.name = "LoginError";

    }

}

try {

    throw new LoginError("Invalid login details.");

} catch (error) {

    console.log(error.name);
    console.log(error.message);

}


// ==========================================
// 16. Error Handling with Function
// ==========================================

function divide(a, b) {

    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }

    return a / b;
}

try {

    console.log(divide(10, 2));
    console.log(divide(10, 0));

} catch (error) {

    console.log("Error:", error.message);

}


// ==========================================
// 17. Error Handling with Array
// ==========================================

function getStudent(students, index) {

    if (index < 0 || index >= students.length) {
        throw new RangeError(
            "Student index is invalid."
        );
    }

    return students[index];
}

let students = [
    "Vimal",
    "Rahul",
    "Priya"
];

try {

    console.log(getStudent(students, 1));

} catch (error) {

    console.log(error.message);

}


// ==========================================
// 18. Error Handling with JSON
// ==========================================

try {

    let data = JSON.parse(
        '{"name":"Vimal","age":25}'
    );

    console.log(data);

} catch (error) {

    console.log("Invalid JSON");

}


// ==========================================
// 19. Invalid JSON Example
// ==========================================

try {

    let data = JSON.parse(
        '{name:Vimal}'
    );

    console.log(data);

} catch (error) {

    console.log("JSON Error:", error.message);

}


// ==========================================
// 20. Practical Login Validation
// ==========================================

function login(username, password) {

    if (!username) {
        throw new Error("Username is required.");
    }

    if (!password) {
        throw new Error("Password is required.");
    }

    if (
        username !== "admin" ||
        password !== "1234"
    ) {
        throw new Error(
            "Invalid username or password."
        );
    }

    return "Login successful";
}

try {

    console.log(
        login("admin", "1234")
    );

} catch (error) {

    console.log(error.message);

} finally {

    console.log("Login process completed.");

}