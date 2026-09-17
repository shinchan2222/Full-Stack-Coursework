let studentName = document.getElementById("studentName");
let marks = document.getElementById("marks");
let calculateButton = document.getElementById("calculateButton");
let result = document.getElementById("result");
calculateButton.addEventListener("click", function () {
    let name = studentName.value;
    let mark = Number(marks.value);
    let grade;
    if (name === "" || marks.value === "") {
        result.textContent = "Please enter all details";
        return;
    }
    if (mark < 0 || mark > 100) {
        result.textContent = "Please enter marks between 0 and 100";
        return;
    }
    if (mark >= 90) {
        grade = "A";
    } else if (mark >= 80) {
        grade = "B";
    } else if (mark >= 70) {
        grade = "C";
    } else if (mark >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }
    result.textContent = name + " got Grade " + grade;
});