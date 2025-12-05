const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to perform operations
function calculate(numbers) {
  const sum = numbers.reduce((a, b) => a + b, 0);
  const subtraction = numbers.reduce((a, b) => a - b);
  const multiplication = numbers.reduce((a, b) => a * b, 1);
  const division = numbers.reduce((a, b) => a / b);

  console.log("\n=== Results ===");
  console.log("Addition:", sum);
  console.log("Subtraction:", subtraction);
  console.log("Multiplication:", multiplication);
  console.log("Division:", division);
}

rl.question("Enter numbers separated by commas: ", function (input) {
  const numbers = input.split(",").map(Number);

  if (numbers.some(isNaN)) {
    console.log("Please enter valid numbers only!");
  } else {
    calculate(numbers);
  }

  rl.close();
});
