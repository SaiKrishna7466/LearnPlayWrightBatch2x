//Test Case Pass/Fail Verdict

let expected = "Login Successful", actual = "Login Successful";

if (expected === actual)
    console.log("Output: ✅ Test Passed");
else
    console.log("Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials");

actual = "Invalid Credentials";

if (expected === actual)
    console.log("Output: ✅ Test Passed");
else
    console.log("Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials");