interface Employee {
    Name: string,
    age: number,
    gender?: boolean
}

var Person: Employee = {
    Name: "Tom",
    age: 32,
    gender: true
}

console.log(Person.Name)
console.log(Person.age)
console.log(Person.gender);

// function displayInfo(obj: Employee): void {
//     console.log(obj.Name)
//     obj.age = 32;//here it will show readonly property error
// }