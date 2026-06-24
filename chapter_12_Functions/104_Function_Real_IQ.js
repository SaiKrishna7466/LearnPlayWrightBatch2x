//Functions

//Normal Function
function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log(`API  ${status} is working fine!`);
    }
}
validateStatusCode(204);  //calling the function

//function as expression
const validateStatus_exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log(`API  ${status} is working fine!`);
    }
}
validateStatus_exp(203);  //calling the function


//function as Arrow function
const validateStatus_Arrow = status => {
    if (status >= 200 && status <= 300) {
        console.log(`API  ${status} is working fine!`);
    }
}

validateStatus_Arrow(202); //calling the function


