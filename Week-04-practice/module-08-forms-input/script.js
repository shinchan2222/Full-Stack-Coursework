// JavaScript can read and work with
// values entered into HTML form elements.

// Main properties and methods:
// 1. value
// 2. checked
// 3. selectedIndex
// 4. form
// 5. reset()
// 6. preventDefault()

// <form id="form">
//     <input id="username" type="text" placeholder="Enter name">
//     <input id="email" type="email" placeholder="Enter email">
//     <input id="password" type="password" placeholder="Enter password">
//     <input id="age" type="number" placeholder="Enter age">
//     <input id="agree" type="checkbox">
//     <button type="submit">Submit</button>
// </form>

// <p id="result"></p>

// 1. Selecting Elements
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const age = document.getElementById("age");
const agree = document.getElementById("agree");
const result = document.getElementById("result");

// 2. Reading Input Value
// value is used to get the value entered by the user.
console.log(username.value);
console.log(email.value);
console.log(password.value);
console.log(age.value);

// 3. Setting Input Value
// JavaScript can also change the input value.
username.value = "Vimal";
email.value = "vimal@example.com";
age.value = "25";

// 4. Reading Checkbox
// checked returns true or false.
console.log(agree.checked);

// 5. Checking Checkbox
if (agree.checked) {
    console.log("Checkbox is selected");
} else {
    console.log("Checkbox is not selected");
}

// 6. input Event
// Runs whenever the user changes the input value.
username.addEventListener("input", function () {
    console.log(username.value);
});

// 7. Reading Multiple Inputs
username.addEventListener("input", function () {
    console.log("Name:", username.value);
    console.log("Email:", email.value);
    console.log("Age:", age.value);
});

// 8. Form Submit Event
// Runs when the form is submitted.
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");
});

// 9. Getting Form Values
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const ageValue = age.value;
    console.log(nameValue);
    console.log(emailValue);
    console.log(passwordValue);
    console.log(ageValue);
});

// 10. Displaying Form Data
form.addEventListener("submit", function (event) {
    event.preventDefault();
    result.textContent =
        `Name: ${username.value}, Email: ${email.value}, Age: ${age.value}`;
});

// 11. Checking Required Input
form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (username.value === "") {
        console.log("Please enter your name");
        return;
    }
    console.log("Name entered:", username.value);
});

// 12. Checking Multiple Inputs
form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (username.value === "") {
        console.log("Name is required");
        return;
    }
    if (email.value === "") {
        console.log("Email is required");
        return;
    }
    if (password.value === "") {
        console.log("Password is required");
        return;
    }
    console.log("All fields are filled");
});

// 13. Checking Checkbox
form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!agree.checked) {
        console.log("Please accept the terms");
        return;
    }
    console.log("Terms accepted");
});

// 14. Resetting the Form
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");
    form.reset();
});

// 15. Practical Example
form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (username.value === "") {
        result.textContent = "Please enter your name";
        return;
    }
    if (email.value === "") {
        result.textContent = "Please enter your email";
        return;
    }
    if (!agree.checked) {
        result.textContent = "Please accept the terms";
        return;
    }
    result.textContent = `Welcome ${username.value}!`;
});

// 16. Important Properties
// value
// Gets or changes the input value.

// checked
// Checks whether a checkbox is selected.

// reset()
// Clears all form fields.

// preventDefault()
// Stops the browser's default form submission.

// 17. Common Examples
// Get value:
// const name = username.value;

// Set value:
// username.value = "Vimal";

// Check checkbox:
// console.log(agree.checked);

// Reset form:
// form.reset();

// Stop form submission:
// event.preventDefault();

// Practice
// 1. Get a text input value.
// 2. Set a text input value.
// 3. Get an email value.
// 4. Get a number value.
// 5. Check whether a checkbox is selected.
// 6. Handle a form submit event.
// 7. Prevent the default form submission.
// 8. Check whether an input is empty.
// 9. Display form data on the page.
// 10. Reset the form after submission.