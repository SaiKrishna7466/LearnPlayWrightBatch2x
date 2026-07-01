//Real Example

class Person {

    #child1;
    #child2;

    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1;
        this.#child2 = ch2;
    }

    getChild() {
        return this.#child1;
    }

    setChild1 (changed_name) {
        this.#child1 = changed_name;
    }
}

let p = new Person("krishna", "anand", "saanvi");
console.log(p.name);
let child = p.getChild();
console.log(child);
