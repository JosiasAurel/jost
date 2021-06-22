"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.thisDate = void 0;
var daysMap = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
};
var monthsMap = {
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
};
function thisDate() {
    var date_ = new Date();
    var _date = date_.getDate();
    // let day = date_.getDay();
    var year = date_.getFullYear();
    var month = date_.getMonth();
    var date = _date + "/" + month + "/" + year;
    return date;
}
exports.thisDate = thisDate;
