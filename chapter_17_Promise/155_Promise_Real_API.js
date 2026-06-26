//Promise with real API Example
let apiCall = new Promise(function(resolve,reject){
    resolve({
        status: 200,
        body:"USer data" //this is object
    })
});

apiCall.then(function(response){
    console.log(response.body);
});