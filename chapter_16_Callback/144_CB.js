//callback

function test(desc, callback) {
    callback();
}
test("has title", () => {
    console.log("Hi");
});

