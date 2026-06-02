//Access Arrays
let statuses = ["pass", "fail", "skip"];
console.log(statuses[0]);
console.log(statuses[1]);
console.log(statuses[2]);

console.log(statuses[-2]);  //undefined


console.log(statuses.at(-1));
console.log(statuses.at(-2));
console.log(statuses.at(-3));



//Modify
statuses[1] = "blocked";
console.log(statuses.at(-2));