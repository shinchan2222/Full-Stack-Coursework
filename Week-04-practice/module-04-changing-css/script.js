// JavaScript can change the CSS styles
// of HTML elements using the DOM.

// Main property: element.style.property

// <h1 id="title">JavaScript DOM</h1>
// <p id="message">Learning CSS with JavaScript</p>
// <div id="box">Box</div>
// <button id="btn">Change Style</button>

// 1. Selecting an Element
const title = document.getElementById("title");
console.log(title);

// 2. Changing Text Color
title.style.color = "blue";

// 3. Changing Background Color
title.style.backgroundColor = "yellow";

// 4. Changing Font Size
title.style.fontSize = "40px";

// 5. Changing Font Family
title.style.fontFamily = "Arial";

// 6. Changing Font Weight
title.style.fontWeight = "bold";

// 7. Changing Text Alignment
title.style.textAlign = "center";

// 8. Changing Multiple CSS Properties
const message = document.getElementById("message");
message.style.color = "green";
message.style.fontSize = "20px";
message.style.backgroundColor = "lightgray";
message.style.padding = "15px";
message.style.border = "2px solid black";

// 9. Changing Box Styles
const box = document.getElementById("box");
box.style.width = "200px";
box.style.height = "100px";
box.style.backgroundColor = "orange";
box.style.color = "white";
box.style.padding = "20px";
box.style.margin = "20px";
box.style.textAlign = "center";

// 10. CSS Property Naming
// CSS: background-color
// JavaScript: backgroundColor

// CSS: font-size
// JavaScript: fontSize

// CSS: border-radius
// JavaScript: borderRadius

// CSS: margin-top
// JavaScript: marginTop

// CSS: padding-left
// JavaScript: paddingLeft

// 11. Border Radius
box.style.borderRadius = "15px";

// 12. Box Shadow
box.style.boxShadow = "0 0 10px gray";

// 13. Changing Button Style
const button = document.getElementById("btn");
button.style.backgroundColor = "black";
button.style.color = "white";
button.style.padding = "10px 20px";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";

// 14. Changing Style on Button Click
button.addEventListener("click", function () {
    title.style.color = "red";
    title.style.backgroundColor = "lightblue";
    title.style.fontSize = "50px";
});

// 15. Changing Box Style on Click
button.addEventListener("click", function () {
    box.style.backgroundColor = "purple";
    box.style.width = "300px";
    box.style.height = "150px";
    box.style.borderRadius = "25px";
});

// 16. Practical Example
const heading = document.getElementById("title");
heading.style.color = "darkblue";
heading.style.fontSize = "35px";
heading.style.textAlign = "center";

// Important
// JavaScript:
// element.style.color = "red";

// JavaScript:
// element.style.backgroundColor = "yellow";

// JavaScript:
// element.style.fontSize = "30px";

// JavaScript:
// element.style.margin = "20px";

// JavaScript:
// element.style.padding = "10px";

// Practice
// 1. Change an h1 color.
// 2. Change the background color.
// 3. Change the font size.
// 4. Add padding.
// 5. Add margin.
// 6. Add a border.
// 7. Add border radius.
// 8. Change button styles.
// 9. Change styles when a button is clicked.