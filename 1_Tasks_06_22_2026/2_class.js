
/*You need to create a class with the static and non-static 
methods as well as variables. It will be a simple class of our 
Playwright 2x batch. You will be also printing out the students.
Create 10 objects of students and print them. Also create a
print method. Also sahi baasai. */

class playwright2xBatch {
    static batchName = "Playwright 2x";

    constructor(studentName, studentAge) {
        this.studentName = studentName;
        this.studentAge = studentAge;
    }
    // Non-Static Method
    print() {
        console.log("Student Name:", this.studentName);
        console.log("Student Age:", this.studentAge);
    }
    
    // Static Method
    static printBatch() {
        console.log("Batch Name =", playwright2xBatch.batchName);
    }
}   
const student1 = new playwright2xBatch("Arjun", 22);
const student2 = new playwright2xBatch("Meera", 27);
const student3 = new playwright2xBatch("Kiran", 24);
const student4 = new playwright2xBatch("Ananya", 29);
const student5 = new playwright2xBatch("Rohit", 31);
const student6 = new playwright2xBatch("Sneha", 26);
const student7 = new playwright2xBatch("Nikhil", 28);
const student8 = new playwright2xBatch("Aishwarya", 23);
const student9 = new playwright2xBatch("Harish", 30);
const student10 = new playwright2xBatch("Keerthi", 25);

student1.print();
student2.print();
student3.print();
student4.print();
student5.print();
student6.print();
student7.print();
student8.print();
student9.print();
student10.print();