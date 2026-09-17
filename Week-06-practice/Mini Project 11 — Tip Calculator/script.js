let bill = document.getElementById("bill");
let tip = document.getElementById("tip");
let calculateButton = document.getElementById("calculateButton");
let tipResult = document.getElementById("tipResult");
let totalResult = document.getElementById("totalResult");
calculateButton.addEventListener("click", function () {
    let billAmount = Number(bill.value);
    let tipPercentage = Number(tip.value);
    if (bill.value === "" || tip.value === "") {
        tipResult.textContent = "Please enter all details";
        totalResult.textContent = "";
        return;
    }
    if (billAmount < 0 || tipPercentage < 0) {
        tipResult.textContent = "Please enter valid values";
        totalResult.textContent = "";
        return;
    }
    let tipAmount = billAmount * tipPercentage / 100;
    let totalAmount = billAmount + tipAmount;
    tipResult.textContent = "Tip Amount: ₹" + tipAmount.toFixed(2);
    totalResult.textContent = "Total Amount: ₹" + totalAmount.toFixed(2);
});