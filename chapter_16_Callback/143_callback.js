//Callback functions

//Normal Function
function print() {
    console.log("Normal Function");
}
print();

//Callback Function

function orderplaced() {
    console.log("Your order is placed");
}

function placeOrder(clipboardItem, callbackfn){
    console.log(`Hi you oredered is ${clipboardItem}`);
    callbackfn();
}

//First way
placeOrder("Pizza", orderplaced);

//second way
placeOrder("Burger", function(){
    console.log("Your oder is delivered");
});

//third way
placeOrder("Momo", () => {
    console.log("Your order is delayed");
});

