//Triangle Classifier: 

let a = 20;
let b = 20;
let c = 20;

if (a === b && b === c)
    console.log("The traingle is an Equilateral");
else if ((a === b) || (b === c) || (c === a))
    console.log("The traingle is an Isosceles traingle");
else
    console.log("The traingle is Scalene traingle");