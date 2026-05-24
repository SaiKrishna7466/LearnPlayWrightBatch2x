//Real time usage
//you are working API Validation
//response code - 200, 404, 401, 403 404


let responseCode = 404;

switch (responseCode) {
    case 200:
        console.log("Success");
        break;
    case 400:
        console.log("Bad Request");
        break;
    case 401:
        console.log("Unauthorized");
        break;
    case 403:
        console.log("Forbidden");
        break;
    case 404:
        console.log("Page Not found");
        break;
    case 500:
        console.log("Server Errors");
        break;
    default:
        console.log("Wrong Input");
        break;

}