// Compound Interest Calculator
// Formula: A = P(1 + r/n)^(n*t)
// Where: A = amount, P = principal, r = rate of interest, n = times compounded per year, t = time in years

// Predefined (static) values
const P = 100000;   // principal amount
const r = 0.10;      // annual interest rate (10%)
const n = 1;          // compounded once per year
const t = 3;           // time in years

// Calculate the final amount using the compound interest formula
const A = P * Math.pow((1 + r / n), n * t);

// Compound interest = final amount - principal
const compoundInterest = Math.round((A - P) * 100) / 100;

// Display the result in the console (as required)
console.log(`The compound interest after ${t} years is: ${compoundInterest}`);

// Also display it on the page, if a page is present (i.e. running in a browser)
if (typeof document !== 'undefined') {
  const outputEl = document.getElementById('output');
  if (outputEl) {
    outputEl.textContent = `The compound interest after ${t} years is: ${compoundInterest}`;
  }
}
