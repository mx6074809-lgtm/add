const apikey = "65ff68c1800478f4787f4da9a0b5da39";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=calabar&appid=d9deb457491abf603c53e182eeac39ac&units=metric";

const searchBox = document. querySelector(".search input")
const searchBtn = document. querySelector(".search button")
const weatherIcon= document.querySelector(".weather-Icon")

async function checkWeather() {
    const response = await fetch(apiUrl + city + '&appid=${apikey}');
    var data = await response.json();

    console.log(data);

    document.querySelector(" .city").innerHTML =data.name;
    document.querySelector(".temp").innerHTML  =Maths.round( data.main.temp) + "°c";
    document.querySelector( ".humidity").innerHTML= data.name.humidity + "%"; 
    document.querySelector( ".wind").innerHTML= data.wind.speed + " km/h"; 
    if(data.Weather[0].Main =="cloud"){
        weatherIcon.src="images.cloud.png";
    }
    else if (data.Weather[0].main=="Rain"){
          weatherIcon.src = "images/rain.png"
    }
     else if (data.Weather[0].main=="drizzle"){
          weatherIcon.src = "images/drizzle.png"
    }
         else if (data.Weather[0].main=="Mist"){
          weatherIcon.src = "images/Mist.png"
    }
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

checkWeather();
