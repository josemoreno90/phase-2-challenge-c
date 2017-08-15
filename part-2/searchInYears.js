//searchInYears.js takes one argument (let's call it yearRange), finds all the cars from cars.json
//which have a year that is within the yearRange, and prints the id, make, model, and year of each
//matching car. The year range format should follow the format YYYY-YYYY, e.g. 1995-2001.

const cars = require('./cars.json')
const yearRange = process.argv[2];
const yearList = yearRange.split("-")
const yearStart = Number(yearList[0]);
const yearEnd = Number(yearList[1]);
console.log("Finding cars from: " + yearStart + "-" + yearEnd);

for(var index in cars) {  //index starts at 0
  if(cars[index].year >= yearStart && cars[index].year <= yearEnd){
    console.log("ID: " + cars[index].id + ", Make: " + cars[index].make +
                ", Model: " + cars[index].model + ", Year: " + cars[index].year);
  }

}
