const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum;

  if (String(n).length < 2) {
    sum = n;
    return sum;
  } else {
    sum = String(n)
      .split("")
      .reduce((sum, elem) => sum + +elem, 0);
    
    if (String(sum).split.length >= 2) {
      sum = getSumOfDigits(sum);
    } 
  }

  return sum;
}

getSumOfDigits(123);
console.log(getSumOfDigits(123));

module.exports = {
  getSumOfDigits,
};
