function solve(input) {

    let object = {};
    let engine = {};
    let carriage = {};
    let wheels = [];

    object.model = input.model;

    if (input.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (input.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else if (input.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }

    object.engine = engine;

    carriage.type = input.carriage;
    carriage.color = input.color;

    object.carriage = carriage;

    if (input.wheelsize % 2 === 0) {
        input.wheelsize--;
    }

    wheels = [input.wheelsize, input.wheelsize, input.wheelsize, input.wheelsize];

    object.wheels = wheels;

    return object; 
}

console.log(solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));