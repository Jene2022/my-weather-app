let now = new Date();
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = ("0" + now.getMinutes()).slice(-2);
let date = document.querySelector("#date");
date.innerHTML = `${day} ${hour}:${minutes}`;

function showPosition(response) {
  let heading = document.querySelector("#main-city");
  heading.innerHTML = response.data.name;
  let tempValue = document.querySelector(`#temp`);
  tempValue.innerHTML = Math.round(response.data.main.temp);
}

function changeCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-box").value;
  let apiKey = `0e75c0ed69380a4cfb8875f8f0589c91`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&limit=5&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showPosition);
}

function currentLocation(position) {
  let apiKey = `0e75c0ed69380a4cfb8875f8f0589c91`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.lat}&long=${position.coords.lon}&limit=5&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showPosition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentLocation);
}

let mainForm = document.querySelector("#search-form");
mainForm.addEventListener("submit", changeCity);

function temperatureF(event) {
  event.preventDefault();
  let temp = document.querySelector("#temp");
  temp.innerHTML = `70º`;
}

let tempLink = document.querySelector("#Fahrenheit");
tempLink.addEventListener("click", temperatureF);

function temperatureC(event) {
  event.preventDefault();
  let temp2 = document.querySelector("#temp");
  temp2.innerHTML = `20º`;
}
let tempLink2 = document.querySelector("#Celsius");
tempLink2.addEventListener("click", temperatureC);
