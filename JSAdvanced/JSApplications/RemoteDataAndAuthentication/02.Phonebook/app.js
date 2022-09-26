function attachEvents() {
    let phonebookElement = document.getElementById('phonebook');
    let personElement = document.getElementById('person');
    let phoneElement = document.getElementById('phone');
    let createBtn = document.getElementById('btnCreate');
    let loadBtn = document.getElementById('btnLoad');

    let url = 'http://localhost:3030/jsonstore/phonebook';

    createBtn.addEventListener('click', onCreate);
    loadBtn.addEventListener('click', onLoad);

    function onCreate(e) {
        if (!personElement.value || !phoneElement.value) {
            return;
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                person: personElement.value.trim(),
                phone: phoneElement.value.trim()
            })
        })
            .then(res => res.json())
            .catch(error => {
                console.log(error);
            });

        personElement.value = '';
        phoneElement.value = '';
    }

    function onLoad(e) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                for (const key in data) {
                    let li = document.createElement('li');
                    let deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    li.textContent = `${data[key].person}: ${data[key].phone}`;
                    
                    li.appendChild(deleteBtn);
                    phonebookElement.appendChild(li);
                    
                    deleteBtn.addEventListener('click', onDelete);
                    
                    function onDelete(e) {
                        fetch(`${url}/${data[key]._id}`, {
                            method: 'DELETE'
                            })
                            .then(res => {
                                phonebookElement.innerHTML = '';
                                onLoad();
                                return res.json();
                            })
                            .catch(error => {
                                console.log(error);
                            });
                        }
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
}

attachEvents();