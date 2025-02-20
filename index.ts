// Section:1.1 - Capitalize Words
// This function takes a sentence and capitalizes the first letter of each word.
// Returns an error message if the input string is empty.
function capitalizeWords(sentence: string): string {
    if (sentence === "") return "Please enter a word";
    return sentence
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }
  console.log(capitalizeWords("hello everyone I'm osama")); // Example usage
  
  // Section:1.2 - Number Validator
  // This function checks if a given value is a valid number.
  // Returns true if the value is a number, false otherwise.
  function isValidNumber(value: unknown): boolean {
    return typeof value === "number";
  }
  console.log(isValidNumber(5));
  console.log(isValidNumber("Osama"));
  
  // Section:2 - User System
  // Define a User interface and a function to create a user.
  // The isAdmin property is optional.
  interface User {
    id: number;
    name: string;
    email: string;
    isAdmin?: boolean;
  }
  
  // This function creates a user and returns a success message.
  function createUser(user: User): string {
    return `User ${user.name} created successfully`;
  }
  const user: User = { name: "Osama", id: 1, email: "Osama@gmail.com" };
  console.log(createUser(user));
  
  // Section:3 - Product Class
  // This class represents a product with a name, price, and category.
  // It includes a method to calculate the discounted price.
  class Product {
    private name: string;
    private price: number;
    private category: string;
  
    // Constructor to initialize the product properties.
    constructor(name: string, price: number, category: string) {
      this.name = name;
      this.price = price;
      this.category = category;
    }
  
    // Returns the price after applying the discount.
    public getDiscountedPrice(discount: number): number {
      return this.price - discount;
    }
  }
  const veggies = new Product("Potato", 10, "Food");
  console.log(veggies.getDiscountedPrice(5));
  
  // Section:4 - Generic Filter Function
  // This function filters an array based on a predicate function.
  // It returns a new array containing only the elements that match the predicate.
  function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {
    const result: T[] = [];
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i])) {
        result.push(array[i]);
      }
    }
    return result;
  }
  console.log(filterArray([1, 2, 3, 4], num => num % 2 === 0));
  console.log(filterArray(["apple", "banana"], word => typeof word === "string"));
  
  // Section:5 - Fetch Users Function
  // This async function waits 2 seconds, fetches user data from an API,
  // prints the user data in a table, and logs the process.
  async function fetchUsers(): Promise<void> {
    console.log("waiting to be fetched");
    // Wait for 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      const data = await response.json();
      const users: { id: number; name: string; email: string }[] = [];
  
      for (let i = 0; i < data.length; i++) {
        users.push({
          id: data[i].id,
          name: data[i].name,
          email: data[i].email
        });
      }
      console.table(users);
      console.log("done fetching");
    } catch (error) {
      console.log("Error in fetching data");
    }
  }
  
  // BONUS CHALLENGE - Password Validation
  // This function validates a password by ensuring:
  // - At least 8 characters long.
  // - Contains an uppercase letter, a lowercase letter, a number, and a special character.
  // - Does not exactly match a common weak password.
  const weakPasswords = ["password", "123456", "qwerty"];
  
  function validatePassword(password: string): boolean {
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
    // Check for exact match with any weak password (ignoring case)
    if (weakPasswords.indexOf(password.toLowerCase()) !== -1) {
      console.log("Password is too common.");
      return false;
    }
    console.log("Password is strong!");
    return true;
  }
  
  // Main Function
  // Waits for fetchUsers to finish, then runs the password validation tests.
  async function main() {
    await fetchUsers(); // Wait until user data is fetched
  
    console.log("\n--- Running Password Validation Tests ---");
    const passwords = [
      "Password123!",
      "12345678",
      "qwerty",
      "Admin123$",
    ];
    passwords.forEach((pwd) => {
      console.log(`\nTesting "${pwd}":`);
      validatePassword(pwd);
    });
  }
  
  // Start the main function
  main();
  