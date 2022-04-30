const { NotImplementedError } = require('../extensions/index.js');

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
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  const actions = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  const outPutArray = [...arr];

  outPutArray.forEach((item, index, array) => {
    if (actions.indexOf(item) !== -1 && actions.indexOf(array[index - 1]) === -1) {
      switch (item) {
        case '--discard-next':
          array.splice(index + 1, 1);
          break;

        case '--discard-prev':
          if (index !== 0) {
            array.splice(index - 1, 1);
          }
          break;

        case '--double-next':
          if (index !== array.length - 1) {
            array.splice(index + 1, 0, array[index + 1]);
          }
          break;

        case '--double-prev':
          if (index !== 0) {
            array.splice(index + 1, 0, array[index - 1]);
          }
          break;
        default:
      }
    }
  });

  return outPutArray.filter((elem) => !actions.includes(elem));
}


module.exports = {
  transform
};
