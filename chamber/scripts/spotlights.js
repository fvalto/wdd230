const membersurl = 'https://fvalto.github.io/wdd230/chamber/data/members.json';

async function getMembersData() {
    const response = await fetch(membersurl);
    const data = await response.json();
    displayMembers(data.members);
}

function getRandomIndexes() {
    let indexes = [0, 1, 2, 3, 4, 5, 6]
    for (let i = indexes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
    }
    return indexes.slice(0, 5);
}

const displayMembers = (members) => {
    const shuffledIndexes = getRandomIndexes();
    let i = 1;
    shuffledIndexes.forEach(index => {
        let cardId = `c${i}`
        let card = document.getElementById(cardId)
        
        // in this part I need to create inside every card an image, h6 and p fotom the JSON
        if (card) {
            card.innerHTML = `
                <img class="spotlight-image" src="${members[index].spotImage}" alt="spotlight">
                <img class="spotlight-logo" src="${members[index].imageUrl}" alt="spotlight">
                <p class="spotlight-text">${members[index].description}</p>
            `;
        }

        i++;
    });
}

getMembersData();
