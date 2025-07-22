// Do NOT define apiKey here — it will come from config.js
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
    var data=await response.json();

   
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/5370/5370273.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/6974/6974833.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/1163/1163657.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/5345/5345821.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/2930/2930095.png";
    }
    document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
