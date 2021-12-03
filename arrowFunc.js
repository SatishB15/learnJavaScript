// in arrow function this refer to his parent function
// arrow function do not have arguments binding
// in normal function this refer to golbal object
// arrow function gives same output as normal function
// not to use array function is object or as constructor

// function display()
// {
//     console.log("Hello World");
// }
// display();

let display=()=>"Hello World";
console.log(display());
// function greet(name)
// {
//     console.log("Hello",name)
// }
// greet("Satish")

let greet=username=> "Hello "+username;

console.log(greet("Satish"))

// function add(a,b)
// {
// console.log(a+b);
// }

//add(3,6);

let addition=(a,b)=> a+b;

console.log(addition(3, 5));
let app = "username";
