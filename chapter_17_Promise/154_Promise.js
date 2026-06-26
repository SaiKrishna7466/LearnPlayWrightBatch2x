//Promise
let order = new Promise(function(resolve,reject) {
    let foodready = true;
    if(foodready){
        resolve("Food is ready. Pizza is delivered. ")
    }else{
        reject("Oreder is cancelled due to rain.")
    }
});

console.log(order);