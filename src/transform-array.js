const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
  throw new Error("'arr' parameter must be an instance of the Array!")
  }
  
    let regEx = /(discard-next|discard-prev|double-next|double-prev)/;
  let transformedArr = [];

  for (let i = 0; i < arr.length; i++) {
  
    if (arr[i] === "--double-next" && i < arr.length -1) {
      transformedArr.push(arr[i+1]);
    }
    
    else if (arr[i] === "--double-prev" && arr[i - 2] != "--discard-next" && i > 0) {
      transformedArr.push(arr[i - 1]);
    }
    
    else if (arr[i] === "--discard-prev") {
      transformedArr.splice(i - 1, 2);
    }
    
    else if (
      (Number.isInteger(arr[i]) && arr[i - 1] != "--discard-next") ||
      (!regEx.test(arr[i]) && arr[i - 1] != "--discard-next")
    ) {
      transformedArr.push(arr[i]);
    }
  }
  return transformedArr;
}

transform(["--double-prev", 1, 2, 3]);
console.log(transform(["--double-prev", 1, 2, 3]));

module.exports = {
  transform,
};
