const arr = [
    { name: "A", age: 20 },
    { name: "B", age: 30 },
    { name: "C", age: 25 },
    { name: "D", age: 25 }
];

let olderCandidates = arr.filter(candidate => candidate.age > 20).map(c => `${c.name}: ${c.age}`).join(" | ");

console.log(`Older candidates are ${olderCandidates}`);
