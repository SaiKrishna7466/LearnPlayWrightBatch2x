var name = "sai krishna";

var firstName = "Sai";
var lastName = "Krishna";

// ===== DIFFERENT NAMING CONVENTIONS =====

// 1. camelCase (Most common in JavaScript)
// First word starts with lowercase, subsequent words start with uppercase
var firstName = "John";
var lastName = "Doe";
var emailAddress = "john@example.com";
var phoneNumber = "123456789";
var totalAmountDue = 500;
var getUserInfo = function () { };
var calculateTotalPrice = function () { };

// 2. PascalCase (Used for Classes and Constructors)
// First letter of each word is uppercase, no separators
var UserProfile = "user data";
var DatabaseConnection = "db connection";
var ErrorHandler = "error handling";
class Person { }
class UserAccount { }
function CalculateTotal() { }

// 3. snake_case (Used in some conventions, API responses)
// Words separated by underscores, all lowercase
var first_name = "John";
var last_name = "Doe";
var email_address = "john@example.com";
var total_amount_due = 500;
var user_id = 12345;
var is_active = true;

// 4. CONSTANT_CASE (Used for constants)
// All uppercase with underscores separating words
var MAX_USERS = 100;
var API_KEY = "xyz123abc";
var DATABASE_URL = "localhost:5432";
var TIMEOUT_MS = 5000;
var DEFAULT_LANGUAGE = "en";

// 5. kebab-case (NOT valid for JavaScript identifiers)
// var user-name = "John";     // Invalid - hyphens not allowed
// var email-address = "test"; // Invalid - hyphens not allowed

// 6. SCREAMING_SNAKE_CASE (Alternative for constants)
var MIN_PASSWORD_LENGTH = 8;
var MAX_LOGIN_ATTEMPTS = 5;
var DEFAULT_TIMEOUT = 30000;

// 7. underscore_prefix (Used for private/internal variables)
var _privateMethod = function () { };
var _internalData = "internal";
var _tempVariable = 100;

// 8. dollar_prefix (Used for jQuery or special variables)
var $mainElement = "jQuery object";
var $formData = "form reference";

// 9. MIXED Convention Examples
var _MAX_RETRIES = 3;           // Private constant
var $APP_NAME = "MyApp";        // Special constant
var getUserById = function () { }; // camelCase function
var ProcessUserData = function () { }; // PascalCase constructor

// Real-world examples
var userName = "john_doe";                    // camelCase
var UserAccount1 = {};                         // PascalCase for object/class
var MAX_FILE_SIZE = 5242880;                  // CONSTANT_CASE
var isUserLoggedIn = true;                    // camelCase boolean
var calculateOrderTotal = function () { };      // camelCase function
var _privateHelper = function () { };           // private method
var API_ENDPOINT = "https://api.example.com"; // CONSTANT_CASE

console.log(userName);

