/*You need to create a class with the name of Calculator where 
you will have different methods available for some subtraction,
modulus, division, and multiplication. What will 
happen is you will basically create an object with the 
two variables. You will basically give the output of some 
subtraction, modulus, division, and multiplication. */

class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    add() {
        return this.num1 + this.num2;
    }

    subtract() {
        return this.num1 - this.num2;
    }

    modulus() {
        return this.num1 % this.num2;
    }

    divide() {
        return this.num1 / this.num2;
    }

    multiply() {
        return this.num1 * this.num2;
    }
}
const calculate = new Calculator(20, 10);
console.log("Addition:", calculate.add());
console.log("Subtraction:", calculate.subtract());
console.log("Modulus:", calculate.modulus());
console.log("Division:", calculate.divide());
console.log("Multiplication:", calculate.multiply());


