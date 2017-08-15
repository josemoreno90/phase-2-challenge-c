var expect = require('chai').expect;

// A test using expected/valid inputs for the weekday() function is written in tests.js.

describe('weekday() function', function() {
  const weekday = require("./functions.js").weekday;
  let date = new Date(2017, 5, 15) // June 15, 2017

  it('should return a string', function() {
    expect(typeof weekday(date)).to.equal("string");
  });

  it('should return the right weekday', function() {
    expect(weekday(date)).to.equal('Thursday');
  })
// // A test using unexpected/invalid inputs for the weekday() function is written in tests.js.
  it('should return "invalid input" when input is a string', function() {
    expect(weekday('bob')).to.equal('invalid input')
  })

  it('should retrun "invalid input" when input is an object other than Date Object', function()  {
    expect(weekday({bob:"cat"})).to.equal('invalid input')
  })
})
