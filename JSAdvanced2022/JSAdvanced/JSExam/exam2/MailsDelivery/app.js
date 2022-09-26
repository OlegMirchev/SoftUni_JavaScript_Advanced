window.addEventListener('load', solve);

function solve() {
    let nameElement = document.getElementById('recipientName');
    let tittleElement = document.getElementById('title');
    let messageElement = document.getElementById('message');

    let listElements = document.getElementById('list');
    let sendMails = document.querySelector('.sent-list');
    let deleteMails = document.querySelector('.delete-list');

    let addBtn = document.getElementById('add');
    let resetBtn = document.getElementById('reset');

    addBtn.addEventListener('click', onAdd);
    resetBtn.addEventListener('click', onReset);

    function onAdd(e) {
        e.preventDefault();

        let name = nameElement.value;
        let title = tittleElement.value;
        let message = messageElement.value;

        if (!nameElement.value || !tittleElement.value || !messageElement.value) {
            return;
        }

        let li = document.createElement('li');
        let h4Tittle = document.createElement('h4');
        h4Tittle.textContent = `Title: ${title}`;
        let h4Name = document.createElement('h4');
        h4Name.textContent = `Recipient Name: ${name}`;
        let span = document.createElement('span');
        span.textContent = message;
        let div = document.createElement('div');
        let sendBtn = document.createElement('button');
        sendBtn.textContent = 'Send';
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        li.appendChild(h4Tittle);
        li.appendChild(h4Name);
        li.appendChild(span);
        div.appendChild(sendBtn);
        div.appendChild(deleteBtn);
        li.appendChild(div);

        listElements.appendChild(li);

        sendBtn.addEventListener('click', onSend);
        deleteBtn.addEventListener('click', onDelete);

        nameElement.value = '';
        tittleElement.value = '';
        messageElement.value = '';

        function onSend(e) {
            let liSM = document.createElement('li');
            let spanName = document.createElement('span');
            spanName.textContent = `To: ${name}`;
            let spanTittle = document.createElement('span');
            spanTittle.textContent = `Title: ${title}`;
            let divSend = document.createElement('div');
            divSend.className = 'btn';
            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';

            liSM.appendChild(spanName);
            liSM.appendChild(spanTittle);
            divSend.appendChild(deleteButton);
            liSM.appendChild(divSend);

            sendMails.appendChild(liSM);

            li.remove();

            deleteButton.addEventListener('click', onDelete);
        }

        function onDelete(e) {
            let liDM = document.createElement('li');
            let spanTo = document.createElement('span');
            spanTo.textContent = `To: ${name}`;
            let spanTittles = document.createElement('span');
            spanTittles.textContent = `Title: ${title}`;

            liDM.appendChild(spanTo);
            liDM.appendChild(spanTittles);

            deleteMails.appendChild(liDM);

            if (e.currentTarget === deleteBtn) {
                li.remove();
            } else {
                e.currentTarget.parentElement.parentElement.remove();
            }
        }
    }

    function onReset(e) {
        e.preventDefault();

        nameElement.value = '';
        tittleElement.value = '';
        messageElement.value = '';
    }
}

solve();