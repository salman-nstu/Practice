"use strict";
class Animall {
}
class Dogg extends Animall {
    makeSound() {
        console.log("Woof!");
    }
}
class Catt extends Animall {
    makeSound() {
        console.log("Meow!");
    }
}
// const animal = new Animall();
const dog2 = new Dogg();
const cat2 = new Catt();
dog2.makeSound();
cat2.makeSound();
// class abc {
//     abstract pay(): void;
// }
// console.log(abc);
