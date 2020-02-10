// VARIALBES
const amount = document.getElementById("amount");
const interest = document.getElementById("interest");
const years = document.getElementById("years");
const monthlyPayment = document.getElementById("monthly-payment");
const totalPayment = document.getElementById("total-payment");
const totalInterest = document.getElementById("total-interest")

// VARIABLES FOR CALCULATIONS

const principal = parseFloat(amount.value);
const calculatedInterest = parseFloat(interest.value) / 100 / 12;
const calculatedPayments = parseFloat(years.value) * 12;

// VARIABLES FOR MONTHLY PAYMENT
const x = Math.pow(1 + calculatedInterest, calculatedPayments);
const monthly = (principal * x * calculatedInterest) / (x - 1)

if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2)
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly* calculatedPayments) - principal).toFixed(2);
}else{
    console.log("please check your numbers")
}

// SUBMIT
document.getElementById("loan-form").addEventListener("submit", calculateResults)

// RESULTS
function calculateResults(e) {
    console.log("calculating")
    e.preventDefault()
}


// // TOTAL INTEREST CALCULATION
// function interestCalc(interest) {
//     let newInterest = interest * .01
//     // I = PRT

//     totalInterest = amount * newInterest * years
//     totalInterest.innerHTML = totalInterest


// }
// console.log(interestCalc(10))


// // TOTAL PAYMENT CALCULATION

// function totalCalc(amount) {
//     let newPayment;
//     newPayment = amount + interestCalc()

// }

// // MONTHLY PAYMENT

// function monthlyCalc(years) {
//     let monthlyPay;
//     monthlyPay = Math.floor(totalCalc() / 12)
//     monthlyPay.innerHTML = monthlyPay
// }


// // ROLL UP
// submit.addEventListener("click", function rollUp() {
//     interestCalc();
//     paymentCalc();
//     monthlyCalc();

//     submit.addEventListener("click", function () {
//         event.preventDefault()
//     })

// })



