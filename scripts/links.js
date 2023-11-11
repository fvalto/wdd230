const baseURL = "https://fvalto.github.io/wdd230/";
const linksURL = "https://fvalto.github.io/wdd230/data/links.json";
const linkList = document.querySelector('#linkList');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.table(data.lessons);
    
    displayLinks(data.lessons);
}

function displayLinks(weeks) {
    weeks.forEach(week => {
        let li = document.createElement("li");

        let weekNumber = document.createElement("b");
        weekNumber.textContent = `Week ${week.lesson} `
        li.appendChild(weekNumber);
        
        week.links.forEach(link => {
            let a = document.createElement("a");
            a.setAttribute("href", link.url);
            a.textContent = link.title;
            
            li.append(" | ", a)
        }); 
        linkList.appendChild(li);
    });
}

getLinks();