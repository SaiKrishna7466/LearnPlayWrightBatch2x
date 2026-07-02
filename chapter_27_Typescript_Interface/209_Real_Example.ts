//Real Example
interface BasePage {
    url:string;
    title:string;
}

interface LoginPage extends BasePage {
    usernameSelector : string;
    passwordSelector : string;
    loginButtonSelector : string;
}

interface FreeTrailPage extends BasePage {
    usernameSelector : string;
    submitButtonSelector : string;
}

let loginpage : LoginPage = {
    url : "/Login",
    title : "Login Page",
    usernameSelector : "#username",
    passwordSelector : "#password",
    loginButtonSelector : "#login-btn"
}

let freeTrailpage : FreeTrailPage = {
    url : "/free-trail",
    title : "Free Page",
    usernameSelector : "#username",
    submitButtonSelector : "#submit"
}

console.log("URL: ", loginpage.url);
console.log("Title: ", loginpage.title);
console.log("Username field: ", loginpage.usernameSelector);


console.log("---------------------");


console.log("URL: ", freeTrailpage.url);
console.log("Title: ", freeTrailpage.title);
console.log("Username Field: ", freeTrailpage.usernameSelector);



