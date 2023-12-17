const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let strFirst = s1.split("");
  let strSecond = s2.split("");
  let pairCounter = 0;

  for (let i = 0; i < strFirst.length; i++) {
    let newPair = strFirst[i];
    if (strSecond.includes(newPair)) {
      strSecond.splice(strSecond.indexOf(newPair), 1);
      pairCounter++;
    }
  }
  return pairCounter;
}

module.exports = {
  getCommonCharacterCount
};
