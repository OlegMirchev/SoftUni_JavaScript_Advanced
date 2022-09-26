function sumTable() {

    let tableElements = document.querySelectorAll('tr td');
    let array = Array.from(tableElements);
    let sum = 0;
    let sumElement = document.getElementById('sum');

    for (let i = 0; i < array.length - 2; i++) {
        if (i % 2 !== 0) {
            let currentNumber = Number(tableElements[i].textContent) || 0;
            sum += currentNumber;   
        } 
    }

    sumElement.textContent = sum;
}