const fs = require("fs");

//6.
setImmediate(() => console.log("immediate"));

//5.
setTimeout(() => console.log("timeout"), 0);

//4.
Promise.resolve("Promise").then(console.log);

//7.
fs.readFile("file.txt" , "utf8", ()=>{
console.log("file uploaded success")
});

//2.
process.nextTick(() => {
    //3.
    process.nextTick(() => {console.log("inner nextTick")});
    //2.
    console.log("nextTick")
});

//1.
console.log("this is the last line");
