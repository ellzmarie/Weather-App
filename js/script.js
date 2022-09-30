
// const submitBtn = document.querySelector("button");
// const inputBox = document.querySelector(".input");
// const weatherFor = document.querySelector("#weatherFor")
// const getTemp = document.querySelector("#temp") 
// const feelsLike = document.querySelector("#feels")
// const weatherDesc = document.querySelector("#weatherDesc")

// submitBtn.addEventListener("click", (e) => {
//     e.preventDefault()
//     console.log(inputBox.value)
//   fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputBox.value}&limit={limit}&appid={a900b9c844bb20ffaaf85e81c6058302}`)
//     .then((id) => id.json())
//     .then((data) => {
//         console.log(data)
//         feelsLike.innerText = daily.feels_like
//     })
//     .catch((err) => console.log(err));
// });