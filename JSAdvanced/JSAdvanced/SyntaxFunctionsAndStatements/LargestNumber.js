function largestNumber(firstNumber, secondNumber, thirdNumber) {
    let largeNumber;

    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        largeNumber = firstNumber;
    }else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        largeNumber = secondNumber;
    }else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
        largeNumber = thirdNumber;
    }

    console.log('The largest number is ' + largeNumber + '.');
}

largestNumber(5, -3, 16);