//Switch group

let browser = "edge";

switch (browser) {
    case "chrome":
    case "edge":
    case "brave":
        console.log("Chromium project");
        break;
    case "firefox":
        console.log("Firefox project");
        break;
    default:
        console.log("No project");
}