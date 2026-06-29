//Async Await Parallel
function apicall(name) {
    return new Promise(function(resolve) {
        setTimeout(function(){
            resolve(name,"200 Ok")
        },2000);
    })
}

async function parallelTest() {
    console.log("Starting of the parallel test");

    let start = Date.now();

    let [r1,r2,r3] = await Promise.allSettled([
        apicall("Auth Service"),
        apicall("User Account Creation"),
        apicall("Support Page API")
        
    ])

    console.log(r1);
    console.log(r2);
    console.log(r3);

    console.log("Time:~" + (Date.now() - start) + "ms");

}

parallelTest();