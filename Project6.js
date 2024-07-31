let apikey = "71c1a2ccf9bf14dd1c67ca76a17c7ba6";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input")
let searchBtn = document.querySelector(".search button")

let WeatherIcon = document.querySelector(".Weather-icon")

async function checkweather(city){

    let response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".degree").style.display = "none";
    }
    else{
        let data = await response.json()
    
    document.querySelector(".place").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    
    if(data.weather[0].main == "Clear"){
        WeatherIcon.src = "img/sun.png";
        
    }
    else if(data.weather[0].main == "Rain"){
        WeatherIcon.src = "img/rainy.jpg";
        
    }
    else if(data.weather[0].main == "Drizzle"){
        WeatherIcon.src = "img/drizzle.jpg";
        
    }
    else if(data.weather[0].main == "Clouds"){
        WeatherIcon.src = "img/cloudy.png";
        
    }
    document.querySelector(".degree").style.display = "block";
    document.querySelector(".error").style.display = "none";
    
    console.log(data)


    }

    

}
searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value)
})
checkweather();
okay = setInterval(() => {
    time = new Date();
  console.log(time);
  document.getElementById('time').innerHTML = time;
        }, 1000);