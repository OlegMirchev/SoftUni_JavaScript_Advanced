window.addEventListener('load', solve);

function solve() {
    let fNameElement = document.getElementById('fname');
    let lNameElement = document.getElementById('lname');
    let emailElement = document.getElementById('email');
    let birthElement = document.getElementById('birth');
    let positionElement = document.getElementById('position');
    let salaryElement = document.getElementById('salary');

    let tbody = document.getElementById('tbody');
    let sumElement = document.getElementById('sum');

    let workerBtn = document.getElementById('add-worker');

    let sum = 0;

    workerBtn.addEventListener('click', onWorker);

    function onWorker(e) {
        e.preventDefault();

        if (!fNameElement.value || !lNameElement.value || !emailElement.value || !birthElement.value || !positionElement.value || !salaryElement.value) {
            return;
        }

        let firstName = fNameElement.value;
        let lastName = lNameElement.value;
        let email = emailElement.value;
        let birth = birthElement.value;
        let position = positionElement.value;
        let salary = salaryElement.value;

        let tr = document.createElement('tr');
        let tdFName = document.createElement('td');
        tdFName.textContent = firstName;
        let tdLName = document.createElement('td');
        tdLName.textContent = lastName;
        let tdEmail = document.createElement('td');
        tdEmail.textContent = email;
        let tdBirth = document.createElement('td');
        tdBirth.textContent = birth;
        let tdPosition = document.createElement('td');
        tdPosition.textContent = position;
        let tdSalary = document.createElement('td');
        tdSalary.textContent = salary;
        let tdButton = document.createElement('td');
        let firedBtn = document.createElement('button');
        firedBtn.textContent = 'Fired';
        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';

        tr.appendChild(tdFName);
        tr.appendChild(tdLName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdBirth);
        tr.appendChild(tdPosition);
        tr.appendChild(tdSalary);
        tdButton.appendChild(firedBtn);
        tdButton.appendChild(editBtn);
        tr.appendChild(tdButton);

        tbody.appendChild(tr);

        sum += Number(salary);

        sumElement.textContent = sum.toFixed(2);

        firedBtn.addEventListener('click', onFired);
        editBtn.addEventListener('click', onEdit);

        fNameElement.value = '';
        lNameElement.value = '';
        emailElement.value = '';
        birthElement.value = '';
        positionElement.value = '';
        salaryElement.value = '';

        function onEdit(e) {
            fNameElement.value = firstName;
            lNameElement.value = lastName;
            emailElement.value = email;
            birthElement.value = birth;
            positionElement.value = position;
            salaryElement.value = salary;

            tr.remove();

            sum -= Number(salary);

            sumElement.textContent = sum.toFixed(2);
        }

        function onFired(e) {
            tr.remove();

            sum -= Number(salary);

            sumElement.textContent = sum.toFixed(2);
        }
    }
}

solve();