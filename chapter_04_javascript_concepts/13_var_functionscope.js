var a = 10; // Global Scope
console.log(a);
// Defination of the function
function printHello() {
    console.log("Hello Welcome");
    var a = 20; // Local Scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a); // 30
    }
    console.log("Function scoped ->", a);
}

console.log("outside function ->", a);

printHello();