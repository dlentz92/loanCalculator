// SUBMIT
document.getElementById("loan-form").addEventListener("submit", function (e) {
    // HIDE RESULTS
    document.getElementById("results").style.display = "none";

    // SHOW LOADING
    document.getElementById("loading").style.display = "block";
    setTimeout(calculateResults, 1000);

    e.preventDefault()
});

// RESULTS
function calculateResults() {

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
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        // monthlyPayment.value = monthly.toFixed(2)
        // totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        // totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        // UPDATE TO ADD DECIMAL POINTS
        function thousands_separators(num) {
            var num_parts = num.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return num_parts.join(".");
        }
        // MONTHLY PAYMENT
        var monthlyResult = monthly.toFixed(2);
        var monthlyFormatted = thousands_separators(monthlyResult);
        monthlyPayment.value = monthlyFormatted
        console.log(monthlyFormatted);

        // TOTAL PAYMENT
        var totalResult = (monthly * calculatedPayments).toFixed(2);
        var totalFormatted = thousands_separators(totalResult);
        totalPayment.value = totalFormatted
        console.log(totalFormatted);

        // TOTAL INTEREST
        totalInterest.value = (((monthly * calculatedPayments) - principal) / 1000).toFixed(2);

        // SHOW RESULTS
        document.getElementById("results").style.display = "block";
        // HIDE LOADER
        document.getElementById("loading").style.display = "none";

    } else {
        showError("Please check that all fields are completed")
    }
}

function showError(error) {
    // CREATE A DIV
    const errorDiv = document.createElement("div");

    // SHOW RESULTS
    document.getElementById("results").style.display = "none";
    // HIDE LOADER
    document.getElementById("loading").style.display = "none";

    // GET ELEMENTS
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading")
    // ADD CLASS
    errorDiv.className = "alert alert-danger";
    // CREATE TEXT NODE AND APPEND TO DIV
    errorDiv.appendChild(document.createTextNode(error));
    // INSERT ERROR BEFORE HEADING
    card.insertBefore(errorDiv, heading);
    // CLEAR ERROR AFTER 3 SECONDS
    setTimeout(clearError, 3000)
}
// CLEAR ERROR
function clearError() {
    document.querySelector(".alert").remove();
}