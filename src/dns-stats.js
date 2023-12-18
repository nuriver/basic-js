const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  //let newDomains = domains.reverse().join('.')
  //return newDomains.split('.');
  let newArr = domains;
  let anotherArr = [];
  let domainObj = {};

    if (domains.length === 0) {
      return domainObj;
    }

  for (let i = 0; i < newArr.length; i++) {
    anotherArr.push(newArr[i].split(".").reverse());
  }
  domainObj["." + anotherArr[0][0]] = anotherArr.length;
  domainObj["." + anotherArr[0][0] + "." + anotherArr[0][1]] =
    anotherArr.length;
  let dubleDomain = "." + anotherArr[0][0] + "." + anotherArr[0][1] + ".";
  for (let j = 0; j < anotherArr.length; j++) {
    for (let k = 0; k < anotherArr[j].length; k++) {
      if (
        anotherArr[j][k] != anotherArr[0][0] &&
        anotherArr[j][k] != anotherArr[0][1]
      ) {
        domainObj[dubleDomain + anotherArr[j][k]] = 1;
      }
    }
  }
  return domainObj;
}

module.exports = {
  getDNSStats
};
