function calculator() {
    
    let numb1 = 0;
    let numb2 = 0;
    let result = 0;

    function init(selector1, selector2, resultSelector) {
        
        numb1 = document.querySelector(selector1);
        numb2 = document.querySelector(selector2);
        result = document.querySelector(resultSelector);
    }

    function add() {
        result.value = Number(numb1.value) + Number(numb2.value);
    }

    function subtract() {
        result.value = Number(numb1.value) - Number(numb2.value);
    }

    return {
        init,
        add,
        subtract
    };
}

const calculate = calculator(); 
calculate.init ('#num1', '#num2', '#result'); 




