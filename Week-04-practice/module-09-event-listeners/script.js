// JavaScript can listen for user actions
// using addEventListener().

// Main method:
// 1. addEventListener()

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
// <div id="box">Move Mouse Here</div>

// 1. Selecting Elements
const title = document.getElementById("title");
const button = document.getElementById("btn");
const username = document.getElementById("username");
const box = document.getElementById("box");

// 2. addEventListener()
// Used to attach an event to an element.
button.addEventListener("click", function () {
    console.log("Button clicked");
});

// 3. Changing Text with Event Listener
button.addEventListener("click", function () {
    title.textContent = "Button Clicked";
});

// 4. Changing Style with Event Listener
button.addEventListener("click", function () {
    title.style.color = "blue";
    title.style.fontSize = "40px";
});

// 5. Using a Named Function
function changeTitle() {
    title.textContent = "Title Changed";
}

button.addEventListener("click", changeTitle);

// 6. Removing an Event Listener
// removeEventListener() removes a previously
// attached named function.
button.removeEventListener("click", changeTitle);

// 7. dblclick Event
button.addEventListener("dblclick", function () {
    console.log("Button double-clicked");
});

// 8. mouseover Event
box.addEventListener("mouseover", function () {
    console.log("Mouse is over the box");
});

// 9. mouseout Event
box.addEventListener("mouseout", function () {
    console.log("Mouse left the box");
});

// 10. mouseenter Event
box.addEventListener("mouseenter", function () {
    box.style.backgroundColor = "yellow";
});

// 11. mouseleave Event
box.addEventListener("mouseleave", function () {
    box.style.backgroundColor = "white";
});

// 12. keydown Event
username.addEventListener("keydown", function (event) {
    console.log("Key pressed:", event.key);
});

// 13. keyup Event
username.addEventListener("keyup", function (event) {
    console.log("Key released:", event.key);
});

// 14. input Event
username.addEventListener("input", function () {
    console.log("Current value:", username.value);
});

// 15. change Event
username.addEventListener("change", function () {
    console.log("Value changed:", username.value);
});

// 16. Event Object
button.addEventListener("click", function (event) {
    console.log(event);
});

// 17. event.target
button.addEventListener("click", function (event) {
    console.log("Clicked element:", event.target);
});

// 18. Event Type
button.addEventListener("click", function (event) {
    console.log("Event type:", event.type);
});

// 19. Multiple Event Listeners
button.addEventListener("click", function () {
    console.log("First event listener");
});

button.addEventListener("click", function () {
    console.log("Second event listener");
});

// 20. Practical Example
button.addEventListener("click", function () {
    title.textContent = "Welcome to JavaScript DOM";
    title.style.color = "green";
    title.style.backgroundColor = "lightgray";
});

// 21. Important Method
// addEventListener()
// Attaches an event to an element.

// 22. Common Syntax
// element.addEventListener("event", function () {
//     code
// });

// 23. Removing an Event
// element.removeEventListener("event", functionName);

// 24. Important Events
// click       - Runs when clicked.
// dblclick    - Runs when double-clicked.
// mouseover   - Runs when mouse moves over.
// mouseout    - Runs when mouse leaves.
// mouseenter  - Runs when mouse enters.
// mouseleave  - Runs when mouse leaves.
// keydown     - Runs when a key is pressed.
// keyup       - Runs when a key is released.
// input       - Runs when input changes.
// change      - Runs when input change is completed.

// 25. Practice
// 1. Add a click event to a button.
// 2. Change heading text on click.
// 3. Change heading color on click.
// 4. Add a double-click event.
// 5. Add a mouseover event.
// 6. Add a mouseout event.
// 7. Add a mouseenter event.
// 8. Add a mouseleave event.
// 9. Detect which keyboard key was pressed.
// 10. Display the input value using an event listener.