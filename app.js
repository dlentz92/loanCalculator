var amount = document.getElementById("#amount");
var interest = document.getElementById("#interest");
var years = document.getElementById("#years");
var submit = document.getElementById("#submit")
var monthlyPayment = document.getElementById("#monthly-payment");
var totalPayment = document.getElementById("#total-payment");
var totalInterest = document.getElementById("#total-interest")




// TOTAL INTEREST CALCULATION
function interestCalc(interest){
    let newInterest = interest * .01
// I = PRT

totalInterest = amount*newInterest*years
totalInterest.innerHTML = totalInterest


}
console.log(interestCalc(10))


// TOTAL PAYMENT CALCULATION

function totalCalc(amount){
    let newPayment;
    newPayment = amount + interestCalc()

}

// MONTHLY PAYMENT

function monthlyCalc(years){
    let monthlyPay;
    monthlyPay = Math.floor(totalCalc()/12)
    monthlyPay.innerHTML = monthlyPay
}


// ROLL UP
submit.addEventListener("click", function rollUp(){
interestCalc();
paymentCalc();
monthlyCalc();

submit.addEventListener("click", function(){
    event.preventDefault()
})

})



