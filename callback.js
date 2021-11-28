/*
A callback function is a function passed into another function as an argument,
which is then invoked inside the outer function to complete some kind of routine or action. 

*/
// function message()
// {
//     console.log("Hello World");
// }
// function sayName(name)
// {
//     console.log("My name is "+name)
// }
// setTimeout(sayName,2000)
// message();

// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('How are You....!');
}

// passing function as an argument
greet('Peter', callMe);

// const movies = [
//     { title:"Kabir singh",year:"2019"},
//     { title:"Sooryavanshi",year:"2021"}];

// function getMovies(){
// setTimeout(() => {
//     movies.forEach((movie, index) => {
//         console.log(movie.title)
//     })
// }, 2000);
// }

// function createMovies(movie,callback){
// setTimeout(() => {
//     movies.push(movie);
//     callback();
// }, 4000);
// }
// createMovies({ title:"Jay Bhim", year:"2021"},getMovies);