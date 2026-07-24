
let userInput = prompt("Enter a number to perform operations on:");

let number = Number(userInput);

console.log("Number: " + number);

let sum = 0;

for (let i = 1; i <= number; i++) {
  sum = sum + i;
}

console.log("Sum of first " + number + " numbers is: " + sum);

console.log("Table of " + number + ":");

for (let i = 1; i <= 10; i++) {
  let result = number * i;
  console.log(number + " x " + i + " = " + result);
}

let isPrime = true;

if (number < 2) {
  isPrime = false;
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
    }
  }
}

if (isPrime) {
  console.log("Is it a prime number? Yes");
} else {
  console.log("Is it a prime number? No");
}

let factorsList = "";

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    factorsList = factorsList + i + " ";
  }
}

console.log("Factors: " + factorsList);

let tempNumber = number;
let digitSum = 0;

while (tempNumber > 0) {
  let lastDigit = tempNumber % 10;
  digitSum = digitSum + lastDigit;
  tempNumber = Math.floor(tempNumber / 10);
}

console.log("Sum of its digits: " + digitSum);

let tempForCount = number;
let digitCount = 0;

while (tempForCount > 0) {
  digitCount = digitCount + 1;
  tempForCount = Math.floor(tempForCount / 10);
}

let tempForArmstrong = number;
let armstrongSum = 0;

while (tempForArmstrong > 0) {
  let digit = tempForArmstrong % 10;
  let power = 1;
  for (let i = 1; i <= digitCount; i++) {
    power = power * digit;
  }

  armstrongSum = armstrongSum + power;
  tempForArmstrong = Math.floor(tempForArmstrong / 10);
}

let isArmstrong = false;
if (armstrongSum === number) {
  isArmstrong = true;
}

if (isArmstrong) {
  console.log("Is it an Armstrong number? Yes");
} else {
  console.log("Is it an Armstrong number? No");
}