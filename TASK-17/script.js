// ---------- Division function that returns a Promise ----------
// Arrow function, as required by the assignment
const divideNumbers = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      // Reject the Promise with a meaningful error message
      reject("Error: Division by zero is not allowed.");
    } else {
      // Resolve the Promise with the division result
      resolve(num1 / num2);
    }
  });
};

// ---------- Helper to run and log one test case ----------
// async/await is used here so each test finishes (and prints its result)
// before the next test starts, keeping the console output in order.
async function runTest(num1, num2) {
  console.log(`Dividing ${num1} by ${num2}...`);

  try {
    const result = await divideNumbers(num1, num2);
    console.log(`Result: ${result}`);
  } catch (error) {
    console.log(error);
  }

  console.log(""); // blank line between test cases
}

// ---------- Run at least 5 test cases, one after another ----------
async function runAllTests() {
  // Example 1: normal division
  await runTest(10, 2);

  // Example 2: division by zero (should reject)
  await runTest(10, 0);

  // Example 3: normal division with a decimal result
  await runTest(7, 2);

  // Example 4: dividing a negative number
  await runTest(-20, 4);

  // Example 5: dividing zero by a number
  await runTest(0, 5);

  // Example 6 (extra): both numbers zero (still division by zero)
  await runTest(0, 0);
}

runAllTests();
