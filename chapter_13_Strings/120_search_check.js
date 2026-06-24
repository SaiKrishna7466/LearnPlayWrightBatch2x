//searching & checking


let url = "https://staging.vwo.com/api/login?retry=true";

//includes
console.log(url.includes("staging"));
console.log(url.includes("production"));

//startWith/ endsWith
console.log(url.startsWith("https"));
console.log(url.startsWith("http://"));
console.log(url.endsWith("true"));

//indexOf/ lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));

console.log(url.indexOf("nothere"));
console.log(url.indexOf("x"));

//search
console.log(url.search(/login/));
console.log(url.search(/vwo/));
