async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
  }
async function display()
{
    let data=await getData();
    document.getElementById("userdata").innerHTML=JSON.stringify(data);
}
display()