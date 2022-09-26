function solve(array, sorting) {

    let resultTickets = [];

    for (const t of array) {
        let [destination, priceTicket, status] = t.split('|');
        let price = Number(priceTicket);

        class Ticket {
            constructor(destination, price, status) {
                this.destination = destination;
                this.price = price;
                this.status = status;
            }
        }
        let tickets = new Ticket(destination, price, status);

        resultTickets.push(tickets);
    }

    if (sorting === 'price') {
        resultTickets.sort((a,b) => a[sorting] - b[sorting]);
    }else {
        resultTickets.sort((a, b) => a[sorting].localeCompare(b[sorting]));
    }

    return resultTickets;
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'));