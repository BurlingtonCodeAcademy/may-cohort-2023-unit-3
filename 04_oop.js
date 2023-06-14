/* 
    - Encapsulated data
    - Allow for inheritance of behavior via a parent class
    - Abstraction of complexity
    - Polymorphism of behavior
*/

//* Encapsulation
class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        // this.size = size;
    }

    // speak() {
    //     return `${this.name} says, "woof!"`;
    // }

    speak() {
        return `${this.name} says, "${this.voice}"`;
    }

    fly() {
        // this.flies = true
        // console.log(this.flies);
        if(this.flies) {
            return `${this.name} takes to the skies!`
        } else {
            return `${this.name} can only gaze upward...`
        }
    }
}

let buttons = new Pet('Buttons', 'brown');
// console.log(buttons.speak());
// console.log(`${buttons.name} says "woof!"`);

// console.log(new Pet('Fido', "blond"));

//* Inheritance
/* 
!   Keywords: 
        - extends
        - super
*/

class Dog extends Pet {
    constructor(name, color, voice) {
        super(name, color);
        this.voice = voice;
    }

    // speak() {
    //     return `${this.name} says, "${this.voice}"`;
    // }
}

let fido = new Dog("Fido", "blond", "ruff!", "small");
console.log(fido.speak());
let spot = new Dog("Spot", "white", "woof!");
console.log(spot.speak());
console.log(fido);

class Cat extends Pet {
    constructor(name, color, voice) {
        super(name, color);
        this.voice = voice;
    }
}

let mayo = new Cat("Mayo", "black", 'mew');
console.log(mayo);
console.log(mayo.speak());

//! CHALLENGE
/*
    - Create a bird class that extends pets. - DONE
    - Provide it a new key property called "flies" that will hold a boolean value. - DONE
    - Create a method within the parent class called "fly" that checks to see if our object can fly and returns as such:
        If so: "{pet} takes to the skies!"
        If not: "{pet} can only gaze upward..."

    - Create a new bird. (give whatever values to its attributes)
        - hint: make sure it is "true" that it can fly.
    - Within a console.log(), check the fly method of the new bird and another using either the dog or cat just created.
*/

class Bird extends Pet {
    constructor(name, color, type, flies) {
        super(name, color);
        this.type = type;
        this.flies = flies;
    }
}

let bird = new Bird("Oy Vay", "blue", "blue jay", true);
console.log(bird.fly());
console.log(mayo.fly());

//* Abstraction
/* 
    - Hiding complexity via an objects methods
*/

class Tab {
    constructor(sub, tax) {
        this.subtotal = sub;
        this.tax = tax;
        this.tip;
        this.tip_percent;
    }

    tipAmount(x) {
        let total  = this.subtotal + this.tax;
        this.tip_percent = x;
        this.tip = total * x;
        let final = total + this.tip;
        return final.toFixed(2);
    }

}

let salesTax = .075;
let tipPercent = .2;

let dinnerBill = new Tab(42.83, salesTax);

function calcTip(bill) {
    return bill.tipAmount(tipPercent);
};

console.log(`Final Cost: $${calcTip(dinnerBill)}`);
console.log(`With a tip of $${dinnerBill.tip.toFixed(2)}!`);
console.log(dinnerBill);