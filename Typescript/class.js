var Person = /** @class */ (function () {
    function Person(Name, age) {
        this.Name = Name;
        this.age = age;
    }
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var Person1 = new Person("Rahul", 32);
console.log(Person1.Name);
console.log(Person1.getAge());
