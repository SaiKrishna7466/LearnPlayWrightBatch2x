//Real If else usage

//app.vwo.com - viewer,editor, admin

let isLoggedIn = true;
let userRole = "editor";

if (isLoggedIn) {

    if (userRole === "Admin")
        console.log("You have Admin Access");
    else if (userRole === "Editor")
        console.log("You can Edit Access");
    else if (userRole === "Viewer")
        console.log("You can readonly Access");
    else
        console.log("You role is not identified");

}
else {
    console.log("You are not loggedin");
}