let Emp= [
    {
        id: 1,
        name: "Admin",
        location: "India",
        salary:4500
    },
    {
        id: 2,
        name: "Author",
        location: "USA",
        salary:6000
    },
    {
        id: 3,
        name: "Visitor",
        location: "USA",
        salary:5000
    }
];

let filterArray=Emp.filter((num)=>
{
    if(num.id>2)
    return num.id;
});

 console.log(filterArray);


let mapArray=Emp.map((num)=>
{
    return num.id+2;
});

 console.log(mapArray);


let reducedArray=Emp.reduce((sum,sal)=>
{
    sum+=sal.salary;
    return sum;
},0);

console.log(reducedArray);