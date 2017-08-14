module.exports = {
  weekday: function(date) {
    var numOfDay = date.getDay();
    console.log(numOfDay)

  }
}

let dateA = new Date(2017, 7, 14)
module.exports.weekday(dateA);
