async function getInfo() {

    let stopIdElement = document.getElementById('stopId').value;
    let resultElement = document.getElementById('stopName');
    let busList = document.getElementById('buses');

    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopIdElement}`;

    try {
        let res = await fetch(url);
        let data = await res.json();

        busList.innerHTML = '';

        for (const key in data.buses) {
            let li = document.createElement('li');
            li.textContent = `Bus ${key} arrives in ${data.buses[key]} minutes`;
            busList.appendChild(li);
        }

        resultElement.textContent = data.name;
        
    } catch (error) {
        resultElement.textContent = 'Error';
    }
}