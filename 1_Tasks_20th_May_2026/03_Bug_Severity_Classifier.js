//Bug Severity Classifier
let bugImpact = 5;
console.log("Input : ", bugImpact);

if (bugImpact >= 1 && bugImpact <= 3)
    console.log("Output : Severity: Low");
else if (bugImpact >= 4 && bugImpact <= 6)
    console.log("Output : Severity: Medium");
else if (bugImpact >= 7 && bugImpact <= 8)
    console.log("Output : Severity: High");
else if (bugImpact >= 9 && bugImpact <= 10)
    console.log("Output : Severity: Critical — Block release");
else
    console.log("Invalid");