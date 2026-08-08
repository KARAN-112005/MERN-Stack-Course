# Division with Promises

A JavaScript function that divides two numbers using a Promise, rejecting with an error message if you try to divide by zero. Results are printed to the browser console.

## Project Files

- `index.html` – a minimal page that just tells you to open the console and loads the script
- `script.js` – the `divideNumbers` function, plus 6 test cases that run and log their results

## JavaScript Concepts Practiced

- **Promises** – `divideNumbers` returns a `new Promise((resolve, reject) => { ... })`. It calls `resolve(result)` on success and `reject(errorMessage)` when dividing by zero.
  ```js
  const divideNumbers = (num1, num2) => {
    return new Promise((resolve, reject) => {
      if (num2 === 0) {
        reject("Error: Division by zero is not allowed.");
      } else {
        resolve(num1 / num2);
      }
    });
  };
  ```
- **Arrow functions** – `divideNumbers` is written as an arrow function, as the assignment asked.
- **`async` / `await`** – instead of chaining `.then()` and `.catch()`, each test uses `await divideNumbers(...)` inside a `try/catch` block. This makes asynchronous code read top-to-bottom like normal code, and keeps each test's "Dividing..." line and its result printed together in order.
  ```js
  try {
    const result = await divideNumbers(num1, num2);
    console.log(`Result: ${result}`);
  } catch (error) {
    console.log(error);
  }
  ```
- **Template literals** – used for the log messages, e.g. `` `Dividing ${num1} by ${num2}...` ``.
- **Error handling** – the rejection case is caught and logged as a clear message instead of crashing the program.

## How to Run It

1. Keep `index.html` and `script.js` in the same folder.
2. Open `index.html` in your browser (double-click it, or right-click → Open with → your browser).
3. Right-click anywhere on the page and choose **Inspect**, then open the **Console** tab (or just press `F12`).
4. You'll see all 6 test cases logged, each showing "Dividing X by Y...", followed by either the result or an error message.

## Sample Output

```
Dividing 10 by 2...
Result: 5

Dividing 10 by 0...
Error: Division by zero is not allowed.
```

## What I Learned

- How a Promise represents a value that isn't ready yet, and how `resolve` vs `reject` decide whether `.then()` or `.catch()` (or the `catch` block with `await`) runs.
- Why dividing by zero needs to be checked explicitly and rejected with a clear message, instead of letting JavaScript return `Infinity`.
- How `async`/`await` makes Promise-based code easier to read than chaining `.then()`, especially when you want things to happen in a specific order.
- That code inside a Promise executor runs immediately, but `.then()`/`.catch()` callbacks always run after the rest of the synchronous code — which is why `await` was needed to keep the test output in the right order.
