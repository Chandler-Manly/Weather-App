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
    appendWeather.innerHTML += `<div>The current temperature in ${input.value} is ${weatherData.temp}`°F` </div>`
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



