function rectangle(width, height, color) {

    let widthNumb = Number(width);
    let heightNumb = Number(height);
    let colorUp = '';

    for (let i = 0; i < color.length; i++) {
        if (i === 0) {
            colorUp += color[i].toUpperCase();
        }else {
            colorUp += color[i];
        } 
    }

    let object = {
        width: widthNumb,
        height: heightNumb,
        color: colorUp,
        calcArea() {
            return this.width * this.height;
        }
    }

    return object;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());