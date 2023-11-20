const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let birthdate = document.createElement("p");
        let birthplace = document.createElement("p");
        let numofchildren = document.createElement("p");
        let portrait = document.createElement("img");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '484px');
        portrait.setAttribute('height', '600px');

        birthdate.textContent = `Birthdate: ${prophet.birthdate}`;
        birthplace.textContent = `Birthplace: ${prophet.birthplace}`;
        numofchildren.textContent = `Number of children: ${prophet.numofchildren}`;

        card.append(fullName, birthdate, birthplace, numofchildren, portrait);
        cards.appendChild(card);
    });
}

getProphetData();