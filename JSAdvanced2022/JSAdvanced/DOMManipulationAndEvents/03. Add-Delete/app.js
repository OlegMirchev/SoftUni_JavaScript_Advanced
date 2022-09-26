function addItem() {
    
    let itemsElement = document.getElementById('items');
    let inputTextElement = document.getElementById('newItemText');

    let creatLi = document.createElement('li');
    creatLi.textContent = inputTextElement.value;

    let deleteItem = document.createElement('a');
    deleteItem.href = '#';
    deleteItem.textContent = '[Delete]';

    // function deleteElement(e) {
    //     e.currentTarget.parentElement.remove();
    // }

    deleteItem.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    });

    creatLi.appendChild(deleteItem);
    itemsElement.appendChild(creatLi);
}