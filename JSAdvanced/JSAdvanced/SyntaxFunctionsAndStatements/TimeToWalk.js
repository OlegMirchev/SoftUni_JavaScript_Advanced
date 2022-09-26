function calculateSteps(steps, footPrint, speedKm) {

    let distance = steps * footPrint;
    let speed = speedKm * 1000 / 3600;
    let rests = Math.floor(distance / 500) * 60;
    let time = (distance / speed) + rests;

    let hours = Math.floor(time / 3600).toFixed(0).padStart(2, 0);
    let minutes = Math.floor(time / 60).toFixed(0).padStart(2, 0);
    let seconds = (time % 60).toFixed(0).padStart(2, 0);

    console.log(`${hours}:${minutes}:${seconds}`);

}

calculateSteps(4000, 0.60, 5);