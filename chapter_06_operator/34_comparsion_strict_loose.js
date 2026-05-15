// == loose operator
// === strict operator

console.log(15 == '15'); //loose   //true
console.log(20 === '20'); //strict   //false

console.log(30 == '33');  //false

console.log(10 === 10);  //true
console.log(10 === '10'); //false

console.log(10 == 10);  //true
console.log(10 == '10'); //true

console.log(0 == '');  //true
console.log(0 === ''); //false

console.log(true == 1);  //true
console.log(false == 0); //true
console.log(true == "1"); //true
console.log(true == 2); //true

console.log(5 != "5") //false  // 5 is int and  "5" is string
console.log(5 !== "5") //true

//console.log( 5 !=== "5") // ===doesnot exist

