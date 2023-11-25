// Calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    
    let windchill;
    
    if (temperature <= 50 && windSpeed > 3) {
        windchill = 35.74 + (0.6215 * temperature) - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        document.getElementById("wind-chill").textContent = windchill.toFixed(2);
    } else {
        document.getElementById("wind-chill").textContent = "N/A";
    }
}


// calculateWindChill();

// APIWEATHER
const weatherDiv = document.querySelector('.weather');
const currentTemp = document.getElementById('temperature');
const windSpeed = document.getElementById('wind-speed');
const weatherFig = document.getElementById('weather-fig');
const weatherIcon = document.createElement('img');
const captionDesc = document.querySelector('figcaption');
const windChill = document.getElementById('wind-chill');
const forecast = document.getElementById('forecast');

// TALCA: -35.423546319405645, -71.64868941760197
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-35.42&lon=-71.65&units=imperial&appid=6d2ec2d7e5e10c69531c387af62fce4b';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function capitalizeLetter(string) {
    let words = string.split(' ');
    let capitalizeWord = '';
    words.forEach(word => {
        let newWord = word.charAt(0).toUpperCase() + word.slice(1);
        capitalizeWord += newWord + ' ';
    });
    return capitalizeWord;
}

function displayResults(data) {
    let temp = data.main.temp;
    let wspeed = data.wind.speed;
    currentTemp.innerHTML = `${temp.toFixed(0)}&deg;F`;
    windSpeed.innerHTML = `${wspeed}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('id', 'weather-icon')
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('loading', 'lazy');
    weatherIcon.setAttribute('alt', 'weatherIcon');
    weatherFig.append(weatherIcon);
    let desc = data.weather[0].description;
    captionDesc.textContent = `${capitalizeLetter(desc)}`;
    calculateWindChill(temp, wspeed);
}

apiFetch();
