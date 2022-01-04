const api_key = "2d859f3d30535a229e336025bf6a2e88";
const imageURL = 'https://openweathermap.org/img/wn/';
function convertTemprature(rawTemp) {
    return Math.round(rawTemp - 273);
}
function convertDate(rawDate) {
    const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sept", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let date = new Date(rawDate * 1000);
    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
}
async function displayData() {
    const city = document.getElementById("city").value || 'Nashik';
    console.log(city);
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
    let data = await response.json();
    console.log(data);
    let div = `
    <div class="city">${data.name}</div>
    <div class="date">${convertDate(data.dt)}</div>
    <hr>
    <div class="temp">${convertTemprature(data.main.temp) + "C"}</div>
    <div class="top-low">${convertTemprature(data.main.temp_max) + "/" + convertTemprature(data.main.temp_min) + " C"}</div>
    <div class="message"> <img src=${imageURL}${data.weather[0].icon + "@2x.png"}></img> 
    ${data.weather[0].description}</div>
    <hr>
    <div class="wind">WIND: speed: ${data.wind['speed']}<br>
    deg: ${data.wind['deg']} gust: ${data.wind['gust']}</div >
    <hr>
    <div class="humidity">HUMIDITY: ${data.main.humidity + "%"}</div>
    <div class="humidity">PRESSURE: ${data.main.pressure + "%"}</div>`;
    document.getElementById("data").innerHTML = div;
    document.getElementById("city").value = "";
}