var expect = require('chai').expect;

//Weekday function tests
describe('weekday() function', function() {
  const weekday = require("./functions.js").weekday;
  let date = new Date(2017, 5, 15) // June 15, 2017
  // A test using expected/valid inputs for the weekday() function is written in tests.js.
  it('should return a string', function() {
    expect(typeof weekday(date)).to.equal("string");
  });

  it('should return the right weekday', function() {
    expect(weekday(date)).to.equal('Thursday');
  })
// // A test using unexpected/invalid inputs for the weekday() function is written in tests.js.
  it('should return "invalid input" when input is a string', function() {
    expect(weekday('bob')).to.equal('invalid input');
  })

  it('should retrun "invalid input" when input is an object other than Date Object', function()  {
    expect(weekday({bob:"cat"})).to.equal('invalid input');
  })
})
//capitalizeFourth function tests
describe('capitalizeFourth() function', function() {
  const capitalizeFourth = require("./functions.js").capitalizeFourth;
  const testString = "This is a test string"
  // A test using expected/valid inputs for the capitalizeFourth() function is written in tests.js.
  it('should return a string', function(){
    expect(typeof capitalizeFourth(testString)).to.equal("string");
  })
  it("should return every 4th letter capitalized and all other lowercase", function() {
    expect(capitalizeFourth(testString)).to.equal("thiS is a tEst StriNg");
  })
  //A test using unexpected/invalid inputs for the capitalizeFourth() function is written in tests.js.
  it('should return "invalid input" when input is a number', function(){
    expect(capitalizeFourth(5)).to.equal('invalid input');
  })
  it('should return "invalid input" when string is empty', function(){
    expect(capitalizeFourth("")).to.equal("invalid input");
  })

})
