//No default
let value = "5";

switch (value) {
    case 5:
        console.log("Number 5 matched");
        break;
    case "5":
        console.log("String '5' matched");
        break;
}


value = 0;

switch (value) {
    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("0 matched");
        break;
}