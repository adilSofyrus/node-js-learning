const crypto = require('crypto');

console.log("Hello World"); 

// Variables
const number1 = 1078698;
const number2 = 20986;


// Synchronous function to generate derived key using pbkdf2Sync
crypto.pbkdf2Sync('password', 'salt', 500000, 50, 'sha512');
// don't use Sychronous fun  code as it will block the main thread  (don't use in production code)
console.log("Synchronous Key is Generated");


// Asynchronous function to generate derived key using pbkdf2Sync
crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', (err, derivedKey) => {
  console.log("Derived Key is Generated"  + derivedKey.toString('hex'));
});

function multiply(num1, num2) {
  const result =  num1 * num2;
  return result;
}

let res = multiply(number1, number2);
console.log("Multiplication of number1 and number2 is:", res);