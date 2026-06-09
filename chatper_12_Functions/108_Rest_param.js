//Rest of the parameters

const test = (suiteName, ...results) => {
    console.log(suiteName);
    console.log(results);
}

test("Login test", 1, 2, 3, "hello");
test("Register test", "sai", "kovvuri");