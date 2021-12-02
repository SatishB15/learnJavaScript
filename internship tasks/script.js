// async function getUserDetails(url)
// {
//     const response=await fetch(url);
//     let data=await response.json();
//     return data;
// } 
// let Name="Satish Birhade";
// let role="KTHM COLLAGE";
// let Image="./Capture.PNG"
// let Tag=document.getElementById("userdata");
// function showUserData()
// {
//     let fetchedData=getUserDetails();
//     let div;
//     for(let dt of fetchedData.user)
//     {
//         div+=`<div class="mainDiv"><div class="card"><img src="${dt.Image}" alt="Image Here" style="height:300px;width:100%">
//         <div class="container"><h4><b>${dt.Name}</b></h4><p>${dt.role}</p></div></div><div>`;
//     }
    
//     document.getElementById("userdata").innerHTML=div;
// }
let Name="Satish Birhade";
let role="KTHM COLLAGE";
let Image="./Capture.PNG"
let Tag=document.getElementById("userdata");
function showUserData()
{
    div=`<div class="mainDiv"><div class="card"><img src="${Image}" alt="Image Here" style="height:300px;width:100%">
        <div class="container"><h4><b>${Name}</b></h4><p>${role}</p></div></div><div>`;
    document.getElementById("userdata").innerHTML=div;
}