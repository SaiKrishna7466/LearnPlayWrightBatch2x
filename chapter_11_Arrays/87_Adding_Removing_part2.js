//Adding and removing
let arr = [1, 2, 3, 4];
arr.push(23, 34, 56);
console.log(arr);

//Remove
arr.splice(2, 1); // remove from 2nd index and 1 item
console.log(arr);

arr.splice(2, 0, 48);
console.log(arr);

arr.splice(20, 0, 52);
console.log(arr);

//replace
arr.splice(3, 1, 32);
console.log(arr);

arr.splice(1, 2, 72, 45);
console.log(arr);