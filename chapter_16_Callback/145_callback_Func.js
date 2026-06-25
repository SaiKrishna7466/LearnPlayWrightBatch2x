//callback function
function cafe(item, callwhenitemisready ){
    console.log("finding table1....");
    console.log("finding table2....");
    console.log("finding table3....");
    console.log("finding table4....");
    console.log(`order ${item} is checking`);
    callwhenitemisready();
};

function callwhenitemisready() {
    console.log("order is placed");
}

cafe("Chicken", callwhenitemisready);

cafe("panner", function(){
    console.log("order is delayed");
});

cafe("mutton", () => {
    console.log("order is not available");
});