//Hooks
interface TestHook {
    (testName : string) :void;
}

let beforeEachHook : TestHook = function (testname:string) :void{
    console.log("Before Seting up : " + testname);
}

let afterEachHook : TestHook = function (testname:string) :void{
    console.log("After Tearing down : " + testname);
}

beforeEachHook("Login Test");

interface TestCase {
    id:number;
    name : string;
    status : string;
    duration : number
}

let test1: TestCase = {
   id:1,
    name : "Login with valid credentials",
    status : "PASS",
    duration : 1500
};

console.log("TC-" + test1.id + ": " + test1.name + " -> " + test1.status);
afterEachHook("Login Test");    