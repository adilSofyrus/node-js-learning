const fs = require("fs");
const crypto = require("crypto");

// we can alter the thread pool size 

// process.env.UV_THREADPOOL_SIZE = 2;

crypto.pbkdf2("password", "salt", 50000, 50, "sha512",(err, key) =>{
    console.log("password 1 genenerated");
});

fs.readFile("././day 5/file.txt", "utf-8", ()=>{
    console.log("file read");
});


crypto.pbkdf2("password", "salt", 50000, 50, "sha512",(err, key) =>{
    console.log("password 2 genenerated");
});


// crypto.pbkdf2("password", "salt", 50000, 50, "sha512",(err, key) =>{
//     console.log("password 3 genenerated");

// });crypto.pbkdf2("password", "salt", 50000, 50, "sha512",(err, key) =>{
//     console.log("password 4 genenerated");

// });crypto.pbkdf2("password", "salt", 50000, 50, "sha512",(err, key) =>{
//     console.log("password 5 genenerated");
// });


