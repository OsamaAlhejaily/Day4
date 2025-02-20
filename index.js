// function greet(name:string) {
//     return `Hello, ${name}!`; // ✅ Use backticks (`) instead of single quotes
// }
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
// console.log(greet("Osama"));
// let message: string = "Osama"
// // structure 
// interface Car {
//     brand1 : string;
//     model: string;
//     year: number;
//     }
//     interface User {
//         name: string;
//         age: number;
//         isAdmin?: boolean; // Optional property
//       }
//       const username: User = { name: "Fatima", age: 30 };
//       //Using Interfaces in Functions
//       function printUser(username: User) {
//         console.log(`${username.name} is ${username.age} years old`);
//       }
//       // ✅ Call the function to display output
//       printUser(username);
//       let number : number[] = [1,2,3,4];
//       let person :[string,number] = ["osama",23];
//       enum Role {admin,user,guest};
//       let myRole : Role = Role.admin;
//       class Car{
//         brand:string;
//         constructor(brand:string){
//             this.brand = brand;
//         }
//         drive(){
//             console.log(`My car brand is ${this.brand}`);
//         }
//       }
//       function identity<T>(value: T): T {
//         return value;
//       }
//       console.log(identity<string>("Hello")); // Output: "Hello"
//       console.log(identity<number>(123)); // Output: 123
function capitalizeWords(word) {
    if (word == "")
        return "Please enter a word";
    else
        return word.toUpperCase();
}
console.log(capitalizeWords(""));
////////////////////////////////////////////////////////////////
function isValidNumber(value) {
    if (typeof value == "number")
        return true;
    else
        return false;
}
console.log(isValidNumber(5));
console.log(isValidNumber("Osama"));
function createUser(user) {
    user.name == "Osama";
    return "User ".concat(user.name, " created successfully");
}
var user = { name: "Osama", id: 1, email: "Osama@gmail.com", isAdmin: true };
console.log(createUser(user));
///////////////////////////////////////////////////////////////////////
var Product = /** @class */ (function () {
    function Product(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    Product.prototype.getDiscountedPrice = function (discount) {
        return (this.price - discount);
    };
    return Product;
}());
var veggies = new Product("Potato", 10, "Food");
console.log(veggies.getDiscountedPrice(5));
/////////////////////////////////////////////////////////////////////////////
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
console.log(filterArray(["apple", "banana"], function (word) { return (typeof word === "string"); }));
/////////////////////////////////////////////////////////////////////////////
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, users, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/users")];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("HTTP Error: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    users = [];
                    for (i = 0; i < data.length; i++) {
                        users.push({
                            id: data[i].id,
                            name: data[i].name,
                            email: data[i].email,
                        });
                    }
                    console.log(users);
                    return [2 /*return*/];
            }
        });
    });
}
fetchUsers();
