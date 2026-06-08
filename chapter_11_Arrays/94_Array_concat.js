//Arrays concat

let a = [1, 2, 3];
let b = [4, 5, 6, 7];
let c = a + b;
console.log(c);
console.log("----------------");
let d = a.concat(b);
console.log(d);
console.log("----------------");

//Spread concatenation
let e = [...a, ...b];
console.log(e);
console.log("----------------");

//join
let results = ["pass", "fails", "skip"].join(" | ");
console.log(results);
console.log("----------------");