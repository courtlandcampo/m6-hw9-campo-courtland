let form = document.querySelector('form');
let input = document.querySelector('input');
let weather = document.getElementById('sunny');

form.onsubmit = function(functionEvent) {
    functionEvent.preventDefault()
    var usersInput = input.value
    if(!usersInput) return
    fetch('https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=5e8fb7436a0e6f1c8b62aad1d8797764&q=' + usersInput)
    .then(function(resultJson) {
        return resultJson.json();
    })

.then(function(result){
    weatherResult(result)
    input.value = "";
    })

.catch(function(error) {
    console.log(error);
    document.getElementById('sunny').innerHTML = "Location not found."
    })
}

function weatherResult(weatherObject) {
    weather.innerHTML = "";

/* LOCATION NOT FOUND */
if (weatherObject.Response === 'False') {
    weather.textContent = 'Location not found';
    return
}

