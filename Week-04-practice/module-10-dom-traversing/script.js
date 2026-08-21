// JavaScript can move between HTML elements
// in the DOM tree using DOM traversal properties.

// Main properties:
// 1. parentElement
// 2. children
// 3. childNodes
// 4. firstElementChild
// 5. lastElementChild
// 6. nextElementSibling
// 7. previousElementSibling

// <div id="container">
//     <h1 id="title">JavaScript DOM</h1>
//     <p id="message">Learning DOM Traversing</p>
//     <button id="btn">Click Me</button>
// </div>

// 1. Selecting Elements
const container = document.getElementById("container");
const title = document.getElementById("title");
const message = document.getElementById("message");
const button = document.getElementById("btn");

// 2. parentElement
// Gets the parent element.
console.log(title.parentElement);
console.log(message.parentElement);
console.log(button.parentElement);

// 3. children
// Gets all direct child elements.
console.log(container.children);

// 4. Accessing a Specific Child
console.log(container.children[0]);
console.log(container.children[1]);
console.log(container.children[2]);

// 5. childNodes
// Gets all child nodes including text nodes.
console.log(container.childNodes);

// 6. firstElementChild
// Gets the first child element.
console.log(container.firstElementChild);

// 7. lastElementChild
// Gets the last child element.
console.log(container.lastElementChild);

// 8. nextElementSibling
// Gets the next sibling element.
console.log(title.nextElementSibling);
console.log(message.nextElementSibling);

// 9. previousElementSibling
// Gets the previous sibling element.
console.log(message.previousElementSibling);
console.log(button.previousElementSibling);

// 10. Moving from Parent to Child
const firstChild = container.firstElementChild;
console.log(firstChild);

// 11. Moving from Child to Parent
const parent = title.parentElement;
console.log(parent);

// 12. Moving to Next Element
const nextElement = title.nextElementSibling;
console.log(nextElement);

// 13. Moving to Previous Element
const previousElement = button.previousElementSibling;
console.log(previousElement);

// 14. Changing a Parent Element
title.parentElement.style.backgroundColor = "lightgray";

// 15. Changing the First Child
container.firstElementChild.style.color = "blue";

// 16. Changing the Last Child
container.lastElementChild.style.backgroundColor = "yellow";

// 17. Changing the Next Sibling
title.nextElementSibling.style.color = "green";

// 18. Changing the Previous Sibling
button.previousElementSibling.style.fontWeight = "bold";

// 19. Practical Example
const currentElement = document.getElementById("message");
const parentElement = currentElement.parentElement;
parentElement.style.padding = "20px";
parentElement.style.border = "2px solid black";

// 20. Checking Parent
if (title.parentElement) {
    console.log("Parent exists");
}

// 21. Checking Next Element
if (title.nextElementSibling) {
    console.log("Next element exists");
}

// 22. Checking Previous Element
if (title.previousElementSibling) {
    console.log("Previous element exists");
}

// 23. Important Properties
// parentElement
// Gets the parent element.

// children
// Gets all child elements.

// childNodes
// Gets all child nodes.

// firstElementChild
// Gets the first child element.

// lastElementChild
// Gets the last child element.

// nextElementSibling
// Gets the next sibling element.

// previousElementSibling
// Gets the previous sibling element.

// 24. Common Examples
// Parent:
// element.parentElement;

// Children:
// element.children;

// First child:
// element.firstElementChild;

// Last child:
// element.lastElementChild;

// Next sibling:
// element.nextElementSibling;

// Previous sibling:
// element.previousElementSibling;

// 25. Practice
// 1. Select a parent element.
// 2. Find its children.
// 3. Find the first child.
// 4. Find the last child.
// 5. Find the parent of an element.
// 6. Find the next sibling.
// 7. Find the previous sibling.
// 8. Change the parent's background color.
// 9. Change the first child's text color.
// 10. Change the next sibling's content.