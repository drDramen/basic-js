const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce((sum, row, index, array) => {
    let sumOfRow = 0;

    if (index > 0) {
      row.forEach((item, idx) => {
        if (array[index - 1][idx] !== 0) {
          sumOfRow += item;
        }
      });
    } else {
      sumOfRow = row.reduce((prev, crnt) => prev + crnt);
    }

    return sum + sumOfRow;
  }, 0);
}


module.exports = {
  getMatrixElementsSum
};
