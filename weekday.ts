enum weekDay {
	Sunday = 0,
	Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}

enum Month {
  Jan = 0,
  Feb = 1,
  Mar = 2,
  Apr = 3,
  May = 4,
  Jun = 5,
  Jul = 6,
  Aug = 7,
  Sept = 8,
  Oct = 9,
  Nov = 10,
  Dec = 11,
}

let pTodayDate = document.getElementById("p--today-date");
let buttonBirthday = document.getElementById("button--birthday");
    let pBirthdayMessage = document.getElementById("p--birthday-message");
    let inputDatePicker = document.getElementById("input--date-picker");

    let today : Date = new Date();


    // Part two

    buttonBirthday.onclick = function () {
        let userBDay : string = inputDatePicker.value;
        let userBdate : Date = new Date(userBDay);
        pBirthdayMessage.innerHTML = makeDateString(userBdate);

    }

function makeDateString ( inputDate : Date) : string
{

    if ( (inputDate.getDate()+1 === today.getDate())
    && (inputDate.getMonth() === today.getMonth()) )
    
    {
    return 'Happy Birthday';
}

let thisYearsBirthday = new Date();
thisYearsBirthday.setDate(inputDate.getDate()) ;
thisYearsBirthday.setFullYear(today.getFullYear());
thisYearsBirthday.setMonth(inputDate.getMonth());
return `Your birthday is ${weekDay[thisYearsBirthday.getDay()]} ${Month[inputDatePicker.getMonth()]} ${inputDate`
}