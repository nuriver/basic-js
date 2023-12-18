const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split("");
  let finArr = [];
  let counter = 1;

  for (let i = 0; arr.length > 0; ) {
    if (arr[i] != arr[i + 1] || i === arr.length - 1) {
      finArr.push(arr[i]);
      arr.splice(0, 1);
    } else {
      for (let j = i + 1; j < arr.length; ) {
        if (arr[i] === arr[j] || arr[i] === arr[i - 1]) {
          counter++;
          arr.splice(0, 1);
        } else {
          break;
        }
      }
      //When out of loop:
      finArr.push(`${counter}${arr[i]}`);
      arr.splice(0, 1);
      counter = 1;

      //Checking
      console.log(arr);
    }
  }

  return finArr.join("");
}

module.exports = {
  encodeLine
};
