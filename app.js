const API_KEY = '7978f186187864ed7fc387296b8ece2c'
const CITY_NAME = 'Atlanta'

const getCity = async () => {
  try {
    let response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&appid=${API_KEY}`)
    // console.log(response)
    let cityList = Object(response.data.main.temp)
    console.log(cityList)
  } catch (error) {
    console.log(error)
  }
}

getCity()

const getOptions = (list) => {
  // console.log(list)
  let select = document.querySelector('#city-name')
  console.log(select)
  list.forEach(city => {
    let option = document.createElement('option')
    option.value = city
    option.textContent = city
    // console.log(option)
    select.append(option)
  })
}

const getValue = (e) => {
  e.preventDefault()
  let optionValue = document.querySelector('#city-name').value
  // console.log(optionValue)
  removeWeather()
  getCity(optionValue)
}

const form = document.querySelector('form')

form.addEventListener('submit', getValue)

const getWeather = async (weather) => {
  try {
    let response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`)
    // console.log(response)
    getWeather(response)
  } catch (error) {
    console.log(error)
  }
}

getWeather()

const currentWeather = (city) => {
  let weatherData = document.createElement('p')
  image.src = weather
  let div = document.querySelector('#append-weather')
  div.append(image)
}

const removeWeather = () => {
  let weatherDiv = document.querySelector('#append-weather')
  while (weatherDiv.lastChild) {
    weatherDiv.removeChild(weatherDiv.lastChild)
  }
}