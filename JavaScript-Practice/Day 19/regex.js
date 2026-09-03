// A pattern used to search, match, validate, extract, or replace text.

const pattern = /hello/;

console.log(pattern.test("hello world"));

const hasNumber = /\d/;

console.log(hasNumber.test("abc123"));

const phonePattern = /^01\w{9}$/;

console.log(phonePattern.test("01712342278"));


// const text = "cat dog cat";

// console.log(text.match(/cat/g));

//replace()

const text = "I like cats. Cats are cute.";

const result = text.replace(/cats/gi, "dogs");

console.log(result);


const text2 = "I have 3 apples and 20 oranges.";

const numbers = text2.match(/\d+/g);

console.log(numbers);

function isValidUsername(username) {
    return /^[a-zA-Z0-9_]{3,16}$/.test(username);
}

console.log(isValidUsername("salman_123"));