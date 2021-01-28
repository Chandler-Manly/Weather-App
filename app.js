// const API_KEY = '7978f186187864ed7fc387296b8ece2c'
const API_KEY_TWO = '1a012b94443d511ac871535b64ac2706'


const getCity = async () => {
  try {
    const CITY_NAME = document.querySelector('#city-name')
    let response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME.value}&units=imperial&appid=${API_KEY_TWO}`)
    // console.log(response)
    let weatherData = response.data.main
    // console.log(weatherData)
  } catch (error) {
    console.log(error)
  }
}

const getValue = (e) => {
  e.preventDefault()
  getCity()
}


function showWeatherData(response.data.main) {
  const weatherInfo = `<h2> City Name: ${data.name}</h2>`
  let dataContainer = document.querySelector('#append-weather')
  dataContainer.insertAdjacentHTML('beforeend', weatherInfo)
}

const form = document.querySelector('form')
form.addEventListener('submit', getValue)

showWeatherData()

// removeWeatherData (){}
// write code here 
// make sure to call function 