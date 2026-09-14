abstract class Animall {
    abstract makeSound(): void;
}
class Dogg extends Animall {
    makeSound(): void {
        console.log("Woof!");
    }
}
class Catt extends Animall {
    makeSound(): void {
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
