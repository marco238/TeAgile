export const getNumDaysOfMonth = (today = new Date()) => {
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const days = new Date(currentYear, currentMonth, 32).getDate();
    return 32 - days;
}

export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const dayOfWeekAsString = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


export const getDaysOfMonth = (date = new Date()) => {
    
    const numOfDays = getNumDaysOfMonth(date);
    const year = date.getFullYear();
    const days = [];
    for(let i = 0; i < numOfDays; i++) {
        const month = months[date.getMonth()];
        const day = new Date(year, date.getMonth(), i + 1);
        const nameOfDay = dayOfWeekAsString[day.getDay()];
        console.log(date.getDate(), i), i + 1 === date.getDate();
        days.push({
            month,
            year,
            nameOfDay,
            number: i + 1,
            current: i + 1 === date.getDate()
        });
    }
    return days;
}