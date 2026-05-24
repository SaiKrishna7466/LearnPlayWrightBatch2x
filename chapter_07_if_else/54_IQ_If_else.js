//Interview Questions

if ("hello") console.log("String is truthy");
if (24) console.log("Number is truthy");
if ({}) console.log("Empty Object is truthy");
if ([]) console.log("Empty array is truthy");

if ("") console.log("Won't Print");
if (null) console.log("Won't Print");
if (NaN) console.log("Won't Print");
if (0) console.log("Won't Print");
if (undefined) console.log("Won't Print");


let name = undefined;

if (name) {
    console.log("Hi");
}
else
    console.log("Bye");