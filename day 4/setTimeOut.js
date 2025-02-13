// Variables
const number1 = 1078698;
const number2 = 20986;

 console.log("Hello World");

// Asynchronous function to set timeout
setTimeout(() => {
  console.log('Call this first');
}, 0);

// Asynchronous function to set timeout
setTimeout(() => {
  console.log('Timeout of 5 seconds reached');
}, 3000);


// Synchronous function to multiply two numbers
function multiply(num1, num2) {
  return num1 * num2;
}

const result = multiply(number1, number2);

console.log("Multiplication of number1 and number2 is:", result);
