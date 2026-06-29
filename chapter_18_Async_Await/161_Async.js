//Async 

async function testapi() {
    try{
        let result = await Promise.reject("403 forbidden error");
    }
    catch(error){
        console.log("Eror",error);
    }
    finally{
        console.log("Clean Up");
    }
}

testapi();