//Build Health Reporter

let buildHealth = 65;
console.log("Input : ", buildHealth);

if (buildHealth === 100)
    console.log("Output : Green Build");
else if (buildHealth >= 90 && buildHealth <= 99)
    console.log("Output : Stable (investigate failures)");
else if (buildHealth >= 70 && buildHealth <= 89)
    console.log("Output : Unstable");
else if (buildHealth < 70)
    console.log("Output : Broken Build (block deployment)");
else
    console.log("Invalid");