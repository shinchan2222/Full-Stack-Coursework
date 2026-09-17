let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");
let buttons = document.querySelectorAll("button");
// Add
buttons[0].addEventListener("click", function () {
    let number1 = Number(num1.value);
    let number2 = Number(num2.value);
    let answer = number1 + number2;
    result.textContent = answer;
});
// Subtract
buttons[1].addEventListener("click", function () {
    let number1 = Number(num1.value);
    let number2 = Number(num2.value);
    let answer = number1 - number2;
    result.textContent = answer;
});
// Multiply
buttons[2].addEventListener("click", function () {
    let number1 = Number(num1.value);
    let number2 = Number(num2.value);
    let answer = number1 * number2;
    result.textContent = answer;
});
// Divide
buttons[3].addEventListener("click", function () {
    let number1 = Number(num1.value);
    let number2 = Number(num2.value);
    if (number2 === 0) {
        result.textContent = "Cannot divide by zero";
    } else {
        let answer = number1 / number2;
        result.textContent = answer;
    }
});