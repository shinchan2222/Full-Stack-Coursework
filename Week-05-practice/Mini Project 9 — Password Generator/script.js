let lengthInput = document.getElementById("length");
let generateButton = document.getElementById("generateButton");
let password = document.getElementById("password");
generateButton.addEventListener("click", function () {
    let length = Number(lengthInput.value);
    if (length < 4) {
        password.textContent = "Password length must be at least 4";
        return;
    }
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        generatedPassword += characters[randomIndex];
    }
    password.textContent = generatedPassword;
});