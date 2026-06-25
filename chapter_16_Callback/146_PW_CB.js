//playwright with callback
function test(testname, callback){
    console.log(testname);
    callback();
};

test("Verify Login page is working", () => {
    //write youtr playwright code here
    console.log("Playwright code here");
});

