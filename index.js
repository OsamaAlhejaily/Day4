var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Section:1.1
function capitalizeWords(sentence) {
    if (sentence === "")
        return "Please enter a word";
    return sentence
        .split(" ")
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); })
        .join(" ");
}
console.log(capitalizeWords("hello everyone I'm osama")); // Output: "Hello World"
// Section:1.2
function isValidNumber(value) {
    if (typeof value === "number")
        return true;
    else
        return false;
}
console.log(isValidNumber(5));
console.log(isValidNumber("Osama"));
function createUser(user) {
    return "User ".concat(user.name, " created successfully");
}
var user = { name: "Osama", id: 1, email: "Osama@gmail.com" };
console.log(createUser(user));
// Section:3
var Product = /** @class */ (function () {
    function Product(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    Product.prototype.getDiscountedPrice = function (discount) {
        return this.price - discount;
    };
    return Product;
}());
var veggies = new Product("Potato", 10, "Food");
console.log(veggies.getDiscountedPrice(5));
// Section:4
function filterArray(array, predicate) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}
console.log(filterArray([1, 2, 3, 4], function (num) { return num % 2 === 0; }));
console.log(filterArray(["apple", "banana"], function (word) { return typeof word === "string"; }));
// Section:5 - Fetch Users Function
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, users, i, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("waiting to be fetched");
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 2000); })];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 5, , 6]);
                    return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/users")];
                case 3:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("HTTP Error: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 4:
                    data = _a.sent();
                    users = [];
                    for (i = 0; i < data.length; i++) {
                        users.push({
                            id: data[i].id,
                            name: data[i].name,
                            email: data[i].email
                        });
                    }
                    console.table(users);
                    console.log("done fetching");
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.log("Error in fetching data");
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
// BONUS CHALLENGE - Password Validation
var weakPasswords = ["password", "123456", "qwerty"];
function validatePassword(password) {
    if (password.length < 8) {
        console.log("Password must be at least 8 characters.");
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        console.log("Password must contain an uppercase letter.");
        return false;
    }
    if (!/[a-z]/.test(password)) {
        console.log("Password must contain a lowercase letter.");
        return false;
    }
    if (!/\d/.test(password)) {
        console.log("Password must contain a number.");
        return false;
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
        console.log("Password must contain a special character.");
        return false;
    }
    // Exact match check: only reject if the whole password matches a weak one
    if (weakPasswords.indexOf(password.toLowerCase()) !== -1) {
        console.log("Password is too common.");
        return false;
    }
    console.log("Password is strong!");
    return true;
}
// Main function: Wait for fetchUsers to finish, then run password tests.
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var passwords;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchUsers()];
                case 1:
                    _a.sent(); // Wait until users are fetched
                    console.log("\n--- Running Password Validation Tests ---");
                    passwords = [
                        "Password123!",
                        "12345678",
                        "qwerty",
                        "Admin123$",
                    ];
                    passwords.forEach(function (pwd) {
                        console.log("\nTesting \"".concat(pwd, "\":"));
                        validatePassword(pwd);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
main();
