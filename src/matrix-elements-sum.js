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
  let countOfRow = matrix.length
  let countOfColumn = matrix[0].length
  let result = 0

  for (let col = 0; col < countOfColumn; col++) {
    for (let row = 0; row < countOfRow; row++) {
      let el = matrix[row][col]
      if (el === 0) break;
      result += el
    }
  }  

  return result
}


module.exports = {
  getMatrixElementsSum
};
