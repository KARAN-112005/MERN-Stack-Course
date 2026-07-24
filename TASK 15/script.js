// ==========================================================
// JS Assignment: Array Operations
// Find max number | Sum of elements | Count of odd numbers
// Uses different function types: arrow, anonymous, regular
// All results are printed to the browser console (Inspect > Console)
// ==========================================================

// -----------------------------
// 1. Find the maximum number in the array (Arrow function)
// -----------------------------
const findMax = (arr) => {
  let max = arr[0]; // variable to track the largest value found so far
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

// -----------------------------
// 2. Calculate the sum of all elements (Anonymous function
//    assigned to a variable)
// -----------------------------
const calculateSum = function (arr) {
  let sum = 0; // variable to accumulate the total
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

// -----------------------------
// 3. Count the number of odd numbers in the array
//    (Regular named function)
// -----------------------------
function countOdd(arr) {
  let oddCount = 0; // variable to track how many odd numbers found
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddCount++;
    }
  }
  return oddCount;
}

// ==========================================================
// Dummy array for testing
// ==========================================================
let dummyArray = [4, 8, 2, 11, 6, 7, 10]; // variable: array used for testing

// Run all operations and log results
let maxNumber = findMax(dummyArray);
let sumOfElements = calculateSum(dummyArray);
let oddCount = countOdd(dummyArray);

console.log("Array:", dummyArray);
console.log("Maximum number:", maxNumber);
console.log("Sum of all elements:", sumOfElements);
console.log("Count of odd numbers:", oddCount);
