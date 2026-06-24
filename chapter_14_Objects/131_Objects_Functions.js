//Objects with functions

//normal object
const user = {
    name : "ravi",
    age : 34
};

//object with functions
const calculator = {
    value : 0,
    add(n){
        let value = 0;
        console.log(value + n);
    },
    subtractor(n) {
        let value = 0;
        console.log(value - n);
    }
}

calculator.add(10);
calculator.subtractor(20);