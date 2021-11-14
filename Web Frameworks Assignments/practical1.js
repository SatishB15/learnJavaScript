
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let age=document.getElementById("age").value;

function validate()
{if(fname==" ")
{
    alert("Name not be space");
}
    if (18<age && age>50)
    {
        alert("age Must be Above 18 and less than 50");
    }
}