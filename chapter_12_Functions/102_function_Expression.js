//Functions as expressions


//normal function 
function greet(name) {
    return `Hello, ${name} How are you ?`;
}

let string = greet("reddy");
console.log(string);

//Function expression

const calling = function (name) {
    return `Hi, ${name} How are you ?`;
}

string = calling("Krishna");
console.log(string);
console.log(calling("Sai"));

