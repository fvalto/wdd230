const modeButton = document.querySelector("#switch");
const main = document.querySelector("main");
const eventsWeather = document.querySelector("#events-weather")

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌑")) {
		main.style.background = "#292929";
        eventsWeather.style.background = "#292929";
		main.style.color = "#fff";
		modeButton.textContent = "🌞";
	} else {
		main.style.background = "#f1f1ef";
        eventsWeather.style.background = "#005c9d";
		main.style.color = "#000";
		modeButton.textContent = "🌑";
	}
});