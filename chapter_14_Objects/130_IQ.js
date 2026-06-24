//Interview Questions
const user = {
    name : "John",
    age : 30,
    email : "john@example.com"
};

console.log(user);

//Accesing properties
console.log(user.name);
console.log(user["age"]);

//Dynamic property access
const key = "name";
console.log(user[key]);

//Adding/Modifying properties
user.city = "NYC";
user.age = 16;
console.log(user);

let obj = {name : "sai"};
console.log(Object.getOwnPropertyDescriptor(obj,"name"));

