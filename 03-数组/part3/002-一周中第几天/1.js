const dayOfTheWeek = function(day, month, year) {
    const date = new Date(Date.parse(`${year}/${month}/${day}`));
    const Week = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
    ];
    return Week[date.getDay()];
}