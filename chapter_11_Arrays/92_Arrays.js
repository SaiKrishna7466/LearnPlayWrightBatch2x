//Arrays sorting functions
let fruits = ["cucumber", "grapes", "banana", "avacado"];
fruits.sort();
console.log(fruits);

let numbers = [4, 7, 2, 8, 1];
numbers.sort();
console.log(numbers);

let nums = [10, 1, 45, 2, 6, 4, 67, 9];
nums.sort();
console.log(nums);

nums.sort((a, b) => a - b);
console.log(nums);

nums.sort((a, b) => b - a);
console.log(nums);

