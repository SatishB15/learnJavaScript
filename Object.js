// javascript objects are connections of named Values
// we can create js object using 4 ways
// we can access object values using two ways using . or passing in []

// for(let value in Person)
// {
//     console.log(Person[value]);
// }


// we can create object using 4 ways
// 1) using literals {}
let Person=
{
    Name:"Shiban",
    id:45,
    age:35,
    Address:"somewhere",
    phone:"+91 111-1111-111",
    gender:"Male"

}
// // 2)using Object.create();
// let person1 =Object.create(Person);
// person1.Name="Rahul";
// console.log(person1.Name);
// // 3)using new Keyword
// const car=new Object();
// car.model="ford";
// car.enginPower="4 Horse Power";
// car.color="lightYellow";
// console.log(car);
// for(let value in car)
// {
//     console.log(car[value]);
// }
// //4)using object Constructor
// function Student(name,rollno,marks,sub)
// {
// this.Name=name;
// this.Rno=rollno;
// this.marks=marks;
// this.sub=sub;
// }

// let Student1=new Student("satish",23,450,"math");
// console.log(Student1.Name);


// Object Methods
console.log(Object.keys(Person));//return array of keys
console.log(Object.values(Person));//return array of values
console.log(Object.entries(Person));//return array of [key,value] arrays