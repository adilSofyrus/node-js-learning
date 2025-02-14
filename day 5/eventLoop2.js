const fs = require("fs");

//5.
setImmediate(() => console.log("immediate"));

//4.
setTimeout(() => console.log("timeout"), 0);

//3.
Promise.resolve("Promise").then(console.log);

fs.readFile("file.txt" , "utf8", ()=>{
//7.
setTimeout(() => console.log("timeout Second"), 0);
//6.
process.nextTick(() => console.log("Second process nextTick"));
//8.
setImmediate(() => console.log("Second immediate"));
//9.
console.log("file uploaded success")
});

//2.
process.nextTick(() => console.log("process nextTick"));

//1.
console.log("this is the last line");
