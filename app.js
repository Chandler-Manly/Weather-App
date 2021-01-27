// API Key: 7978f186187864ed7fc387296b8ece2c
// Endpoint: api.openweathermap.org
// API Call By City Name: api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} 

const DOMAIN = 'api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = /* 7978f186187864ed7fc387296b8ece2c */
  let CITY_NAME = 'boston'
const BASE_URL = `${DOMAIN}q=${CITY_NAME}&appid=${API_KEY}`;




const getCity = async () => {
  try {
    let response = await axios.get(BASE_URL)
    // console.log(response.data)
    let cityList = Object.keys(response.data)
    // console.log(cityList)
    getOptions(cityList)
  } catch (error) {
    console.log(error)
  }
}

getCity()

const getOptions = (list) => {
  // console.log(list)
  let select = document.querySelector('#city-name')
  // console.log(select)
  list.forEach(city => {
    let option = document.createElement('option')



  })
}

const button = document.querySelector('button')
button.addEventListener('click', getCity)







// const getWeather = async () => {
//   try {
//     let response = await axios.get(`api.openweathermap.org / data / 2.5 / weather ? q = Boston & appid=7978f186187864ed7fc387296b8ece2c`)
//     // console.log(response.data)
//     let weatherCurrent = Object.keys(response.data.message)
//     // console.log(weatherCurrent)
//     getOptions(weatherCurrent)
//   } catch (error) {
//     console.log(error)
//   }
// }

// getWeather()


// const getOptions = (list) => {
//   // console.log(list)
//   let select = document.querySelector('#select-breed')
//   // console.log(select)
//   list.forEach(dog => {
//     let option = document.createElement('option')
//     option.value = dog
//     option.textContent = dog
//     // console.log(option)
//     select.append(option)
//   })
// }

// const getValue = (e) => {
//   e.preventDefault()
//   let optionValue = document.querySelector('#select-breed').value
//   // console.log(optionValue)
//   removePics()
//   getBreed(optionValue)
// }

// const form = document.querySelector('form')

// form.addEventListener('submit', getValue)

// const getBreed = async (breed) => {
//   try {

//     let response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
//     // console.log(response.data.message)

//     getDoggoPic(response.data.message)
//   } catch (error) {
//     console.log(error)
//   }
// }

// const getDoggoPic = (dog) => {
//   let image = document.createElement('img')
//   image.src = dog
//   let div = document.querySelector('#append-dog')
//   div.append(image)
// }

// const removePics = () => {
//   let imageDiv = document.querySelector('#append-dog')
//   while (imageDiv.lastChild) {
//     imageDiv.removeChild(imageDiv.lastChild)
//   }
// }