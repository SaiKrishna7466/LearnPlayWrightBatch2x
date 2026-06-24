//Objects real time examples

let config = {};

config.browser = "chrome";
config.timeout = 3000;
config.testname = "login test";

console.log(config);

delete config.timeout;
console.log(config);

if(config.browser === "chrome") {
    console.log("I will execute the tescase");
    }