let sai_age = 18;
let sai_will_goa = sai_age >= 18 ? "Sai Will got to Goa" : "Not allowed";
console.log(sai_will_goa);


let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "Pass" : "failed";
console.log(testResult);

let environment = "staging";
let baseURL = environment === "prod" ? "https://api.prod.com" : "https://api.staging.com";
console.log(baseURL);

let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in : ", browserMode, " mode");

let responseTime = 850;
let sla = 1000;
let slaStatus = responseTime <= sla ? "Within SLA" : "SLA breached";
console.log(slaStatus);
console.log(`Response : ${responseTime}ms - ${slaStatus}`);
console.log("Response : ", responseTime, "ms - ", slaStatus);

let i = 3443, j = 15425;
let larger = i > j ? i : j;
console.log(`largest number is ${larger} among the given numbers`);


//Nested Ternary
//Multiple conditions

let x = 30, y = 40, z = 50;
let large = x > y ? x > z ? x : z : y > z ? y : z;
console.log(`Largest number is : ${large} among the given numbers`);

let statusCode = 404;
let category =

    (statusCode < 300 ? "Success" :
        (statusCode < 400 ? "Redirect" :
            (statusCode < 500 ? "ClientError" : "Server Error")));
console.log(`StatusCode is ${statusCode} and the category is ${category} .`);

let temp = 35;
let feel = temp >= 40 ? "very Hot" :
    temp >= 30 ? "Hot" :
        temp >= 20 ? "warm" :
            temp >= 10 ? "Cool" : "cold";
console.log("Temperature : ", temp, " and feel : ", feel);