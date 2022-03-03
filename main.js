// Inputs
const bill = document.getElementById("bill");
const people = document.getElementById("people");
const buttonGroup = document.querySelectorAll(".buttonGroup");
// const tipUnknown = document.getElementById("tip-unknown").value;
// Outputs
const amount = document.getElementById("amount");
const total = document.getElementById("total");
const reset = document.getElementById("reset");
// Calculation Functions
let tipPercent;

// Button Colors

function clearButtons() {
    buttonGroup.forEach((bttn) => {
        bttn.classList.remove('active')
    })
}

buttonGroup.forEach((bttn) => {
  bttn.addEventListener("mousedown", () => {
    tipPercent = bttn.value
    console.log(tipPercent)
    clearButtons()
    bttn.classList.add('active')
  });
});



// Calc Functionality
function randomPercent() {}

function rester() {
  bill = null;
  people = null;
  amount = null;
  total = null;
}

function tipAmount() {
  let subTotal = bill.value * (tipPercent / 100);
  let tipAmount = subTotal / people.value;
  console.log(tipAmount);
  amount.innerHTML = tipAmount;
  return tipAmount;
}
function totalPrice() {
  let subTotal = bill.value * (tipPercent / 100);
  let totalPrice = (Number(bill.value) + subTotal) / people.value;
  console.log(totalPrice);
  total.innerHTML = totalPrice;
  return totalPrice;
}

function calculate() {
  totalPrice();
  tipAmount();
}

// amount.addEventListener(onchange, () => {});
