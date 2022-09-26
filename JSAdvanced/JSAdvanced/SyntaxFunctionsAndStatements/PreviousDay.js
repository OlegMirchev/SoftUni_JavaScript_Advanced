function getDate(year, month, date) {
    let calendar = new Date(year, month - 1, date);

    calendar.setDate(calendar.getDate() - 1);

    console.log(`${calendar.getFullYear()}-${calendar.getMonth() + 1}-${calendar.getDate()}`);

}

getDate(2016, 9, 30);