let lastModif = new Date(document.lastModified);
document.querySelector('#lastModified').innerHTML = lastModif;

// Discover - Last Visited
let lastElement = document.querySelector('#last-visited');
let lastVisitedString = Number(window.localStorage.getItem("lastVisited-ls"));
let lastVisited = window.localStorage.getItem("lastVisited-ls") || "Welcome! Let us know if you have any questions.";
let today = Date.now();

if (lastVisited === "Welcome! Let us know if you have any questions.") {
    lastVisited = lastVisited;
} else {
    timeDifference = today - lastVisited;
    daysWithNoVisit = timeDifference/86400000;
    if (daysWithNoVisit < 1) {
        lastVisited = "Back so soon! Awesome!"
    } else if (daysWithNoVisit.toFixed(0) == 1) {
        lastVisited = `You last visited ${daysWithNoVisit.toFixed(0)} day ago`
    } else {
        lastVisited = `You last visited ${daysWithNoVisit.toFixed(0)} days ago`
    }
}

lastElement.textContent = lastVisited;
localStorage.setItem("lastVisited-ls", today.toString());