// JavaScript can select HTML elements
// from the DOM and work with them.

// Main methods:
// 1. getElementById()
// 2. getElementsByClassName()
// 3. getElementsByTagName()
// 4. querySelector()
// 5. querySelectorAll()

// <h1 id="title">Hello JavaScript</h1>
// <p class="text">Learning DOM</p>
// <p class="text">Learning JavaScript</p>
// <button id="btn">Click Me</button>

// 1. getElementById()
// Selects one element using its id.
const title = document.getElementById("title");
console.log(title);

// 2. getElementsByClassName()
// Selects all elements with a specific class.
const texts = document.getElementsByClassName("text");
console.log(texts);

// Accessing Elements from HTMLCollection
console.log(texts[0]);
console.log(texts[1]);

// 3. getElementsByTagName()
// Selects all elements using their HTML tag.
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// Accessing Elements from HTMLCollection
console.log(paragraphs[0]);
console.log(paragraphs[1]);

// 4. querySelector()
// Selects the first matching element.
// Select by id
const titleElement = document.querySelector("#title");
console.log(titleElement);
// Select by class
const firstText = document.querySelector(".text");
console.log(firstText);
// Select by tag
const firstParagraph = document.querySelector("p");
console.log(firstParagraph);

// 5. querySelectorAll()
// Selects all matching elements.
const allTexts = document.querySelectorAll(".text");
console.log(allTexts);

// Accessing NodeList Elements
console.log(allTexts[0]);
console.log(allTexts[1]);

// 6. Selecting a Button
const button = document.querySelector("#btn");
console.log(button);

// 7. Changing Selected Element
title.textContent = "DOM Selection";

// 8. Changing Multiple Elements
allTexts[0].textContent = "Learning JavaScript";
allTexts[1].textContent = "Learning DOM";

// 9. Difference Between Selectors
// getElementById()
// Selects one element by id.

// getElementsByClassName()
// Selects multiple elements by class.

// getElementsByTagName()
// Selects multiple elements by tag.

// querySelector()
// Selects the first matching element.

// querySelectorAll()
// Selects all matching elements.

// 10. Practical Example
const heading = document.querySelector("#title");
const buttonElement = document.querySelector("#btn");
console.log("Heading:", heading);
console.log("Button:", buttonElement);

// Practice

// 1. Select an element using getElementById().
// 2. Select elements using getElementsByClassName().
// 3. Select elements using getElementsByTagName().
// 4. Select an element using querySelector().
// 5. Select multiple elements using querySelectorAll().
// 6. Change the text of the heading.
// 7. Change the text of both paragraphs.