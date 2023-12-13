const url = 'https://fvalto.github.io/wdd230/scoots/data/rentals.json';
const rentalsDiv = document.querySelector('.rentals-info');

async function getRentalsData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayRentals(data.rentals);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayRentals(data) {
    let table = document.createElement('table');
    table.classList.add('rentals-table');

    let headerRow = table.insertRow();
    for (let key in data[0]) {
        if (key !== 'reservation' && key !== 'walkIn') {
            let th = document.createElement('th');
            th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
            headerRow.appendChild(th);
        }
    }

    // TABLE'S HEADERS
    let reservationTh = document.createElement('th');
    reservationTh.textContent = 'Reservation Pricing';
    headerRow.appendChild(reservationTh);

    let walkInTh = document.createElement('th');
    walkInTh.textContent = 'Walk-In Pricing';
    headerRow.appendChild(walkInTh);

    // TABLE
    data.forEach(function (rental) {
        let row = table.insertRow();
        for (let key in rental) {
            if (key !== 'reservation' && key !== 'walkIn') {
                let cell = row.insertCell();
                cell.textContent = rental[key];
            }
        }

        // CELLS
        let reservationCell = row.insertCell();
        reservationCell.textContent = `Half Day: ${rental.reservation.halfDay}, Full Day: ${rental.reservation.fullDay}`;

        let walkInCell = row.insertCell();
        walkInCell.textContent = `Half Day: ${rental.walkIn.halfDay}, Full Day: ${rental.walkIn.fullDay}`;
    });

    rentalsDiv.appendChild(table);
}

getRentalsData();