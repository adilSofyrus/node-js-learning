// require file system module
const fs = require('fs');

// require http module
const https = require('https');

// Variables
const number1 = 1078698;
const number2 = 20986;

// Asynchronous function to fetch data from server
https.get('https://dummyjson.com/products/1', (res) => {
  console.log("HTTP Status Code:", res.statusCode);
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log("Fetched Data:", JSON.parse(data));
  });
}).on('error', (err) => {
  console.error("Error fetching data:", err.message);
});

// Asynchronous function to set timeout
setTimeout(() => {
  console.log('Timeout of 5 seconds reached');
}, 5000);

// Asynchronous function (read file)

// never do this in production code but one should know that this is possible 
fs.readFileSync('./file.txt', 'utf8'); // this will block the main thread as it is asynchronous and will take time to read the file
console.log("This line will be printed after the file content is read");

// Asynchronous function to read file
fs.readFile('./file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err.message);
    return;
  }
  console.log("File Content:", data);
});

// Synchronous function to multiply two numbers
function multiply(num1, num2) {
  return num1 * num2;
}

const result = multiply(number1, number2);

console.log("Multiplication of number1 and number2 is:", result);
