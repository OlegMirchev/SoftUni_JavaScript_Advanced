function solve(area, vol, array) {

    let result = [];

    let dataArray = JSON.parse(array);

    for (const cube of dataArray) {
        let cubeArea = area.apply(cube);
        let cubeVol = vol.apply(cube);

       // result.push(`area: ${cubeArea}, volume: ${cubeVol}`);
       result.push({
           area: cubeArea,
           volume: cubeVol
       });
    }

    return result;
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

const data = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`;

console.log(solve(area, vol, data));