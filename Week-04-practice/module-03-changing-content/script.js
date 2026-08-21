// JavaScript can change the content of HTML
// elements using DOM properties.

// Main properties:
// 1. textContent
// 2. innerText
// 3. innerHTML

// <h1 id="title">Original Title</h1>
// <p id="message">Original Message</p>
// <div id="box">Original Content</div>

// 1. textContent
// textContent gets or changes text content.
const title = document.getElementById("title");
console.log(title.textContent);

// Changing textContent
title.textContent = "Hello JavaScript";
console.log(title.textContent);

// 2. Changing Paragraph Content
const message = document.getElementById("message");
message.textContent = "JavaScript can change HTML content.";
console.log(message.textContent);

// 3. innerText
// innerText gets or changes visible text.
const box = document.getElementById("box");
console.log(box.innerText);

// Changing innerText
box.innerText = "This content was changed using innerText";

// 4. innerHTML
// innerHTML gets or changes HTML content.
console.log(box.innerHTML);

// Adding HTML using innerHTML
box.innerHTML = "<strong>Hello DOM</strong>";

// 5. Adding Multiple HTML Elements
box.innerHTML = `
    <h2>JavaScript DOM</h2>
    <p>We are learning DOM manipulation.</p>
`;

// 6. textContent vs innerHTML
// textContent treats HTML as text.
const example1 = document.getElementById("message");
example1.textContent = "<strong>Hello</strong>";

// innerHTML interprets HTML tags.
const example2 = document.getElementById("box");
example2.innerHTML = "<strong>Hello</strong>";

// 7. Using Variables
const studentName = "Vimal";
const student = document.getElementById("title");
student.textContent = "Welcome " + studentName;

// 8. Template Literals
const age = 25;
student.textContent = `My name is ${studentName} and I am ${age} years old.`;

// 9. Changing Content Dynamically
const heading = document.getElementById("title");
const userName = "Vimal";
heading.textContent = `Hello ${userName}!`;

// 10. Important Difference
// textContent - Works with text.
// innerText - Works with visible text.
// innerHTML - Works with HTML content.

// Practical Example
const output = document.getElementById("message");
output.innerHTML = `
    <h2>Welcome to JavaScript DOM</h2>
    <p>You are learning how to change HTML content.</p>
`;

// Practice

// 1. Change an h1 using textContent.
// 2. Change a paragraph using innerText.
// 3. Add HTML using innerHTML.
// 4. Display your name using a variable.
// 5. Display your name and age using a template literal.
// 6. Create a heading and paragraph dynamically
//    using innerHTML.