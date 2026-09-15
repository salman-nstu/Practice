interface HasId {
    id: number;
}

function printId<T extends HasId>(item: T): void {
    console.log(item.id);
}

const user5 = {
    id: 101,
    name: "Salman"
};

printId(user5);

// printId({
//     name: "Salman"
// });