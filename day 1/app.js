require("./sep_module.js");
const obj =  require("./sum.js");
var name = "adil ayoub";


var  a = 10;

var b = 20;


obj.calculateSum(a,b)

console.log(obj.x);

console.log(name);
console.log(a+b);


//   console.log(global); // node base global object

//   console.log(this); // Empty object



console.log(globalThis); // standardised way to access global object


console.log(globalThis === global); // true
