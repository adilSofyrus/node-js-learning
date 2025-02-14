const fs = require("fs");

const a = 100;
//1. 
console.log("hello world"); 

//4.
setImmediate(() => console.log("immediate"));

//6.
fs.readFile("file.txt" , "utf8", ()=> console.log("file uploaded success"));

//5.
setTimeout(() => console.log("timeout"), 0);

// 2..
function printA(){
    console.log("a",a);
}

printA();

//3.
console.log("this is the last line");
