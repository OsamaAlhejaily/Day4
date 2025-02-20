
//Section:1.1
function capitalizeWords(word: string): string {

    if(word == "")
     return "Please enter a word";
    else
     return word.toUpperCase(); 
}
console.log(capitalizeWords("")); 
//Section:1.2
function isValidNumber(value : unknown): boolean {
    if(typeof value == "number")
     return true;
    else
     return false
        
}
console.log(isValidNumber(5));
console.log(isValidNumber("Osama"));
//Section:2
interface User{
id : number;
name : string;
email: string;
isAdmin: boolean;
}
function createUser(user : User) : string{
    user.name == "Osama";
    return `User ${user.name} created successfully`;
}
const user: User = { name: "Osama", id: 1, email: "Osama@gmail.com", isAdmin: true };
console.log(createUser(user));
//Section:3
class Product{
    private name: string;
    private price: number;
    private category:string;

    constructor(name:string,price:number,category:string){
        this.name = name;
        this.price = price;
        this.category = category;
    }
    public getDiscountedPrice(discount:number) :number{
        return (this.price - discount);
    }

}
const veggies = new Product("Potato",10,"Food");
console.log(veggies.getDiscountedPrice(5));
//Section:4

function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {
    const result: T[] = [];
    for (let i =0;i<array.length;i++) {
        if (predicate(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(filterArray([1, 2, 3, 4], num => num % 2 === 0)); 
console.log(filterArray(["apple", "banana"], word => (typeof word === "string"))); 
//Section:5
async function fetchUsers(): Promise<void> {
    
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
                email: data[i].email,
            });
        }

        console.log(users);
    
}
fetchUsers();


