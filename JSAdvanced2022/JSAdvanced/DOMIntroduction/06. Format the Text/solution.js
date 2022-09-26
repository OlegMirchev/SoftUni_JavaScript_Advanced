function solve() {
  
    let inputElement = document.getElementById('input');
    let textArea = inputElement.value.split('.').filter(e => e !== '');

    let resultElement = document.getElementById('output');

    while(textArea.length > 0) {
        let text = textArea.splice(0, 3).join('. ') + '.';
        let p = document.createElement('p');
        p.textContent = text;
        resultElement.appendChild(p);
    }
}