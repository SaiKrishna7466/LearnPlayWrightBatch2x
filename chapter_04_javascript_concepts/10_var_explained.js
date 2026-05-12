var a = 20; // Global scope

//var is function scoped

console.log(a);

function printHello() {

    console.log("Hello learn var is functionscoped,hoisted,redeclared,reassigned");
    var a = 30;
    console.log(a);
    if (true) {
        var a = 40;
        console.log(a);
    }
}

printHello();

var a = 50;
console.log(a);