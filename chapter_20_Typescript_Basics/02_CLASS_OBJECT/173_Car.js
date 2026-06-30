//car class
//Always follow CAB -> Constructor, Attributes, Behaviour
class Car {
    //parameter constructor
    constructor(name_given_when_obj_creation){
        this.name = name_given_when_obj_creation;
    }

    drive() {
        console.log("I am driving ", this.name);
    }

}

let Hyundai = new Car("i10 model");
Hyundai.drive();

let suv = new Car("Kia");
suv.drive();