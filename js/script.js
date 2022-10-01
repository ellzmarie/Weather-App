
const submitBtn = document.querySelector("button");
const inputBox = document.querySelector(".input");
const weatherForCity = document.querySelector("#weatherFor")
const getTemp = document.querySelector("#temp") 
const feelsLike = document.querySelector("#feels")
const weatherDesc = document.querySelector("#weatherDesc")

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(inputBox.value)
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputBox.value}&units=imperial&appid=a900b9c844bb20ffaaf85e81c6058302`)
//   fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputBox.value}&limit={limit}&appid={a900b9c844bb20ffaaf85e81c6058302}`)
    .then((res) => res.json())
    .then((data) => {
    weatherForCity.innerText = "Current City: " + data.name 
    getTemp.innerText = "Temperature outside: " + data.main.temp + "F"
    feelsLike.innerText = "Feels like: " + data.main.feels_like + "F"
    weatherDesc.innerText = "Weather: " + data.weather[0].description
    })
    .catch((err) => console.log(err));
});

