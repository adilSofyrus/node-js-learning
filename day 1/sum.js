console.log("inside the sum module ");

export var x = "Helo World";
// Module protects their veriable and functions from leacking 

export function calculateSum(a,b){
  const sum = a + b;


  console.log(sum);
}

// module.export is an empty object
// module.exports =
// // clean structure
// { x, calculateSum,
// };