//Interview Questions
function runTest(name, status, score) {
    return `${name} : ${status} (${score})`;
}

const result = runTest("Login", "pass", 320);
console.log(result);