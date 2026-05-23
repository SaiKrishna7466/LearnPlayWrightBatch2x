//Null Operator

// ??

console.log(null >= 0); //null>0 or null ==0
//console.log(null >==0); //no >==
console.log(null === 0);

// Nullish 
let milk = "amul";
let milkIs = milk ?? "Heritage";
console.log(milkIs);
milk = null;
milkIs = milk ?? "Heritage";
console.log(milkIs)