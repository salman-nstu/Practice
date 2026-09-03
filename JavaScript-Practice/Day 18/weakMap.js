const weakMap = new WeakMap();

let user = {};

weakMap.set(user, "private data");

// let user = null; 
console.log(weakMap.get(user));