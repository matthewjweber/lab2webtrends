var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var weekDay;
(function (weekDay) {
    weekDay[weekDay["Sunday"] = 0] = "Sunday";
    weekDay[weekDay["Monday"] = 1] = "Monday";
    weekDay[weekDay["Tuesday"] = 2] = "Tuesday";
    weekDay[weekDay["Wednesday"] = 3] = "Wednesday";
    weekDay[weekDay["Thursday"] = 4] = "Thursday";
    weekDay[weekDay["Friday"] = 5] = "Friday";
    weekDay[weekDay["Saturday"] = 6] = "Saturday";
})(weekDay || (weekDay = {}));
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sept"] = 8] = "Sept";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
var pTodayDate = document.getElementById("p--today-date");
var buttonBirthday = document.getElementById("button--birthday");
var pBirthdayMessage = document.getElementById("p--birthday-message");
var inputDatePicker = document.getElementById("input--date-picker");
var today = new Date();
// Part two
buttonBirthday.onclick = function () {
    var userBDay = inputDatePicker.value;
    var userBdate = new Date(userBDay);
    pBirthdayMessage.innerHTML = makeDateString(userBdate);
};
function makeDateString(inputDate) {
    if ((inputDate.getDate() + 1 === today.getDate())
        && (inputDate.getMonth() === today.getMonth())) {
        return 'Happy Birthday';
    }
    var thisYearsBirthday = new Date();
    thisYearsBirthday.setDate(inputDate.getDate());
    thisYearsBirthday.setFullYear(today.getFullYear());
    thisYearsBirthday.setMonth(inputDate.getMonth());
    return "Your birthday is " + weekDay[thisYearsBirthday.getDay()] + " " + Month[inputDatePicker.getMonth()] + " " + inputDate(__makeTemplateObject(["\n}"], ["\n"]));
}
