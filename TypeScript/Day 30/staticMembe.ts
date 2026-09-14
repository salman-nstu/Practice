class MathHelper {
    static PI: number = 3.14159;
}

console.log(MathHelper.PI);

const helper = new MathHelper();

console.log(helper.PI);



class User5 {
    constructor(public name: string) { }

    static createGuest(): User5 {
        return new User5("Guest");
    }
}

console.log(User5.createGuest());