function driverSpeed(numb, area) {
    let speed = Number(numb);

    switch (area) {
        case 'city':
            if (speed <= 50) {
                console.log(`Driving ${speed} km/h in a ${50} zone`);
            } else {
                speed -= 50;
                if(speed <= 20){
                    console.log(`The speed is ${speed} km/h faster than the allowed speed of ${50} - ${'speeding'}`);
                }else if (speed <= 40) {
                    console.log(`The speed is ${speed} km/h faster than the allowed speed of ${50} - ${'excessive speeding'}`);
                }else {
                    console.log(`The speed is ${speed} km/h faster than the allowed speed of ${50} - ${'reckless driving'}`); 
                }
            }
            break;
        case 'residential':
            if (speed <= 20) {
                console.log(`Driving ${speed} km/h in a ${20} zone`);
            } else {
                speed -= 20;
                if(speed <= 20){
                    console.log(`The speed is ${speed} km/h faster than the allowed speed of ${20} - ${'speeding'}`);
                }else if (speed <= 40) {
                    console.log(`The speed is ${speed} km/h faster than the allowed speed of ${20} - ${'excessive speeding'}`);
                }else {
                    console.log(`The speed is ${speed} km/h faster than the allowed speed of ${20} - ${'reckless driving'}`); 
                }
            }
            break;
        case 'motorway':
            if (speed <= 130) {
                console.log(`Driving ${speed} km/h in a ${130} zone`);
            } else {
                speed -= 130;
                if(speed <= 20){
                    console.log(`The speed is ${speed} km/h faster than the allowed speed of ${130} - ${'speeding'}`);
                }else if (speed <= 40) {
                    console.log(`The speed is ${speed} km/h faster than the allowed speed of ${130} - ${'excessive speeding'}`);
                }else {
                    console.log(`The speed is ${speed} km/h faster than the allowed speed of ${130} - ${'reckless driving'}`); 
                }
            }
            break;
        case 'interstate':
            if (speed <= 90) {
                console.log(`Driving ${speed} km/h in a ${90} zone`);
            } else {
                speed -= 90;
                if(speed <= 20){
                    console.log(`The speed is ${speed} km/h faster than the allowed speed of ${90} - ${'speeding'}`);
                }else if (speed <= 40) {
                    console.log(`The speed is ${speed} km/h faster than the allowed speed of ${90} - ${'excessive speeding'}`);
                }else {
                    console.log(`The speed is ${speed} km/h faster than the allowed speed of ${90} - ${'reckless driving'}`); 
                }
            }
            break;
    }
}

driverSpeed(40, 'city');