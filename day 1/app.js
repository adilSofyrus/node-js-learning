// require("./sep_module.js");

import { calculateSum, x } from "./sum.js";


// destructring 
// const {x, calculateSum} =  require("./sum.js");
var name = "adil ayoub";


var  a = 10;

var b = 20;


calculateSum(a,b)

console.log(x);

console.log(name);
console.log(a+b);


//   console.log(global); // node base global object

//   console.log(this); // Empty object



console.log(globalThis); // standardised way to access global object


console.log(globalThis === global); // true
