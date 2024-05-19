function displayWeather(data) {
    const weatherInfoDiv = document.getElementById('weather-info');
    const temperature = data.temperature;
    const condition = data.condition;

    weatherInfoDiv.innerHTML = `
        <div class="temperature">${temperature}°C</div>
        <div class="condition">${condition}</div>
        <div class="details">
            <p>Humidity: ${data.humidity}%</p>
            <p>Wind Speed: ${data.windSpeed} m/s</p>
        </div>
    `;
}

function getWeatherByLocation() {
    const location = document.getElementById('location').value.toLowerCase();
    if (!location) {
        alert('Please enter a location');
        return;
    }

    // Hardcoded weather data for demonstration purposes
    const weatherData = {
        'new york': {
            temperature: 25,
            condition: 'Sunny',
            humidity: 50,
            windSpeed: 3
        },
        'london': {
            temperature: 18,
            condition: 'Cloudy',
            humidity: 60,
            windSpeed: 4
        },
        'tokyo': {
            temperature: 22,
            condition: 'Rainy',
            humidity: 70,
            windSpeed: 2
        }
    };

    if (weatherData[location]) {
        displayWeather(weatherData[location]);
    } else {
        alert('Location not found');
    }
}

// Optionally, initialize with a default location
window.onload = () => {
    document.getElementById('location').value = 'New York';
    getWeatherByLocation();
};
