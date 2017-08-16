//searchByModel.js takes one argument (let's call it the model), finds all the cars from cars.json
// who have a model value that exactly matches the model argument, and prints the id, model, year,
//last_owner, and date_purchased of each matching car.

const cars = require('./cars.json')  //requires json file
const model = process.argv[2];      //saves argument passed in to model variable

for (var index in cars) {
  var cityName = cars[index].model  //cityName will hold the current objects model value
  if(cityName.toUpperCase() == model.toUpperCase())  //makes sure it matches exactly
    console.log("ID: " + cars[index].id + ", Model: " + cars[index].model +  //logs out car info
                ", Year: " + cars[index].year + ", Last Owner: " + cars[index].last_owner +
                ", Date Purchased:" + cars[index].date_purchased );


}
