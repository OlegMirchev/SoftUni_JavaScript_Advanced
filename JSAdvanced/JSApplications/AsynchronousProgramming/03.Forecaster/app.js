function attachEvents() {
    let locationElement = document.getElementById('location');
    let submitBtn = document.getElementById('submit');
    let forecastElement = document.getElementById('forecast');
    let currentElement = document.getElementById('current');
    let upcomingElement = document.getElementById('upcoming');

    let url = 'http://localhost:3030/jsonstore/forecaster';

    let sunny = '&#x2600';
    let partlySunny = '&#x26C5';
    let overcast = '&#x2601';
    let rain = '&#x2614';
    let degrees = '&#176';

    let code = '';
    let divCurrent = document.createElement('div');
    let divUpcoming = document.createElement('div');

    submitBtn.addEventListener('click', (e) => {
        divCurrent.innerHTML = '';
        divUpcoming.innerHTML = '';

        divCurrent.setAttribute('class', 'forecasts');
        divUpcoming.setAttribute('class', 'forecast-info');

        forecastElement.style.display = 'inline';

        fetch(`${url}/locations`)
            .then(res => res.json())
            .then(data => {
                data.forEach(l => {
                    if (l.name === locationElement.value) {
                        return code = l.code;
                    }
                });

                fetch(`${url}/today/${code}`)
                    .then(res => res.json())
                    .then(data => {
                        let spanSymbol = document.createElement('span');
                        spanSymbol.className = 'condition symbol';
                        let spanCondition = document.createElement('span');
                        spanCondition.className = 'condition';
                        let spanLocation = document.createElement('span');
                        spanLocation.className = 'forecast-data';
                        let spanDegree = document.createElement('span');
                        spanDegree.className = 'forecast-data';
                        let spanForecast = document.createElement('span');
                        spanForecast.className = 'forecast-data';

                        spanLocation.textContent = data.name;
                        spanDegree.innerHTML = `${data.forecast.low}${degrees}/${data.forecast.high}${degrees}`;
                        spanForecast.textContent = data.forecast.condition;

                        switch (data.forecast.condition) {
                            case 'Sunny':
                                spanSymbol.innerHTML = sunny;
                                break;
                            case 'Partly sunny':
                                spanSymbol.innerHTML = partlySunny;
                                break;
                            case 'Overcast':
                                spanSymbol.innerHTML = overcast;
                                break;
                            case 'Rain':
                                spanSymbol.innerHTML = rain;
                                break;
                        }

                        spanCondition.appendChild(spanLocation);
                        spanCondition.appendChild(spanDegree);
                        spanCondition.appendChild(spanForecast);

                        divCurrent.appendChild(spanSymbol);
                        divCurrent.appendChild(spanCondition);

                        currentElement.appendChild(divCurrent);

                    });

                fetch(`${url}/upcoming/${code}`)
                    .then(res => res.json())
                    .then(data => {
                        let nextDays = data.forecast;

                        nextDays.forEach(day => {
                            let spanUpcoming = document.createElement('span');
                            spanUpcoming.className = 'upcoming';
                            let spanSymbols = document.createElement('span');
                            spanSymbols.className = 'symbol';
                            let spanDegrees = document.createElement('span');
                            spanDegrees.className = 'forecast-data';
                            let spanForecasts = document.createElement('span');
                            spanForecasts.className = 'forecast-data';

                            switch (day.condition) {
                                case 'Sunny':
                                    spanSymbols.innerHTML = sunny;
                                    break;
                                case 'Partly sunny':
                                    spanSymbols.innerHTML = partlySunny;
                                    break;
                                case 'Overcast':
                                    spanSymbols.innerHTML = overcast;
                                    break;
                                case 'Rain':
                                    spanSymbols.innerHTML = rain;
                                    break;
                            }

                            spanDegrees.innerHTML = `${day.low}${degrees}/${day.high}${degrees}`;
                            spanForecasts.textContent = day.condition;

                            spanUpcoming.appendChild(spanSymbols);
                            spanUpcoming.appendChild(spanDegrees);
                            spanUpcoming.appendChild(spanForecasts);

                            divUpcoming.appendChild(spanUpcoming);

                            upcomingElement.appendChild(divUpcoming);
                        });
                    });
            })
    });
}

attachEvents();