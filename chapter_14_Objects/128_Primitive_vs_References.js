//Primitives vs references

//primitives
let a= 10;
let b= a;
b= 20;
console.log(a); //10
console.log(b); //20

//objects - copied by references , call by reference
//references - objects, arrays, functions

//objects
let c= {name : "sai"};
let d = c;
d.name = "krishna";
console.log(c); //krishna
console.log(d); //krishna

//Arrays 
let arr = [2,3.4,4,5];
let dup = arr;
console.log(dup);
dup[0] = 100;
dup.push(10);
console.log(arr);
console.log(dup);

