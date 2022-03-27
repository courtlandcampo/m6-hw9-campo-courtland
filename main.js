let form = document.querySelector('form');
let input = document.querySelector('input');
let weather = document.getElementById('weather');




form.onsubmit = function(functionEvent) {
  functionEvent.preventDefault()
  var usersInput = input.value
  if(!usersInput) return
  fetch('https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=51e49b626dc2924e1eeab8c2d1ddb3d5&q=' + usersInput)
  .then(function(resultJson) {
      return resultJson.json();
  })


  .then(function(result){
    weatherResult(result)
    input.value = "";
  })


  .catch(function(error) {
    console.log(error);
    document.getElementById('weather').innerHTML = "<p>Location not found.</p>"
  })
}


function weatherResult(weatherObject) {
  weather.innerHTML = "";


  /* LOCATION NOT FOUND */
if (weatherObject.Response === 'False') {
    weather.textContent = 'Location not found';
    return
}

/* SEARCHED CITY W COUNTRY CODE */
var cityName = document.createElement('h2');
cityName.textContent = weatherObject.name + ", " + weatherObject.sys.country;
weather.appendChild(cityName);


/* DESCRIPTION */
var description = document.createElement('h3');
description.textContent = "Current Weather: " + weatherObject.weather[0].description;
weather.appendChild(description);


/* IMAGE ICON */
var img = document.createElement('img');
img.src = "http://openweathermap.org/img/wn/" + weatherObject.weather[0].icon + "@2x.png";
weather.appendChild(img);

/* CURRENT TEMP */
var temperature = document.createElement('h3');
temperature.textContent = "Current: " + weatherObject.main.temp + " \xB0";
weather.appendChild(temperature);


/* FEELS LIKE TEMP */
var feelsLike = document.createElement('h3');
feelsLike.textContent = "Feels Like : " + weatherObject.main.feels_like + " \xB0";
weather.appendChild(feelsLike);
}