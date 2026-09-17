let generateButton = document.getElementById("generateButton");
let colorCode = document.getElementById("colorCode");
generateButton.addEventListener("click", function () {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * 16);
        color = color + letters[randomNumber];
    }
    document.body.style.backgroundColor = color;
    colorCode.textContent = color;
});