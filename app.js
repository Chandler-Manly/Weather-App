// API Key: 7978f186187864ed7fc387296b8ece2c
// Endpoint: api.openweathermap.org
// API Call By City Name: api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} 

const API_KEY = '7978f186187864ed7fc387296b8ece2c'

const getCity = async () => {
  let response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=${API_KEY}`)
  console.log(response)
}
