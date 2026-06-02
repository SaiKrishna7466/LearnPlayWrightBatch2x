//Real examples of arrays
let browser = ["chrome", "firefox", "edge", "opera"];
console.log(browser);
console.log(browser.length);

browser.pop();
console.log(browser);

let removed = browser.shift();
console.log(browser);
console.log(removed);


for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Opera is removed from the selenium!");
    }
}
