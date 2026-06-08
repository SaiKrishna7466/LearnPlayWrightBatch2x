//Arrays slicing

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice(1, 3));
console.log(numbers.slice(2, 4));  //[3,4]
console.log(numbers.slice(2, 5)); //[3,4,5]
console.log(numbers.slice(2)); //[3,4,5]
console.log(numbers.slice(-2)); //[4,5]

console.log("-------------------");

let nums = [1, 2, 3, 4, 5];
let s = nums.slice(1, 4);
console.log(s); //[2,3,4]
console.log(nums); //[1,2,3,4,5]

console.log("-------------------");

nums = [1, 2, 3, 4, 5];
let removed = nums.splice(1, 3);
console.log(removed); //[2,3,4]
console.log(nums); //[1,5]


