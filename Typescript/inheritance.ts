class Animal {
    age: number
    breed: string
    constructor(age: number, breed: string) {
        this.age = age
        this.breed = breed
    }
    makeSound_(sound: string): void {
        console.log(sound);
        console.log(sound);
        console.log(sound);
    }
}
class Cat extends Animal {
    eyes: string
    constructor(age: number, breed: string, eyes: string) {
        super(age, breed)
        this.eyes = eyes;
    }
    makeSound(): void {
        super.makeSound_('meow meow')
    }
}
var cat = new Cat(12, "german", "shiney");
cat.makeSound_("meow")
console.log(cat.eyes)