let description = document.getElementById("description");
let amount = document.getElementById("amount");
let incomeButton = document.getElementById("incomeButton");
let expenseButton = document.getElementById("expenseButton");
let incomeDisplay = document.getElementById("income");
let expenseDisplay = document.getElementById("expense");
let balanceDisplay = document.getElementById("balance");
let transactionList = document.getElementById("transactionList");
let income = 0;
let expense = 0;
function addTransaction(type) {
    let name = description.value.trim();
    let value = Number(amount.value);
    if (name === "" || amount.value === "") {
        alert("Please enter description and amount");
        return;
    }
    if (value <= 0) {
        alert("Please enter a valid amount");
        return;
    }
    let li = document.createElement("li");
    let transactionText = document.createElement("span");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteButton");
    if (type === "income") {
        income = income + value;
        transactionText.textContent =
            name + " + ₹" + value.toFixed(2);
        transactionText.classList.add("income");
    } else {
        expense = expense + value;
        transactionText.textContent =
            name + " - ₹" + value.toFixed(2);
        transactionText.classList.add("expense");
    }
    li.appendChild(transactionText);
    li.appendChild(deleteButton);
    transactionList.appendChild(li);
    updateDisplay();
    deleteButton.addEventListener("click", function () {
        li.remove();
        if (type === "income") {
            income = income - value;
        } else {
            expense = expense - value;
        }
        updateDisplay();
    });
    description.value = "";
    amount.value = "";
    description.focus();
}
function updateDisplay() {
    let balance = income - expense;
    incomeDisplay.textContent = income.toFixed(2);
    expenseDisplay.textContent = expense.toFixed(2);
    balanceDisplay.textContent = balance.toFixed(2);
}
incomeButton.addEventListener("click", function () {
    addTransaction("income");
});
expenseButton.addEventListener("click", function () {
    addTransaction("expense");
});