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
        
        if (card) {
            card.innerHTML = `
                <img class="spotlight-image" src="${members[index].spotImage}" loading="lazy" alt="spotlight">
                <img class="spotlight-logo" src="${members[index].imageUrl}" loading="lazy" alt="spotlight">
                <p class="spotlight-text">${members[index].description}</p>
                <a class="spotlight-url" href="${members[index].url}">Go to website</a>
            `;
        }

        i++;
    });
}

getMembersData();
