// JavaScript can create, add,
// and remove HTML elements.

// Main methods:
// 1. createElement()
// 2. appendChild()
// 3. append()
// 4. prepend()
// 5. remove()
// 6. removeChild()

// <div id="container"></div>
// <button id="addBtn">Add Element</button>
// <button id="removeBtn">Remove Element</button>

// 1. Selecting the Container
const container = document.getElementById("container");

// 2. createElement()
// Used to create a new HTML element.
const heading = document.createElement("h1");
console.log(heading);

// 3. Adding Text
// textContent is used to add text to the new element.
heading.textContent = "Hello JavaScript DOM";

// 4. appendChild()
// Adds the new element as the last child.
container.appendChild(heading);

// 5. Creating a Paragraph
const paragraph = document.createElement("p");
paragraph.textContent = "This paragraph was created using JavaScript.";
container.appendChild(paragraph);

// 6. Creating a Button
const newButton = document.createElement("button");
newButton.textContent = "New Button";
container.appendChild(newButton);

// 7. append()
// append() can add elements or text.
const message = document.createElement("p");
message.textContent = "Message added using append().";
container.append(message);

// 8. prepend()
// prepend() adds an element at the beginning.
const firstElement = document.createElement("h2");
firstElement.textContent = "I am the first element.";
container.prepend(firstElement);

// 9. Creating Multiple Elements
const title = document.createElement("h2");
title.textContent = "DOM Elements";
const text = document.createElement("p");
text.textContent = "JavaScript can create HTML elements.";
container.appendChild(title);
container.appendChild(text);

// 10. Adding CSS to Created Element
const box = document.createElement("div");
box.textContent = "Dynamic Box";
box.style.width = "200px";
box.style.padding = "20px";
box.style.backgroundColor = "orange";
box.style.color = "white";
box.style.margin = "10px";
container.appendChild(box);

// 11. Adding an Attribute
box.setAttribute("id", "dynamicBox");
box.setAttribute("data-type", "box");

// 12. remove()
// Removes an element directly.
box.remove();

// 13. removeChild()
// Removes a child element from its parent.
const removeParagraph = document.createElement("p");
removeParagraph.textContent = "This will be removed.";
container.appendChild(removeParagraph);
container.removeChild(removeParagraph);

// 14. Creating Elements with a Button
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "New paragraph added!";
    container.appendChild(newParagraph);
});

// 15. Removing Elements with a Button
const removeBtn = document.getElementById("removeBtn");
removeBtn.addEventListener("click", function () {
    const lastElement = container.lastElementChild;
    if (lastElement) {
        lastElement.remove();
    }
});

// 16. Creating a List
const list = document.createElement("ul");

const item1 = document.createElement("li");
item1.textContent = "HTML";

const item2 = document.createElement("li");
item2.textContent = "CSS";

const item3 = document.createElement("li");
item3.textContent = "JavaScript";
list.append(item1, item2, item3);
container.appendChild(list);

// 17. Creating a Card
const card = document.createElement("div");
card.innerHTML = `
    <h2>JavaScript DOM</h2>
    <p>Learning to create elements dynamically.</p>
`;

card.style.padding = "20px";
card.style.border = "2px solid black";
card.style.margin = "10px";
container.appendChild(card);

// 18. Important Methods
// createElement()    - Creates a new HTML element.
// appendChild()      - Adds an element at the end.
// append()           - Adds elements or text.
// prepend()          - Adds elements at the beginning.
// remove()           - Removes an element.
// removeChild()      - Removes a child element.

// Practice
// 1. Create an h1 using createElement().
// 2. Add text using textContent.
// 3. Add the h1 using appendChild().
// 4. Create a paragraph.
// 5. Create a button.
// 6. Add CSS to a created element.
// 7. Add an attribute to a created element.
// 8. Remove an element using remove().
// 9. Remove an element using removeChild().
// 10. Create a list with three li elements.