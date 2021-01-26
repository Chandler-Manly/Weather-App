# 
# Weather-App Overview

## Description

Weather-App allows users to input their city name and retrieve current weather information. 

## API and Data Sample

api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

Useful links:
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
- Text-box to scroll through city names 
- Search button 
- Designated area for rendered list
- Miro Link: ()[https://miro.com/app/board/o9J_lXQi7mo=/]
 

#### MVP 
- allow user to input desired zip code
- retrieve current weather data from 3rd party api
- update weather image based on result


#### PostMVP  
- add a second form so users can compare two different zip codes
- have the background update based on current weather conditions
- build in logic for app to make attire recommendations

## Project Schedule

|  Day | Deliverable | Status

|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Jan 26| Project Approval | Incomplete
|Jan 27| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Jan 28| Review Async /Axios lecture and create zip code form  | Incomplete
|Jan 29| MVP | Incomplete
|Feb 1| Presentations/Project Submission | Incomplete

## Priority Matrix



## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create HTML, CSS, and Javascript files | H | 3hrs| ??? | 3.5hrs |
| Create async function and fetch weather data from api  | H | 3hrs| ??? | ??? |
| Add weather-specific images  | H | 3hrs| ??? | ??? |
| Basic styling with CSS and flex-box | L | 3hrs| ??? | ??? |
| Advanced styling: image display and removal | H | 3hrs| ??? | ??? |
| Total | H | 6hrs| ??? | ??? |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
