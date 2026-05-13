//let is Blockscoped

let a = "global";
console.log(a);
if (true) {
    //TDZ for block scoped a starts here
    //console.log(a); //ReferenceError


    let a = "block";
    console.log(a);
}
console.log(a);
