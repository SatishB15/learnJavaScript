let Animals={
    Name:"Dog",
    Breed:"Labradour",
    Age:7,
    Price:"3550$"
}

let {Name,Breed,Age,Price}=Animals;
console.log(Breed);
// so here we can use Name and other properties directly

let arr=[1,2,3,4,5];

let [a,b,c,d,e]=arr;
console.log(a);

//swapping makes easy
let x=5,y=9;
[x,y]=[y,x];

console.log(x);
console.log(y);