const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  if (
    Object.prototype.toString.call(date) != "[object Date]" ||
    date.hasOwnProperty("toString")
  ) {
    throw new Error("Invalid date!");
  }

  let month = date.getMonth();
  
  let season = "";
  if (month > 10 || month < 2) season = "winter";
  if (month > 1 && month < 5) season = "spring";
  if (month > 4 && month < 8) season = "summer";
  if (month > 7 && month < 11) season = "fall";

  return season;
}


module.exports = {
  getSeason
};
