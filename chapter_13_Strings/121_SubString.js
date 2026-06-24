//Substring
let str = "Login_Test_Pass_001";

//slice(start,end) - negative indexes are supported
console.log(str.slice(0, 5));  //0,4  Login
console.log(str.slice(11));

let testNumber = str.slice(-3);
console.log(testNumber);

console.log(str.includes("Pass"));
console.log(str.includes("PAss"));

console.log(str.substring(6, 10));
console.log(str.at(0));
