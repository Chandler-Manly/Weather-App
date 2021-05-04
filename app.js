// const API_KEY = '7978f186187864ed7fc387296b8ece2c'
// https://cors-anywhere.herokuapp.com/
const API_KEY_TWO = '1a012b94443d511ac871535b64ac2706'
const input = document.querySelector('input')
let appendWeather = document.getElementById('append-weather')
let appendAttire = document.getElementById('attire-recommendation')
let appendMeal = document.getElementById('meal-recommendation')
let appendPun = document.getElementById('pun-of-the-day-recommendation')



// Core functionality: here's
const getCity = async () => {
  try {
    removeWeatherData();
    removeAttire();
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=imperial&appid=${API_KEY_TWO}`)
    let weatherData = response.data.main
    appendWeather.innerHTML += `<div> City Name: ${input.value}</div>`;

    // This is where the data is collected and grouped together.
    appendWeather.innerHTML += `<div> Current Temp: ${Math.round(weatherData.temp)}°F</div>`;
    appendWeather.innerHTML += `<div> Feels like: ${Math.round(weatherData.feels_like)}°F</div>`;
    appendWeather.innerHTML += `<div> High: ${Math.round(weatherData.temp_max)}°F</div>`;
    appendWeather.innerHTML += `<div> Low: ${Math.round(weatherData.temp_min)}°F</div>`;
    appendWeather.innerHTML += `<div> Description: ${response.data.weather[0].description}</div > `;

    // Attire Rec
    function attireRec() {
      if (`${Math.round(weatherData.temp)} > 75`) {
        appendAttire.innerHTML += '<div>Attire Recommendation: Pack your bathing suit!</div>';
      } 
      else {
        appendAttire.innerHTML += '<div>Attire Recommendation: Bundle up! Comforters and a hot cup of coffee!</div>';
      }
    };
    attireRec()
  
  // Meal Rec
  // appendMeal.innerHTML += `<div> Suns out Guns out</div>`;
  // Pun-of-the-day
  // appendPun.innerHTML += `<div> Suns out Guns out</div>`;

  } catch (error) {
    console.log(error)
  }
}

// This is my event listener which triggers getCity function
const button = document.querySelector('button')
button.addEventListener('click', getCity)

const button = document.querySelector('button')
button.addEventListener('click', getCity)

// This function refreshes the data and is embedded in the getCity function and is set off by the event listener.
function removeWeatherData() {
  const weatherContainer = document.querySelector('#append-weather')
  while (weatherContainer.lastChild) {
    weatherContainer.removeChild(weatherContainer.lastChild);
  }
}
function removeAttire() {
  const attireContainer = document.querySelector('#attire-recommendation')
  while (attireContainer.lastChild) {
    attireContainer.removeChild(attireContainer.lastChild);
  }
}




{/* <div>
<i class="far fa-snowflake"></i>
  <i class="fas fa-cloud"></i>
  <i class="fas fa-sun"></i>
  <i class="fas fa-cloud-showers-heavy"></i>
  <i class="fas fa-wind"></i>
  <i class="fas fa-smog"></i>
  <i class="fas fa-bolt"></i>  
<i class="fas fa-cloud-rain"></i>
</div> */}