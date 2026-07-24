
let userInput = prompt("Enter a number to check if it is even or odd:");

let number = Number(userInput);

let remainder = number % 2;

let resultMessage = "";

if (remainder === 0) {
  resultMessage = "The number " + number + " is even.";
} else {
  resultMessage = "The number " + number + " is odd.";
}

console.log(resultMessage);
