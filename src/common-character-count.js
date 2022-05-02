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
  const ABC = 'abcdefghijklmnopqrstuvwxyz';

  const s1Count = Array(26).fill(0);
  const s2Count = Array(26).fill(0);

  s1.split('').forEach((char) => {
    s1Count[ABC.indexOf(char)] += 1;
  });

  s2.split('').forEach((char) => {
    s2Count[ABC.indexOf(char)] += 1;
  });

  return s1Count.reduce((acc, current, index) => {
    if (!!current && !!s2Count[index]) {
      return acc + Math.min(current, s2Count[index]);
    }
    return acc;
  }, 0);
}

module.exports = {
  getCommonCharacterCount
};
