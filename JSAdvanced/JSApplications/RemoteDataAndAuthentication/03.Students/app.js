function solve() {
    let fNameElement = document.querySelector('[name="firstName"]');
    let lNameElement = document.querySelector('[name="lastName"]');
    let facultyNumberElement = document.querySelector('[name="facultyNumber"]');
    let gradeElement = document.querySelector('[name="grade"]');

    let resultTableElement = document.querySelector('#results tbody');
    let form = document.getElementById('form');

    let sudmitBtn = document.getElementById('submit');

    let url = 'http://localhost:3030/jsonstore/collections/students';

    window.addEventListener('load', onLoad);
    sudmitBtn.addEventListener('click', onSudmit);

    function onSudmit(e) {
        e.preventDefault();

        if (!fNameElement.value || !lNameElement.value || !facultyNumberElement.value || !gradeElement.value) {
            return;
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                firstName: fNameElement.value,
                lastName: lNameElement.value,
                facultyNumber: facultyNumberElement.value,
                grade: Number(gradeElement.value)
            })
        })
            .then(res => res.json())
            .catch(error => {
                console.log(error);
            });

        resultTableElement.replaceChildren();
        onLoad();


        fNameElement.value = '';
        lNameElement.value = '';
        facultyNumberElement.value = '';
        gradeElement.value = '';

    }

    function onLoad(e) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                for (const key in data) {
                    let tr = document.createElement('tr');
                    let thFName = document.createElement('th');
                    thFName.textContent = data[key].firstName;
                    let thLName = document.createElement('th');
                    thLName.textContent = data[key].lastName;
                    let thFNumber = document.createElement('th');
                    thFNumber.textContent = data[key].facultyNumber;
                    let thGrade = document.createElement('th');
                    thGrade.textContent = data[key].grade;

                    tr.appendChild(thFName);
                    tr.appendChild(thLName);
                    tr.appendChild(thFNumber);
                    tr.appendChild(thGrade);

                    resultTableElement.appendChild(tr);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
}

solve();