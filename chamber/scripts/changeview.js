const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".memberCards");

gridbutton.addEventListener("click", () => {
	display.classList.add("memberCards");
	display.classList.remove("memberList");
});

listbutton.addEventListener("click", () => {
	display.classList.add("memberList");
	display.classList.remove("memberCards");
});