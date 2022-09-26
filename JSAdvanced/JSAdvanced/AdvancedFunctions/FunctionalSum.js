function add(numb1) {

    let sum = 0;

    function inner(numb2) {
        sum += numb2;
        
        return inner;
    }
    
    inner.toString = () => {
        return sum;
    };

    return inner(numb1);
}

console.log(add(1)(6)(-3).toString());