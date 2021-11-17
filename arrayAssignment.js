let nums=[1000,3243,5432,7754,7543,9876,2345,8765,987];
document.getElementById("arrValues").innerHTML=nums;

function reduceSal()
{
    let reducedArray=nums.reduce((total,num)=>
{
    return total+=num;
});
    document.getElementById("result").innerHTML=reducedArray;
}


function mapSal()
{
    let mapArray=nums.map((num)=>
{
return num+1000;
});
    document.getElementById("result").innerHTML+=mapArray;
}



function filterSal()
{
    let filterArray=nums.filter((num)=>
{
if(num>2000)
return num;
});
    document.getElementById("result").innerHTML=filterArray;
}

function checkSal()
{
    let val=document.getElementById("value").value;
    if(nums.includes(val))
    document.getElementById("result").innerHTML="found";
    else
    document.getElementById("result").innerHTML="Not found";

}