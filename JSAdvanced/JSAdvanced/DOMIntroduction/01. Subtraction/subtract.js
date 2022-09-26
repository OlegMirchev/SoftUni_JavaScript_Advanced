function subtract() {

    let firstNumbElement = document.getElementById('firstNumber');
    let secondNumbElement = document.getElementById('secondNumber');

    let resultElement = document.getElementById('result');

    let subtract = firstNumbElement.value - secondNumbElement.value;

    resultElement.textContent = subtract;

   // console.log('TODO:...');
}