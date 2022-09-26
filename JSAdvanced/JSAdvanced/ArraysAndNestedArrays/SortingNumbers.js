function solve(array) {

    let output = [];

    let arrNumbsSort = array.sort((a, b) => a - b);
    
    while(arrNumbsSort.length > 0) {
        if (arrNumbsSort.length === 1) {
            let numb = arrNumbsSort.shift();
            output.push(numb);
            break;
        }

        let small = arrNumbsSort.shift();
        let big = arrNumbsSort.pop();

        output.push(small);
        output.push(big);
    }

    return output;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
