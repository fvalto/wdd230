let lastModif = new Date(document.lastModified);
let year = lastModif.getFullYear();

document.querySelector('#year').innerHTML = '\u00A9 ' + year + ' Fabián Valdés - Chile';
document.querySelector('#lastModified').innerHTML = 'Last modification: ' + lastModif;