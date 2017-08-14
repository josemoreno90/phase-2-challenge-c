module.exports = {
  weekday: function(date) {
    var numOfDay = date.getDay();
    switch(numOfDay) {
      case 0:
              numOfDay = "Sunday";
              break;
      case 1:
              numOfDay = "Monday";
              break;
      case 2:
              numOfDay = "Tuesday";
              break;
      case 3:
              numOfDay = "Wednesday";
              break;
      case 4:
              numOfDay = "Thursday";
              break;
      case 5:
              numOfDay = "Friday";
              break;
      case 6:
              numOfDay = "Saturday";
              break;
    }
    return numOfDay;

  }
}

let dateA = new Date(2017, 7, 14)
console.log(module.exports.weekday(dateA));
