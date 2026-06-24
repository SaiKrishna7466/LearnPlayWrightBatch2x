//Login Lockout After Failed Attempts

let loginAttempt = 2;
if (loginAttempt === 0) {
    console.log(`Input:attempts = ${loginAttempt}`)
    console.log(`Login successful`)
}
else if (loginAttempt === 2) {
    console.log(`Input: attempts = ${loginAttempt}`)
    console.log(`Output: 1 attempt left before lockout`)
}
else if (loginAttempt === 3) {
    console.log(`Input: attempts = ${loginAttempt}`)
    console.log(`Output: 🔒 Account Locked — Contact support`)
}
else {
    console.log('Please enter loginAttempt value as O, 2 or 3 Only.')
}