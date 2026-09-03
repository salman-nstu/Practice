// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//         let a = true;
//         console.log(a);
//     }

// }


// const dog1 = new Dog("Black");

// console.log(dog1);


class Shape {


    draw() {
        this.count++;
        console.log(`${this.count}`);
    }
}

const a = new Shape("CIRCLE");

a.draw();
a.draw(); 