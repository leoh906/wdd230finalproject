const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=4b2d2f87ca75eabca88cafcdf35e042a&q=Rexburg&units=imperial'

const getWeather = async () => {
    const response = await fetch(weatherURL)
    const jsObject = await response.json();

    console.log(jsObject)
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#weather_icon').setAttribute('src',iconsrc);
    document.querySelector('#weather_icon').setAttribute('alt',desc);
    document.querySelector('#temp_span').textContent = Math.round(jsObject.main.temp);
    document.querySelector('#weather_description').textContent = desc;



document.getElementById('weather_icon')
  
}

getWeather()

