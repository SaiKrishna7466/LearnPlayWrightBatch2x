//let - Block Scoped

let a = 10;
console.log(a);

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry Attempt : ", retryCount);

// let retryCount = 5; //SyntaxError: Identifier 'retryCount' has already been declared

let testStatus = "Pending";

if (testStatus == "Pending") {
    let x = 10;
    console.log("Inside the if block : ", x);
}

//console.log(x);  //ReferenceError: x is not defined