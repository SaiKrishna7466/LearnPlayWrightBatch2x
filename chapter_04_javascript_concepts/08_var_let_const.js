var v = 10;
let l = 20;
const c = 3.14;


var browser = "chrome";
var browser = "firefox"; //redeclaration of browser

browser = "edge"; // reassignment of browser

var testCases = ["signUp", "login", "logout"];

for (var i = 0; i < testCases.length; i++) {
    console.log(testCases[i]);
}

// outside the loop i is not throwing any error
console.log("Out side the loop with out declaring the i again i value is :", i);

