function solution() {

    let result = '';

    return {
        append,
        removeStart,
        removeEnd,
        print
    }

    function append(input) {
        result += input;
    }

    function removeStart(number) {
        result = result.substring(number);
    }

    function removeEnd(number) {
        result = result.substring(0, result.length - number);
    }

    function print() {
        console.log(result);
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();