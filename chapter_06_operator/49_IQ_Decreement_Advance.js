//Advance Q/A
let a = 10;
console.log(--a - a);   // 9-9=0
console.log(a); //9

a = 10;
console.log(a-- - a); //10 - 9 =1
console.log(a); //9

a = 10;
console.log(a-- - --a); //10 - 8 = 2
console.log(a);// 8

a = 10;
console.log(--a - a--); //9-9=0
console.log(a)//8


//Task 18th May 
a = 5;
console.log(a++ + ++a - --a + a-- + ++a);  //5 + 7 - 6 + 6 + 6 = 18
console.log(a); //6
