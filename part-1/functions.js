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
  },
  capitalizeFourth: function(string) {
    // return string.split('').map((v, i) => 4 % i == 0 ? v.toLowerCase() : v.toUpperCase()).join('');
    string = string.toLowerCase().split('');
    const nth = 4; // the nth character you want to replace
    for (var i = nth-1; i < string.length-1; i+=nth) {
      const replaceWith = string[i].toUpperCase() // the character you want to replace the nth value
      string[i] = replaceWith;
    }
    string = string.join('');
    console.log(string);

  }
}
//Date Test
// let dateA = new Date(2017, 7, 14)
// console.log(module.exports.weekday(dateA));
module.exports.capitalizeFourth("Eenie, Meenie, Miney, Moe");
