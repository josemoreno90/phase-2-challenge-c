const cars = require('./cars.json')
const model = process.argv[2];

for (var index in cars) {
  var cityName = cars[index].model
  if(cityName.toUpperCase() == model.toUpperCase())
    console.log("ID: " + cars[index].id + ", Model: " + cars[index].model +
                ", Year: " + cars[index].year + ", Last Owner: " + cars[index].last_owner +
                 ", Date Purchased:" + cars[index].date_purchased );


}
