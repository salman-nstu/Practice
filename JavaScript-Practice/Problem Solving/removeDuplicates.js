const arr = [5, 0, 4, 3, 3, 3, 35, 5, 5, 5, 32, 2];

console.log(`Unique array: ${[...new Set(arr)].sort((a, b) => a - b)}`);