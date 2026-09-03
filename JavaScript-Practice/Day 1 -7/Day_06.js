// // Create an Object
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// // Build a Text
// let text = "";
// for (let x in person) {
//     text += person[x] + " ";
// };

// console.log(text);

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// // Create an Array from the Properties
// const myArray = Object.values(person);

// // Stringify the Array
// let text = myArray.toString();

// console.log(myArray);
// console.log(text);

// let price = 10;
// let VAT = 0.25;
// console.log(`Total: ${(price * (1 + VAT)).toFixed(2)}`);

// let text = `He's often called "Johnny"`;
// console.log(text);

// let firstName = "John";
// let lastName = "Doe";

// let text2 = `Welcome ${firstName}, ${lastName}!`;
// console.log(text2);

// const product = {
//     name: "Laptop",
//     price: 75000
// };

// // const ex = `Name: ${product.name}
// // Price: ${product.price}`;
// let { name, price } = product;
// console.log(product);

// const arr = [1, [2, 3]];

// const [a, [b, c]] = arr;

// console.log(a, b, c);

//Spread arrays
// const a = [1, 2];
// const b = [3, 4];

// const c = [...a, ...b];

// console.log(c);

// const user = {
//     name: "Salman",
//     lName: "khan"
// };

// const updated = {
//     ...user,
//     age: 22
// };

// console.log(updated);

// const a1 = [1, 2];
// const a2 = [3, 4];
// const merged = [...a1, ...a2];
// console.log(merged)

let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
console.log("=========Deep Copy========");
let newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);