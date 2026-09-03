// const user = {
//     name: "Salman",
//     age: 22
// };
const user = [11, 22];
const jsonUser = JSON.stringify(user);

console.log(jsonUser);

const json = JSON.parse(jsonUser);

console.log(json);
