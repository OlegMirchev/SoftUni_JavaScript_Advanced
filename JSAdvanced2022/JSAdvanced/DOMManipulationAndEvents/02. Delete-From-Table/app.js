function deleteByEmail() {

    let emailElemnt = document.querySelector('input[name = email]');
    let tableEmailElements = Array.from(document.querySelectorAll('tr td:nth-of-type(2)'));

    let resultElement = document.getElementById('result');

    let targetElement = tableEmailElements.find(e => e.textContent === emailElemnt.value);


    if (targetElement) {
        targetElement.parentElement.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
}