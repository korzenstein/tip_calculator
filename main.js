// Inputs
let bill = document.getElementById("bill");
let people = document.getElementById("people");
let buttonGroup = document.querySelectorAll(".buttonGroup");
let zero = document.getElementById("zero")


// Outputs
let amount = document.getElementById("amount");
let total = document.getElementById("total");
let reset = document.getElementById("reset");
// Calculation Functions
let tipPercent;

// Warning Input

people.addEventListener("input", () => {
  return(people.value >= 1 ? zero.style.visibility = "hidden" : zero.style.visibility = "inline")
})
// (people.value >= 1) {
//     zero.style.display === "none"
 

// Button Colors

function clearButtons() {
  buttonGroup.forEach((bttn) => {
    bttn.classList.remove("active");
  });
}

buttonGroup.forEach((bttn) => {
  bttn.addEventListener("mousedown", () => {
    tipPercent = bttn.value;
    console.log(tipPercent);
    clearButtons();
    bttn.classList.add("active");
  });
});

// Calc Functionality
function randomPercent() {}

function rester() {
  amount.innerHTML = "$0.00"
  total.innerHTML = "$0.00"
  let bill = null;
  let people = null;  
}

function tipAmount() {
  let subTotal = bill.value * (tipPercent / 100);
  let tipAmount = subTotal / people.value;
  console.log(tipAmount);
  amount.innerHTML = (`$${tipAmount.toFixed(2)}`);
  return tipAmount;
}
function totalPrice() {
  let subTotal = bill.value * (tipPercent / 100);
  let totalPrice = (Number(bill.value) + subTotal) / people.value;
  console.log;
  total.innerHTML = (`$${totalPrice.toFixed(2)}`);
  return totalPrice;
}

function calculate() {
  totalPrice();
  tipAmount();
}

// amount.addEventListener(onchange, () => {});
