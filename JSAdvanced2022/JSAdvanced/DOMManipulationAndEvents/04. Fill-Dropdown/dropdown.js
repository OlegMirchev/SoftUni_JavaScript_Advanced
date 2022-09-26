function addItem() {
    
    let menuElement = document.getElementById('menu');
    let textElement = document.getElementById('newItemText');
    let valueElement = document.getElementById('newItemValue');

    let options = document.createElement('option');
    options.text = textElement.value;
    options.value = valueElement.value;

    menuElement.appendChild(options);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}