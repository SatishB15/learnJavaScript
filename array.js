let fruits=["mango","banana","orange","greps","apple","kiwi"];

// we can access array value using index

console.log(fruits[0]);
// change elments by assigning a value to particular index
fruits[0]="cherry";
console.log(fruits);
// treate array like stack and queue
// pop and push perform operation at end
for(x in fruits)
{
    console.log("using for in loop=>",fruits[x]);
}

fruits.forEach((str)=>
{
    // console.log(str+" Fruit");
    console.log(str);
});

let popped=fruits.pop();
console.log("Popped Element is",popped);
console.log(fruits);
fruits.push("kiwi");
console.log(fruits);

// where shift and unshift perform operation at first
let shifted=fruits.shift();
console.log("shifter elment =",shifted);
fruits.unshift("cherry");
console.log(fruits);
// splice(from,howmanydelete,elments...)

let years=[2021,2022,2023,2024,2025];
// filter the elments which satisfies the specified condition
let newArray=years.filter((year)=>
{
    if(year%2==0)
    return year;
});
console.log(newArray);
// reduce all element of an array to condition specified
let reducedArray=years.reduce((total,num)=>
{
    return total+=num;
});
console.log(reducedArray);
// map perform operation on all elments of an array
let mapArray=years.map((num)=>
{
    return num-1000;
});
console.log(mapArray);