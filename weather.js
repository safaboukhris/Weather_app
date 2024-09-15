const weatherContainer = document.getElementById('weather-container')
const weatherDetails = document.getElementById('weather-details')
const cityInput = document.getElementById('city-data')
const searchButton = document.querySelector('button')

const apiKey = 'fe824cb856a37281c8c13e7a5fbbd488'

searchButton.addEventListener('click',()=>{
    const city = cityInput.value
    console.log(city)
    if (city){
        getWeather(city)
    }
 })


 async function getWeather(city){
    try{
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe824cb856a37281c8c13e7a5fbbd488`)
        const data = await response.json();
        console.log(data)
       updated(data.name, data.main.temp)
 }catch(err){
    alert('error:', err)
 }}

 function updated (city,temp) {
    weatherDetails.querySelector('h1').textContent = city;
    console.log(city)
    weatherDetails.querySelector('h2').textContent = `${temp}°C `
 }