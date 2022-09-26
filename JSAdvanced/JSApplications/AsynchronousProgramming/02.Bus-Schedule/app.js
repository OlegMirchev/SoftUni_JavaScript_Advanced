function solve() {
    let infoElement = document.querySelector('.info');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');

    let stopId = {
        next: 'depot'
    };

    async function depart() {
        departBtn.disabled = true;

        let url = `http://localhost:3030/jsonstore/bus/schedule/${stopId.next}`;
        let res = await fetch(url);
        stopId = await res.json();

        console.log(stopId);

        infoElement.textContent = `Next stop ${stopId.name}`;

        arriveBtn.disabled = false;
    }

    async function arrive() {
        departBtn.disabled = false;

        infoElement.textContent = `Arriving at ${stopId.name}`;

        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();