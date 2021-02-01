// const API_KEY = '7978f186187864ed7fc387296b8ece2c'
const API_KEY_TWO = '1a012b94443d511ac871535b64ac2706'
const input = document.querySelector('input')
let appendWeather = document.getElementById('append-weather')

// Core functionality: here's
const getCity = async () => {
  try {
    removeWeatherData()
    let response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=imperial&appid=${API_KEY_TWO}`)
    console.log(response)
    let weatherData = response.data.main
    appendWeather.innerHTML += `<div> City Name: ${input.value}</div>`;

    //  Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
    // This is where the data is collected and grouped together.
    appendWeather.innerHTML += `<div> Current Temp: ${Math.round(weatherData.temp)}°F</div>`;
    appendWeather.innerHTML += `<div> Feels like: ${Math.round(weatherData.feels_like)}°F</div>`;
    appendWeather.innerHTML += `<div> High: ${Math.round(weatherData.temp_max)}°F</div>`;
    appendWeather.innerHTML += `<div> Low: ${Math.round(weatherData.temp_min)}°F</div>`;
    appendWeather.innerHTML += `<div> Description: ${response.data.weather[0].description}</div > `;
  } catch (error) {
    console.log(error)
  }
}

// This is my event listener which triggers getCity function
const button = document.querySelector('button')
button.addEventListener('click', getCity)

// This function refreshes the data and is embedded in the getCity function and is set off by the event listener.
function removeWeatherData() {
  const weatherContainer = document.querySelector('#append-weather')
  while (weatherContainer.lastChild) {
    weatherContainer.removeChild(weatherContainer.lastChild);
  }
}