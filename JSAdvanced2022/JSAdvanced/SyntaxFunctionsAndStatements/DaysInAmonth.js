function dayOfMonth(month, year) {
    let day = new Date(year, month, 0);
    
    console.log(day.getDate());
}

dayOfMonth(1, 2012);