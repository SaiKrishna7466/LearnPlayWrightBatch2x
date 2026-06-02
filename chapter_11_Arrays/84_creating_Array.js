//Creating arrays
let browsers = ["chrome", "firefox", "brave"];

//Array constructor

let score = new Array(3);  //here the length is 3
score[0] = 10;
score[1] = 20;
score[2] = 30;
let scores = new Array(1, 2, 3);
console.log(score);
console.log(scores);

//Array of
let test = Array.of(10, 20, 30);
console.log(test);


//Array from

let examp = Array.from("hello");
console.log(examp);

let nums = Array.from("123456789");
console.log(nums);
