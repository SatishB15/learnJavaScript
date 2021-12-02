async function showData()
{
    let response=await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
}

// showData().then((msg)=>
// {
//     console.log(msg)
// });

async function display()
{
    let showdata=await showData();
    console.log(showdata);
}