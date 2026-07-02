//Real browser example
class  Testcase{
    //parameter constructor
    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }

    //method
    display() {
        console.log(this.name + " -> " + this.status + " -> " + this.priority);
    }
}

//function
function f(){

}

let loginTC =new Testcase("Login testcase", "Pass", "P0");
let signupTC =new Testcase("SignUP testcase", "Fail", "P1");

loginTC.display();
signupTC.display();