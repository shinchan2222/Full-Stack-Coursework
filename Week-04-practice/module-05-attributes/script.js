// JavaScript can read, change, add,
// and remove HTML attributes.

// Main methods:
// 1. getAttribute()
// 2. setAttribute()
// 3. removeAttribute()
// 4. hasAttribute()

// <img id="image" src="old.jpg" alt="Old Image">
// <a id="link" href="https://example.com">Visit</a>
// <input id="username" type="text" placeholder="Enter name">
// <button id="btn">Change Attributes</button>

// 1. Selecting Elements
const image = document.getElementById("image");
const link = document.getElementById("link");
const username = document.getElementById("username");
const button = document.getElementById("btn");

// 2. getAttribute()
// Used to get the value of an attribute.
console.log(image.getAttribute("src"));
console.log(image.getAttribute("alt"));
console.log(link.getAttribute("href"));
console.log(username.getAttribute("type"));

// 3. setAttribute()
// Used to add or change an attribute.
image.setAttribute("src", "new-image.jpg");
image.setAttribute("alt", "New Image");

// 4. Changing Link
link.setAttribute("href", "https://www.google.com");
link.setAttribute("target", "_blank");

// 5. Changing Input Attributes
username.setAttribute("placeholder", "Enter your username");
username.setAttribute("type", "text");

// 6. removeAttribute()
// Removes an attribute from an element.
username.removeAttribute("placeholder");

// 7. hasAttribute()
// Checks whether an attribute exists.
console.log(image.hasAttribute("src"));
console.log(image.hasAttribute("alt"));
console.log(username.hasAttribute("placeholder"));

// 8. Adding Custom Attribute
// JavaScript can create custom data attributes.
image.setAttribute("data-id", "101");
console.log(image.getAttribute("data-id"));

// 9. data-* Attributes
// // HTML:
// <div id="box" data-user="Vimal"></div>
const box = document.getElementById("box");
box.setAttribute("data-user", "Vimal");
console.log(box.getAttribute("data-user"));

// 10. Changing Input Value
// value is commonly used with input elements.
username.value = "Vimal";
console.log(username.value);

// 11. Changing Button Attribute
button.setAttribute("title", "Click this button");
console.log(button.getAttribute("title"));

// 12. Removing Button Attribute
button.removeAttribute("title");

// 13. Practical Example
button.addEventListener("click", function () {
    image.setAttribute("src", "new-image.jpg");
    image.setAttribute("alt", "Updated Image");
    link.setAttribute("href", "https://www.google.com");
    username.setAttribute("placeholder", "Enter your name");
});

// 14. Important Methods
// getAttribute()     - Gets an attribute value.

// setAttribute()     - Adds or changes an attribute.

// removeAttribute()  - Removes an attribute.

// hasAttribute()     - Checks whether an attribute exists.

// 15. Common Examples
// Get: element.getAttribute("src");
// Set: element.setAttribute("src", "image.jpg");
// Remove: element.removeAttribute("src");
// Check: element.hasAttribute("src");

// Practice
// 1. Get an image src.
// 2. Change an image src.
// 3. Change an image alt.
// 4. Change a link href.
// 5. Add a target attribute.
// 6. Remove an attribute.
// 7. Check whether an attribute exists.
// 8. Add a data-* attribute.
// 9. Change an input placeholder.
// 10. Change an input value.