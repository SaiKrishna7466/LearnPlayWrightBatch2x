// console.log(c);
// const c = 3.14; //ReferenceError: Cannot access 'c' before initialization

const c = 3.14;
console.log(c);

function print() {
    // console.log(c); //ReferenceError: Cannot access 'c' before initialization
    const c = 5.16;
    console.log(c);
}

print();

console.log(c);