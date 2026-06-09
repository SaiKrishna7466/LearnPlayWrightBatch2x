//IQ

const getStatusMsg = (code) => {
    if (code >= 200 && code < 300) return "Success";
    if (code >= 400 && code < 500) return "client error";
    if (code >= 500) return "server error";
}

console.log(getStatusMsg(505));
console.log(getStatusMsg(404));

function logTest(name) {
    console.log(`Running ${name}`);
    //no return statement
}

let result = logTest("Login");
console.log(result);

//TDZ for function
greet("Krishna");
function greet(name) {
    console.log(name);
}
//TDZ for function as expression is reerence error
// greet2("Sai");
const greet2 = function (name) {
    console.log(name);
}
//TDZ for arrow function is Reference error
greet3("Sai");
const greet3 = (name) => {
    console.log(name);
}
