//Encapsulation car
class car {

    #engine;

    constructor(name, engine) {
        this.name = name;
        this.#engine = engine;
    }

    getEngine() {
        return this.#engine;
    }

    setEngine(updated_engine) {
        this.#engine = updated_engine;
    }
}

let car_model  = new car("Tesla", "V8");
console.log(car_model.getEngine());
car_model.setEngine("V9");
console.log(car_model.getEngine());