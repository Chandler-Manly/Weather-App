// async function from third party api
// 7978f186187864ed7fc387296b8ece2c

// 
// 
const getWeather = async () => {
  try {
    let response = await axios.get(`api.openweathermap.org/data/2.5/weather?q=Boston&appid=7978f186187864ed7fc387296b8ece2c`)
    // console.log(response.data)
    let weatherCurrent = Object.keys(response.data.message)
    // console.log(weatherCurrent)
    getOptions(weatherCurrent)
  } catch (error) {
    console.log(error)
  }
}


getWeather()


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