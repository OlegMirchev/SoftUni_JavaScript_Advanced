function calc() {

    let numb1Element = document.getElementById('num1').value;
    let numb2Element = document.getElementById('num2').value;
    console.log(Number(numb1Element));

    let sumElement = document.getElementById('sum');

    sumElement.value = Number(numb1Element) + Number(numb2Element);
}
