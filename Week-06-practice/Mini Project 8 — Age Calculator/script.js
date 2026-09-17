let birthDate = document.getElementById("birthDate");
let calculateButton = document.getElementById("calculateButton");
let result = document.getElementById("result");
calculateButton.addEventListener("click", function () {
    if (birthDate.value === "") {
        result.textContent = "Please select your date of birth";
        return;
    }
    let dateOfBirth = new Date(birthDate.value);
    let today = new Date();
    let age = today.getFullYear() - dateOfBirth.getFullYear();
    let month = today.getMonth() - dateOfBirth.getMonth();
    if (
        month < 0 ||
        (month === 0 && today.getDate() < dateOfBirth.getDate())
    ) {
        age--;
    }
    if (age < 0) {
        result.textContent = "Please enter a valid date";
        return;
    }
    result.textContent = "Your age is " + age + " years";
});