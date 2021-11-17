let fruits=["mango","banana","orange","greps","apple","kiwi"];

// we can access array value using index
console.log(fruits[0]);

// change elments by assigning a value to particular index
fruits[0]="cherry";

// 1=>Checking wheter array contains element or not
console.log(fruits.includes("nothing"));

// looping using for in loop
for(x in fruits)
{
    console.log("using for in loop=>",fruits[x]);
}

// 2=> perform operation forEach element
fruits.forEach((str)=>
{
    // console.log(str+" Fruit");
    console.log(str);
});

//pop and push perform operation at end
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

// 3=>filter the elments which satisfies the specified condition
let newArray=years.filter((year)=>
{
    if(year%2==0)
    return year;
});
console.log(newArray);

// 4=>reduce all element of an array to condition specified
let reducedArray=years.reduce((total,num)=>
{
    return total+=num;
});
console.log(reducedArray);

//5=> map perform operation on all elments of an array
let mapArray=years.map((num)=>
{
    return num-1000;
});
console.log(mapArray);

// 6=>perform operation on some elements
let someEle=fruits.some((ele)=>
{
return ele.length>5;
});
console.log("is there some elements which has lenth >4 ?",someEle);

// 7=>perform operation on every elements
let everyEle=fruits.every((ele)=>
{
return ele.length>5;
});
console.log("is there every elements which has lenth >4 ?",everyEle);

// 8=>sort the array alphabetical order
console.log("sorted array is=>",fruits.sort());

// 9=> create new array of given elements
let newlyArray=Array.of(1,2,3,4,5,6);
console.log(newlyArray);

// 10=>Create array from string

let stringArray=Array.from("Hello");
console.log(stringArray);