let expenseName = document.getElementById("expenseName");
let expenseAmount = document.getElementById("expenseAmount");
let addButton = document.getElementById("addButton");
let expenseList = document.getElementById("expenseList");
let total = document.getElementById("total");
let totalAmount = 0;
addButton.addEventListener("click", function () {
    let name = expenseName.value.trim();
    let amount = Number(expenseAmount.value);
    if (name === "" || expenseAmount.value === "") {
        alert("Please enter expense name and amount");
        return;
    }
    if (amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }
    let li = document.createElement("li");
    let expenseText = document.createElement("span");
    expenseText.textContent = name + " - ₹" + amount.toFixed(2);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteButton");
    li.appendChild(expenseText);
    li.appendChild(deleteButton);
    expenseList.appendChild(li);
    totalAmount = totalAmount + amount;
    total.textContent = totalAmount.toFixed(2);
    deleteButton.addEventListener("click", function () {
        li.remove();
        totalAmount = totalAmount - amount;
        total.textContent = totalAmount.toFixed(2);
    });
    expenseName.value = "";
    expenseAmount.value = "";
    expenseName.focus();
});