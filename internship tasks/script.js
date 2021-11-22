let array=[
    {
        id:1,
        name:"Shivam",
        salary:2000,
        age:21
    },
    {
        id:2,
        name:"Pradip",
        salary:3000,
        age:21
    },
    {
        id:3,
        name:"Ejaz",
        salary:8000,
        age:21
    },
    {
        id:4,
        name:"Pankaj",
        salary:5000,
        age:21
    }
];

function addEmp()
{

    let Id=document.forms["myForm"]["id"].value;
    let Name=document.forms["myForm"]["name"].value;
    let Salary=document.forms["myForm"]["salary"].value;
    let Age=document.forms["myForm"]["age"].value;
   if(Id && Name && Salary && Age){
       array.push({id:Id,name:Name,salary:Salary,age:Age});
       document.forms["myForm"]["id"].value="";
       document.forms["myForm"]["name"].value="";
       document.forms["myForm"]["salary"].value="";
       document.forms["myForm"]["age"].value="";

   }
}

function displayEmp()
{
    let str=JSON.stringify(array);
    document.getElementById("disp").innerHTML=str;
}

function findEmp()
{
    let found = array.find((value)=>
    {
    let target=document.forms["myForm"]["name"].value;
    if(value.name==target)
    {
        document.getElementById("disp").innerHTML=target+ " is Found"
    }
    });
}
