let a = 10; // Global Scope
console.log("At start ", a);
// Defination of the function
function printHello() {
    console.log("Hello Welcome");
    let a = 20; // Local Scope
    console.log("Inside function: ", a);
    if (true) {
        let a = 30;
        console.log("Inside if : ", a); // 30
    }
    console.log("After if ->", a);
}

console.log("outside function ->", a);

printHello();