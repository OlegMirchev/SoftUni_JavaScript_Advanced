function attachEventsListeners() {

    let daysElement = document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');

    let obj = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };
debugger;
    document.getElementById('daysBtn').addEventListener('click', convert);
    document.getElementById('hoursBtn').addEventListener('click', convert);
    document.getElementById('minutesBtn').addEventListener('click', convert);
    document.getElementById('secondsBtn').addEventListener('click', convert);

    function solve(value, unit) {
        let days = value / obj[unit];

        return {
            days: days,
            hours: days * obj.hours,
            minutes: days * obj.minutes,
            seconds: days * obj.seconds
        };
    }

    function convert (e) {
        let input = e.currentTarget.parentElement.querySelector('input[type="text"]');

        let func = solve(Number(input.value), input.id);

        daysElement.value = func.days;
        hoursElement.value = func.hours;
        minutesElement.value = func.minutes;
        secondsElement.value = func.seconds;
    }
}