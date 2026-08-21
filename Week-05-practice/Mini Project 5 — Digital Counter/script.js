let count = 0;
let countDisplay = document.getElementById("count");
let decreaseButton = document.getElementById("decreaseButton");
let resetButton = document.getElementById("resetButton");
let increaseButton = document.getElementById("increaseButton");
increaseButton.addEventListener("click", function () {
    count++;
    countDisplay.textContent = count;
});
decreaseButton.addEventListener("click", function () {
    count--;
    countDisplay.textContent = count;
});
resetButton.addEventListener("click", function () {
    count = 0;
    countDisplay.textContent = count;
});