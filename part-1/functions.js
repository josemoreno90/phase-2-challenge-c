module.exports = {
  //Write a function weekday(date) to find the day of the week
  //for a given Date object, returing the weekday as a string
  //('Sunday', 'Monday', 'Tuesday', etc.).
  weekday: function(date) {
    if ( !(date instanceof Date)) {
      return 'invalid input'
    }
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
  //Write a function capitalizeFourth(string) that takes a string of words and returns the same
  //string with every 4th character converted to upper case and the rest converted to lower case.
  //Treat whitespace and punctuation characters the same as any other word character.
  capitalizeFourth: function(string) {
    const nth = 4; // the nth character you want to replace
    if  (typeof string !== "string" || string === "") {
      return 'invalid input'
    }
    string = string.toLowerCase().split('');//lowercase all of string

    for (var i = nth-1; i < string.length-1; i+=nth) {
      string[i] = string[i].toUpperCase() // the character you want to replace the nth value
    }
    string = string.join('');
    return string;
  },
  //Write a function getValues(obj) that returns all the values for an object
  //(i.e. the values for each of its properties). Ignore symbolic properties and
  //count only the "own properties" (not inherited) of the object.
  getValues: function(obj) {
    if  (typeof obj !== "object" || obj.constructor === Array) {
      return 'invalid input'
    }
    var result = ""; //initialize to empty string;
     for (var p in obj) {  //goes through object, 'p' holds current property name, typeof 'p' is string
       if( obj.hasOwnProperty(p) ) { // checks if a property of an object belongs to specified object,or is inherited (prototype chain)
         result += obj[p] + " ";   //Updates result string to contain obj values
       }
     }
     return result;
  },
// Write a function filterAround(array, lower, upper) that takes an array of strings, a lower value, and a upper
//value. It returns a new array containing only the elements from the source array that come before lower alphabetically
// and after upper. The elements in the returned array should be in the same order as the source array.
  filterAround: function(array, lower, upper) {
    if (!(array instanceof Array)) {
      return "invalid input"
    }
    var newArray = [];                 //initialize empty arry
    array.forEach(function(x) {       //loop through array
      if(x < lower || x > upper ) {  //checks if current element(x) comes before lower and after upper
        newArray.push(x);           //Ex. 'dog' < 'cow' == false since c is smaller and therefore lesser
      }                            //     'dog' > 'dog' == flase since they are the same
    })
    return newArray;
  }
}
