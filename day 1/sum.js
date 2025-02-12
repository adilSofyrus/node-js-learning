console.log("inside the sum module ");

var x = "Helo World";
// Module protects their veriable and functions from leacking 

function calculateSum(a,b){
  const sum = a + b;


  console.log(sum);
}

module.exports =
// clean structure
{ x, calculateSum,
};