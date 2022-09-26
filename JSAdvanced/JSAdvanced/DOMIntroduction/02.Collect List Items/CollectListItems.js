function extractText() {
    let idElement = document.getElementById('items');
    let resultElement = document.getElementById('result');

    resultElement.textContent = idElement.textContent;
}