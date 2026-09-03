"use strict";

const person = {
    name: "Salman",

    greet() {
        console.log("Method call:", this.name);
    }
};

person.greet();
//this refers to person because the method is called as person.greet().



function greet() {
    console.log("Standalone call:", this);
}

greet();
//In strict mode, there is no calling object, so this is undefined.


// const person2 = {
//     name: "Salman",

//     greet() {
//         console.log(this.name);
//     }
// };

// const fn = person2.greet;

// fn();
//The method lost its object context when assigned to fn.


const person3 = {
    name: "Salman",

    greet() {
        const showName = () => {
            console.log("Arrow function:", this.name);
        };

        showName();
    }
};

person3.greet();
//The arrow function inherits this from greet().


const person4 = {
    name: "Salman",

    regular: function () {
        console.log("regular:", this.name);
    },

    arrow: () => {
        console.log("arrow:", this?.name);
    }
};

person4.regular();
person4.arrow();


//The regular function gets this from the call (person.regular()), while the arrow function uses the surrounding lexical this, not person.

