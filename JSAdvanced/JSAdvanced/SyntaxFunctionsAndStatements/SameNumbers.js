function sameNumbers(input) {
    let sumNumbers = 0;
    let arr = String(input);
    let firstNumb = arr[0];
    let isValid = true;

    for (let i = 0; i < arr.length; i++) {
        if (firstNumb !== arr[i]) {
            isValid = false;
        }
        
        sumNumbers += Number(arr[i]);
    }

    console.log(isValid);
    console.log(sumNumbers);

}

sameNumbers(1234);