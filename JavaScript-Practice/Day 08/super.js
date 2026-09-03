// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     }
// }
// const dog = new Dog("Buddy", "Labrador");

// console.log(dog);

class Animal {
    speak() {
        console.log("Animal sound");
    }
}

class Dog extends Animal {
    speak() {
        // Overridding
        // super.speak();
        console.log("Woof!");
    }
}
const dog = new Dog();

dog.speak();