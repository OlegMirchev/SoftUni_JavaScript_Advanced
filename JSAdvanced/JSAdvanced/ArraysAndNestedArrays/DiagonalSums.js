function solve(array) {

    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;
    let output = [];

    let rowFirst = 0;
    let colFirst = 0;

    while (rowFirst <= array.length - 1) {
        sumFirstDiagonal += array[rowFirst][colFirst];

        rowFirst++;
        colFirst++;
    }

    let rowSecond = array.length - 1;
    let colSecond = 0;

    while (rowSecond >= 0) {
        sumSecondDiagonal += array[rowSecond][colSecond];

        rowSecond--;
        colSecond++;
    }

    output.push(sumFirstDiagonal, sumSecondDiagonal);

    return output.join(' ');
}

console.log(solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]));