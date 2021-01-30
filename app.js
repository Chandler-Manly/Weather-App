// const API_KEY = '7978f186187864ed7fc387296b8ece2c'
const API_KEY_TWO = '1a012b94443d511ac871535b64ac2706'
const input = document.querySelector('input')

let appendWeather = document.getElementById('append-weather')

const getCity = async () => {
  try {
    removeWeatherData()
    let response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=imperial&appid=${API_KEY_TWO}`)
    console.log(response)
    let weatherData = response.data.main
    appendWeather.innerHTML += `<div> City Name: ${input.value}</div>`;

    //  Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
    appendWeather.innerHTML += `<div> Current Temp: ${Math.round(weatherData.temp)}°F</div>`;
    appendWeather.innerHTML += `<div> Feels like: ${Math.round(weatherData.feels_like)}°F</div>`;
    appendWeather.innerHTML += `<div> High: ${Math.round(weatherData.temp_max)}°F</div>`;
    appendWeather.innerHTML += `<div> Low: ${Math.round(weatherData.temp_min)}°F</div>`;
  } catch (error) {
    console.log(error)
  }
}


const button = document.querySelector('button')
button.addEventListener('click', getCity)

function removeWeatherData() {
  const weatherContainer = document.querySelector('#append-weather')
  while (weatherContainer.lastChild) {
    weatherContainer.removeChild(weatherContainer.lastChild);
  }
}

// ###Weather-Attire Recommendation###
// if (`${weatherData.feels_like}` > 80) {
//   console.log("Suns out guns out!")
// } else if (`${weatherData.feels_like}` > 60 || `${weatherData.feels_like}` < 79){
//   console.log('light jacket')
// } else if (`${weatherData.feels_like}` > 40 || `${weatherData.feels_like}` < 59){
//   console.log('cardigan and scarf')
// } else if (`${weatherData.feels_like}` > 20 || `${weatherData.feels_like}` < 39){
//   console.log('peacoat')
// } else if (`${weatherData.feels_like}` > 0 || `${weatherData.feels_like}` < 19){
//   console.log('Canada Goose')
// } else {
// console.log ('Yup it's freezing, bundle up!')}

