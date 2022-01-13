class Person {
    Name: string
    age: number
    constructor(Name: string, age: number) {
        this.Name = Name;
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}

let Person1 = new Person("Rahul", 32);
console.log(Person1.Name);
console.log(Person1.getAge());