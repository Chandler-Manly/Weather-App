#
# Weather-Now Overview
- [Weather-Now](https://chandler-manly.github.io/Weather-App/)

## Description

- Weather-Now allows users to input their city name and retrieve current weather information. 

## API and Data Sample

- [API documentation](https://openweathermap.org/api)

{
  "coord": {
    "lon": -122.08,
    "lat": 37.39
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 282.55,
    "feels_like": 281.86,
    "temp_min": 280.37,
    "temp_max": 284.26,
    "pressure": 1023,
    "humidity": 100
  },
  "visibility": 16093,
  "wind": {
    "speed": 1.5,
    "deg": 350
  },
  "clouds": {
    "all": 1
  },
  "dt": 1560350645,
  "sys": {
    "type": 1,
    "id": 5122,
    "message": 0.0139,
    "country": "US",
    "sunrise": 1560343627,
    "sunset": 1560396563
  },
  "timezone": -25200,
  "id": 420006353,
  "name": "Mountain View",
  "cod": 200
  }                         


## Wireframes

- Weather-Now across the banner 
- Text-box to input city names 
- Search button 
- Designated area for rendered list
- [Weather-Now Wireframes](https://miro.com/app/board/o9J_lXQi7mo=/)
 

#### MVP 
- Allow user to input desired city name
- Retrieve current weather data from 3rd party API


#### PostMVP  
- Add a second form so users can compare two different zip codes
- Have the background update based on current weather conditions
- Build in logic for app to make attire recommendations
- Update weather image based on result
- Add additional feature like 5- and 16-day forecasts


## Project Schedule

|  Day | Deliverable | Status |
| --- | :---: |  :---: |
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | Complete |
|Jan 26| Project Approval | Complete |
|Jan 27| Core Application Structure (HTML, CSS, etc.) | Complete |
|Jan 28| Review Async /Axios lecture and create form  | Complete |
|Jan 29| MVP | Complete |
|Feb 1| Presentations/Project Submission | Complete |

## Priority Matrix

- [Weather-Now Priority Matrix](https://miro.com/app/board/o9J_lXQ3F1k=/)

## Timeframes

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Create HTML, CSS, and Javascript files and Pseudo-Code Logic | H | 4 hrs| 3 hrs |
| Create async function and fetch weather data from api  | H | 5hrs| 12hrs |
| Add weather-specific images  | L | 4.5hrs| .5hr |
| Basic styling with CSS and flex-box | L | 4.5hrs| 5hrs |
| Advanced styling: image display and removal | H | 5hrs| 3hrs |
| Add content to HTML tags | L | 4.5hrs| 3hrs |
| Pseudo-code Recommendation Logic in JS | L | 4.5hrs| 5hrs |
| Total | H | 32hrs| 31.5hrs |

## Code Snippet

    let appendWeather = document.getElementById('append-weather')

    const getCity = async () => {
      try {
      let response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=imperial&appid=${API_KEY_TWO}`)
      console.log(response)
      let weatherData = response.data.main
      appendWeather.innerHTML += `<div>The temperature in ${input.value} is ${weatherData.temp} + `°F`</div>`
      } catch (error) {
      console.log(error)
      }
    }
    getCity()

## Change Log
- Included more weather data to each search request 
- Added additional media query to account for tablets (e.g. Ipads)
- Changed App name from Weather-App to Weather-Now
