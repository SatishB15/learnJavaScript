// in function and Alone it get global Object
// in Object it get Parant Value


class Car
{
  constructor(name,modal) {
    this.name=name;
    this.modal=modal;
  }
}

let car1=new Car("Swift","Desire");

console.log(car1.modal);