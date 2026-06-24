//Default parameters
function retry(testName, maxRetries, delay) {
    console.log(`Retrying ${testName} for ${maxRetries} times on every ${delay} ms`);
}

retry("Login Test", 3, 1000);

//default parameters
const retry2 = (testName, maxRetries = 5, delay = 2000) => {
    console.log(`Retrying ${testName} for ${maxRetries} times on every ${delay} ms`);
}
//calling the function with only one paramaeter
retry2("Register test");