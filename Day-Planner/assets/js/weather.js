
const apiKey = "bcf0cc2863872ed148873c76e4727128"; 

function fetchWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            const desc = data.weather[0].description;
            const icon = data.weather[0].icon;
            const location = `${data.name}, ${data.sys.country}`;

            document.getElementById("weather-temp").innerText = `${Math.round(temp)}°C`;
            document.querySelector(".weather-info h5").innerText = desc.charAt(0).toUpperCase() + desc.slice(1);
            document.querySelector(".weather-info p").innerText = location;
            document.querySelector(".weather-info img").src = `assets/img/weather.png`;
        })
        .catch(error => {
            console.error("Weather fetch error:", error);
            document.querySelector(".weather-info h5").innerText = "Weather Unavailable";
            document.querySelector(".weather-info p").innerText = "";
        });
}

// Get user location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            fetchWeather(lat, lon);
        },
        error => {
            console.error("Geolocation error:", error);
            document.querySelector(".weather-info h5").innerText = "Location Denied";
        }
    );
} else {
    document.querySelector(".weather-info h5").innerText = "Geolocation Not Supported";
}

