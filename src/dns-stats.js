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
  return domains.reduce((result, domain) => {
    const chanks = domain.split('.').reverse();
    console.log(chanks);
    chanks.forEach((chank, index, array) => {
      const dns = `.${array.slice(0, index + 1).join('.')}`;
      if (!result.hasOwnProperty(dns)) {
        result[dns] = 1;
      } else {
        result[dns] += 1
      }
    } )
    return result;
  }, {})
}

module.exports = {
  getDNSStats
};
