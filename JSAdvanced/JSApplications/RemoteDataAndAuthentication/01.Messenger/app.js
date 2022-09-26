function attachEvents() {
    let messagesElement = document.getElementById('messages');
    let nameElement = document.querySelector('[name="author"]');
    let contentElement = document.querySelector('[name="content"]');
    let sendBtn = document.getElementById('submit');
    let refreshBtn = document.getElementById('refresh');

    let url = `http://localhost:3030/jsonstore/messenger`;

    sendBtn.addEventListener('click', onSend);
    refreshBtn.addEventListener('click', onRefresh);

    function onSend(e) {
        fetch(url, {
           method: 'POST',
           headers: {
            'Content-type': 'application/json'
           },
           body: JSON.stringify({
            author: nameElement.value.trim(),
            content: contentElement.value.trim()
           })
        })
        .then(res => res.json())
        .catch(error => {
            console.log(error);
        });

        nameElement.value = '';
        contentElement.value = '';
    }

    function onRefresh(e) {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            let result = [];
            
            for (let key in data) {
                result.push(`${data[key].author}: ${data[key].content}`);
            }

            messagesElement.textContent = result.join('\n');
        })
        .catch(error => {
            console.log(error);
        });
    }
}

attachEvents();