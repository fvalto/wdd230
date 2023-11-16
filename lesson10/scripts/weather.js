const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=6d2ec2d7e5e10c69531c387af62fce4b';

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
    currentTemp.innerHTML = `${(data.main.temp).toFixed(0)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('loading', 'lazy');
    captionDesc.textContent = `${capitalizeLetter(desc)}`;
}

apiFetch();