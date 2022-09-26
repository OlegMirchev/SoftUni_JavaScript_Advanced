function addItem() {
    
    let itemsElements = document.getElementById('items');
    let textElement = document.getElementById('newItemText');

    let creatEl = document.createElement('li');
    creatEl.textContent = textElement.value;

    itemsElements.appendChild(creatEl);
}