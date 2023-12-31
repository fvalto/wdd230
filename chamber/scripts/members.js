const url = 'https://fvalto.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('.memberCards');

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.members);
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach(member => {
        let card = document.createElement("section");
        card.setAttribute('class', "individualCard");
        let memberName = document.createElement("h2");
        let logo = document.createElement("img");
        let adress = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let sector = document.createElement("p");

        memberName.textContent = member.name;

        logo.setAttribute('src', member.imageUrl);
        logo.setAttribute('alt', `${member.name}'s logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '200px');
        logo.setAttribute('height', '100px');

        adress.textContent = member.adress;

        phone.textContent = 'Phone: +' + member.phoneNumber;

        sector.textContent = `Sector: ${member.sector}`
        
        website.setAttribute('href', member.url);
        website.textContent = "Go to webpage";
        
        card.append(logo, memberName, adress, phone, sector, website);
        cards.appendChild(card);
    });
}

getMembersData();