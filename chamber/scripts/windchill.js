const temperatureInput = document.getElementById("temperature-value");
const windSpeedInput = document.getElementById("wind-speed-value");

// Calculate wind chill
function calculateWindChill() {
    const temperature = parseFloat(temperatureInput.value);
    const windSpeed = parseFloat(windSpeedInput.value);

    let windchill;

    if (temperature <= 50 && windSpeed > 3) {
        windchill = 35.74 + (0.6215 * temperature) - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        document.getElementById("wind-chill").textContent = windchill.toFixed(2);
    } else {
        document.getElementById("wind-chill").textContent = "N/A";
    }
}

// Event listeners to update user input
temperatureInput.addEventListener("input", calculateWindChill);
windSpeedInput.addEventListener("input", calculateWindChill);