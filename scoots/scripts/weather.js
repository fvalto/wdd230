const apiKey = '6d2ec2d7e5e10c69531c387af62fce4b';
const lat = '20.5083';
const lon = '-86.9458';
const part = "";

const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function apiFetch() {
    try {
      const currentResponse = await fetch(currentURL);
      const forecastResponse = await fetch(forecastURL);
  
      if (currentResponse.ok && forecastResponse.ok) {
        const currentData = await currentResponse.json();
        const forecastData = await forecastResponse.json();
  
        displayResults(currentData, forecastData);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }
  
function displayResults(currentData, forecastData) {
    const weatherFig = document.getElementById('weather-fig');
    const captionDesc = document.querySelector('.iconcaption');
    let desc = currentData.weather[0].description;
    captionDesc.textContent = `${desc}`;
    const iconsrc = `https://openweathermap.org/img/w/${currentData.weather[0].icon}.png`;
    const weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('id', 'weather-icon')
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('loading', 'lazy');
    weatherIcon.setAttribute('alt', 'weatherIcon');
    weatherFig.append(weatherIcon);

    const currentTemperature = currentData.main.temp;
    document.getElementById('current-temperature').innerText = currentTemperature;
  
    const currentHumidity = currentData.main.humidity;
    document.getElementById('current-humidity').innerText = currentHumidity;

    const nextDayForecast = forecastData.list[0]
    const nextDayTemperature = nextDayForecast.main.temp;
    document.getElementById('next-day-forecast').innerText = nextDayTemperature;
}

apiFetch();