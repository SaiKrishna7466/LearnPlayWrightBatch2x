//Objects
//Objest are key value pairs
 
let student1 = { name: "raghav" , age: 48};
let student2 = { name: "raghav" };
let student3 = { name: "raghav" , age: 48, phone: 1344};

//Key will not be in double quotes.
//below is JSOn which has key in double quotes

let JSON_Stud = { "name" : "amit", "age" : 32, "phone" : 3321};

let a = { status : "pass"};
console.log(a.status);

//another way
console.log(a["status"]);

let a1 = { status : "pass"};
console.log(a1.status);

let b= a;
b.status = "fail";
console.log(b.status);
console.log(a.status);

if(b===a){
    console.log("both are equal");
}else
    console.log("both are not equal");


if(b==a){
    console.log("both are equal");
}else
    console.log("both are not equal");

