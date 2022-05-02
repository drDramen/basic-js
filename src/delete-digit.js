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
  return String(n)
    .split('')
    .reduce((max, _, index, array) => {
      const number = +array.filter((__, idx) => idx !== index).join('');
      return max > number ? max : number;
    }, 0);
}

module.exports = {
  deleteDigit
};
