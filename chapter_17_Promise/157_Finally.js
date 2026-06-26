//finally
let testRun = new Promise(function(resolve,reject){
    let apiCall = true;
    if(apiCall)
    resolve({status:200,body:"Success"});
    else
    reject("Assertion failed");
});

testRun.then(function (data){
    console.log(data.status)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    //This code will be always executed anyhow
    console.log("I will be executed anyhow!");
})