# 
# Weather-App Overview

## Description

- Weather-App allows users to input their city name and retrieve current weather information. 

## API and Data Sample

- API documentation https://openweathermap.org/api

    "coord": {
        "lon": -71.0598,
        "lat": 42.3584
    },
    "weather": [
        {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 274.43,
        "feels_like": 265.94,
        "temp_min": 273.15,
        "temp_max": 275.37,
        "pressure": 1017,
        "humidity": 25
    },
    "visibility": 10000,
    "wind": {
        "speed": 7.2,
        "deg": 320,
        "gust": 12.35
    },
    "clouds": {
        "all": 20
    },
    "dt": 1611609606,
    "sys": {
        "type": 1,
        "id": 3486,
        "country": "US",
        "sunrise": 1611576246,
        "sunset": 1611611333
    },
    "timezone": -18000,
    "id": 4930956,
    "name": "Boston",
    "cod": 200


## Wireframes

- Weather-App across the banner 
- Text-box to input city names 
- Search button 
- Designated area for rendered list
- (Link)[https://miro.com/app/board/o9J_lXQi7mo=/]
 

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
|Feb 1| Presentations/Project Submission | Incomplete |

## Priority Matrix

- (Link) [https://miro.com/app/board/o9J_lXQ3F1k=/]

## Timeframes

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Create HTML, CSS, and Javascript files and Pseudo-Code Logic | H | 4 hrs| ??? |
| Create async function and fetch weather data from api  | H | 5hrs| ??? |
| Add weather-specific images  | L | 4.5hrs| ??? |
| Basic styling with CSS and flex-box | L | 4.5hrs| ??? |
| Advanced styling: image display and removal | H | 5hrs| ??? |
| Add content to HTML tags | L | 4.5hrs| ??? |
| Pseudo-code Recommendation Logic in JS | L | 4.5hrs| ??? |
| Total | H | 32hrs| ??? |

## Code Snippet

const API_KEY_TWO = '1a012b94443d511ac871535b64ac2706'
const input = document.querySelector('input')

let appendWeather = document.getElementById('append-weather')

const getCity = async () => {
  try {
    let response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=imperial&appid=${API_KEY_TWO}`)
    console.log(response)
    let weatherData = response.data.main
    appendWeather.innerHTML += `<div>The temperature in ${input.value} is ${weatherData.temp + `°F`}</div>`
  } catch (error) {
    console.log(error)
  }
}

getCity()

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes. 
