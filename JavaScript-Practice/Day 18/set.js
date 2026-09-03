const numbers = new Set();

numbers.add(10);
numbers.add(10);
numbers.add(10);

console.log(typeof numbers);


const num = [1, 2, 2, 3, 3, 3, 4, 5, 5];
const uniqueNum =  [...new Set(num)];
console.log(uniqueNum);
