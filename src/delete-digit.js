const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNum = 0;
  let currNum;
  for (let i = 0; i < n.toString().length; i++) {
    let arr = n.toString().split("");
    arr.splice(i, 1);
    currNum = +arr.join("");
    if (currNum > maxNum) {
      maxNum = currNum;
    }
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};
