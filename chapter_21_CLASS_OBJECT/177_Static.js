//Static
class Student {
    constructor(name_student, age, phoneNo) {
        this.name_student = name_student;
        this.age = age;
        this.phoneNo = phoneNo;
    }
    static name = "Playwright2x";
    static mentor_name = "saiKrishna";

    static display() {
        console.log("Hi, I am common f(n)");
    }

}

const s1 = new Student("vamsi", 24, "3434432");
const s2 = new Student("gopi", 40, "789324234312");

console.log(s1.name_student);
console.log(s2.name_student);

console.log(Student.name);
console.log(Student.mentor_name);