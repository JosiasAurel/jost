
const daysMap: any = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
}

const monthsMap: any = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}


function thisDate() {
    let date_ = new Date();
    let _date = date_.getDate();
    let day = date_.getDay();
    let year = date_.getFullYear();
    let month = date_.getMonth();

    let date = new Date(year, month, _date);
    return date
}

export { thisDate };