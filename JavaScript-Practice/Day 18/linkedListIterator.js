class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    *[Symbol.iterator]() {
        let current = this.head;
        while (current) {
            const value = current.value;
            current = current.next;
            // return { value, done: false };
            yield value;
        }
        // return {
        //     next: function () {
        //         if (current) {
        // const value = current.value;
        // current = current.next;
        // return { value, done: false };
        //         }
        //         return { done: true };
        //     }
        // };
    }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(20);

for (const value of list) {
    console.log(value);
}


// [...list].forEach(value => console.log(value));


// console.log(typeof list);

// console.log(list);

// console.log(typeof ([Symbol.iterator]));

// console.log(typeof Symbol.iterator);


// console.log(typeof ([Symbol]));

// console.log(typeof (Symbol));

// console.log(typeof []);

// const uniqueValues = new Set(list);
// console.log(uniqueValues);
// console.log(uniqueValues.has(40));

// const newMap = new Map([...list].map((value, index) => [index, value]));
// // console.log(typeof newMap);
// console.log(newMap.entries());

// const newList = [...list];
// console.log(newList);

// const newfilterList = newList.filter(num => num > 20);
// console.log(newfilterList);

// console.log(typeof list);
// console.log(list.head.next.next.next.value);
