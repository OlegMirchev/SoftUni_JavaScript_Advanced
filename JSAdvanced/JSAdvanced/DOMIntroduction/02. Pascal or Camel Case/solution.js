function solve() {

  let firstParamElement = document.getElementById('text');
  let secondParamElement = document.getElementById('naming-convention');
  let inputText = firstParamElement.value;

  let resultElement = document.getElementById('result');

  switch (secondParamElement.value) {
    case 'Camel Case':
      for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] === ' ') {
          resultElement.textContent += inputText[i + 1].toUpperCase();
          i++;
          continue;
        }

        resultElement.textContent += inputText[i].toLowerCase();  
      }
      break;
    case 'Pascal Case':
      resultElement.textContent += inputText[0].toUpperCase();

      for (let i = 1; i < inputText.length; i++) {
        if (inputText[i] === ' ') {
          resultElement.textContent += inputText[i + 1].toUpperCase();
          i++;
          continue;
        }

        resultElement.textContent += inputText[i].toLowerCase();      
      }
      break;
    default:
      resultElement.textContent = 'Error!';
      break;
  }
}