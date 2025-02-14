const fs = require("fs");

const a = 100;
//1. 
console.log("hello world"); 

//7.
setImmediate(() => console.log("immediate"));

//5.
Promise.resolve("Promise").then(console.log);

//8.
fs.readFile("file.txt" , "utf8", ()=> console.log("file uploaded success"));

//6.
setTimeout(() => console.log("timeout"), 0);

//4.
process.nextTick(() => console.log("process nextTick"));

//2.
function printA(){
    console.log("a",a);
}

printA();

//3.
console.log("this is the last line");
