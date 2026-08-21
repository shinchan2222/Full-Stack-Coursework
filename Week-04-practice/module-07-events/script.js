// JavaScript can respond to user actions
// using DOM events.

// Common events:
// 1. click
// 2. dblclick
// 3. mouseover
// 4. mouseout
// 5. mouseenter
// 6. mouseleave
// 7. keydown
// 8. keyup
// 9. input
// 10. change
// 11. submit

// <h1 id="title">JavaScript DOM</h1>
// <button id="btn">Click Me</button>
// <input id="username" type="text" placeholder="Enter name">
// <form id="form">
//     <input id="email" type="email">
//     <button type="submit">Submit</button>
// </form>

// 1. Selecting Elements
const title = document.getElementById("title");
const button = document.getElementById("btn");
const username = document.getElementById("username");
const form = document.getElementById("form");

// 2. click Event
// Runs when the button is clicked.
button.addEventListener("click", function () {
    console.log("Button clicked");
});

// 3. Changing Content on Click
button.addEventListener("click", function () {
    title.textContent = "Button Was Clicked";
});

// 4. Changing Style on Click
button.addEventListener("click", function () {
    title.style.color = "blue";
    title.style.fontSize = "40px";
});

// 5. dblclick Event
// Runs when the element is double-clicked.
title.addEventListener("dblclick", function () {
    console.log("Title double-clicked");
});

// 6. mouseover Event
// Runs when the mouse moves over an element.
title.addEventListener("mouseover", function () {
    console.log("Mouse is over the title");
});

// 7. mouseout Event
// Runs when the mouse leaves an element.
title.addEventListener("mouseout", function () {
    console.log("Mouse left the title");
});

// 8. mouseenter Event
// Runs when the mouse enters an element.
title.addEventListener("mouseenter", function () {
    title.style.backgroundColor = "yellow";
});

// 9. mouseleave Event
// Runs when the mouse leaves an element.
title.addEventListener("mouseleave", function () {
    title.style.backgroundColor = "white";
});

// 10. keydown Event
// Runs when a keyboard key is pressed.
username.addEventListener("keydown", function () {
    console.log("Key pressed");
});

// 11. keyup Event
// Runs when a keyboard key is released.
username.addEventListener("keyup", function () {
    console.log("Key released");
});

// 12. input Event
// Runs whenever the input value changes.
username.addEventListener("input", function () {
    console.log(username.value);
});

// 13. change Event
// Runs when the input value changes
// and the element loses focus.
username.addEventListener("change", function () {
    console.log("Input changed:", username.value);
});

// 14. Event Object
// The event object contains information
// about the event that occurred.
button.addEventListener("click", function (event) {
    console.log(event);
});

// 15. Event Target
// target tells which element triggered the event.
button.addEventListener("click", function (event) {
    console.log(event.target);
});

// 16. preventDefault()
// Used to stop the browser's default action.
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");
});

// 17. Practical Example
button.addEventListener("click", function () {
    title.textContent = "Welcome to JavaScript";
    title.style.color = "green";
    button.textContent = "Clicked";
});

// 18. Important Events
// click       - Mouse click.
// dblclick    - Double click.
// mouseover   - Mouse moves over an element.
// mouseout    - Mouse leaves an element.
// mouseenter  - Mouse enters an element.
// mouseleave  - Mouse leaves an element.
// keydown     - Keyboard key is pressed.
// keyup       - Keyboard key is released.
// input       - Input value changes.
// change      - Input change is completed.
// submit      - Form is submitted.

// Practice
// 1. Create a button and detect a click.
// 2. Change heading text when clicked.
// 3. Change heading color when clicked.
// 4. Detect a double-click.
// 5. Detect mouseover.
// 6. Detect mouseout.
// 7. Detect keydown.
// 8. Detect keyup.
// 9. Display input value using input event.
// 10. Prevent a form from submitting using preventDefault().