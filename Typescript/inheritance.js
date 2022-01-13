var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(age, breed) {
        this.age = age;
        this.breed = breed;
    }
    Animal.prototype.makeSound_ = function (sound) {
        console.log(sound);
        console.log(sound);
        console.log(sound);
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(age, breed, eyes) {
        var _this = _super.call(this, age, breed) || this;
        _this.eyes = eyes;
        return _this;
    }
    Cat.prototype.makeSound = function () {
        _super.prototype.makeSound_.call(this, 'meow meow');
    };
    return Cat;
}(Animal));
var cat = new Cat(12, "german", "shiney");
cat.makeSound_("meow");
console.log(cat.eyes);
