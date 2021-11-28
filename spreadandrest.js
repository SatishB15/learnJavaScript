const arrValue = ['one', 'two', 'three', 'four'];

// destructuring assignment in arrays
// assigning remaining elements to y
const [x, ...y] = arrValue;

console.log(x); // one
console.log(y); // ["two", "three", "four"]


const person = {
    Name: 'Sara',
    age: 25,
    gender: 'female'    
}

// destructuring assignment
// assigning remaining properties to rest
let { Name, ...rest } = person;

console.log(Name); // Sara
console.log(rest); // {age: 25, gender: "female"}