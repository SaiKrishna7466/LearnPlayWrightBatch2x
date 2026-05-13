//Template Literal

let firstName = "krishna";
let fullName = `Hi ${firstName} How are you?`;

console.log(fullName);

const env = "staging";
const userId = 1234;
const apiUrl = `https://api-${env}.tckion.co/users/${userId}`;
console.log(apiUrl);