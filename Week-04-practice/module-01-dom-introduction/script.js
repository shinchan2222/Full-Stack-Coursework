// DOM stands for Document Object Model.
// The browser converts HTML into a DOM tree.
// JavaScript can use the DOM to:
// 1. Select HTML elements
// 2. Change HTML content
// 3. Change CSS styles
// 4. Add or remove elements
// 5. Handle user event

// 1. Accessing the Document
console.log(document);

// 2. Accessing the HTML Document
console.log(document.documentElement);

// 3. Accessing the Head
console.log(document.head);

// 4. Accessing the Body
console.log(document.body);

// 5. Page Title
// console.log(document.title);


// 6. Changing Page Title
document.title = "JavaScript DOM";
console.log(document.title);

// 7. Accessing Body Content
console.log(document.body.innerHTML);


// 8. Changing Body Content

// Do not run this if you want to keep
// your existing HTML page.
// document.body.innerHTML = "<h1>Hello DOM</h1>";

// 9. DOM Example

// HTML:
// <h1 id="title">Hello</h1>

// JavaScript:
// const title = document.getElementById("title");
// title.textContent = "Hello JavaScript";


// 10. Important DOM Properties
// document
// document.title
// document.head
// document.body
// document.documentElement
// document.body.innerHTML

// Practice
// 1. Print the document.
// 2. Print the HTML element.
// 3. Print the head.
// 4. Print the body.
// 5. Print the current page title.
// 6. Change the page title.
// 7. Print the body HTML.