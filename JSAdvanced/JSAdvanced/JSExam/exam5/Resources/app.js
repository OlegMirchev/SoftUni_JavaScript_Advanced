window.addEventListener('load', solve);

function solve() {
    let productElement = document.getElementById('type-product');
    let descriptionElement = document.getElementById('description');
    let nameElement = document.getElementById('client-name');
    let phoneElement = document.getElementById('client-phone');

    let receivedOrders = document.getElementById('received-orders');
    let completedOrders = document.getElementById('completed-orders');

    let sendBtn = document.querySelector('button[type=submit]');
    let clearBtn = document.querySelector('.clear-btn');

    sendBtn.addEventListener('click', onSend);
    clearBtn.addEventListener('click', onClear);

    function onSend(e) {
        e.preventDefault();

        if (!productElement.value || !descriptionElement.value || !nameElement.value || !phoneElement.value) {
            return;
        }

        let product = productElement.value;
        let description = descriptionElement.value;
        let name = nameElement.value;
        let phone = phoneElement.value;

        let divReceived = document.createElement('div');
        divReceived.className = 'container';
        let h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${product}`;
        let h3 = document.createElement('h3');
        h3.textContent = `Client information: ${name}, ${phone}`;
        let h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${description}`;
        let startBtn = document.createElement('button');
        startBtn.className = 'start-btn';
        startBtn.textContent = 'Start repair';
        let finishBtn = document.createElement('button');
        finishBtn.className = 'finish-btn';
        finishBtn.textContent = 'Finish repair';
        finishBtn.disabled = true;

        divReceived.appendChild(h2);
        divReceived.appendChild(h3);
        divReceived.appendChild(h4);
        divReceived.appendChild(startBtn);
        divReceived.appendChild(finishBtn);

        receivedOrders.appendChild(divReceived);

        startBtn.addEventListener('click', onStart);
        finishBtn.addEventListener('click', onFinish);

        descriptionElement.value = '';
        nameElement.value = '';
        phoneElement.value = '';

        function onStart(e) {
            startBtn.disabled = true;
            finishBtn.disabled = false;
        }

        function onFinish(e) {
            let divCompleted = document.createElement('div');
            divCompleted.className = 'container';
            let h2 = document.createElement('h2');
            h2.textContent = `Product type for repair: ${product}`;
            let h3 = document.createElement('h3');
            h3.textContent = `Client information: ${name}, ${phone}`;
            let h4 = document.createElement('h4');
            h4.textContent = `Description of the problem: ${description}`;

            divCompleted.appendChild(h2);
            divCompleted.appendChild(h3);
            divCompleted.appendChild(h4);

            completedOrders.appendChild(divCompleted);

            divReceived.remove();
        }
    }

    function onClear(e) {
        let el = document.querySelectorAll('.container');

        for (const l of el) {
             l.className = '';
             l.innerHTML = '';
        }
    }
}