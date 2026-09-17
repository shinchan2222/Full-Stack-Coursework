let description = document.getElementById("description");
let amount = document.getElementById("amount");
let incomeButton = document.getElementById("incomeButton");
let expenseButton = document.getElementById("expenseButton");
let balance = document.getElementById("balance");
let incomeDisplay = document.getElementById("income");
let expenseDisplay = document.getElementById("expense");
let transactionList = document.getElementById("transactionList");
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
function saveTransactions() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}
function displayTransactions() {
    transactionList.innerHTML = "";
    let incomeTotal = 0;
    let expenseTotal = 0;
    transactions.forEach(function (transaction, index) {
        let li = document.createElement("li");
        let text = document.createElement("span");
        text.textContent =
            transaction.description + " - ₹" + transaction.amount;
        if (transaction.type === "income") {
            text.classList.add("income");
            incomeTotal += transaction.amount;
        } else {
            text.classList.add("expense");
            expenseTotal += transaction.amount;
        }
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("deleteButton");
        deleteButton.addEventListener("click", function () {
            transactions.splice(index, 1);
            saveTransactions();
            displayTransactions();
        });
        li.appendChild(text);
        li.appendChild(deleteButton);
        transactionList.appendChild(li);
    });
    let currentBalance = incomeTotal - expenseTotal;
    incomeDisplay.textContent = incomeTotal.toFixed(2);
    expenseDisplay.textContent = expenseTotal.toFixed(2);
    balance.textContent = currentBalance.toFixed(2);
}
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
    let transaction = {
        description: name,
        amount: value,
        type: type
    };
    transactions.push(transaction);
    saveTransactions();
    displayTransactions();
    description.value = "";
    amount.value = "";
    description.focus();
}
incomeButton.addEventListener("click", function () {
    addTransaction("income");
});
expenseButton.addEventListener("click", function () {
    addTransaction("expense");
});
displayTransactions();